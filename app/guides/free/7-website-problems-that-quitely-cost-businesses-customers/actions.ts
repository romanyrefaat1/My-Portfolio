import { google } from "googleapis";

function getSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) {
    throw new Error(
      "Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY env vars."
    );
  }

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function appendLeadRow(params: {
  email: string;
  source: string;
}): Promise<boolean> {
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!sheetId) {
    throw new Error("Missing GOOGLE_SHEET_ID env var.");
  }

  const sheets = getSheetsClient();
  const normalizedEmail = params.email.trim().toLowerCase();

  // Check existing emails in column A.
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "Leads!A:A",
  });

  const emails = (existing.data.values ?? []).map((row) =>
    String(row[0] ?? "").trim().toLowerCase()
  );

  // Already exists — don't insert another row.
  if (emails.includes(normalizedEmail)) {
    return true;
  }

  const timestamp = new Date().toISOString();

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Leads!A:C",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[normalizedEmail, params.source, timestamp]],
    },
  });

  return true;
}
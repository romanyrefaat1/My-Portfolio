import { google } from "googleapis";

/**
 * Appends a lead row to the "Leads" sheet of the configured Google Sheet.
 *
 * Required env vars (set these in Vercel → Project → Settings → Environment Variables):
 *
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL   - the service account's client_email
 *   GOOGLE_PRIVATE_KEY             - the service account's private_key
 *                                    (keep the \n escape sequences; this file
 *                                    unescapes them for you below)
 *   GOOGLE_SHEET_ID                - the spreadsheet ID from its URL:
 *                                    https://docs.google.com/spreadsheets/d/<THIS_PART>/edit
 *
 * One-time setup:
 *   1. Google Cloud Console → new project (or reuse one) → enable "Google Sheets API"
 *   2. IAM & Admin → Service Accounts → Create service account → Create key (JSON)
 *   3. Open the JSON key file: copy client_email and private_key into the env vars above
 *   4. Create a Google Sheet, add a header row: Email | Source | Date
 *   5. Share that Sheet with the service account's client_email (Editor access)
 *   6. Copy the Sheet ID from its URL into GOOGLE_SHEET_ID
 *
 * This is completely free — no billing tier required for this volume of writes.
 */

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
}) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    throw new Error("Missing GOOGLE_SHEET_ID env var.");
  }

  const sheets = getSheetsClient();
  const timestamp = new Date().toISOString();

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Leads!A:C",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[params.email, params.source, timestamp]],
    },
  });
}
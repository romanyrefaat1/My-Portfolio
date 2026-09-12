"use server";

import { appendLeadRow } from "@/lib/google-sheets";

const GUIDE_SOURCE = "7-website-problems-guide";
const GUIDE_FILE_PATH = "/guides/website-problems-cost-customers.pdf";

export type SubmitState = {
  status: "idle" | "success" | "error";
  message?: string;
  downloadUrl?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitGuideEmail(
  _prevState: SubmitState,
  formData: FormData
): Promise<SubmitState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!email || !EMAIL_RE.test(email)) {
    return {
      status: "error",
      message: "That doesn't look like a valid email — mind trying again?",
    };
  }

  try {
    await appendLeadRow({
      email,
      source: GUIDE_SOURCE,
    });
  } catch (err) {
    console.error("[guide-lead] failed to append row:", err);

    return {
      status: "error",
      message:
        "Something went wrong on our end. Please try again in a moment.",
    };
  }

  return {
    status: "success",
    downloadUrl: GUIDE_FILE_PATH,
  };
}
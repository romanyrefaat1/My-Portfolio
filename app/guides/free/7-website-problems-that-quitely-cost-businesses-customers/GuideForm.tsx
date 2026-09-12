"use client";

import { useActionState, useEffect, useRef } from "react";
import { appendLeadRow } from "./actions";

const initialState = { status: "idle" };

export function GuideForm() {
  const [state, formAction, pending] = useActionState(
    appendLeadRow,
    initialState
  );
  const downloadTriggeredRef = useRef(false);

  useEffect(() => {
    if (
      state.status === "success" &&
      state.downloadUrl &&
      !downloadTriggeredRef.current
    ) {
      downloadTriggeredRef.current = true;
      const link = document.createElement("a");
      link.href = state.downloadUrl;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [state]);

  if (state.status === "success") {
    return (
      <div className="guide-form-success">
        <div className="guide-form-success-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10.5L8 14.5L16 5.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="guide-form-success-title">Your download has started.</p>
          <p className="guide-form-success-sub">
            If nothing happened,{" "}
            <a href={state.downloadUrl} className="guide-form-success-link">
              click here to download the guide
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="guide-form" noValidate>
      <div className="guide-form-row">
        <label htmlFor="guide-email" className="sr-only">
          Email address
        </label>
        <input
          id="guide-email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
          className="guide-form-input"
          disabled={pending}
        />
        <button
          type="submit"
          className="btn-primary guide-form-submit"
          disabled={pending}
        >
          {pending ? "Sending…" : "Get the free guide"}
          {!pending && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 11L11 3M11 3H4M11 3V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      {state.status === "error" && (
        <p className="guide-form-error" role="alert">
          {state.message}
        </p>
      )}
      <p className="guide-form-note">
        No spam. One-click unsubscribe. I'll only use this to occasionally
        share things worth reading.
      </p>
    </form>
  );
}

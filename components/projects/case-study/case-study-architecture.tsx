import { CaseStudyLabel } from "./case-study-label";

export function CaseStudyArchitecture() {
  return (
    <div className="case-study-architecture-diagram reveal">
      <CaseStudyLabel>01 — RELATIONSHIPS</CaseStudyLabel>

      <div className="mx-auto mt-10 flex max-w-[620px] flex-col items-center gap-3">
        <div className="w-full max-w-[300px] rounded-lg border border-border bg-bg px-5 py-4 text-center font-mono text-xs">
          MISSION
        </div>

        <span className="font-mono text-xs text-muted-fg">↓</span>

        <div className="w-full max-w-[300px] rounded-lg border border-border bg-bg px-5 py-4 text-center font-mono text-xs">
          TASKS
        </div>

        <span className="font-mono text-xs text-muted-fg">↓</span>

        <div className="grid w-full max-w-[500px] grid-cols-2 gap-3">
          <div className="rounded-lg border border-border bg-bg px-4 py-4 text-center font-mono text-[10px]">
            COMPLETION
          </div>
          <div className="rounded-lg border border-border bg-bg px-4 py-4 text-center font-mono text-[10px]">
            PAID PRICE
          </div>
        </div>

        <span className="font-mono text-xs text-muted-fg">↓</span>

        <div className="grid w-full max-w-[500px] grid-cols-2 gap-3">
          <div className="rounded-lg border border-border bg-bg p-4">
            <CaseStudyLabel>OUTPUT</CaseStudyLabel>
            <p className="mt-2 text-sm font-medium">Progress</p>
          </div>

          <div className="rounded-lg border border-border bg-bg p-4">
            <CaseStudyLabel>OUTPUT</CaseStudyLabel>
            <p className="mt-2 text-sm font-medium">Spending</p>
          </div>
        </div>

        <span className="font-mono text-xs text-muted-fg">↓</span>

        <div className="w-full max-w-[300px] rounded-lg border border-border bg-bg px-5 py-4 text-center font-mono text-xs">
          POSTGRESQL
        </div>
      </div>
    </div>
  );
}

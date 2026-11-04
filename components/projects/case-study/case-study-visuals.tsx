const garment = {
  oliveTop:
    "https://lvry.vercel.app/collections/college-student/1/olive_green_long_sleeve_tshirt.png",
  beigeSweatshirt:
    "https://lvry.vercel.app/collections/college-student/1/beige_crewneck_sweatshirt.png",
  tanChinos:
    "https://lvry.vercel.app/collections/college-student/1/tan_pleated_chinos.png",
  denim:
    "https://lvry.vercel.app/collections/college-student/1/dark_blue_denim_jeans.png",
  overshirt:
    "https://lvry.vercel.app/collections/college-student/1/blue_button_down_overshirt.png",
};

function Garment({
  src,
  className = "",
  label,
}: {
  src: string;
  className?: string;
  label: string;
}) {
  return (
    <div
      className={`case-visual-garment ${className}`}
      role="img"
      aria-label={label}
      style={{ backgroundImage: `url("${src}")` }}
    />
  );
}

function VisualTopline({
  left,
  right,
}: {
  left: string;
  right: string;
}) {
  return (
    <div className="case-visual-topline">
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

export function LVRYProductDirection() {
  return (
    <div className="case-visual case-visual-lvry case-visual-product">
      <VisualTopline left="LVRY / THE EVERYDAY UNIFORM" right="PRODUCT DIRECTION — 001" />

      <div className="case-product-layout">
        <div className="case-product-copy">
          <span className="case-visual-hand">Less, but considered.</span>
          <h3>
            A uniform
            <br />
            made of
            <br />
            <em>pieces.</em>
          </h3>
          <p>
            A small, repeatable wardrobe. Individual garments, designed to
            work together.
          </p>
          <div className="case-product-note">
            <span>THE IDEA</span>
            <strong>Fewer decisions. More combinations.</strong>
          </div>
        </div>

        <div className="case-product-feature">
          <div className="case-product-image case-product-image-main">
            <Garment
              src={garment.oliveTop}
              label="Olive green long-sleeve everyday top"
            />
            <span className="case-product-image-tag">01 / THE EVERYDAY TOP</span>
          </div>
          <div className="case-product-image case-product-image-small">
            <Garment
              src={garment.beigeSweatshirt}
              label="Beige crewneck sweatshirt"
            />
            <span className="case-product-image-tag">02 / THE LAYER</span>
          </div>
          <span className="case-product-stamp">A WARDROBE<br />THAT WORKS<br />TOGETHER</span>
        </div>

        <div className="case-product-aside">
          <div className="case-product-aside-photo">
            <Garment
              src={garment.tanChinos}
              label="Tan pleated chinos"
            />
          </div>
          <div className="case-product-aside-photo case-product-aside-blue">
            <Garment
              src={garment.overshirt}
              label="Blue button-down overshirt"
            />
          </div>
          <div className="case-product-aside-caption">
            <span>THE APPROACH</span>
            <strong>Build around pieces, not outfits.</strong>
          </div>
          <div className="case-product-index">01 — 04</div>
        </div>
      </div>

      <div className="case-product-footer">
        <span>COLLEGE / EVERYDAY / OUTSIDE</span>
        <div className="case-product-palette" aria-label="Collection color palette">
          <i className="bone" />
          <i className="olive" />
          <i className="denim" />
          <i className="tan" />
          <i className="ink" />
        </div>
        <span>DESIGNED TO COMBINE ↗</span>
      </div>
    </div>
  );
}

export function LVRYBrandIdentity() {
  const swatches = [
    ["bone", "BONE", "#EFEBE4", "#111111"],
    ["ink", "INK", "#111111", "#EFEBE4"],
    ["signal", "SIGNAL", "#FF4A1C", "#FFFFFF"],
    ["denim", "DENIM", "#3E5C8A", "#FFFFFF"],
    ["canvas", "CANVAS", "#C9B79C", "#111111"],
  ];

  return (
    <div
      className="case-visual case-visual-lvry case-visual-identity"
      style={{ height: "auto", minHeight: 0, maxHeight: "none", aspectRatio: "auto", overflow: "visible" }}
    >
      <style>{`
        .lvid-wrap { container-type: inline-size; width: 100%; }
        .lvid-board {
          display: grid !important;
          grid-template-columns: 1fr !important;
          grid-template-rows: none !important;
          gap: 32px !important;
          height: auto !important;
          min-height: 0 !important;
          overflow: visible !important;
          padding: 28px !important;
          box-sizing: border-box;
        }
        .lvid-board > * {
          position: static !important;
          width: auto !important;
          height: auto !important;
          min-width: 0 !important;
          margin: 0 !important;
          border: 0 !important;
          inset: auto !important;
        }

        /* wordmark column */
        .lvid-board .case-identity-wordmark {
          display: flex !important; flex-direction: column; align-items: flex-start; gap: 14px;
          padding: 0 !important;
        }
        .lvid-board .case-visual-hand { display: block; margin: 0 !important; position: static !important; }
        .lvid-board .case-identity-logo {
          font-size: clamp(64px, 20cqw, 128px) !important;
          line-height: .85 !important;
          margin: 0 !important;
          padding: 0 !important;
          position: relative !important;
          display: inline-block;
          white-space: nowrap;
        }
        .lvid-board .case-identity-logo span {
          position: static !important;
          display: inline-block;
          font-size: 14px !important;
          line-height: 1 !important;
          vertical-align: top;
          margin-left: 4px;
        }
        .lvid-board .case-identity-rule { width: 100% !important; max-width: 220px; height: 1px !important; margin: 0 !important; }
        .lvid-board .case-identity-wordmark h3 { margin: 0 !important; }
        .lvid-board .case-identity-wordmark p { margin: 0 !important; max-width: 34ch; }
        .lvid-board .case-identity-tag { margin: 0 !important; position: static !important; }

        /* typography column */
        .lvid-board .case-identity-type {
          display: flex !important; flex-direction: column; gap: 14px; padding: 0 !important;
        }
        .lvid-board .case-identity-display {
          font-size: clamp(44px, 9cqw, 76px) !important;
          line-height: .95 !important;
          margin: 0 !important;
          overflow-wrap: anywhere;
        }
        .lvid-board .case-identity-body { display: flex; flex-direction: column; gap: 4px; padding-top: 14px; border-top: 1px solid rgba(17,17,17,.15); }
        .lvid-board .case-identity-hand { margin: 0 !important; position: static !important; }
        .lvid-board .case-identity-type-meta { display: flex; flex-wrap: wrap; gap: 6px 16px; }

        /* colors row */
        .lvid-board .case-identity-colors {
          display: grid !important;
          grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)) !important;
          gap: 10px !important;
          padding: 0 !important;
        }
        .lvid-board .case-identity-colors .case-identity-section-label { grid-column: 1 / -1; margin: 0 0 4px !important; }
        .lvid-board .lvid-sw {
          display: flex !important; flex-direction: column; justify-content: flex-end; gap: 4px;
          min-height: 84px !important; height: auto !important; padding: 10px 12px !important;
          border-radius: 8px !important; border: 1px solid rgba(17,17,17,.15) !important;
          width: auto !important; position: static !important;
        }
        .lvid-board .lvid-sw span { font-weight: 700; letter-spacing: .08em; font-size: 11px; color: inherit !important; }
        .lvid-board .lvid-sw small { font-size: 10px !important; letter-spacing: 0; color: inherit !important; opacity: .8; line-height: 1.2; }

        /* footer */
        .lvid-foot {
          display: flex !important; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px;
          position: static !important; height: auto !important;
          padding: 16px 28px 24px !important; margin: 0 !important;
          border-top: 1px solid rgba(17,17,17,.15);
        }

        @container (min-width: 720px) {
          .lvid-board { grid-template-columns: 1.15fr 1fr !important; column-gap: 48px !important; }
          .lvid-board .case-identity-colors { grid-column: 1 / -1; }
        }
      `}</style>

      <VisualTopline left="LVRY / BRAND NOTES" right="IDENTITY SYSTEM — 002" />

      <div className="lvid-wrap">
        <div className="case-identity-main lvid-board">
          <div className="case-identity-wordmark">
            <span className="case-visual-hand">A considered everyday wardrobe</span>
            <div className="case-identity-logo">LVRY<span>®</span></div>
            <div className="case-identity-rule" />
            <h3>The everyday<br /><em>uniform.</em></h3>
            <p>
              A clothing label built around a few good pieces — and the many
              ways they can work together.
            </p>
            <div className="case-identity-tag">IDENTITY / 2026</div>
          </div>

          <div className="case-identity-type">
            <div className="case-identity-section-label">01 / TYPOGRAPHY</div>
            <div className="case-identity-display">Everyday<br />uniform.</div>
            <div className="case-identity-body">
              <strong>Clear by design.</strong>
              <span>Short copy. Useful details. No noise.</span>
            </div>
            <div className="case-identity-hand">Made to work together.</div>
            <div className="case-identity-type-meta">
              <span>DISPLAY / BRICOLAGE</span>
              <span>BODY / GEIST</span>
              <span>NOTES / CAVEAT</span>
            </div>
          </div>

          <div className="case-identity-colors">
            <div className="case-identity-section-label">02 / COLOR</div>
            {swatches.map(([cls, name, hex, fg]) => (
              <div
                key={cls}
                className={`case-identity-swatch swatch-${cls} lvid-sw`}
                style={{ background: hex, color: fg }}
              >
                <span>{name}</span>
                <small>{hex}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="case-identity-footer lvid-foot">
        <span>03 / ART DIRECTION</span>
        <span>TACTILE · REFINED · PLAYFUL</span>
        <span>LVRY — THE EVERYDAY UNIFORM</span>
      </div>
    </div>
  );
}

export function LVRYDesignSystem() {
  const tokens = [
    ["Bone", "#EFEBE4"],
    ["Ink", "#111111"],
    ["Signal", "#FF4A1C"],
    ["Denim", "#3E5C8A"],
  ];

  return (
    <div
      className="case-visual case-visual-lvry case-visual-system"
      style={{ height: "auto", minHeight: 0, maxHeight: "none", aspectRatio: "auto", overflow: "visible" }}
    >
      <style>{`
        .lvds-board {
          container-type: inline-size;
          display: flex !important;
          flex-direction: column;
          gap: 24px;
          height: auto !important;
          min-height: 0 !important;
          overflow: visible !important;
          padding: 24px !important;
          box-sizing: border-box;
        }
        .lvds-board > * { flex: none !important; margin: 0 !important; min-width: 0; }

        /* keep old typography classes, override only layout */
        .lvds-nav {
          display: flex !important;
          grid-template-columns: none !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: space-between !important;
          flex-wrap: wrap;
          gap: 10px 20px !important;
          padding: 0 0 16px !important;
          height: auto !important;
        }
        .lvds-nav .case-system-brand {
          font-size: 24px !important;
          line-height: 1 !important;
          margin: 0 !important;
          padding: 0 !important;
          width: auto !important;
          position: relative;
        }
        .lvds-nav .case-system-brand span { font-size: 9px !important; margin-left: 2px; vertical-align: top; }
        .lvds-links { display: flex !important; gap: 18px !important; }

        .lvds-head {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 20px !important;
          height: auto !important;
        }
        .lvds-head h3 {
          margin: 8px 0 0 !important;
          font-size: clamp(34px, 8cqw, 52px) !important;
          line-height: .95 !important;
        }

        .lvds-tokens { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; margin-top: 10px; }
        .lvds-token { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
        .lvds-swatch {
          display: block;
          width: 100%;
          height: 32px;
          border-radius: 6px;
          border: 1px solid rgba(17,17,17,.18);
        }
        .lvds-token small { font-size: 11px; }
        .lvds-token code { font-size: 9px !important; letter-spacing: 0 !important; overflow-wrap: anywhere; }

        .lvds-grid { display: grid; grid-template-columns: 1fr; gap: 16px; align-items: start; }
        .lvds-col { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
        .lvds-img { position: relative; width: 100%; aspect-ratio: 4 / 3; }
        .lvds-img .case-visual-garment { position: absolute; inset: 0; width: 100%; height: 100%; background-size: cover; background-position: center; }

        .lvds-foot {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: wrap;
          gap: 8px 24px !important;
          justify-content: space-between;
          padding-top: 16px !important;
          height: auto !important;
        }

        @container (min-width: 620px) {
          .lvds-head { grid-template-columns: 1.1fr 1fr !important; align-items: end; }
          .lvds-grid { grid-template-columns: 0.9fr 1.1fr; }
          .lvds-img { aspect-ratio: 1 / 1; }
        }
      `}</style>

      <VisualTopline left="LVRY / DIGITAL EXPERIENCE" right="INTERFACE SYSTEM — 003" />

      <div className="case-system-board lvds-board">
        <div className="case-system-nav lvds-nav">
          <div className="case-system-brand">LVRY<span>®</span></div>
          <div className="lvds-links"><span>SHOP</span><span>LOOKBOOK</span><span>ABOUT</span></div>
          <b>BAG (02)</b>
        </div>

        <div className="case-system-heading lvds-head">
          <div>
            <span className="case-system-eyebrow">DESIGN LANGUAGE / QUIET STRUCTURE, CLEAR DECISIONS</span>
            <h3>Made to work<br /><em>together.</em></h3>
          </div>
          <div>
            <span className="case-system-eyebrow">COLOR TOKENS / 04</span>
            <div className="lvds-tokens">
              {tokens.map(([name, hex]) => (
                <div className="lvds-token" key={name}>
                  <span className="lvds-swatch" style={{ background: hex }} />
                  <small>{name}</small>
                  <code>{hex}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lvds-grid">
          <div className="case-system-card case-system-product">
            <span className="case-system-eyebrow">PRODUCT CARD / DEFAULT</span>
            <div className="case-system-product-image lvds-img">
              <Garment src={garment.oliveTop} label="Olive green long-sleeve t-shirt product card" />
              <span>NEW ARRIVAL</span>
            </div>
            <div className="case-system-product-info">
              <strong>Olive long-sleeve</strong>
              <span>EVERYDAY / TOP</span>
              <b>$32.00 <i>＋</i></b>
            </div>
          </div>

          <div className="lvds-col">
            <div className="case-system-card case-system-controls">
              <span className="case-system-eyebrow">ACTIONS / BUTTONS</span>
              <button type="button" className="case-system-button-dark">Explore collection <b>↗</b></button>
              <button type="button" className="case-system-button-outline">View details <b>+</b></button>
              <div className="case-system-size-row">
                <span className="case-system-eyebrow">SIZE SELECTOR</span>
                <div><b>S</b><b className="selected">M</b><b>L</b><b>XL</b></div>
              </div>
            </div>

            <div className="case-system-card case-system-fields">
              <span className="case-system-eyebrow">INPUT / FILTER</span>
              <label>Search the collection</label>
              <div className="case-system-input">Search pieces <b>⌕</b></div>
              <div className="case-system-filter">
                <span>FILTER BY</span><b>All pieces <i>⌄</i></b>
              </div>
              <div className="case-system-tags"><span>TOPS</span><span>LAYERS</span><span>BOTTOMS</span></div>
            </div>
          </div>
        </div>

        <div className="case-system-footer lvds-foot">
          <span>SPACING / 8 · 16 · 24 · 40</span>
          <span>RADIUS / 3 · 8 · 14</span>
          <span>TYPE / DISPLAY · BODY · MONO</span>
        </div>
      </div>
    </div>
  );
}
type SvKind = "client" | "craft" | "job" | "wide";

function SvNode({
  x, y, w = 170, h = 60, kind, title, sub = [], badge,
}: {
  x: number; y: number; w?: number; h?: number; kind: SvKind;
  title: string; sub?: string[]; badge?: string;
}) {
  const cx = x + w / 2;
  return (
    <g className={`sv-node sv-${kind}`}>
      <rect x={x} y={y} width={w} height={h} rx={4} />
      <text className="sv-nt" x={cx} y={sub.length ? y + 22 : y + h / 2 + 5} textAnchor="middle">{title}</text>
      {sub.map((s, i) => (
        <text key={i} className="sv-ns" x={cx} y={y + 38 + i * 13} textAnchor="middle">{s}</text>
      ))}
      {badge && (
        <g>
          <circle className="sv-badge" cx={x} cy={y} r={9} />
          <text className="sv-bt" x={x} y={y + 3.5} textAnchor="middle">{badge}</text>
        </g>
      )}
    </g>
  );
}

function SvTg({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={10} fill="#fff" />
      <use href="#sv-tg-icon" x={x - 8} y={y - 8} width={16} height={16} />
    </g>
  );
}

export function San3yMarketplaceFlow() {
  const arrow = "url(#sv-arrow)";

  return (
    <div
      className="case-visual case-visual-san3y"
      style={{ height: "auto", minHeight: 0, maxHeight: "none", aspectRatio: "auto", overflow: "visible" }}
    >
      <style>{`
        .sv-board {
          display: flex; flex-direction: column; gap: 20px; padding: 28px; box-sizing: border-box;
          background: hsl(210 40% 98%); color: hsl(222 47% 11%); height: auto; overflow: visible;
          font-family: var(--font-tajawal, "Tajawal"), system-ui, sans-serif;
        }
        .sv-head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 14px 24px; }
        .sv-eyebrow {
          font: 600 10px/1.2 ui-monospace, SFMono-Regular, Menlo, monospace;
          letter-spacing: .12em; text-transform: uppercase; color: hsl(215 16% 47%);
        }
        .sv-board .sv-h {
          margin: 8px 0 0; font-family: var(--font-cairo, "Cairo"), system-ui, sans-serif;
          font-weight: 700; font-size: clamp(24px, 5vw, 36px); line-height: 1.1; letter-spacing: -.015em;
          color: hsl(212 66% 19%);
        }
        .sv-board .sv-h em { font-style: normal; color: hsl(217 91% 45%); }
        .sv-area { display: flex; flex-direction: column; gap: 4px; background: #fff; border: 1px solid hsl(214 32% 88%); border-radius: 4px; padding: 10px 14px; }
        .sv-area b { font-size: 15px; font-weight: 700; color: hsl(212 66% 19%); }

        .sv-svg { display: block; width: 100%; max-width: 820px; height: auto; margin: 0 auto; }
        .sv-svg text { font-family: var(--font-tajawal, "Tajawal"), system-ui, sans-serif; }

        .sv-lane { fill: #fff; stroke: hsl(214 32% 88%); stroke-width: 1; }
        .sv-lane.mid { fill: hsl(214 32% 96%); }
        .sv-lane-t { font: 600 10px ui-monospace, SFMono-Regular, Menlo, monospace !important; letter-spacing: .12em; fill: hsl(215 16% 47%); text-transform: uppercase; }

        .sv-e { fill: none; stroke: hsl(212 66% 19%); stroke-width: 1.5; }
        .sv-soft { stroke-dasharray: 4 4; opacity: .55; }
        .sv-lbl { font-size: 8.5px; font-weight: 700; letter-spacing: .08em; fill: hsl(215 16% 40%); }

        .sv-node .sv-nt { font-size: 13px; font-weight: 700; }
        .sv-node .sv-ns { font-size: 10.5px; }
        .sv-client rect { fill: #fff; stroke: hsl(212 66% 19%); stroke-width: 1.5; }
        .sv-client .sv-nt { fill: hsl(212 66% 19%); }
        .sv-client .sv-ns { fill: hsl(215 16% 38%); }
        .sv-craft rect { fill: hsl(214 95% 93%); stroke: hsl(217 91% 45%); stroke-width: 1.5; }
        .sv-craft .sv-nt { fill: hsl(212 66% 19%); }
        .sv-craft .sv-ns { fill: hsl(215 25% 32%); }
        .sv-job rect { fill: hsl(212 66% 19%); stroke: hsl(212 66% 19%); }
        .sv-job .sv-nt { fill: #fff; }
        .sv-job .sv-ns { fill: hsl(214 95% 85%); }
        .sv-wide rect { fill: #fff; stroke: hsl(217 91% 45%); stroke-width: 1.5; stroke-dasharray: 5 4; }
        .sv-wide .sv-nt { fill: hsl(212 66% 19%); }
        .sv-wide .sv-ns { fill: hsl(215 16% 38%); }

        .sv-dec { fill: #fff; stroke: hsl(212 66% 19%); stroke-width: 1.5; }
        .sv-dec-t { font-size: 11px; font-weight: 700; fill: hsl(212 66% 19%); }
        .sv-hidden { fill: none; stroke: hsl(215 16% 60%); stroke-dasharray: 3 3; }
        .sv-hidden-t { font-size: 10px; fill: hsl(215 16% 45%); }
        .sv-badge { fill: hsl(217 91% 45%); stroke: #fff; stroke-width: 1.5; }
        .sv-bt { font-size: 10px; font-weight: 700; fill: #fff; }
        .sv-leg { font-size: 10.5px; fill: hsl(215 16% 40%); }
      `}</style>

      <VisualTopline left="صنايعي.كوم / SAN3Y" right="MARKETPLACE MAP — 001" />

      <div className="sv-board">
        <div className="sv-head">
          <div>
            <span className="sv-eyebrow">Built around the job</span>
            <h3 className="sv-h">One request.<br /><em>A connected journey.</em></h3>
          </div>
          <div className="sv-area">
            <span className="sv-eyebrow">Initial service area</span>
            <b>Faisal, Giza</b>
            <span className="sv-eyebrow">Plumbing · Electrical</span>
          </div>
        </div>

        <svg
          className="sv-svg"
          viewBox="0 0 620 830"
          role="img"
          aria-label="Flowchart: a customer posts a job, matching craftsmen apply, the customer chooses one, then chat, completion and feedback all attach to one shared job record, with Telegram notifications at key events."
        >
          <defs>
            <marker id="sv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="hsl(212 66% 19%)" />
            </marker>
            <symbol id="sv-tg-icon" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill="#2AA3E0" />
              <path d="M3 7.8 12.6 4 11 12 7.9 9.8 6.5 11.2 6.4 9 11 5.4 5.2 8.5Z" fill="#fff" />
            </symbol>
          </defs>

          {/* Lanes */}
          <rect className="sv-lane" x={0} y={36} width={190} height={740} rx={4} />
          <rect className="sv-lane mid" x={215} y={36} width={190} height={740} rx={4} />
          <rect className="sv-lane" x={430} y={36} width={190} height={740} rx={4} />
          <text className="sv-lane-t" x={95} y={24} textAnchor="middle">Customer</text>
          <text className="sv-lane-t" x={310} y={24} textAnchor="middle">Shared job record</text>
          <text className="sv-lane-t" x={525} y={24} textAnchor="middle">Craftsman</text>

          {/* Edges (drawn under nodes) */}
          <path className="sv-e" d="M180 82 H225" markerEnd={arrow} />
          <path className="sv-e" d="M310 112 V128" markerEnd={arrow} />
          <path className="sv-e" d="M395 170 H440" markerEnd={arrow} />
          <path className="sv-e sv-soft" d="M310 212 V224" markerEnd={arrow} />
          <path className="sv-e" d="M525 200 V280" markerEnd={arrow} />
          <path className="sv-e" d="M440 310 H395" markerEnd={arrow} />
          <path className="sv-e" d="M225 310 H95 V372" markerEnd={arrow} />
          <path className="sv-e" d="M310 340 V372" markerEnd={arrow} />
          <path className="sv-e" d="M180 402 H225" markerEnd={arrow} />
          <path className="sv-e" d="M395 402 H440" markerEnd={arrow} />
          <path className="sv-e" d="M310 432 V472" markerEnd={arrow} />
          <path className="sv-e" d="M95 532 V572" markerEnd={arrow} />
          <path className="sv-e" d="M525 532 V572" markerEnd={arrow} />
          <path className="sv-e" d="M180 602 H225" markerEnd={arrow} />
          <path className="sv-e" d="M440 602 H395" markerEnd={arrow} />
          <path className="sv-e" d="M310 632 V656 H95 V692" markerEnd={arrow} />
          <path className="sv-e" d="M310 656 H525 V692" markerEnd={arrow} />
          <path className="sv-e" d="M180 722 H225" markerEnd={arrow} />
          <path className="sv-e" d="M440 722 H395" markerEnd={arrow} />

          {/* 1 */}
          <SvNode kind="client" x={10} y={52} title="Posts a job" sub={["Describe the problem,", "pick service + area"]} badge="1" />
          <SvNode kind="job" x={225} y={52} title="Job · OPEN" sub={["The shared record", "starts here"]} />

          {/* 2: matching decision */}
          <polygon className="sv-dec" points="225,170 310,128 395,170 310,212" />
          <text className="sv-dec-t" x={310} y={167} textAnchor="middle">Service + area</text>
          <text className="sv-dec-t" x={310} y={181} textAnchor="middle">match?</text>
          <circle className="sv-badge" cx={267} cy={149} r={9} />
          <text className="sv-bt" x={267} y={152.5} textAnchor="middle">2</text>
          <text className="sv-lbl" x={417} y={162} textAnchor="middle">YES</text>
          <SvTg x={417} y={184} />
          <text className="sv-lbl" x={302} y={222} textAnchor="end">NO</text>
          <rect className="sv-hidden" x={235} y={226} width={150} height={24} rx={12} />
          <text className="sv-hidden-t" x={310} y={242} textAnchor="middle">Not shown to others</text>
          <SvNode kind="craft" x={440} y={140} title="Sees the job" sub={["Matching craftsmen", "only"]} />

          {/* 3 */}
          <SvNode kind="craft" x={440} y={280} title="Applies" sub={["Proposed price", "+ message"]} badge="3" />
          <SvNode kind="job" x={225} y={280} title="Applications" sub={["Each has its own", "status: pending"]} />
          <SvTg x={160} y={310} />

          {/* 4 */}
          <SvNode kind="client" x={10} y={372} title="Compares + chooses" sub={["Price, message,", "experience"]} badge="4" />
          <SvNode kind="job" x={225} y={372} title="Job · IN_PROGRESS" sub={["One accepted,", "others rejected"]} />
          <SvNode kind="craft" x={440} y={372} title="Gets accepted" sub={["Notified right", "away"]} />
          <text className="sv-lbl" x={202} y={394} textAnchor="middle">ACCEPT</text>
          <SvTg x={417} y={388} />

          {/* Chat band */}
          <SvNode kind="wide" x={10} y={472} w={600} title="Job-specific chat" sub={["Customer ↔ craftsman · agree price and details before work starts"]} />
          <text className="sv-lbl" x={574} y={492} textAnchor="end">NEW MESSAGE</text>
          <SvTg x={594} y={488} />

          {/* Completion */}
          <SvNode kind="client" x={10} y={572} title="Marks finished" sub={["Customer side"]} />
          <SvNode kind="job" x={225} y={572} title="Job · COMPLETED" sub={["Each side confirms", "separately"]} />
          <SvNode kind="craft" x={440} y={572} title="Marks finished" sub={["Craftsman side"]} />
          <SvTg x={202} y={588} />
          <SvTg x={417} y={588} />

          {/* Feedback */}
          <SvNode kind="client" x={10} y={692} title="Rates the work" sub={["Quality + treatment"]} />
          <SvNode kind="job" x={225} y={692} title="Public reputation" sub={["Reviews feed the", "craftsman profile"]} />
          <SvNode kind="craft" x={440} y={692} title="Reports experience" sub={["Categories + comment"]} />

          {/* Legend */}
          <SvTg x={16} y={802} />
          <text className="sv-leg" x={32} y={806}>Telegram notification</text>
          <path className="sv-e" d="M190 802 H220" markerEnd={arrow} />
          <text className="sv-leg" x={228} y={806}>Flow</text>
          <text className="sv-leg" x={610} y={806} textAnchor="end">Illustrative example · not real users</text>
        </svg>
      </div>
    </div>
  );
}

export function CaseStudyVisual({
  visual,
}: {
  visual:
    | "lvry-product-direction"
    | "lvry-brand-identity"
    | "lvry-design-system"
    | "san3y-marketplace-flow";
}) {
  switch (visual) {
    case "lvry-product-direction":
      return <LVRYProductDirection />;
    case "lvry-brand-identity":
      return <LVRYBrandIdentity />;
    case "lvry-design-system":
      return <LVRYDesignSystem />;
    case "san3y-marketplace-flow":
      return <San3yMarketplaceFlow />;
  }
}

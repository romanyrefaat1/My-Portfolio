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
      className={\`case-visual-garment \${className}\`}
      role="img"
      aria-label={label}
      style={{ backgroundImage: \`url("\${src}")\` }}
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
  return (
    <div className="case-visual case-visual-lvry case-visual-identity">
      <VisualTopline left="LVRY / BRAND NOTES" right="IDENTITY SYSTEM — 002" />

      <div className="case-identity-main">
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
          <div className="case-identity-swatch swatch-bone">
            <span>BONE</span><small>#EFEBE4</small>
          </div>
          <div className="case-identity-swatch swatch-ink">
            <span>INK</span><small>#111111</small>
          </div>
          <div className="case-identity-swatch swatch-signal">
            <span>SIGNAL</span><small>#FF4A1C</small>
          </div>
          <div className="case-identity-swatch swatch-denim">
            <span>DENIM</span><small>#3E5C8A</small>
          </div>
          <div className="case-identity-swatch swatch-canvas">
            <span>CANVAS</span><small>#C9B79C</small>
          </div>
        </div>
      </div>

      <div className="case-identity-footer">
        <span>03 / ART DIRECTION</span>
        <span>TACTILE · REFINED · PLAYFUL</span>
        <span>LVRY — THE EVERYDAY UNIFORM</span>
      </div>
    </div>
  );
}

export function LVRYDesignSystem() {
  return (
    <div className="case-visual case-visual-lvry case-visual-system">
      <VisualTopline left="LVRY / DIGITAL EXPERIENCE" right="INTERFACE SYSTEM — 003" />

      <div className="case-system-board">
        <aside className="case-system-sidebar">
          <div className="case-system-brand">LVRY<span>®</span></div>
          <div className="case-system-sidebar-copy">
            <span>DESIGN LANGUAGE</span>
            <strong>Quiet structure.<br />Clear decisions.</strong>
          </div>
          <div className="case-system-colors">
            <span>COLOR TOKENS</span>
            <div><i className="bone" /><small>Bone</small><code>#EFEBE4</code></div>
            <div><i className="ink" /><small>Ink</small><code>#111111</code></div>
            <div><i className="signal" /><small>Signal</small><code>#FF4A1C</code></div>
            <div><i className="denim" /><small>Denim</small><code>#3E5C8A</code></div>
          </div>
          <div className="case-system-sidebar-foot">TOKENS / 04</div>
        </aside>

        <div className="case-system-content">
          <div className="case-system-nav">
            <strong>THE EVERYDAY UNIFORM</strong>
            <div><span>SHOP</span><span>LOOKBOOK</span><span>ABOUT</span></div>
            <b>BAG (02)</b>
          </div>

          <div className="case-system-heading">
            <div>
              <span className="case-system-eyebrow">COMPONENTS / 01</span>
              <h3>Made to work<br /><em>together.</em></h3>
            </div>
            <span className="case-system-count">A SYSTEM<br />OF PIECES ↗</span>
          </div>

          <div className="case-system-components">
            <div className="case-system-card case-system-controls">
              <span className="case-system-eyebrow">ACTIONS / BUTTONS</span>
              <button type="button" className="case-system-button-dark">Explore collection <b>↗</b></button>
              <button type="button" className="case-system-button-outline">View details <b>+</b></button>
              <div className="case-system-size-row">
                <span className="case-system-eyebrow">SIZE SELECTOR</span>
                <div><b>S</b><b className="selected">M</b><b>L</b><b>XL</b></div>
              </div>
            </div>

            <div className="case-system-card case-system-product">
              <span className="case-system-eyebrow">PRODUCT CARD / DEFAULT</span>
              <div className="case-system-product-image">
                <Garment
                  src={garment.oliveTop}
                  label="Olive green long-sleeve t-shirt product card"
                />
                <span>NEW ARRIVAL</span>
              </div>
              <div className="case-system-product-info">
                <strong>Olive long-sleeve</strong>
                <span>EVERYDAY / TOP</span>
                <b>$32.00 <i>＋</i></b>
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
          <div className="case-system-footer">
            <span>SPACING / 8 · 16 · 24 · 40</span>
            <span>RADIUS / 3 · 8 · 14</span>
            <span>TYPE / DISPLAY · BODY · MONO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function San3yMarketplaceFlow() {
  return (
    <div className="case-visual case-visual-san3y">
      <VisualTopline left="صنايعي.كوم / SAN3Y" right="MARKETPLACE FLOW — 001" />

      <div className="case-san3y-heading">
        <div>
          <span>BUILT AROUND THE JOB</span>
          <h3>One request.<br /><em>A connected journey.</em></h3>
        </div>
        <div className="case-san3y-location">
          <span>INITIAL SERVICE AREA</span>
          <strong>Faisal, Giza</strong>
          <small>PLUMBING · ELECTRICAL</small>
        </div>
      </div>

      <div className="case-san3y-flow">
        <svg className="case-san3y-connectors" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <marker id="san3y-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6" fill="none" stroke="#8CB4F7" strokeWidth="1.2" />
            </marker>
          </defs>
          <path d="M105 62 H890" stroke="#B9D1F7" strokeWidth="2" strokeDasharray="5 7" fill="none" markerEnd="url(#san3y-arrow)" />
          <circle cx="105" cy="62" r="5" fill="#3B82F6" />
          <circle cx="365" cy="62" r="5" fill="#3B82F6" />
          <circle cx="635" cy="62" r="5" fill="#3B82F6" />
          <circle cx="890" cy="62" r="5" fill="#3B82F6" />
        </svg>

        <article className="case-san3y-step">
          <div className="case-san3y-step-top"><span>01</span><span>CUSTOMER</span></div>
          <div className="case-san3y-icon case-san3y-icon-blue">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5zM8 8h8M8 12h8M8 16h4" /></svg>
          </div>
          <h4>Post a job</h4>
          <p>Describe the work, service type, and location.</p>
          <div className="case-san3y-mini-form">
            <span>NEW REQUEST</span>
            <b>Electrical repair</b>
            <small>Faisal, Giza <i>↗</i></small>
          </div>
        </article>

        <article className="case-san3y-step">
          <div className="case-san3y-step-top"><span>02</span><span>MATCHING</span></div>
          <div className="case-san3y-icon case-san3y-icon-soft">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12A7 7 0 1 0 5 9c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.3" /><path d="M3 5.5 5 4m14 0 2 1.5M3 18l3-1" /></svg>
          </div>
          <h4>Find relevant pros</h4>
          <p>Service and area guide which craftsmen see the request.</p>
          <div className="case-san3y-match">
            <span className="case-san3y-map-dot" />
            <span className="case-san3y-map-dot two" />
            <span className="case-san3y-map-dot three" />
            <b>NEARBY<br />CRAFTSMEN</b>
            <small>AREA + SERVICE</small>
          </div>
        </article>

        <article className="case-san3y-step">
          <div className="case-san3y-step-top"><span>03</span><span>CRAFTSMEN</span></div>
          <div className="case-san3y-icon case-san3y-icon-soft">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.2" /><path d="M3 20c.5-3.5 2.5-5.3 6-5.3s5.5 1.8 6 5.3M16 5.5a3 3 0 0 1 0 5.7M17 15c2.2.5 3.4 2.1 4 5" /></svg>
          </div>
          <h4>Receive applications</h4>
          <p>Each response includes a proposed price and a message.</p>
          <div className="case-san3y-applications">
            <div><i>MK</i><span><b>Mohamed K.</b><small>Fixed price</small></span><strong>EGP 450</strong></div>
            <div><i>AH</i><span><b>Ahmed H.</b><small>Initial estimate</small></span><strong>EGP 380</strong></div>
          </div>
        </article>

        <article className="case-san3y-step case-san3y-step-final">
          <div className="case-san3y-step-top"><span>04</span><span>CUSTOMER</span></div>
          <div className="case-san3y-icon case-san3y-icon-green">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19.5 6.5" /></svg>
          </div>
          <h4>Choose a craftsman</h4>
          <p>Compare the responses and select the right applicant.</p>
          <div className="case-san3y-accepted">
            <span>SELECTED APPLICATION</span>
            <b>Mohamed K.</b>
            <small>Application accepted</small>
            <i>✓</i>
          </div>
        </article>
      </div>

      <div className="case-san3y-outcome">
        <div className="case-san3y-outcome-label">
          <span>THEN THE JOB CONTINUES</span>
          <strong>One shared job record connects every step.</strong>
        </div>
        <div className="case-san3y-outcome-steps">
          <span><i>01</i> JOB CHAT</span>
          <b>→</b>
          <span><i>02</i> COMPLETION</span>
          <b>→</b>
          <span><i>03</i> FEEDBACK</span>
        </div>
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

import { CatalogObject } from "@/components/catalog-object";
import { CatalogMotion } from "@/components/catalog-motion";
import { SampleReview } from "@/components/sample-review";
import sample from "@/data/sample.json";
import { contactEmail, sampleMailto } from "@/lib/offer";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const firstChange = sample.review.changes[0];
  return (
    <CatalogMotion>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a
          className="brand"
          href="/"
          aria-label="Furniture Catalog Rescue home"
        >
          <svg
            className="brand-mark"
            viewBox="0 0 42 44"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 4h18l9 9v25H8V4Zm18 0v10h9M14 22h14M14 28h9"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path d="m3 35 5 5 11-13" stroke="currentColor" strokeWidth="2.3" />
          </svg>
          <span>
            Furniture
            <br />
            Catalog Rescue
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#sample">The review</a>
          <a href="#offer">The offer</a>
          <a className="nav-cta" href={sampleMailto}>
            Request a sample <Arrow />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-heading">
            <h1 id="hero-title" aria-label="Every price in its place.">
              <span className="type-line" aria-hidden="true">
                <span className="type-ink">Every price</span>
              </span>
              <span className="type-line" aria-hidden="true">
                <span className="type-ink">in its place.</span>
              </span>
            </h1>
            <div className="hero-intro">
              <p>
                Supplier spreadsheets, carefully matched to your Shopify
                furniture variants. Review the changes before the file.
              </p>
              <a className="button" href={sampleMailto}>
                Request a free sample <Arrow />
              </a>
              <a className="quiet-link" href="#sample">
                Take a look at the review
              </a>
            </div>
          </div>
          <figure
            className="catalog-scene"
            aria-label="Fictional supplier-price example for an oak desk"
          >
            <div className="supplier-sheet">
              <div className="file-heading">
                <span className="file-fold" aria-hidden="true" />
                <span>supplier-prices.xlsx</span>
              </div>
              <p>Approved selling prices / USD</p>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Supplier SKU</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {sample.review.changes.map((change) => (
                    <tr
                      key={change.sku}
                      className={
                        change.sku === firstChange.sku
                          ? "source-selected"
                          : undefined
                      }
                    >
                      <th scope="row" translate="no">
                        {change.sku}
                      </th>
                      <td>${change.after}</td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row" translate="no">
                      CHR-GRY
                    </th>
                    <td>$199.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="sheet-bottom">
                3 source rows<span>→</span>
              </div>
            </div>
            <CatalogObject />
            <div className="price-annotation">
              <span className="annotation-caption">
                Matched to the right variant
              </span>
              <p className="annotation-sku" translate="no">
                {firstChange.sku}
              </p>
              <p className="annotation-options">1200 mm / Oak</p>
              <div className="annotated-price">
                <del>${firstChange.before}</del>
                <span className="new-price">
                  ${firstChange.after}
                  <svg viewBox="0 0 222 85" fill="none" aria-hidden="true">
                    <path
                      d="M196 16C156-8 31 0 9 31-14 66 77 88 160 73c52-9 71-29 48-49C181 1 65-2 22 23"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <a href="#sample" className="annotation-link">
                Inspect the change <Arrow diagonal />
              </a>
            </div>
            <svg
              className="match-line"
              viewBox="0 0 1200 400"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M235 210C320 210 318 315 492 315s292-139 445-139"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeDasharray="3 7"
              />
              <path
                d="m924 167 14 9-14 9"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
            <figcaption>
              <span>Furniture retailers &amp; Shopify agencies</span>
              <span>Illustrative furniture. Fictional review data.</span>
            </figcaption>
          </figure>
        </section>

        <section
          id="sample"
          className="review-section wrap section"
          aria-labelledby="review-title"
        >
          <div className="chapter-heading">
            <h2
              id="review-title"
              aria-label="Small changes. Nothing left vague."
            >
              <span className="type-line" aria-hidden="true">
                <span className="type-ink">Small changes.</span>
              </span>
              <span className="type-line" aria-hidden="true">
                <span className="type-ink">Nothing left vague.</span>
              </span>
            </h2>
            <p>
              A price belongs to a particular size, finish and SKU. See exactly
              what changes, what stays and what needs your decision.
            </p>
          </div>
          <div className="review-spread">
            <div className="specimen">
              <CatalogObject small />
              <div>
                <h3>Frame Desk</h3>
                <p>
                  Existing product
                  <br />4 variants in this family
                </p>
              </div>
            </div>
            <div className="ledger">
              <SampleReview
                changes={sample.review.changes}
                family={sample.review.family_context}
              />
            </div>
          </div>
          <div className="review-bottom">
            <p>
              Fictional sample, actual tool output.
              <br />
              USD selling prices. No live store connected.
            </p>
            <div className="review-downloads">
              <a href="/sample/review.html">
                Open full review <Arrow diagonal />
              </a>
              <a href="/sample/supplier.xlsx" download>
                Supplier XLSX <span aria-hidden="true">↓</span>
              </a>
              <a href="/sample/shopify-baseline.csv" download>
                Baseline CSV <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <a className="exception-note" href="/sample/exceptions.html">
            <svg viewBox="0 0 34 34" fill="none" aria-hidden="true">
              <circle
                cx="17"
                cy="17"
                r="13"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M17 9v10m0 4v2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span>
              Unclear match? It goes into the exception report.{" "}
              <strong>You decide before the file moves on.</strong>
            </span>
            <span className="exception-action">
              See an example <Arrow diagonal />
            </span>
          </a>
        </section>

        <section
          id="offer"
          className="offer-section wrap section"
          aria-labelledby="offer-title"
        >
          <div className="chapter-heading">
            <h2
              id="offer-title"
              aria-label="A considered handoff. A clear scope."
            >
              <span className="type-line" aria-hidden="true">
                <span className="type-ink">A considered handoff.</span>
              </span>
              <span className="type-line" aria-hidden="true">
                <span className="type-ink">A clear scope.</span>
              </span>
            </h2>
            <p>
              One supplier batch, prepared for review. Start with a small sample
              so we can agree what your files need.
            </p>
          </div>
          <div className="scope-sheet">
            <div className="price-block">
              <p className="price">
                <span>$</span>149
              </p>
              <p>USD / one batch</p>
              <a className="button" href={sampleMailto}>
                Request a free sample <Arrow />
              </a>
            </div>
            <div className="scope-content">
              <h3>Up to 500 supplier variant rows.</h3>
              <p>Matched against one current Shopify product export.</p>
              <dl>
                <div>
                  <dt>The inputs</dt>
                  <dd>
                    One supplier, one currency and one approved selling-price
                    field or rule.
                  </dd>
                </div>
                <div>
                  <dt>The review</dt>
                  <dd>
                    Visible price changes, retained family context and a
                    separate exception report.
                  </dd>
                </div>
                <div>
                  <dt>The handoff</dt>
                  <dd>
                    A candidate CSV after approval, plus one correction round
                    within the original scope.
                  </dd>
                </div>
              </dl>
              <p className="scope-small">
                Larger or more complex catalogs are scoped after a sample.
              </p>
            </div>
          </div>
          <ol className="process-list">
            <li>
              <span className="process-number">01</span>
              <h3>Share a little.</h3>
              <p>
                Up to ten representative supplier rows and the matching Shopify
                baseline rows.
              </p>
            </li>
            <li>
              <span className="process-number">02</span>
              <h3>Make it explicit.</h3>
              <p>
                Agree the match key, price meaning, currency and any exceptions
                that need a decision.
              </p>
            </li>
            <li>
              <span className="process-number">03</span>
              <h3>Review the handoff.</h3>
              <p>
                Inspect the changes. After approval, your team controls the
                Shopify test and import.
              </p>
            </li>
          </ol>
          <aside className="platform-note">
            <p>You keep control of the store.</p>
            <p>
              Live-store imports are outside this offer. Controlled Shopify
              import/re-export verification is still pending. A candidate needs
              a controlled test before production use.
            </p>
          </aside>
        </section>

        <section
          id="contact"
          className="contact-section wrap section"
          aria-labelledby="contact-title"
        >
          <div className="contact-heading">
            <h2 id="contact-title" aria-label="Start small. Send ten rows.">
              <span className="type-line" aria-hidden="true">
                <span className="type-ink">Start small.</span>
              </span>
              <span className="type-line" aria-hidden="true">
                <span className="type-ink">Send ten rows.</span>
              </span>
            </h2>
            <svg
              className="contact-flourish"
              viewBox="0 0 150 145"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M11 8c93-4 131 23 108 57S25 90 52 54c32-42 87 14 81 70m-15-16 16 18 12-23"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="contact-body">
            <div className="contact-copy">
              <p>
                Get a free representative review before committing to a full
                batch. We’ll check fit and explain what needs a decision.
              </p>
              <a className="button" href={sampleMailto}>
                Request a free sample <Arrow />
              </a>
              <p className="email-note">
                Opens your email app, with a short checklist.
                <br />
                Or write to{" "}
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
              </p>
            </div>
            <aside className="intake-note">
              <svg
                className="paperclip"
                viewBox="0 0 35 65"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M13 45V13c0-14 18-14 18 0v35C31 67 4 66 4 48V18c0-9 14-9 14 0v29c0 6-6 6-6 0V24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <h3>A good place to start</h3>
              <ul>
                <li>A redacted CSV or XLSX sample</li>
                <li>Matching Shopify product CSV rows</li>
                <li>Currency and what the price means</li>
                <li>The key that should match, such as SKU</li>
              </ul>
              <p>
                Keep leading zeros. Leave out customer data and credentials. We
                agree file handling before a full catalog is shared.
              </p>
            </aside>
          </div>
          <div className="questions">
            <div>
              <h3>What if a match is unclear?</h3>
              <p>
                Duplicate or unmatched keys appear in the exception report.
                Unresolved errors block the candidate. We ask you to resolve
                them.
              </p>
            </div>
            <div>
              <h3>Is the supplier price my retail price?</h3>
              <p>
                Only if you confirm that meaning. We agree an approved
                selling-price field or rule and never assume cost equals retail.
              </p>
            </div>
            <div>
              <h3>What stays outside this offer?</h3>
              <p>
                Product creation, inventory or option changes, image sourcing,
                PDF conversion and live-store imports. No store credentials are
                needed for offline preparation.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <a className="footer-wordmark" href="#main">
          Furniture
          <br />
          Catalog Rescue<span aria-hidden="true">↗</span>
        </a>
        <div>
          <p>
            Independent file preparation
            <br />
            by <a href="https://iliagoginashvili.com">Ilia Goginashvili</a>.
          </p>
          <a className="back-top" href="#main">
            Back to the top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </CatalogMotion>
  );
}

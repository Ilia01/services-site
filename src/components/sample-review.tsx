"use client";
import { useEffect, useRef, useState } from "react";
type Change = {
  sku: string;
  before: string;
  after: string;
  source_pointer: { record: number; sheet: string };
};
type Variant = { sku: string; option_values: string[]; price: string };
type View = "changes" | "retained";

export function SampleReview({
  changes,
  family,
}: {
  changes: Change[];
  family: Variant[];
}) {
  const [view, setView] = useState<View>("changes");
  const changeTab = useRef<HTMLButtonElement>(null);
  const retainedTab = useRef<HTMLButtonElement>(null);
  const retained = family.filter(
    (variant) => !changes.some((change) => change.sku === variant.sku),
  );
  useEffect(() => {
    const readView = () =>
      setView(
        new URLSearchParams(window.location.search).get("view") === "retained"
          ? "retained"
          : "changes",
      );
    readView();
    window.addEventListener("popstate", readView);
    return () => window.removeEventListener("popstate", readView);
  }, []);
  function select(next: View, focus = false) {
    setView(next);
    const url = new URL(window.location.href);
    if (next === "retained") url.searchParams.set("view", next);
    else url.searchParams.delete("view");
    window.history.replaceState(null, "", url);
    if (focus) (next === "changes" ? changeTab : retainedTab).current?.focus();
  }
  return (
    <div className="review-workbench" data-view={view}>
      <div
        className="review-tabs"
        role="tablist"
        aria-label="Sample review"
        onKeyDown={(event) => {
          if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
            event.preventDefault();
            select(
              event.key === "Home"
                ? "changes"
                : event.key === "End"
                  ? "retained"
                  : view === "changes"
                    ? "retained"
                    : "changes",
              true,
            );
          }
        }}
      >
        <button
          ref={changeTab}
          id="tab-changes"
          role="tab"
          type="button"
          aria-selected={view === "changes"}
          aria-controls="panel-changes"
          tabIndex={view === "changes" ? 0 : -1}
          onClick={() => select("changes")}
        >
          Price changes <span>{changes.length}</span>
        </button>
        <button
          ref={retainedTab}
          id="tab-retained"
          role="tab"
          type="button"
          aria-selected={view === "retained"}
          aria-controls="panel-retained"
          tabIndex={view === "retained" ? 0 : -1}
          onClick={() => select("retained")}
        >
          Retained variants <span>{retained.length}</span>
        </button>
        <span className="tab-marker" aria-hidden="true" />
      </div>
      <div className="review-paper">
        <div className="paper-heading">
          <span>Price review</span>
          <span>Fictional sample / USD</span>
        </div>
        <div
          id="panel-changes"
          role="tabpanel"
          aria-labelledby="tab-changes"
          tabIndex={0}
          hidden={view !== "changes"}
        >
          <h3 className="sr-only">Proposed price changes</h3>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Variant SKU</th>
                  <th scope="col">Current</th>
                  <th scope="col">Reviewed</th>
                </tr>
              </thead>
              <tbody>
                {changes.map((change) => (
                  <tr key={change.sku}>
                    <th scope="row">
                      {change.sku}
                      <small>
                        {family
                          .find((variant) => variant.sku === change.sku)
                          ?.option_values.filter(Boolean)
                          .join(" / ")}
                      </small>
                    </th>
                    <td>${change.before}</td>
                    <td>
                      <mark>${change.after}</mark>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="paper-note">
            Exact SKU matches. Source: supplier sheet, rows{" "}
            {changes
              .map((change) => change.source_pointer.record + 1)
              .join(" and ")}
            .
          </p>
        </div>
        <div
          id="panel-retained"
          role="tabpanel"
          aria-labelledby="tab-retained"
          tabIndex={0}
          hidden={view !== "retained"}
        >
          <h3 className="sr-only">
            Sibling variants retained in the candidate
          </h3>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Variant SKU</th>
                  <th scope="col">Current</th>
                  <th scope="col">Retained</th>
                </tr>
              </thead>
              <tbody>
                {retained.map((variant) => (
                  <tr key={variant.sku}>
                    <th scope="row">
                      {variant.sku}
                      <small>
                        {variant.option_values.filter(Boolean).join(" / ")}
                      </small>
                    </th>
                    <td>${variant.price}</td>
                    <td>${variant.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="paper-note">
            Sibling variants from the same product keep their baseline prices.
          </p>
        </div>
        <div className="paper-footer">
          <span>{changes.length} proposed changes</span>
          <span>Review before approval</span>
        </div>
      </div>
    </div>
  );
}

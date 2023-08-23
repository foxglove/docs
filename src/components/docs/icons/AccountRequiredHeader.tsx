import React, { ReactElement } from "react";

function Badge({ badgeText }: { badgeText?: string }): ReactElement {
  return (
    <div
      style={{
        color: "rgba(139, 92, 246, 1)",
        display: "flex",
        alignItems: "center",
        fontSize: "11px",
      }}
    >
      <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path d="M9 10A3.04 3.04 0 0 1 12 7A3.04 3.04 0 0 1 15 10A3.04 3.04 0 0 1 12 13A3.04 3.04 0 0 1 9 10M12 19L16 20V16.92A7.54 7.54 0 0 1 12 18A7.54 7.54 0 0 1 8 16.92V20M12 4A5.78 5.78 0 0 0 7.76 5.74A5.78 5.78 0 0 0 6 10A5.78 5.78 0 0 0 7.76 14.23A5.78 5.78 0 0 0 12 16A5.78 5.78 0 0 0 16.24 14.23A5.78 5.78 0 0 0 18 10A5.78 5.78 0 0 0 16.24 5.74A5.78 5.78 0 0 0 12 4M20 10A8.04 8.04 0 0 1 19.43 12.8A7.84 7.84 0 0 1 18 15.28V23L12 21L6 23V15.28A7.9 7.9 0 0 1 4 10A7.68 7.68 0 0 1 6.33 4.36A7.73 7.73 0 0 1 12 2A7.73 7.73 0 0 1 17.67 4.36A7.68 7.68 0 0 1 20 10Z" />
      </svg>
      <a href="/docs/studio/signing-in">
        <span style={{ color: "rgba(139, 92, 246, 1)" }}>{badgeText ?? "Account required"}</span>
      </a>
    </div>
  );
}

export default function AccountRequiredHeader(props: {
  headerId?: string;
  headerText?: string;
  badgeText?: string;
}): ReactElement {
  const { headerId, headerText, badgeText } = props;
  if (!headerId || !headerText) {
    return (
      <p>
        <Badge badgeText={badgeText} />
      </p>
    );
  }

  return (
    <h2 style={{ display: "flex" }} id={headerId}>
      <a aria-hidden="true" tabIndex={-1} href={`#${headerId}`} target="_self">
        <span className="icon icon-link"></span>
      </a>
      <span style={{ whiteSpace: "nowrap", marginRight: "5px" }}>{headerText}</span>
      <Badge badgeText={badgeText} />
    </h2>
  );
}

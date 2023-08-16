import * as Icon from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

export default function DesktopAppOnlyBadge({
  style,
}: {
  style: { [key: string]: string };
}): ReactElement {
  return (
    <div
      style={{
        color: "rgba(139, 92, 246, 1)",
        display: "flex",
        alignItems: "center",
        fontSize: "12px",
        ...style,
      }}
    >
      <Icon.ComputerDesktopIcon style={{ width: "24px", height: "24px", marginRight: "5px" }} />
      <span style={{ color: "rgba(139, 92, 246, 1)" }}>Desktop app only</span>
    </div>
  );
}

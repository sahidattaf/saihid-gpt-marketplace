"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface MermaidRendererProps {
  chart: string;
  id: string;
}

export function MermaidRenderer({ chart, id }: MermaidRendererProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      try {
        const mermaid = (await import("mermaid")).default;

        const isDark = theme === "dark";

        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            // Brand palette
            primaryColor: isDark ? "#0f4c75" : "#1a6fa8",
            primaryTextColor: "#ffffff",
            primaryBorderColor: "#00a896",
            lineColor: isDark ? "#00a896" : "#007a6e",
            secondaryColor: isDark ? "#1e293b" : "#e8f4fb",
            secondaryTextColor: isDark ? "#e2e8f0" : "#1e293b",
            secondaryBorderColor: isDark ? "#334155" : "#bfdbfe",
            tertiaryColor: isDark ? "#0f172a" : "#f0fdfa",
            tertiaryTextColor: isDark ? "#94a3b8" : "#374151",
            tertiaryBorderColor: isDark ? "#1e3a5f" : "#99f6e4",
            noteBkgColor: isDark ? "#1e293b" : "#fef9c3",
            noteTextColor: isDark ? "#e2e8f0" : "#374151",
            edgeLabelBackground: isDark ? "#0f172a" : "#f8fafc",
            background: isDark ? "#0f172a" : "#ffffff",
            mainBkg: isDark ? "#1e293b" : "#f8fafc",
            nodeBorder: "#00a896",
            clusterBkg: isDark ? "#0f172a" : "#f0fdfa",
            titleColor: isDark ? "#e2e8f0" : "#0f4c75",
            actorBkg: isDark ? "#0f4c75" : "#1a6fa8",
            actorTextColor: "#ffffff",
            actorLineColor: "#00a896",
            signalColor: isDark ? "#00a896" : "#007a6e",
            signalTextColor: isDark ? "#e2e8f0" : "#1e293b",
            labelBoxBkgColor: isDark ? "#0f4c75" : "#1a6fa8",
            labelBoxBorderColor: "#00a896",
            labelTextColor: "#ffffff",
            loopTextColor: isDark ? "#e2e8f0" : "#374151",
            activationBorderColor: "#00a896",
            activationBkgColor: isDark ? "#1e3a5f" : "#dbeafe",
          },
          flowchart: { curve: "basis", htmlLabels: true },
          sequence: { diagramMarginX: 20, diagramMarginY: 20 },
        });

        if (!cancelled && ref.current) {
          const renderId = `mermaid-${id}-${theme}`;
          const { svg } = await mermaid.render(renderId, chart);
          if (!cancelled && ref.current) {
            ref.current.innerHTML = svg;
            // Make SVG responsive
            const svgEl = ref.current.querySelector("svg");
            if (svgEl) {
              svgEl.style.width = "100%";
              svgEl.style.height = "auto";
              svgEl.removeAttribute("width");
            }
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Render failed");
        }
      }
    };

    render();
    return () => {
      cancelled = true;
    };
  }, [chart, id, theme]);

  if (error) {
    return (
      <pre className="text-xs text-red-500 bg-red-50 dark:bg-red-950/20 p-4 rounded-lg overflow-x-auto">
        {error}
      </pre>
    );
  }

  return (
    <div
      ref={ref}
      className="w-full overflow-x-auto min-h-[200px] flex items-center justify-center"
    />
  );
}

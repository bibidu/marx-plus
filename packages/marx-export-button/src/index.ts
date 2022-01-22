import { handleExportHTML } from './handleExportHTML'
import { handleExportPNG } from './handleExportPNG'

const icon = `<svg
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="16"
height="16"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 32 32"
style="
  -ms-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
"
>
<g
  fill="none"
  stroke="currentColor"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
>
  <path d="M28 22v8H4v-8M16 4v20M8 12l8-8l8 8" />
</g>
</svg>
`;

export function activate(context) {
  console.log("[marx-export-button] activate!");
  const selectors = [
    {
      label: "export-html",
      value: "导出html",
    },
    {
      label: "export-png",
      value: "导出图片",
    },
  ];

  const exportButton = marx.topbar.toolbar.registerSelectorButton({
    icon,
    selectors,
  });

  exportButton.addEventListener("onClick", (selector) => {
    switch (selector.label) {
      case "export-html":
        return handleExportHTML();
      case "export-png":
        return handleExportPNG();
    }
  });
}

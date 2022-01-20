import { handleExportHTML } from './handleExportHTML'
import { handleExportPNG } from './handleExportPNG'

const icon = "https://api.iconify.design/bytesize:export.svg";

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

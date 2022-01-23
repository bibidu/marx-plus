import { gitee } from './gitee'
import { github } from './github'

const icon = `<svg
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
aria-hidden="true"
role="img"
class="iconify iconify--icon-park"
width="16"
height="16"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 48 48"
>
<path
  d="M18 6a6 6 0 1 0 12 0h5.455L42 15.818l-5.727 4.91V42H11.727V20.727L6 15.818L12.545 6H18z"
  stroke="#000"
  stroke-width="4"
  fill="#2F88FF"
  fill-rule="nonzero"
  stroke-linejoin="round"
></path>
</svg>

`;

export function activate(context) {
  console.log("[marx-theme-button] activate!");

  const selectors = [
    {
      label: "github",
      value: "github 主题",
    },
    {
      label: "gitee",
      value: "gitee 主题",
    },
  ];

  const themeButton = marx.topbar.toolbar.registerSelectorButton({
    icon,
    selectors,
  });

  themeButton.addEventListener("onClick", (selector) => {
    switch (selector.label) {
      case "github":
        return marx.editor.updateMarkdownTheme(github)
      case "gitee":
        return marx.editor.updateMarkdownTheme(gitee)
    }
  });
}

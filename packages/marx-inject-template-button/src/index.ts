import { example } from "./example";

const icon = `<svg
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="1em"
height="1em"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 48 48"
style="
  -ms-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
"
>
<g fill="none" stroke="#000" stroke-width="4" stroke-linejoin="round">
  <path
    d="M13 12.432v-4.62A2.813 2.813 0 0 1 15.813 5h24.374A2.813 2.813 0 0 1 43 7.813v24.375A2.813 2.813 0 0 1 40.187 35h-4.67"
    stroke-linecap="round"
  />
  <path
    d="M32.188 13H7.811A2.813 2.813 0 0 0 5 15.813v24.374A2.813 2.813 0 0 0 7.813 43h24.375A2.813 2.813 0 0 0 35 40.187V15.814A2.813 2.813 0 0 0 32.187 13z"
    fill="#2F88FF"
  />
</g>
</svg>
`;

export function activate(context) {
  console.log("[marx-inject-template-button] activate!");

  const injectTemplateButton = marx.topbar.toolbar.registerButton({
    icon,
  });

  injectTemplateButton.addEventListener("onClick", () => {
    marx.editor.copyText(example);

    marx.notification.show("文档模板已复制!");

    setTimeout(() => {
      marx.notification.hide();
    }, 1500);
  });
}

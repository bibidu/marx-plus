import html2canvas from "html2canvas";
import { createDownloadLabel } from "./createDownloadLabel";
import { uuid } from "./uuid";

export function handleExportHTML() {
  marx.notification.show("正在下载HTML, 请稍等！");

  const previewHtml = createPreviewHtml(marx.editor.html);

  const name = `${uuid()}.html`;
  const url = `data:text/html;charset=utf-8,${encodeURIComponent(previewHtml)}`;
  createDownloadLabel(name, url).click();

  marx.notification.hide();
}

export const createPreviewHtml = (content) => {
  const baseHost = location.protocol + "//" + location.host;

  return content
    .replace(
      "</head>",
      `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.3/build/styles/github-gist.min.css">
    <style>
    body{
      background: rgb(247, 248, 250);
    }
    .back-to-main{
      position: fixed;
      top: 50px;
      left: 50px;
      border: 1px solid #ccc;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0366d6;
      text-decoration: none;
      font-weight: bold;
      font-size: 14px;
      border-radius: 4px;
    }
    article{
      width: 800px;
      margin: 40px auto;
      box-shadow: 0px 2px 12px rgba(0,0,0,0.2);
      padding: 70px 90px;
      box-sizing: border-box;
      background: #fff;
    }</style>
    </head>`
    )
    .replace(
      "</body>",
      `
    <a href="" class="back-to-main">返回首页</a>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.3/build/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad()</script>
    </body>`
    );
};

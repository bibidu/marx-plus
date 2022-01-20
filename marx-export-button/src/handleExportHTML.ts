import html2canvas from "html2canvas";

export async function handleExportHTML() {
  marx.notification.show("正在下载HTML, 请稍等！");

  await createDownloadLink({ title: "", content: marx.editor.html });

  marx.notification.hide();
}

export const createDownloadLink = async ({ title, content }) => {
  const a = document.createElement("a");
  const filename = title || String(Math.random()).slice(3, 8);
  const withHighlightContent = createPreviewHtml(content);
  a.setAttribute(
    "href",
    `data:text/html;charset=utf-8,${encodeURIComponent(withHighlightContent)}`
  );
  a.setAttribute("download", `${filename}.html`);
  a.click();

  // if (type === 'image') {
  //   const getMaskImageData = async () => {
  //     const waterMaskElement = document.querySelector('.export-watermask')
  //     const waterCanvas = await html2canvas(waterMaskElement)
  //     const img = new Image()
  //     img.src = waterCanvas.toDataURL('image/png')

  //     const imageData = waterCanvas
  //       .getContext('2d')
  //       .getImageData(0, 0, waterCanvas.width, waterCanvas.height)

  //     return imageData
  //   }

  //   const drawMainCanvas = (keepHeight = 0) => html2canvas(
  //     element,
  //     {
  //       allowTaint: false,
  //       useCORS: true,
  //       height: element.scrollHeight + keepHeight,
  //       width: element.scrollWidth,
  //     }
  //   )

  //   // 1. 获取水印图、生成主canvas
  //   const [imageData, canvas] = await Promise.all([
  //     getMaskImageData(),
  //     drawMainCanvas(50),
  //   ])

  //   // 2. 绘制水印图到 主canvas
  //   // canvas
  //   //   .getContext('2d')
  //   //   .putImageData(imageData, 0, element.scrollHeight, 0, 0, element.scrollWidth, element.scrollHeight)

  //   // 3. 生成下载链接
  //   const img = new Image()
  //   img.style.opacity = 0
  //   img.src = canvas.toDataURL('image/png')
  //   img.setAttribute('crossOrigin', 'anonymous')
  //   document.body.appendChild(img)

  //   const a = document.createElement('a')
  //   const filename = title || String(Math.random()).slice(3, 8)
  //   a.href = img.src
  //   a.setAttribute('download', `${filename}.png`)
  //   a.click()
  // }
};

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

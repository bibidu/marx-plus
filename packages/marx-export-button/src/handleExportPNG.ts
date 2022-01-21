import html2canvas from "html2canvas";
import { createDownloadLabel } from "./createDownloadLabel";
import { uuid } from "./uuid";

export async function handleExportPNG() {
  marx.notification.show("正在生成图片, 请稍等！");

  const element = document.querySelector(marx.editor.containerSelector);

  const canvas = await drawMainCanvas(element, 50);

  const img = new Image();
  img.setAttribute("style", "opacity: 0;transform:translateX(1000px);");
  img.src = canvas.toDataURL("image/png");
  img.setAttribute("crossOrigin", "anonymous");
  document.body.appendChild(img);

  const name = `${uuid()}.png`;
  createDownloadLabel(name, img.src).click();

  marx.notification.hide();
}

function drawMainCanvas(element, keepHeight = 0) {
  const options = {
    allowTaint: false,
    useCORS: true,
    height: element.scrollHeight + keepHeight,
    width: element.scrollWidth,
  };
  return html2canvas(element, options);
}

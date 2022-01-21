export function createDownloadLabel(name, url) {
  const a = document.createElement("a");
  a.href = url;
  a.setAttribute("download", name);

  return {
    click: () => a.click()
  }
}
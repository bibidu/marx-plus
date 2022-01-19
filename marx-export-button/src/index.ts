const icon = "https://api.iconify.design/bytesize:export.svg";

export function activate(context) {
  console.log('[marx-export-button] activate!')
  const exportButton = marx.topbar.toolbar.register({
    icon,
  });
}

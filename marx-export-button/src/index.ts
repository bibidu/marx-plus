const icon = "https://api.iconify.design/bytesize:export.svg";

export function activate(context) {
  console.log('[marx-export-button] activate!')
  const exportButton = context.topbar.toolbar.register({
    icon,
  });
}

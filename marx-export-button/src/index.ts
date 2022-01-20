const icon = "https://api.iconify.design/bytesize:export.svg";

export function activate(context) {
  console.log('[marx-export-button] activate!')
  const selectors = [
    {
      id: 'export-html',
      text: '导出html'
    },
    {
      id: 'export-png',
      text: '导出图片'
    }
  ]
  const exportButton = marx.topbar.toolbar.registerSelectorButton({
    icon,
    selectors, 
  });
  exportButton.addEventListener('onClick', (selector) => {
    console.log('onClick ', selector)
  })
}

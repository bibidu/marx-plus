import { example } from './example'

const icon = 'https://api.iconify.design/icon-park:copy.svg'
export function activate(context) {
  console.log("[marx-inject-template-button] activate!");

  const injectTemplateButton = marx.topbar.toolbar.registerButton({
    icon,
  });

  injectTemplateButton.addEventListener('onClick', () => {
    marx.editor.copyText(example)

    marx.notification.show('文档模板已复制!')
    
    setTimeout(() => {
      marx.notification.hide()
    }, 1500)
  })
}
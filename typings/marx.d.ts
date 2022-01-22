interface ISelectorButtonOption {
  label: string;
  value: string;
}
interface IButton<T> {
  addEventListener: (type: string, callback: (selector?: T) => void) => void;
}
interface IToolBar {
  registerButton: (options: { icon: string }) => IButton<{ icon: string }>;
  registerSelectorButton: (options: {
    icon: string;
    selectors: ISelectorButtonOption[];
  }) => IButton<ISelectorButtonOption>;
}

interface ITopBar {
  toolbar: IToolBar;
}

interface INotification {
  show: (text: string) => void;
  hide: () => void;
}

interface IEditor {
  html: string;
  containerSelector: string;
  copyText: (text: string) => void;
  updateMarkdownTheme: (theme: string) => void;
}

interface IMarx {
  topbar: ITopBar;
  notification: INotification;
  editor: IEditor;
  utils: IUtils;
}

interface IUtils {
  sleep: (ms: number) => void;
}

declare const marx: IMarx;

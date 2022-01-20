interface ISelectorButtonOption {
  label: string;
  value: string;
}
interface IToolBar {
  registerSelectorButton: (options: {
    icon: string;
    selectors: ISelectorButtonOption[];
  }) => {
    addEventListener: (
      type: string,
      callback: (selector: ISelectorButtonOption) => void
    ) => void;
  };
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
}
interface IMarx {
  topbar: ITopBar;
  notification: INotification;
  editor: IEditor;
}

declare const marx: IMarx;

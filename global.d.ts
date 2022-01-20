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
}
interface IMarx {
  topbar: ITopBar;
  notification: INotification;
}

declare const marx: IMarx;

interface ISelectorButtonOption {
  id: string;
  text: string;
}
interface IToolBar {
  registerSelectorButton: (options: {
    icon: string;
    selectors: ISelectorButtonOption[];
  }) => {
    onClick: (ISelectorButtonOption) => void;
  };
}
interface ITopBar {
  toolbar: IToolBar;
}
interface IMarx {
  topbar: ITopBar;
}

declare const marx: IMarx;

const TestnetDomains = {
  "test.near.social": true,
  "127.0.0.1": true,
};

export const NetworkId =
  window.location.hostname in TestnetDomains ? "testnet" : "mainnet";
export const ContractId =
  NetworkId === "testnet" ? "v1.social08.testnet" : "social.near";
const TestnetWidgets = {
  image: "eugenethedream/widget/Image",
  default: "eugenethedream/widget/Welcome",
  viewSource: "eugenethedream/widget/WidgetSource",
  widgetMetadataEditor: "eugenethedream/widget/WidgetMetadataEditor",
  widgetMetadata: "eugenethedream/widget/WidgetMetadata",
  profileImage: "eugenethedream/widget/ProfileImage",
  profilePage: "eugenethedream/widget/Profile",
  profileName: "eugenethedream/widget/ProfileName",
  profileInlineBlock: "eugenethedream/widget/Profile",
  notificationButton: "eugenethedream/widget/NotificationButton",
};

const MainnetWidgets = {
  image: "mob.near/widget/Image",
  default: "vfdao.near/widget/DAO.Page",
  viewSource: "mob.near/widget/WidgetSource",
  widgetMetadataEditor: "mob.near/widget/WidgetMetadataEditor",
  widgetMetadata: "mob.near/widget/WidgetMetadata",
  profileImage: "mob.near/widget/ProfileImage",
  notificationButton: "vfdao.near/widget/NotificationButton",
  profilePage: "vfdao.near/widget/ProfilePage",
  profileName: "patrick.near/widget/ProfileName",
  editorComponentSearch: "mob.near/widget/Editor.ComponentSearch",
  profileInlineBlock: "mob.near/widget/Profile.InlineBlock",
  viewHistory: "bozon.near/widget/WidgetHistory",
  starButton: "mob.near/widget/N.StarButton",
};

export const Widgets =
  NetworkId === "testnet" ? TestnetWidgets : MainnetWidgets;

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

type ContentData = {
  isVideo: boolean;
  uri: string;
  w: number;
  h: number;
};

type ItemData = {
  name: string;
  parentName: string;
  parentId: string;
  mainContent: ContentData;
  secondaryContent?: ContentData[];
  numUnlocked: number;
  purchaseInfo: {
    static?: number;
    dynamic?: {
      maxPrice: number;
      minPrice: number;
      numNeededForMin: number;
      maxAvailable?: number;
    };
  };
};

type NodeData = {
  id: string;
  name: string;
  parentId: string;
  incoming: Record<string, string>;
  outgoing: Record<string, string>;
  minD: Record<string, number>;
  items: Record<string, ItemData>;
};

type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
  Answer: { answer: string };
  ItemInfo: { item: ItemData };
  Purchase: { item: ItemData };
  Map: undefined;
  NodeInfo: { node: NodeData };
  Collection: undefined;
  Settings: undefined;
  Tokens: undefined;
};

type LandingProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Landing"
>;

type HomeProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

type AnswerProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Answer"
>;

type ItemInfoProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "ItemInfo"
>;

type PurchaseProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Purchase"
>;

type MapProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Map"
>;

type NodeInfoProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "NodeInfo"
>;

type MineProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Collection"
>;

type SettingsProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Settings"
>;

type TokensProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Tokens"
>;

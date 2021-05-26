declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

// ================ CONTENT ===================

type TImage = {
  type: "image";
  id: string;
  name: string;
  uri: string;
  w: number;
  h: number;
};

type TVideo = {
  type: "video";
  id: string;
  name: string;
  posterUri: string;
  posterW: number;
  posterH: number;
  videoUri: string;
  videoW: number;
  videoH: number;
};

type TMap = {
  type: "map";
  id: string;
  name: string;
  lat: number;
  lon: number;
  viewDelta: number;
  description: string;
};

type TContent = TImage | TVideo | TMap;

// ================ MAP DATA ===================

type TConnection = {
  id: string;
  key: string;
  isSource: boolean;
  partnerId: string;
};

type TItem = {
  id: string;
  name: string;
  description: string;
  parentId: string;
  parentName: string;
  connections: Record<string, TConnection>;
  content: TContent[];
  link?: string;
};

type TLocation = {
  id: string;
  name: string;
  description: string;
  minD: Record<string, number>;
  items: Record<string, TItem>;
};

// ================ USER ===================

type TUserData = {
  id: string;
  name: string;
  birthday: number;
  lastFeedbackReward: number;
  reports: string[];
  items: Record<string, string[]>;
  tokens: number;
  saved: string[];
};

// ================ APP ===================

type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
  Answer: { answer: string };
  ItemInfo: { item: TITem };
  Share: { item: TITem };
  Map: undefined;
  LocationInfo: { location: TLocation };
  Collection: undefined;
  // Collection: import("@react-navigation/native").NavigatorScreenParams<CollectionTabParamList>;
  Settings: undefined;
  Tokens: undefined;
};

type CollectionTabParamList = {
  All: { curLocation: TLocation };
  Saved: { curLocation: TLocation };
};

type CollectionAllScreenNavigationProp = import("@react-navigation/native").CompositeNavigationProp<
  import("@react-navigation/bottom-tabs").BottomTabNavigationProp<
    CollectionTabParamList,
    "All"
  >,
  import("@react-navigation/stack").StackNavigationProp<RootStackParamList>
>;

type CollectionSavedScreenNavigationProp = import("@react-navigation/native").CompositeNavigationProp<
  import("@react-navigation/bottom-tabs").BottomTabNavigationProp<
    CollectionTabParamList,
    "Saved"
  >,
  import("@react-navigation/stack").StackNavigationProp<RootStackParamList>
>;

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

type ShareProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Share"
>;

type MapProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Map"
>;

type LocationInfoProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "LocationInfo"
>;

type CollectionProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Collection"
>;

type CollectionAllProps = import("@react-navigation/bottom-tabs").BottomTabScreenProps<
  CollectionTabParamList,
  "All"
>;

type CollectionSavedProps = import("@react-navigation/bottom-tabs").BottomTabScreenProps<
  CollectionTabParamList,
  "Saved"
>;

type SettingsProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Settings"
>;

type TokensProps = import("react-native-screens/native-stack").NativeStackScreenProps<
  RootStackParamList,
  "Tokens"
>;

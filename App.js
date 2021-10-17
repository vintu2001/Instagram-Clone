import React from "react";

import { Platform } from "react-native";

import SignedInStack from "./screens/navigation";

export default function App() {
  if (Platform.OS === "android") {
    // only android needs polyfill
    require("intl"); // import intl object
    require("intl/locale-data/jsonp/en-IN"); // load the required locale details
  }
  return <SignedInStack />;
}

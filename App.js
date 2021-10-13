import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { Platform } from "react-native";

export default function App() {
  if (Platform.OS === "android") {
    // only android needs polyfill
    require("intl"); // import intl object
    require("intl/locale-data/jsonp/en-IN"); // load the required locale details
  }
  return <HomeScreen />;
}

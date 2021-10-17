import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <AddNewPost />
    </SafeAreaView>
  );
};

export default NewPostScreen;

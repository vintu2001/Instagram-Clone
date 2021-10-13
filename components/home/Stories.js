import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={styles.username}>
              {story.user.length > 8
                ? story.user.slice(0, 8).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 15,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  username: {
    color: "white",
    textAlign: "center",
    marginTop: 5,
    // fontWeight: "700",
    letterSpacing: 0.5,
    fontSize: 15,
  },
});

export default Stories;

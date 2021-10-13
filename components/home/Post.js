import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "https://img.icons8.com/ios/50/ffffff/like.png",
    likedImageUrl: "https://img.icons8.com/color/48/ffffff/like--v3.png",
  },
  {
    name: "Comment",
    imageUrl: "https://img.icons8.com/ios/50/ffffff/topic.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/40/ffffff/external-paper-plane-social-media-vitaliy-gorbachev-lineal-vitaly-gorbachev.png",
  },
  {
    name: "Save",
    imageUrl: "https://img.icons8.com/ios/40/ffffff/bookmark-ribbon--v1.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: post.profile_picture }}
          style={styles.profile_picture}
        />
        <Text
          style={{
            color: "white",
            marginLeft: 5,
            fontWeight: "700",
            fontSize: 15,
          }}
        >
          {post.user}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: "bold",
            marginRight: 8,
          }}
        >
          ...
        </Text>
      </View>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ width: "100%", height: 380 }}>
      <Image
        source={{ uri: post.imageurl }}
        style={{ height: "100%", resizeMode: "cover" }}
      />
    </View>
  );
};

const PostFooter = ({ post }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.leftFooterIconsContainer}>
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[0].imageUrl}
        />

        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[1].imageUrl}
        />
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[2].imageUrl}
        />
      </View>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  );
};

const Icon = ({ imgStyle, imgUrl }) => {
  return (
    <TouchableOpacity>
      <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
  );
};

const Likes = ({ post }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 4 }}>
      <Text style={{ color: "white", fontWeight: "600" }}>
        {post.likes.toLocaleString("en")} likes
      </Text>
    </View>
  );
};

const Caption = ({ post }) => {
  return (
    <View style={{ marginTop: 4 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
          {post.user}
        </Text>
        <Text> {post.caption}</Text>
      </Text>
    </View>
  );
};

const CommentSection = ({ post }) => {
  return (
    <View style={{ marginTop: 3 }}>
      {!!post.comments.length && (
        <Text style={{ color: "gray" }}>
          View{post.comments.length > 1 ? " all " : ""}
          {post.comments.length + " "}
          {post.comments.length > 1 ? " comments" : " comment"}
        </Text>
      )}
    </View>
  );
};

const Comments = ({ post }) => {
  return (
    <>
      {post.comments.map((comment, index) => (
        <View key={index} style={{ flexDirection: "row", marginTop: 3 }}>
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "bold" }}>{comment.user}</Text>
            <Text> {comment.comment}</Text>
          </Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  profile_picture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 8,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 32,
    height: 32,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});

export default Post;

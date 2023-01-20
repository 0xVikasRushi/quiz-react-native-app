import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import React from "react";

const Results = () => {
  return (
    <View>
      <Text>Results</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/speech-text-concept-illustration_114360-4162.jpg?w=1380&t=st=1674221537~exp=1674222137~hmac=a8e3776332ee04f741575805a5eb79741e3572df7b5535ba894a66a67f0fc759",
          }}
          style={styles.banner}
        />
      </View>
      <TouchableOpacity>
        <Text>Home </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

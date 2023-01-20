import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz App</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
  container: {
    alignItems: "center",
    paddingBottom: 15,
    justifyContent: "center",
  },
});

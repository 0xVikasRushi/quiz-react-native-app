import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Question this is question jdbnsad jhdksa</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity>
          <Text>option 1</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>option 2</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>option 3</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>option 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity>
          <Text>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  buttons: {
    marginBottom: 16,
    paddingVertical: 12,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

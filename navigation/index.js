import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import React from "react";
import Quiz from "../screens/quiz";
import Results from "../screens/results";
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Results"
        component={Results}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;

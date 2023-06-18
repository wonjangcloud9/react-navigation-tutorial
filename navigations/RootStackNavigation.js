import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { ImageDetailScreen } from "../screen/ImageDetailScreen";

const Stack = createNativeStackNavigator();

export const RootStackNavigation = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
      <Stack.Screen name="ImageDetail" component={ImageDetailScreen} />
    </Stack.Navigator>
  );
};

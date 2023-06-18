import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ImageListScreen } from "../screen/ImageListScreen";
import { FavoriteImageListScreen } from "../screen/FavoriteImageListScreen";

const Tabs = createBottomTabNavigator();

export const BottomTabNavigation = (props) => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="ImageList" component={ImageListScreen} />
      <Tabs.Screen
        name="FavoriteImageList"
        component={FavoriteImageListScreen}
      />
    </Tabs.Navigator>
  );
};

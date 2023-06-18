import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ImageListScreen } from "../screen/ImageListScreen";
import { FavoriteImageListScreen } from "../screen/FavoriteImageListScreen";
import { TabIcon } from "../src/components/TabIcon";

const Tabs = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const getIconName = () => {
            if (route.name === "ImageList") {
              return "home";
            } else if (route.name === "FavoriteImageList") {
              return "star";
            }
          };

          const iconName = getIconName();

          return (
            <TabIcon
              iconName={iconName}
              visibleBadge={route.name === "FavoriteImageList"}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="ImageList" component={ImageListScreen} />
      <Tabs.Screen
        name="FavoriteImageList"
        component={FavoriteImageListScreen}
      />
    </Tabs.Navigator>
  );
};

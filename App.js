import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigation } from "./navigations/RootStackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      {/*  */}
      <RootStackNavigation />
    </NavigationContainer>
  );
}

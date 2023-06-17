import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { React, Component } from "react";
import ScreenC from "./ScreenC";

const Stack = createNativeStackNavigator();

export default class NestedStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ScreenC" component={ScreenC} />
      </Stack.Navigator>
    );
  }
}

import React from "react";
import { View, Text, Button } from "react-native";

export default class TabB extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>TabB</Text>

        <Button title="HelloB" />
      </View>
    );
  }
}

import React from "react";
import { View, Text, Button } from "react-native";

// export default () => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Screen B</Text>
//     </View>
//   );
// };

export default class ScreenB extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Screen B</Text>
        <Text>{this.props.route.params.value}</Text>
        <Button
          title="Go to Screen A"
          onPress={() => {
            this.props.navigation.navigate("ScreenA");
          }}
        />
      </View>
    );
  }
}

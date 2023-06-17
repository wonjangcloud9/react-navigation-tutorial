import React from "react";
import { View, Text, Button } from "react-native";

// export default () => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Screen A</Text>
//       <Button
//         title="Go to Screen B"
//         onPress={() => {
//           this.props.navigation.navigate("ScreenB");
//         }}
//       />
//     </View>
//   );
// };

export default class ScreenA extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Screen A</Text>
        <Button
          title="Go to Screen B"
          onPress={() => {
            this.props.navigation.navigate("ScreenB");
          }}
        />
      </View>
    );
  }
}

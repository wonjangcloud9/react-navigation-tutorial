import React from "react";
import { View } from "react-native";
import { Typograpy } from "./Typograpy";

export const Badge = (props) => {
  return (
    <View>
      {props.children}
      <View
        style={[
          {
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          },
          {
            position: "absolute",
            right: -5,
            top: -5,
          },
        ]}
      >
        <Typograpy fontSize={10} color="white" />
      </View>
    </View>
  );
};

import React from "react";
import { View, Text, FlatList } from "react-native";
import { Header } from "../src/components/header/Header";
import { HeaderGroup } from "../src/components/header/HeaderGroup";
import { HeaderTitle } from "../src/components/header/HeaderTitle";
import { IMAGE_LIST } from "../src/constants";
import { PhotoListItem } from "../src/components/PhotoListItem";

export const ImageListScreen = (props) => {
  return (
    <View
      style={{
        flx: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header>
        <HeaderGroup>
          <HeaderTitle title={"IMAGE LIST"} />
        </HeaderGroup>
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={IMAGE_LIST}
        renderItem={({ item }) => {
          console.log(item);
          return <PhotoListItem url={item} />;
        }}
      />
    </View>
  );
};

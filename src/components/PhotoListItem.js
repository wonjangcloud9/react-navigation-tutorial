import React, { useCallback } from "react";
import { useWindowDimensions } from "react-native";
import { Button } from "../components/Button";
import { RemoteImage } from "../components/RemoteImage";

export const PhotoListItem = (props) => {
  const { width } = useWindowDimensions();

  const onPressItem = useCallback(() => {}, []);

  return (
    <Button paddingHorizontal={20} paddingVertical={10} onPress={onPressItem}>
      <RemoteImage width={width - 40} height={width * 1.2} url={props.url} />
    </Button>
  );
};

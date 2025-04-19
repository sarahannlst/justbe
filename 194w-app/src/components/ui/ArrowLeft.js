import * as React from "react";
import Svg, { Line } from "react-native-svg";
import Theme from "@/src/theme/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const BUTTON_HEIGHT = 72.08;

export default function ArrowLeft() {
  return (
    <MaterialCommunityIcons
      size={BUTTON_HEIGHT * 0.5}
      name="arrow-left"
      color={Theme.colors.white}
    />
  );
}

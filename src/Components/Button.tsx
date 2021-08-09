import React from "react";
import { TouchableHighlight } from "react-native";

type ButtonProps = {
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onPress }) => (
  <TouchableHighlight underlayColor="transparent" onPress={onPress}>
    <>{children}</>
  </TouchableHighlight>
);

export default Button;

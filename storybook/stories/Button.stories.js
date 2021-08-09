import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { Button } from "../../src/Components";
import CenterView from "./CenterView";

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <Button onPress={action("clicked-text")}> Hello! </Button>
  ));

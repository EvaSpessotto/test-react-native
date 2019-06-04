import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";

const TabNavigator = createBottomTabNavigator({
  TabOne: TabOne,
  TabTwo: TabTwo
});

export default createAppContainer(TabNavigator);

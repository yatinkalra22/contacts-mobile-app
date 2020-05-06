import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import { View } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";
import PtpList from "./src/screens/PtpList";

const stackNavigator = createStackNavigator(
  {
    Login: Login,
    Dashboard: Dashboard,
    PtpList: PtpList,
  },
  {
    initialRouteName: "PtpList",
  }
);

const navigationDrawer = createDrawerNavigator(
  {
    Home: {
      screen: stackNavigator,
    },
    Dashboard: {
      screen: Dashboard,
    },
  },
  {
    drawerPosition: "left",
  }
);

let Navigation = createAppContainer(navigationDrawer);

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <PtpList />
      </View>
    </Provider>
  );
}

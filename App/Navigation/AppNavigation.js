import React, { Component} from "react";
import { createStackNavigator } from "react-navigation";
import Home from "../Containers/Screens/Home";
import Post from "../Containers/Screens/Post";
import { Provider } from 'react-redux'
import createStore from '../Redux'

const RootStackNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Post: { screen: Post }
  },
  {
    gesturesEnabled: false,
    headerMode: "none",
    initialRouteName: "Home",
    gesturesEnabled: true
  }
);

const store = createStore();

// const AppContainer = createAppContainer(RootStackNavigator);

// export default AppContainer;

export default class AppNavigation extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStackNavigator />
      </Provider>
    )
  }
}

// export default AppNavigation;
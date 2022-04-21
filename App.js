import React from "react"
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./screens/Home"
import DetailsScreen from "./screens/Star"

export default function App() {
  return <AppContainer />
}

const appStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Star: {
      screen: StarScreen,
      navigationOptions: {
        headerTitle: "",
        headerStyle: {
          backgroundColor: "#1A2D5F",
          borderWidth: 0
        }
      }
    }
  },
  {
    initialRouteName: "Home"
  }
)

const AppContainer = createAppContainer(appStackNavigator)

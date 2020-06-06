// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import "react-native-gesture-handler";

import * as React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./Pages/Home";
import Old from "./Pages/Old";
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DarkTheme as DarkPaper,
  Provider as PaperProvider,
} from "react-native-paper";
import { StatusBar } from "react-native";

const theme = {
  ...DarkPaper,
  roundness: 2,

  colors: {
    ...DarkPaper.colors,
    primary: "#b20710",
    accent: "#f1c40f",
  },
};

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        labelStyle: {
          textAlign: "center",
        },
        indicatorStyle: {
          borderBottomColor: theme.colors.primary,
          borderBottomWidth: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Opções",
        }}
      />
      <Tab.Screen
        name="Old"
        component={Old}
        options={{
          tabBarLabel: "Histórico",
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.surface} />
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          initialRouteName="TabStack"
          screenOptions={{
            headerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: theme.colors.primary,
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen
            name="TabStack"
            component={TabStack}
            options={{ title: "O que vamos ver?" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

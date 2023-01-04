import { StyleSheet, View, SafeAreaView, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScanBarcode from "./src/screens/ScanBarcode";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import { useState } from "react";

const Tab = createBottomTabNavigator();

export default function App() {
  const [flag, setFlag] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#273340" }}>
      <View style={{ flex: 1, backgroundColor: "#273340" }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarStyle: { backgroundColor: "#273340" },
              headerStyle: {
                backgroundColor: "#273340",
              },
              headerTitleStyle: { color: "#fff" },
              headerTitleAlign: "center",
              tabBarIcon: ({ focused, size }) => {
                if (route.name === "HOME") {
                  return (
                    <Ionicons
                      name="md-home-sharp"
                      size={size}
                      color={focused ? "red" : "#DFDFDF"}
                    />
                  );
                } else if (route.name === "SCAN BARCODE") {
                  return (
                    <Ionicons
                      name="camera"
                      size={size}
                      color={focused ? "red" : "#DFDFDF"}
                    />
                  );
                }
              },
              tabBarInactiveTintColor: "gray",
              tabBarActiveTintColor: "tomato",
            })}
          >
            <Tab.Screen name="HOME">
              {() => <Home flag={flag} setFlag={setFlag} />}
            </Tab.Screen>
            <Tab.Screen name="SCAN BARCODE">
              {() => <ScanBarcode flag={flag} setFlag={setFlag} />}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

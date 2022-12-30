import { StyleSheet, View, SafeAreaView, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScanBarcode from "./src/screens/ScanBarcode";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#222222" }}>
      <View style={{ flex: 1, backgroundColor: "#222222" }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarStyle: { backgroundColor: "#222222" },
              headerStyle: {
                backgroundColor: "#222222",
              },
              headerTitleStyle: { color: "#fff" },
              headerTitleAlign: "center",
              tabBarIcon: ({ focused, color, size }) => {
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
            <Tab.Screen name="HOME" component={Home} />
            <Tab.Screen name="SCAN BARCODE" component={ScanBarcode} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

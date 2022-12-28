import { StyleSheet, View, SafeAreaView, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScanBarcode from "./src/screens/ScanBarcode";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2B2828" }}>
      <View style={{ flex: 1, backgroundColor: "#2B2828" }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarStyle: { backgroundColor: "#2b2828" },
              headerStyle: {
                backgroundColor: "#2B2828",
              },
              headerTitleStyle: { color: "#fff" },
              headerTitleAlign: "center",
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === "Home") {
                  return (
                    <Ionicons
                      name="md-home-sharp"
                      size={size}
                      color={focused ? "red" : color}
                    />
                  );
                } else if (route.name === "Scan Barcode") {
                  return (
                    <Ionicons
                      name="camera"
                      size={size}
                      color={focused ? "red" : color}
                    />
                  );
                }
              },
              tabBarInactiveTintColor: "gray",
              tabBarActiveTintColor: "tomato",
            })}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Scan Barcode" component={ScanBarcode} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

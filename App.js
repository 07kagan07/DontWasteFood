import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScanBarcode from "./src/screens/ScanBarcode";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddItem from "./src/screens/AddItem";
import { Camera } from "expo-camera";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer style={styles.tabNavigator}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
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
          <Tab.Screen name="Home" component={AddItem} />
          <Tab.Screen name="Scan Barcode" component={ScanBarcode} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabNavigator: {
    backgroundColor: "#222222",
  },
});

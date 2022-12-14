import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import CameraExam from "./src/components/Camera";

export default function App() {
  const [camera, setCamera] = useState(false);
  return (
    <>
      <View style={styles.container}>
        {camera && <CameraExam />}
        <Button
          onPress={() => {
            setCamera(!camera);
          }}
          children={camera ? "Kamerayı Kapat" : "Kamerayı Aç"}
        />
        <StatusBar style="auto" />
      </View>
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
});

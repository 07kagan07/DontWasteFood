import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";
import CameraExam from "../components/Camera";
import { StatusBar } from "expo-status-bar";

const CameraScan = () => {
  //   const [camera, setCamera] = useState(false);

  return (
    <View style={styles.container}>
      <CameraExam />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "40%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CameraScan;

{
  /* <Button
  onPress={() => {
    setCamera(!camera);
  }}
  children={camera ? "Kamerayı Kapat" : "Kamerayı Aç"}
/> */
}

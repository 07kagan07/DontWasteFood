import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import CameraExam from "../components/Camera";
import { StatusBar } from "expo-status-bar";
import ProductDetail from "../components/ProductDetail";

const CameraScan = () => {
  const [scannedData, setScannedData] = useState([]);
  //   const [camera, setCamera] = useState(false);
  console.log(scannedData);
  return (
    <View style={styles.container}>
      <View style={styles.camera}>
        <CameraExam scannedData={scannedData} setScannedData={setScannedData} />
      </View>

      <View style={{ width: "100%" }}>
        {scannedData &&
          scannedData.map((data, index) => (
            <ProductDetail key={index} scannedData={data} />
          ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  camera: { width: "100%" },
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

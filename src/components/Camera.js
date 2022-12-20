import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import barcodeData from "../barkod.json";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function CameraExam({ scannedData, setScannedData }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    const barcode = barcodeData?.find((barcode) => barcode.BarcodeNo === data);

    // console.log("Product Detail=>", barcode);

    barcode
      ? setScannedData([...scannedData, barcode])
      : alert(`Ürün Bulunamadı!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.camera}
      />

      {scanned && (
        <Button
          style={styles.button}
          title={"Tap to Scan Again"}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", height: 200 },
  camera: { height: "100%", width: "100%" },
  button: { width: "100%", height: 20 },
});

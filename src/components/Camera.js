import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import barcodeData from "../barkod.json";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function CameraExam() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [inputValue, setInputValue] = useState();
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

    console.log("Product Detail=>", barcode);

    barcode
      ? alert(`Ürün adı: ${barcode.ProductName}`)
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

      {/* <View style={{ width: "100%", height: "10%" }}>
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    // justifyContent: "center",
    width: "100%",
  },
  camera: {
    height: "100%",
    width: "100%",
  },
  input: {
    zIndex: 1,
  },
});

import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import barcodeData from "../barkod.json";
export default function CameraExam() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [inputValue, setInputValue] = useState();

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

    console.log(barcode);

    barcode
      ? alert(`Ürün adı: ${barcode.ProductName}`)
      : alert(`Ürün Bulunamadı!`);
    //   : (event) => {
    //       event.preventDefault();
    //       <TextInput onChange={(e) => setInputValue(e.target.value)} />;
    //       barcodeData.push({
    //         BarcodeNo: data,
    //         ProductName: inputValue,
    //       });
    //     };
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
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  camera: {
    flex: 1,
  },
  input: {
    flex: 1,
    zIndex: 1,
  },
});

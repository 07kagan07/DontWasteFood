import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

export default function CameraExam({ scannedData, setScannedData }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const [barcodeData, setBarcodeData] = useState();

  const Stack = createNativeStackNavigator();

  const getData = async (data) => {
    const req = await axios
      .post(
        "https://data.mongodb-api.com/app/data-iiffl/endpoint/data/v1/action/findOne",
        {
          collection: "Barcode",
          database: "DontWaste",
          dataSource: "DontWaste",
          filter: { BarcodeNo: data },
        },
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "Accept-Encoding": "application/ejson",
            "api-key":
              "S3CE4uKgwIhv23UJrlBcxe7sLVBA2jVE8kZdH41MNkgQiwr6jBFu4T9reXPlT8mr",
          },
        }
      )
      .then((res) => {
        return res.data.document;
      })
      .catch(function (error) {
        console.log(error);
      });

    return req;
  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const barcodeData = await getData(data);
    barcodeData
      ? setScannedData([...scannedData, barcodeData])
      : alert("Ürün Bulunamadı");
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

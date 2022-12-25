import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import CameraExam from "../components/Camera";
import { StatusBar } from "expo-status-bar";
import ProductDetail from "../components/ProductDetail";
import { Ionicons } from "@expo/vector-icons";

const CameraScan = () => {
  const [scannedData, setScannedData] = useState([]);

  // scannedData && console.log(scannedData);

  const deleteItem = async (idx) => {
    const temp = [...scannedData];

    temp.splice(idx, 1);

    setScannedData(temp);
  };

  const addDate = (date, idx) => {
    console.log("data=>", date, "IDX=>", idx);
    // console.log("Scanned=>==>", scannedData[0]);
    // setScannedData(temp);
  };

  // console.log("scanned==>", scannedData);
  return (
    <View style={styles.container}>
      <View style={styles.camera}>
        <CameraExam scannedData={scannedData} setScannedData={setScannedData} />
      </View>

      <ScrollView style={styles.products}>
        <View>
          {scannedData &&
            scannedData.map((data, index) => (
              <ProductDetail
                key={index}
                idx={index}
                data={data}
                deleteItem={deleteItem}
                scannedData={scannedData}
                addDate={addDate}
              />
            ))}
        </View>
      </ScrollView>

      <View style={styles.buttons}>
        <Pressable style={styles.confirmBtn}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "700",
              fontSize: 20,
            }}
          >
            CONFIRM
          </Text>
        </Pressable>
        <Pressable onPress={() => {}}>
          <Ionicons
            name="md-add-circle"
            size={30}
            style={{ color: "#219653" }}
          />
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#2B2828",
  },
  camera: { flex: 1 },
  products: { flex: 1 },
  buttons: {
    padding: 5,
    margin: 20,
    flexDirection: "row",
    alignItems: "baseline",
  },
  confirmBtn: {
    backgroundColor: "#2F80ED",
    borderRadius: 10,
    flex: 1,
    padding: 5,
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

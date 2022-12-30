import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import CameraExam from "../components/Camera";
import { StatusBar } from "expo-status-bar";
import ProductDetail from "../components/ProductDetail";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CameraScan = () => {
  const [scannedData, setScannedData] = useState([]);
  const [text, onChangeText] = useState("Product Name");

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log("json==>", jsonValue);
      await AsyncStorage.setItem("datas", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const deleteItem = async (idx) => {
    const temp = [...scannedData];

    temp.splice(idx, 1);

    setScannedData(temp);
  };

  useEffect(() => {
    scannedData && console.log("Scanned DATA=>", scannedData);
  }, [scannedData]);

  const handleAddData = () => {
    const newData = { ProductName: "Product Name" };
    setScannedData([...scannedData, newData]);
  };

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
                onChangeText={onChangeText}
              />
            ))}
        </View>
      </ScrollView>

      <View style={styles.buttons}>
        <Pressable
          style={styles.confirmBtn}
          onPress={() => storeData(scannedData)}
        >
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
        <Pressable onPress={handleAddData}>
          <Ionicons
            name="md-add-circle"
            size={50}
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
  camera: { flex: 0.8 },
  products: {
    flex: 1.7,
  },
  buttons: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: 15,
    bottom: 5,
  },
  confirmBtn: {
    backgroundColor: "#2F80ED",
    borderRadius: 10,
    flex: 1,
    padding: 5,
    marginRight: 10,
  },
});

export default CameraScan;

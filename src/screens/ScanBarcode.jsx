import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import CameraExam from "../components/Camera";
import { StatusBar } from "expo-status-bar";
import ProductDetail from "../components/ProductDetail";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const ScanBarcode = ({ flag, setFlag }) => {
  const [scannedData, setScannedData] = useState([]);
  const [text, onChangeText] = useState("Product Name");

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("datas", jsonValue);
      setFlag(!flag);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("datas");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteItem = async (idx) => {
    const temp = [...scannedData];

    temp.splice(idx, 1);

    setScannedData(temp);
  };

  const handleAddData = () => {
    const newData = { productName: "Product Name" };
    setScannedData([...scannedData, newData]);
  };

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "İşlem Başarılı",
      visibilityTime: 1500,
      topOffset: 250,
    });
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
          disabled={scannedData.length === 0 ? true : false}
          style={styles.confirmBtn}
          onPress={async () => {
            const data = await getData();
            const newArray = data
              ? [...scannedData, ...data]
              : [...scannedData];
            newArray.sort(function (a, b) {
              return new Date(a.Date) - new Date(b.Date);
            });
            await storeData(newArray);
            showToast();
            setScannedData([]);
          }}
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
      <Toast />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#1e2732",
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

export default ScanBarcode;

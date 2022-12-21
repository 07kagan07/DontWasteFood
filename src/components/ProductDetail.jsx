<<<<<<< HEAD
import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import DatePicker from "./DatePicker";

const ProductDetail = ({ idx, data, deleteItem, scannedData }) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    data.date = date;

    console.log(scannedData);
  }, [date]);

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{data?.ProductName}</Text>
      <Text style={styles.text}>
        <Text style={styles.text}>
          <DatePicker date={date} setDate={setDate} />
        </Text>
      </Text>
      <Pressable
        style={styles.btn}
=======
import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import DatePicker from "react-native-date-picker";

const ProductDetail = ({ idx, scannedData, deleteItem }) => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{scannedData?.ProductName}</Text>
      <Text style={styles.text}>
        <DatePicker date={date} onDateChange={setDate} />
      </Text>
      <Button
>>>>>>> 438bc37 (datePicker)
        onPress={() => {
          deleteItem(idx);
        }}
      >
        <Text>X</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222222",
    height: 37,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
    margin: 5,
  },
  text: { color: "#d9d9d9" },
  productName: {
    height: 37,
    maxWidth: 100,
    color: "#fff",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#ff3737",
    padding: 5,
    borderRadius: 50,
  },
});

import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import DatePickerr from "./DatePicker";

const ProductDetail = ({ idx, data, deleteItem, scannedData, addDate }) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    addDate(date, idx);
    // console.log("Detail data=>", date, "Detail IDX=>", idx);
  }, [date]);
  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{data?.ProductName}</Text>
      <Text style={styles.text}>
        <Text style={styles.text}>
          <DatePickerr date={date} setDate={setDate} />
        </Text>
      </Text>
      <Pressable
        style={styles.btn}
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
    height: 45,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
    margin: 5,
  },
  text: {
    color: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
  productName: {
    height: 37,
    maxWidth: 100,
    color: "#fff",
    alignItems: "center",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#ff3737",
    padding: 5,
    borderRadius: 50,
  },
});

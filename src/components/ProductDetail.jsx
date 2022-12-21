import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React, { useState } from "react";

const ProductDetail = ({ idx, data, deleteItem }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{data?.ProductName}</Text>
      <Text style={styles.text}>
        <Text style={styles.text}>
          DD/MM/YYYY
          {/* <DatePicker style={styles.text} date={date} onDateChange={setDate} /> */}
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

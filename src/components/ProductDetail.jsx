import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import DatePickerr from "./DatePicker";

const ProductDetail = ({ idx, data, deleteItem }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [newData, setNewData] = useState(data?.ProductName);

  return (
    <View style={styles.container}>
      <TextInput
        selectTextOnFocus
        style={styles.productName}
        placeholder={showPlaceholder ? data?.ProductName : ""}
        placeholderTextColor="grey"
        onChangeText={setNewData}
        value={newData === "Product Name" ? "" : newData}
        onFocus={() => setShowPlaceholder(false)}
        onBlur={() => setShowPlaceholder(true)}
      />
      <Text style={styles.date}>
        <DatePickerr data={data} />
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
  date: {
    color: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
  productName: {
    width: 140,
    textAlign: "center",
    color: "#fff",
  },
  btn: {
    justifyContent: "center",
    backgroundColor: "#ff3737",
    height: 26,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 50,
  },
});

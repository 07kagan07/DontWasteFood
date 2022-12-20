import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const ProductDetail = ({ idx, scannedData, deleteItem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{scannedData?.ProductName}</Text>
      <Text style={styles.text}>dd/mm/yyyy</Text>
      <Button
        onPress={() => {
          deleteItem(idx);
        }}
        title="X"
        color={"white"}
      />
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
  text: { color: "#fff" },
  productName: { maxWidth: 100, color: "#fff", textAlign: "center" },
});

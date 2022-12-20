import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ProductDetail = ({ scannedData }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#000" }}>{scannedData?.ProductName}</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {},
  tabNavigator: {
    backgroundColor: "#222222",
  },
});

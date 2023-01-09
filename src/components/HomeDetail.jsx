import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const HomeDetail = ({ idx, data, deleteItem }) => {
  const date1 = new Date();
  const date2 = new Date(data?.Date);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 3) {
    styles.productName = {
      width: 140,
      color: "#FF6A6A",
    };
  } else if (diffDays < 5) {
    styles.productName = {
      width: 140,
      color: "#FFB287",
    };
  } else if (diffDays < 10) {
    styles.productName = {
      width: 140,
      color: "#FCFF7D",
    };
  } else {
    styles.productName = {
      width: 140,
      color: "#A6FF87",
    };
  }

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>
        {data?.productName?.length > 15
          ? data?.productName?.substring(0, 15).concat("...")
          : data?.productName}
      </Text>
      <Text style={styles.date}>
        {diffDays} {diffDays === 1 ? "Day" : "Days"} Left
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

export default HomeDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#273340",
    height: 45,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
    margin: 5,
  },

  date: {
    color: "#fff",
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

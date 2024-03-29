import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import HomeDetail from "./HomeDetail";
import { Ionicons } from "@expo/vector-icons";
import Toast, { ErrorToast } from "react-native-toast-message";

const Category = ({ datas, label, deleteItem }) => {
  const [show, setShow] = useState(false);

  console.log(datas);

  return (
    <View>
      <Pressable onPress={() => setShow(!show)} style={styles.header}>
        <Text style={{ fontSize: 20, justifyContent: "center" }}>{label}</Text>
        <Ionicons
          name={`md-arrow-${show ? "down" : "forward"}-circle-outline`}
          size={24}
          color="black"
        />
      </Pressable>
      {show && (
        <ScrollView>
          {datas.length === 0 ? (
            <View style={{ height: "100%" }}>
              <ErrorToast
                style={{
                  backgroundColor: "#22728c",
                  justifyContent: "center",
                  borderLeftColor: "tomato",
                  width: "100%",
                  marginTop: 10,
                }}
                text1={`Add ${label} Product from Scan Barcode`}
                text1Style={{
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                }}
              />
            </View>
          ) : (
            ""
          )}
          {datas?.map((data, index) => (
            <HomeDetail
              key={index}
              idx={index}
              data={data}
              deleteItem={deleteItem}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "skyblue",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});

export default Category;

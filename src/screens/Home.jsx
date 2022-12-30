import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddItem = () => {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("datas");
      return jsonValue != null ? setDatas(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  console.log(datas);
  return (
    <View style={{ flex: 1, backgroundColor: "#2B2828" }}>
      <Pressable onPress={() => getData()}>
        <Text
          style={{
            textAlign: "center",
            height: 50,
            color: "red",
            backgroundColor: "white",
          }}
        >
          Dataları Getir
        </Text>
      </Pressable>
      {
        datas?.map((data) => console.log(data))
        // datas?.map((data) => (
        //   <Text style={{ color: "white" }}>{data.ProductName}</Text>
        // ))
      }
    </View>
  );
};

export default AddItem;

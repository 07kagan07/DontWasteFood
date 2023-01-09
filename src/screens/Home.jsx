import { Pressable, View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Category from "../components/Category";

const Home = ({ flag, setFlag }) => {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("datas");
      return jsonValue != null ? setDatas(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, [flag]);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("datas", jsonValue);
      setFlag(!flag);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteItem = async (idx) => {
    const temp = [...datas];

    temp.splice(idx, 1);

    setDatas(temp);
    storeData(temp);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#1e2732" }}>
      <ScrollView>
        <Category
          datas={datas.filter((x) => x.type === "Medicane")}
          deleteItem={deleteItem}
          label="Medicine"
        />
        <Category
          datas={datas.filter((x) => x.type !== "Medicane")}
          deleteItem={deleteItem}
          label="General"
        />
      </ScrollView>
    </View>
  );
};

export default Home;

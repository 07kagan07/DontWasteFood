import { View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductDetail from "../components/ProductDetail";

const Home = ({ flag }) => {
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
    console.log(flag);
    getData();
  }, [flag]);

  return (
    <View style={{ flex: 1, backgroundColor: "#1e2732" }}>
      {datas?.map((data, index) => {
        <ProductDetail idx={index} data={data} />;
      })}
    </View>
  );
};

export default Home;

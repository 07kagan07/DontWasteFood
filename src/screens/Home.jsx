import { Pressable, View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeDetail from "../components/HomeDetail";
import Toast, { ErrorToast } from "react-native-toast-message";

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
    console.log(datas);
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
              text1="Add Product from Scan Barcode"
              text1Style={{
                fontSize: 17,
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
    </View>
  );
};

export default Home;

import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const DatePicker = ({ date, setDate }) => {
  const [show, setShow] = useState(Platform.OS === "android" ? false : true);

  const onChange = (event, selectedDate) => {
    console.log("Event=>", event);
    const currentDate = selectedDate;
    setDate(currentDate);
    setShow(Platform.OS === "android" ? !show : true);
  };

  const openClose = () => {
    setShow(!show);
  };

  return (
    <View>
      {Platform.OS === "android" ? (
        <TouchableOpacity style={styles.button} onPress={openClose}>
          <Text style={{ color: "white" }}>{date.toLocaleString()}</Text>
          {console.log("Date=>", date)}
        </TouchableOpacity>
      ) : (
        ""
      )}

      {show && (
        <DateTimePicker
          style={{ backgroundColor: "#fff" }}
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default DatePicker;

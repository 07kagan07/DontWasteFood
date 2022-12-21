import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { StyleSheet, View } from "react-native";

const DatePicker = ({ date, setDate }) => {
  const onChange = (event, selectedDate) => {
    // console.log(selectedDate);
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <View>
      <DateTimePicker
        style={{ backgroundColor: "#fff" }}
        testID="dateTimePicker"
        value={date}
        mode={"date"}
        onChange={onChange}
        minimumDate={new Date()}
      />
    </View>
  );
};

export default DatePicker;

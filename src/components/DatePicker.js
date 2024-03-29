import React, { useEffect, useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Pressable, Text, Platform } from "react-native";

const DatePicker = ({ data }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(Platform.OS === "android" ? false : true);

  useEffect(() => {
    data.Date = date;
  }, [date]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;

    setDate(currentDate);
    setShow(Platform.OS === "android" ? false : true);
  };

  return (
    <Pressable onPress={() => setShow(true)}>
      {Platform.OS === "android" ? (
        <Text style={{ color: "white" }}>{date.toLocaleString()}</Text>
      ) : null}
      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          onChange={onChange}
          minimumDate={new Date()}
          themeVariant="dark"
          locale="tr-TR"
        />
      )}
    </Pressable>
  );
};

export default DatePicker;

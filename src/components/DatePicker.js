import { View, Text, Button, Pressable } from "react-native";
import React, { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    console.log(selectedDate);

    setDate(currentDate);
  };

  return (
    <RNDateTimePicker
      testID="dateTimePicker"
      value={date}
      mode="date"
      onChange={onChange}
      minimumDate={new Date()}
      themeVariant="dark"
      locale="tr-TR"
    />
  );
};

export default DatePicker;

import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

const SearchBar = (props) => {
  const [isFocused, setisFocused] = useState(false);

  return (
    <View style={styles.backgroundStyle}>
      <Octicons name="search" color="black" style={styles.iconStyle} />
      <TextInput
        style={
          (styles.inputStyle,
          isFocused && { borderColor: "darkgrey", borderWidth: 1, flex: 1 })
        }
        onBlur={() => setisFocused(false)}
        onFocus={() => setisFocused(true)}
        value={props.term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={props.onInputHandler}
        onEndEditing={props.onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "lightgrey",
    height: 50,
    marginHorizontal: 15,
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 10,
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
    alignSelf: "center",
  },
  inputStyle: {
    borderColor: "grey",
    borderWidth: 1,
    flex: 1,
    fontSize: 20,
  },
});

export default SearchBar;

import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Image,
} from "react-native";

const ResultsDetail = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <Text style={styles.name}>{props.name}</Text>
      <View>
        <Text style={styles.details}>
          {props.rating} Stars, {props.reviews} Reviews
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    borderColor: "grey",
    borderWidth: 1,
  },
  name: {
    fontWeight: "bold",
  },
  details: {
    fontStyle: "italic",
    color: "grey",
  },
});

export default ResultsDetail;

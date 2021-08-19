import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Image,
} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setresult] = useState(null);

  const id = navigation.getParam("id");
  console.log(id);

  const getResultHandler = async (id) => {
    const response = await yelp.get(`/${id}`);

    setresult(response.data);
  };

  useEffect(() => {
    getResultHandler(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View style={{ flex: 1, margin: 15 }}>
      <Text style={styles.text}>{result.name}...</Text>
      <Text>{result.review_count} Reviews</Text>
      <Text>Contact us {result.phone}</Text>
      <FlatList
        data={result.location}
        keyExtractor={(item) => item}
        renderItem={(item) => {
          return (
            <View>
              <Text>{item.city} city...</Text>
            </View>
          );
        }}
      />
      <FlatList
        data={result.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    fontStyle: "italic",
  },
});

export default ResultsShowScreen;

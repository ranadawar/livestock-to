import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CategoryBtn = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryBtn;

const styles = StyleSheet.create({});

import React, { useState, useRef } from "react";
import { TouchableOpacity, StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Switch = ({ onChange, active }) => {
  const [isActive, setIsActive] = useState(active);
  const translateX = useRef(new Animated.Value(isActive ? 1 : 0)).current;

  const toggleSwitch = () => {
    setIsActive(!isActive);
    onChange(!isActive);

    Animated.timing(translateX, {
      toValue: isActive ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const backgroundColors = isActive
    ? ["#007AFF", "#00D4FF"] // Gradient colors when active
    : ["#00D4FF", "#007AFF"]; // Gradient colors when inactive

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleSwitch}
      style={styles.container}
    >
      <LinearGradient
        colors={backgroundColors}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Animated.View
          style={[
            styles.head,
            {
              transform: [
                {
                  translateX: translateX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 21], // Adjust this value based on your switch design
                  }),
                },
              ],
            },
          ]}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50, // Adjust as needed
    height: 28, // Adjust as needed
    borderRadius: 14,
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  head: {
    width: 22, // Adjust as needed
    height: 22, // Adjust as needed
    borderRadius: 11,
    backgroundColor: "white",
    margin: 3,
  },
});

export default Switch;

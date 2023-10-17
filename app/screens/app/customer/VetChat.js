import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import AppHeader from "../../../components/AppHeader";
import { COLORS } from "../../../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const dummyMessages = [
  {
    id: 1,
    message: "Hello",
    isMine: true,
  },
  {
    id: 2,
    message: "Hi",
    isMine: false,
  },
  {
    id: 3,
    message: "How are you?",
    isMine: true,
  },
  {
    id: 4,
    message: "I am fine",
    isMine: false,
  },
  {
    id: 5,
    message: "What about you?",
    isMine: false,
  },
  {
    id: 6,
    message: "I am good",
    isMine: true,
  },
  {
    id: 7,
    message: "Can you help me?",
    isMine: true,
  },
];

const DirectMessageScreen = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const [messages, setMessages] = React.useState(dummyMessages);

  const handleSendMessage = () => {
    if (text === "") return;
    const newMessage = {
      id: messages.length + 1,
      message: text,
      isMine: true,
    };
    setMessages([...messages, newMessage]);
    setText("");
  };

  return (
    <AppScreen>
      <AppHeader isGoBack onPress={() => navigation.goBack()} />
      <View style={styles.messagesContainer}>
        {/* if messages are mine it should be on right side otherwise on left side */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={item.isMine ? styles.mine : styles.notMine}>
              <Text style={item.isMine ? styles.mineText : styles.nonMineText}>
                {item.message}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={styles.sending}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <MaterialCommunityIcons
          name="send-circle"
          color={COLORS.primary}
          size={40}
          onPress={() => handleSendMessage()}
        />
      </View>
    </AppScreen>
  );
};

export default DirectMessageScreen;

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
  },
  mine: {
    backgroundColor: COLORS.primary,
    alignSelf: "flex-end",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  notMine: {
    backgroundColor: COLORS.white,
    alignSelf: "flex-start",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  sending: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderTopWidth: 1,
  },
  mineText: {
    color: COLORS.white,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    padding: 15,
    borderColor: COLORS.border,
  },
  nonMineText: {},
});

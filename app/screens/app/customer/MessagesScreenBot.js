import React from "react"
import { View } from "react-native";
import WebView from "react-native-webview";

const MessagesScreenBot = () => {
  return (
    <WebView
      source={{ uri: 'https://tawk.to/chat/6565aadd1db16644c5556aaa/1hgai6ska' }}
      style={{ flex: 1 }}
    />
  );

}

export default MessagesScreenBot
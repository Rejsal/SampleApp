import { Alert } from "react-native";

export const showAlert = (msg) => {
  Alert.alert("", msg, [{ text: "OK", onPress: () => {} }], {
    cancelable: false,
  });
};

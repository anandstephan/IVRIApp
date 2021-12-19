import { ToastAndroid } from "react-native";
export function toast(message) {
  
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  }
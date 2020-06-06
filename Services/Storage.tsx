import { AsyncStorage } from "react-native";

export default {
  getItem(key: string) {
    return AsyncStorage.getItem(key).then((val) => val && JSON.parse(val));
  },
  setItem(key: string, value: any) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  },
};

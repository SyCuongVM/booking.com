import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key, value) => {
  await AsyncStorage.setItem(key, value);
}

const getData = async (key) => {
  return await AsyncStorage.getItem(key);
}

const removeData = async (key) => {
  await AsyncStorage.removeItem(key);
}

export {
  storeData,
  getData,
  removeData
}
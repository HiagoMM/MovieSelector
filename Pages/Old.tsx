import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import ItemList, { ItemListInterface } from "../components/ItemList";
import Storage from "../Services/Storage";

// import { Container } from './styles';

const Old: React.FC = () => {
  const [items, setItems] = useState<ItemListInterface[]>([]);
  useEffect(() => {
    Storage.getItem("history").then((items) => setItems(items || []));
  });

  const storeItems = (items: ItemListInterface[]) => {
    Storage.setItem("history", items);
  };
  const handleDelete = (ditem: ItemListInterface) => {
    storeItems(items.filter((item) => item?.name !== ditem?.name));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.items}>
        <ScrollView>
          {items.map((item, index) => (
            <ItemList key={index} {...item} handleDelete={handleDelete} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Old;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    height: "100%",
  },
  items: {
    width: "90%",
    height: "100%",
  },
});

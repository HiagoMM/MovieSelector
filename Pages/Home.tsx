import React, { useState, useEffect, useRef } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ItemList, { ItemListInterface } from "./ItemList";
import { View, StyleSheet, SafeAreaView, Alert } from "react-native";
import Storage from "../Services/Storage";
import { Audio } from "expo-av";
import { Card, TextInput, Avatar, useTheme } from "react-native-paper";
import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";
import getImages from "../Services/ImagesService";

// import { Container } from './styles';
const source = require("../assets/sounds/watchtime.mp3");

const ValueComp = (props: any) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Avatar.Text
        size={40}
        label={props.value}
        style={{
          backgroundColor:
            props.selected === props.value ? theme.colors.primary : "grey",
        }}
      />
    </TouchableOpacity>
  );
};

const Home: React.FC = () => {
  const theme = useTheme();
  const [items, setItems] = useState<ItemListInterface[]>([]);
  const [input, setInput] = useState("");
  const [value, setValue] = useState(1);
  useEffect(() => {
    Storage.getItem("items").then((items) => setItems(items || []));
  });

  const storeItems = (items: ItemListInterface[]) => {
    Storage.setItem("items", items);
  };

  const handleSave = (item: ItemListInterface) => {
    if (item.name) {
      items.push(item);
      Storage.setItem("items", items);
    }
    console.log(getImages(item.name));
  };
  const handleDelete = (ditem: ItemListInterface) => {
    storeItems(items.filter((item) => item.name !== ditem.name));
  };

  const handleWatch = async () => {
    const aux: ItemListInterface[] = [];
    if (items.length) {
      items.map((item) => {
        for (let index = 0; index < item.value; index++) {
          aux.push(item);
        }
      });
      const selected = aux[Math.floor(Math.random() * aux.length)];
      storeItems(items.filter((item) => item?.name !== selected?.name));
      Storage.getItem("history").then((hitems) => {
        if (!hitems) hitems = [];
        hitems.push(selected);
        Storage.setItem("history", hitems);
      });
      const soundObject = new Audio.Sound();
      try {
        await Audio.requestPermissionsAsync();
        await Audio.getPermissionsAsync();
        await soundObject.loadAsync(source).then(() => console.log("Load"));

        await soundObject.playAsync();
      } catch (error) {}
      Alert.alert(selected.name, JSON.stringify(aux));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <LottieView
        style={{
          width: 500,
          height: 500,
          backgroundColor: "#ffffff00",
          position: "absolute",
        }}
        autoPlay
        loop
        source={require("../assets/fireworks.json")}
      /> */}
      <Card style={styles.inputCard}>
        <TextInput
          style={styles.input}
          label="Digite o nome"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <Card.Content style={styles.valuesContainer}>
          <Card.Content style={styles.itemValue}>
            <ValueComp value={1} selected={value} onPress={() => setValue(1)} />
            <ValueComp value={2} selected={value} onPress={() => setValue(2)} />
            <ValueComp value={3} selected={value} onPress={() => setValue(3)} />
          </Card.Content>
          <Card.Content style={styles.buttonContainer}>
            <Button
              icon="plus-circle"
              mode="contained"
              style={{ width: "100%" }}
              onPress={() => handleSave({ name: input, value })}
            >
              Add
            </Button>
          </Card.Content>
        </Card.Content>
      </Card>
      <View style={styles.items}>
        <ScrollView>
          {items.map((item, index) => (
            <ItemList handleDelete={handleDelete} key={index} {...item} />
          ))}
        </ScrollView>
      </View>
      <Button
        mode="outlined"
        style={{ width: "100%", position: "absolute", bottom: 15 }}
        contentStyle={[
          styles.button,
          {
            borderTopColor: theme.colors.primary,
            backgroundColor: theme.colors.background,
          },
        ]}
        onPress={() => handleWatch()}
      >
        Hora de assistir
      </Button>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
  },
  button: {
    width: "106%",
    height: 60,
    borderTopWidth: 2,
  },
  items: {
    width: "90%",
    height: "63%",
  },
  inputCard: {
    width: "90%",
    marginBottom: 20,
    padding: 5,
    borderRadius: 10,
  },
  itemValue: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    width: "60%",
    height: 60,
  },
  input: {},
  valuesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    width: "40%",
    height: 60,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

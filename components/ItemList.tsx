import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  ImageBackground,
} from "react-native";
// import { Container } from './styles';
import { Avatar, Card, Badge } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";

export interface ItemListInterface {
  name: string;
  img?: string;
  value: number;
  handleDelete?(item: ItemListInterface): any;
}

const ItemList: React.FC<ItemListInterface> = ({
  name,
  value,
  img,
  handleDelete,
}) => {
  const theme = useTheme();

  const LeftContent = (props: any) =>
    handleDelete && (
      <TouchableOpacity onPress={() => handleDelete({ name, value })}>
        <Avatar.Icon {...props} icon="delete" />
      </TouchableOpacity>
    );
  const RigthContent = (props: any) => (
    <View>
      <Avatar.Text label={value?.toString()} size={40}></Avatar.Text>
    </View>
  );
  return name ? (
    <ImageBackground source={{ uri: img }} style={styles.container}>
      <Card.Title
        title={<Text style={{ textTransform: "capitalize" }}>{name}</Text>}
        left={LeftContent}
        right={RigthContent}
        style={{ backgroundColor: "#000000b5" }}
      />
    </ImageBackground>
  ) : (
    <></>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    resizeMode: "stretch",
    borderRadius: 20,
  },
});

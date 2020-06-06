import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
// import { Container } from './styles';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
} from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface ItemListInterface {
  name: string;
  value: number;
  handleDelete?(item: ItemListInterface): any;
}

const ItemList: React.FC<ItemListInterface> = ({
  name,
  value,
  handleDelete,
}) => {
  const LeftContent = (props: any) =>
    handleDelete && (
      <TouchableOpacity onPress={() => handleDelete({ name, value })}>
        <Avatar.Icon {...props} icon="delete" />
      </TouchableOpacity>
    );
  const RigthContent = (props: any) => (
    <Avatar.Text
      size={35}
      label={value.toString()}
      style={{ marginRight: 20 }}
    />
  );

  return name ? (
    <Card style={styles.container}>
      <Card.Title title={name} left={LeftContent} right={RigthContent} />
    </Card>
  ) : (
    <></>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 10,
  },
});

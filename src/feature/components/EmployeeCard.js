import React, { memo } from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const EmployeeCard = (props) => {
  const { item = {} } = props;
  return (
    <Card
      style={styles.container}
      onPress={() => {
        props.onClickCard(item);
      }}
    >
      <Text style={styles.heading}>{item.name ? item.name : ""}</Text>
      <Text style={styles.content}>{item.email ? item.email : ""}</Text>
    </Card>
  );
};

export default memo(EmployeeCard);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 16,
    borderRadius: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 2,
  },
  content: {
    fontSize: 14,
    fontWeight: "300",
  },
});

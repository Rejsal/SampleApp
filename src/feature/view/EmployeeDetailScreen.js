import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { backIcon } from "../../../assets";

function EmployeeDetailScreen({ navigation, route }) {
  const employee = route?.params?.employee;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.subContainer}>
        <View style={styles.titleView}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image style={styles.iconStyle} source={backIcon} />
          </TouchableOpacity>
          <Text style={styles.heading}>{employee.name ?? ""}</Text>
        </View>
        <View style={{ marginTop: 25 }}>
          {employee.email ? (
            <Text style={styles.contentTitle}>
              Email: <Text style={styles.content}>{employee.email ?? ""}</Text>
            </Text>
          ) : null}
          {employee.username ? (
            <Text style={styles.contentTitle}>
              Username:{" "}
              <Text style={styles.content}>{employee.username ?? ""}</Text>
            </Text>
          ) : null}
          {employee.phone ? (
            <Text style={styles.contentTitle}>
              Phone: <Text style={styles.content}>{employee.phone ?? ""}</Text>
            </Text>
          ) : null}
          {employee.website ? (
            <Text style={styles.contentTitle}>
              Website:{" "}
              <Text style={styles.content}>{employee.website ?? ""}</Text>
            </Text>
          ) : null}
          {employee.address ? (
            <Text style={styles.contentTitle}>
              Address:{" "}
              <Text style={styles.content}>{`${
                employee.address?.street ?? ""
              }, ${employee.address?.city ?? ""}`}</Text>
            </Text>
          ) : null}
          {employee.company ? (
            <Text style={styles.contentTitle}>
              Company Details:{" "}
              <Text style={styles.content}>{`${employee.company?.name ?? ""}, ${
                employee.company?.bs ?? ""
              }`}</Text>
            </Text>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  titleView: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  iconStyle: {
    height: 26,
    width: 26,
    resizeMode: "contain",
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#990000",
    fontSize: 27,
    fontWeight: "bold",
  },
  contentTitle: {
    color: "grey",
    fontSize: 16,
    marginTop: 10,
  },
  content: {
    color: "#000000",
    fontSize: 16,
  },
});

export default EmployeeDetailScreen;

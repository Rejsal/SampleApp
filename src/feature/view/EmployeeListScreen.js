import React, { useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import EmployeeCard from "../components/EmployeeCard";

function EmployeeListScreen({ navigation }) {
  const employeeModel = useSelector((state) => state.employee);
  const { employee: employeeDispatch } = useDispatch();

  const { getEmployeeList } = employeeDispatch;

  useEffect(() => {
    getEmployeeList();
  }, [getEmployeeList]);

  const _renderHeader = () => {
    return <View style={styles.listHeader} />;
  };

  const { loading = false, employees = [] } = employeeModel;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Employees</Text>
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={"large"} />
          </View>
        ) : employees.length > 0 ? (
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => getEmployeeList()}
              />
            }
            showsVerticalScrollIndicator={false}
            data={employees}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={_renderHeader}
            renderItem={({ item }) => (
              <EmployeeCard
                item={item}
                onClickCard={async (data) => {
                  navigation.navigate("EmployeeDetails", { employee: data });
                }}
              />
            )}
          />
        ) : (
          <View style={styles.loaderContainer}>
            <Text>No data to display</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    padding: 16,
    flex: 1,
    backgroundColor: "#fff",
  },
  listHeader: {
    height: 16,
  },
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#990000",
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
});

export default EmployeeListScreen;

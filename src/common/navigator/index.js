import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeListScreen from "../../feature/view/EmployeeListScreen";
import EmployeeDetailScreen from "../../feature/view/EmployeeDetailScreen";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <>
        <Stack.Screen name="EmployeeList" component={EmployeeListScreen} />
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetailScreen} />
      </>
    </Stack.Navigator>
  );
};

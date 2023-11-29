import { api, catchHandler } from "../../network/axios";
import { employees } from "../../network/constants";

export async function getEmployees() {
  /// get employee list from API
  return (await api())
    .get(employees)
    .then((res) => res.data)
    .catch(catchHandler);
}

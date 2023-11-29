import { showAlert } from "../../utils";
import { getEmployees } from "../services";

export default {
  state: {
    loading: false,
    error: null,
    employees: [],
  },

  reducers: {
    //on request
    onRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },

    //on emplyee api success
    onGetEmployees(state, data) {
      return {
        ...state,
        loading: false,
        employees: data || [],
      };
    },

    //on error
    onError(state, error) {
      if (error) showAlert(error);
      return {
        ...state,
        loading: false,
        error: error,
      };
    },
  },

  effects: {
    async getEmployeeList() {
      this.onRequest();
      try {
        const res = await getEmployees();
        this.onGetEmployees(res);
      } catch (e) {
        this.onError(e && e.message ? e.message : null);
      }
    },
  },
};

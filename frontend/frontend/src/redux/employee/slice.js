import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  employees: [],
  employee: {},
};
export const EmployeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { reset } = EmployeeSlice.actions;

export default EmployeeSlice.reducer;

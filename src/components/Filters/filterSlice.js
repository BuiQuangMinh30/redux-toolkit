// const initState = {
//   search: "",
//   status: "ALL",
//   priority: [],
// };
// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//       case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload
//       };

//       case "filters/prioriryFilterChange":
//         return {
//           ...state,
//           priority: action.payload
//         };
//     default:
//       return state;
//   }
// };

// export default filterReducer;



import { createSlice} from '@reduxjs/toolkit'

export default createSlice({
  name: 'filters',
  initialState: {
    search: "",
    status: "All",
    priority:[],
  },
  reducers: {
    searchFilterChange: (state,action) => {
      //multation nhinf gion nhuwng thuc te la in-multation ||IMMER
      state.search = action.payload
    },
    statusFilterChange: (state,action) => {
      state.status = action.payload
    },
    prioriryFilterChange: (state,action) => {
      state.priority = action.payload
    }
  }
})
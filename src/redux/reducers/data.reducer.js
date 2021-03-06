const initState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  address2: "",
  city: "",
  state: "",
  zipCode: "",
  profSummary: "",
  webLinks: "",
  profpic: ""
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_DATA":
      const newData = {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        address2: action.payload.address2,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
        profSummary: action.payload.profSummary,
        webLinks: action.payload.webLinks,
        webLinks2: action.payload.webLinks2,
        profpic: action.payload.profpic,
      };
      return newData;
    default:
      return state;
  }
};

export default dataReducer;

import { GET_PTP_LIST } from "../actions/Types";

const initalState = {
  pip_list: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_PTP_LIST:
      return {
        ...state,
        pip_list: action.payload,
      };

    default:
      return state;
  }
}

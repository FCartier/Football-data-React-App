import { RECEIVE_API_DATA } from "../actions";
import { dataset } from "../dataset/data";

const initialState = dataset;

export default (state = initialState, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};

import * as actionType from "../actions/actionTypes";

const initialState = {
  posts: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case actionType.GOT_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
}

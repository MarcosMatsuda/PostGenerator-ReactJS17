/**
 * Types reducers
 */
const types = {
  ADD_POST: 'ADD_POST',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_ERROR: 'ADD_POST_ERROR',
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR',
}

const initialState = {
  data: [],
  error: null,
  isLoading: false
}

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST: {      
      return {
        ...state,
        error: null,
        isLoading: true
      }
    }
    
    case types.ADD_POST_SUCCESS: {
      return {
        ...state, 
        data: [...state.data, action.payload],
        error: null,
        isLoading: false
      }
    }
   

    case types.ADD_POST_ERROR: {
      return { 
        ...state,
        error: action.payload,
        isLoading: false
      }
    }

    case types.FETCH_POSTS: {
      return {
        ...state,
        error: null,
        isLoading: true
      }
    }

    case types.FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false
      }
    }

    case types.FETCH_POSTS_ERROR: {
      return { 
        ...state,
        error: action.payload,
        isLoading: false
      }
    }

    default: {
      return { ...state }
    }
  }
}

/**
 * action creators
 */
export const addPost = (data) => ({
  type: types.ADD_POST, 
  payload: data
})

export const fetchPosts = () => ({
  type: types.FETCH_POSTS
})


export default PostReducer
export const actionType = types

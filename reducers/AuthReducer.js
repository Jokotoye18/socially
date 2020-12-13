export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCEED':
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

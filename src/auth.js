export const auth = {
  isAuthenticated: false,
  login(callBack) {
    auth.isAuthenticated = true;
    callBack();
  },
  logout(callBack) {
    auth.isAuthenticated = false;
    callBack();
  },
};

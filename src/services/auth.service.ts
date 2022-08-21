import axios from "axios";
import IUser from "../types/user.type";

const API_URL = "http://localhost:8080/api/auth/";
const API_PORTAL_URL = "https://rapide-dev.ipsosinteractive.com/AskiaPortal/api/";

class AuthService {
  login(username: string, password: string) {
    return axios
    .post(API_PORTAL_URL + "Account/SignIn", {
      userName: username,
      password
    })
    .then(() => {     
      axios.get(API_PORTAL_URL + "Account/Info").then(response => {
        if (response.data.login) {
          var user = {} as IUser;
          user.id = response.data.guid;
          user.username = response.data.login;
          user.email = response.data.email;
          localStorage.setItem("user", JSON.stringify(user));
          return user;
        }
      });
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();

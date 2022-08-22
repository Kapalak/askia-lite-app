import axios from "axios";
import IUser from "../types/user.type";

// const API_PORTAL_URL = "https://rapide-dev.ipsosinteractive.com/AskiaPortal/api/";
// const API_PORTAL_URL = "http://localhost:8000/AskiaPortal/api/";
const API_PORTAL_URL = "https://8dd0d497-6cca-40d8-9835-5ca72559da33.mock.pstmn.io/AskiaPortal/api/";

class AuthService {
  login(username: string, password: string) {    
    return axios
    .post(API_PORTAL_URL + "Account/SignIn", {
      userName: username,
      password
    })
    .then(() => {
      return true;
    })
    .catch(error => {
      console.log(error.response.data.error);
      return false;
   });
  }

  getInfo() { 
    return axios.get(API_PORTAL_URL + "Account/Info")
    .then(response => {
      if (response.data.login) {
        var user = {} as IUser;
        user.id = response.data.guid;
        user.username = response.data.login;
        user.email = response.data.email;
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        return user;
      }
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

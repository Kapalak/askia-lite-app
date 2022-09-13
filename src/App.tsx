import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import IUser from './types/user.type';

import Login from "./components/login.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import EventBus from "./common/EventBus";

type Props = {};

type State = {
  showModeratorBoard: boolean,
  showAdminBoard: boolean,
  currentUser: IUser | undefined
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: false,
        showAdminBoard: false,
      });
    }

    EventBus.on("logout", this.logOut);
  }

  componentWillUnmount() {
    EventBus.remove("logout", this.logOut);
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/askia-lite-app"} className="navbar-brand">
            Askia Lite
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/askia-lite-app/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/askia-lite-app/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/askia-lite-app/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/askia-lite-app/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/askia-lite-app/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/askia-lite-app/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/askia-lite-app/login"} className="nav-link">
                  Login
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route exact path={["/askia-lite-app", "/askia-lite-app/home"]} component={Home} />
            <Route exact path="/askia-lite-app/login" component={Login} />
            <Route exact path="/askia-lite-app/profile" component={Profile} />
            <Route path="/askia-lite-app/user" component={BoardUser} />
            <Route path="/askia-lite-app/mod" component={BoardModerator} />
            <Route path="/askia-lite-app/admin" component={BoardAdmin} />
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;

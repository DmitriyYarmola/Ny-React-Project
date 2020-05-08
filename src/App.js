import React, { useEffect, Suspense } from "react";
import app from "./App.module.css";
import Nav from "./components/navigation/Navigation";
import {
  Route,
  withRouter,
  BrowserRouter,
  HashRouter,
  Switch,
  Redirect,
} from "react-router-dom";
import { initializeApp } from "./redux/app-reducer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import {HeaderContainer} from "./components/header/HeaderContainer";
import Navigator from "./components/common/navigator/navigator";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

const DialogsContainer = React.lazy(() =>
  import("./components/dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/profile/ProfileContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/users/UsersContainer")
);
const LoginContainer = React.lazy(() =>
  import("./components/login/LoginContainer")
);
const EditProfileContainer = React.lazy(() =>
  import("./components/editProfile/EditProfileContainer")
);

const App = ({ initializeApp, isAuth }) => {
  let catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert(promiseRejectionEvent);
  };

  useEffect(() => {
    initializeApp();
    window.addEventListener("unhandledrejection", function (event) {
      this.alert(event.reason)
    });

    return () => {
      window.removeEventListener("unhandledrejection", function (event) {
        this.alert(event)
      });
    };
  }, [initializeApp]);

  return (
    <Suspense fallback={<Preloader />}>
      <>
        {isAuth ? <Navigator /> : null}
        <div className={app.wrapper}>
          <HeaderContainer />
          {/* <Nav /> */} 
          <div className={app.content}>
            <Switch>
              <Route path="/edit" render={() => <EditProfileContainer />} />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
    
              <Route
                path="/profile/:userid?"
                render={() => <ProfileContainer />}
              />

              <Redirect exact from="/" to="/profile" />

              <Route path="/foundusers" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <LoginContainer />} />
              {/* <Route path="*" render={() => <div>404 NOT FOUND </div>} /> */}
            </Switch>
          </div>
        </div>
      </>
    </Suspense>
  );
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
  };
};

let AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);

const MainApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer store={store} />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;

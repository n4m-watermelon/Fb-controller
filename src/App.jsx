import React,{ useState,useEffect } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import AuthProvider from './context/AuthProvider'
import { useInitFbSDK } from "./hooks/useInitFbSDK";
const PAGE_ID = "105201545371759";

function App() {
  const isFbSDKInitialized = useInitFbSDK();
   const [fbUserAccessToken, setFbUserAccessToken] = useState();
  const  [fbPageAccessToken, setFbPageAccessToken] = useState();
  useEffect(() => {
    if (isFbSDKInitialized) {
      window.FB.getLoginStatus((response) => {
        setFbUserAccessToken(response.authResponse?.accessToken);
      });
    }
  }, [isFbSDKInitialized]);
  useEffect(() => {
    if (fbUserAccessToken) {
      window.FB.api(
        `/${PAGE_ID}?fields=access_token&access_token=${fbUserAccessToken}`,
        ({ access_token }) => {
          setFbPageAccessToken(access_token)
          localStorage.setItem("accessPageToken" , access_token)
        }
      );
    }
  }, [fbUserAccessToken]);

  return (
     <Router >
      <AuthProvider>
          <Switch>
              <Route exact component={Login} path="/login"/>
              <Route  component={Dashboard} path="/" />
          </Switch>
        </AuthProvider>
     </Router>
  )
}

export default App

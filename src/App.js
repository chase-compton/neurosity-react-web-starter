import { Router, navigate } from "@reach/router";
import { ProvideNotion } from "./services/notion";
import { Devices } from "./pages/Devices/Devices";
import { Loading } from "./components/Loading/Loading";
import { Login } from "./pages/UserAuth/Login";
import { Logout } from "./pages/UserAuth/Logout";
import { Calm } from "./pages/Calm/Calm";
import { useNotion } from "./services/notion";
import { FFT } from "./pages/PowerByBand/FFT";
import { Focus } from "./pages/Focus/Focus";
import React, { useEffect } from "react";
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Sidebar from "./components/Sidebar/Sidebar";
import './App.scss';
import Activities from "./pages/Activities/Activities";


export function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      <ProvideNotion>
        <Routes />
      </ProvideNotion>
      </div>
      </div>
      );
}

      function Routes() {
  const {user, loadingUser} = useNotion();

  // useEffect(() => {
  //   if (!loadingUser && !user) {
  //       navigate("/login");
  //   }
  // }, [user, loadingUser]);

      if (loadingUser) {
    return <Loading />;
  }

      return (
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Activities path="/activities" />
        <Calm path="/calm" />
        <Focus path="/focus" />
        <FFT path="/fft" />
        <Devices path="/devices" />
        <Login path="/login" />
        <Logout path="/logout" />
      </Router>
      );
}
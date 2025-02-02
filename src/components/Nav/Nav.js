import React from "react";
import { navigate } from "@reach/router";

import { Status } from "../Status/Status";
import { Footer } from "../Footer/Footer";

export function Nav() {
  function goToLogout() {
    navigate("/logout");
  }

  return (
    <nav className="card">
      <Status />
      <button onClick={goToLogout} className="card-btn">
        Logout
      </button>
      <Footer />
    </nav>
  );
}

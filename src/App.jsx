import React from "react";
import Navbar from "./layout/Navbar";
import LandingPage from "./pages/Landing";

// TODO use routing to render pages
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <LandingPage />
    </React.Fragment>
  );
};

export default App;

import React from "react";

// import UseHooks from "./components/UseHooks";

import Header from "./layouts/Header";

import Main from "./components/Main";

// import Footer from "./layouts/Footer";

import "./assets/styles/home.css";
import "./assets/styles/header.css";
// import "./assets/styles/footer.css"

function App() {
  return (
    <div>
      {/* <UseHooks/> */}
      <Header />
       <Main />
       {/* <Footer /> */}
    </div>
  );
}

export default App;

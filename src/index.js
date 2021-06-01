// import React from "react";
// import ReactDOM from "react-dom";

// import { PrifinaProvider } from "@prifina/hooks";

// import { ThemeProvider } from "@blend-ui/core";

// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const node = document.getElementById("app");

// render (
//   <React.StrictMode>
//     <ThemeProvider>
//       <PrifinaProvider>
//         <App />
//       </PrifinaProvider>
//     </ThemeProvider>
//   </React.StrictMode>
//   //   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
// ReactDOM.render(<App />, node);
import React from "react";
import ReactDOM from "react-dom";
import { PrifinaProvider } from "@prifina/hooks";

import { ThemeProvider } from "@blend-ui/core";

import LocalComponent from "./App.js";

const node = document.getElementById("app");

const App = (props) => (
  <ThemeProvider>
    <PrifinaProvider>
      <LocalComponent {...props} />
    </PrifinaProvider>
  </ThemeProvider>
);

ReactDOM.render(<App />, node);

import React from "react";
import ReactDOM from "react-dom/client";
import "./core/imports.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./app/views/Home.view";
import NotFound404 from "./app/views/NotFound404.view";
import GlobalStyles from "./core/globalStyles";
import EditorListView from "./app/views/EditorList.view";
import PostCreateView from "./app/views/PostCreate.view";
import EditorProfileView from "./app/views/EditorProfile.view";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/editores"} exact component={EditorListView} />
        <Route path={"/editores/:id"} exact component={EditorProfileView} />
        <Route path={"/post/criar"} exact component={PostCreateView} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

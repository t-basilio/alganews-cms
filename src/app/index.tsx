import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home.view";
import EditorListView from "./views/EditorList.view";
import EditorProfileView from "./views/EditorProfile.view";
import PostCreateView from "./views/PostCreate.view";
import PostEditView from "./views/PostEdit.view";
import NotFound404 from "./views/NotFound404.view";
import { useEffect } from "react";
import info from "../core/utils/info";


export default function App() {


  useEffect(() => {
      window.onunhandledrejection = function (error) {
        
        info({
            title: error.reason.response?.data.title || 'Erro',
            description: error.reason.response?.data.detail || error.reason.message
        })
    }
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/editores"} exact component={EditorListView} />
        <Route path={"/editores/:id"} exact component={EditorProfileView} />
        <Route path={"/posts/criar"} exact component={PostCreateView} />
        <Route path={"/posts/editar/:id"} exact component={PostEditView} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
}

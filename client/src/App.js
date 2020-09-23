import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import List from "./List";
import Create from "./Create";
import Update from "./Update";
import { ToastContainer } from "react-toastify";

// import "./App.css";

// const App = () =>

// <Container className="p-3">Main</Container>;

// export default App;

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/Create" exact>
            <Create />
          </Route>
          <Route path="/update" exact>
            <Update />
          </Route>
          <Route path="/" exact>
            <List />
          </Route>
        </Switch>
      </Container>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
};

export default App;

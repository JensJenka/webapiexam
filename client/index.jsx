import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Jenseste Database</h1>
      <div>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register new user</Link>
      </div>
    </div>
  );
}

function Login() {
  return <h1>Hello my dear, this is login</h1>;
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));

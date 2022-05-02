import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function LoginLinks() {
  return (
    <div>
      <div>
        <Link to={"/login"}>Login</Link>
      </div>
      <div>
        <Link to={"/register"}>Register new user</Link>
      </div>
    </div>
  );
}

function FrontPage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  useEffect(async () => {
    setLoading(true);
    const res = await fetch("/api/login");
    setUser(await res.json());
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading content...</div>;
  }

  return (
    <div>
      <h1>Jenseste Database hihi trololo </h1>
      {user ? (
        <div>
          {user.fullName}({user.username})
        </div>
      ) : (
        <LoginLinks />
      )}
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

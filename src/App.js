import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Accessories from "./components/Accessories";
import Strains from "./components/Strains";
import Electronics from "./components/Electronics";
import Login from "./components/Login";
import Post from "./components/Post";
import AdminControls from "./components/AdminControls";
import Signup from "./components/Signup";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Accessories />,
      children: [
        { path: "accessories", element: <Accessories /> },
        { path: "grinders", element: <Accessories /> },
        { path: "trays", element: <Accessories /> },
        { path: "papers", element: <Accessories /> },
      ],
    },
    {
      path: "/",
      element: <Strains />,
      children: [
        { path: "strains", element: <Strains /> },
        { path: "cartridges", element: <Strains /> },
        { path: "pre-rolls", element: <Strains /> },
        { path: "top", element: <Strains /> },
      ],
    },
    {
      path: "/",
      element: <Electronics />,
      children: [
        { path: "electronics", element: <Electronics /> },
        { path: "vapes", element: <Electronics /> },
        { path: "e-cigs", element: <Electronics /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <AdminControls />
      {element}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/strains" element={<Strains />} /> */}
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/signup981" element={<Signup />} />
        <Route path="/adminpost" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;

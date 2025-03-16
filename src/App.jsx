import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Home from "./views/Home";
import About from "./views/About";
import Todos from "./views/Todos";
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";
import Layout1 from "./views/layout/Layout1";
import Layout2 from "./views/layout/Layout2";

function App() {
  const navLinks = [
    {
      id: 1,
      path: "/",
      name: "home",
    },
    {
      id: 2,
      path: "/about",
      name: "about",
    },
    {
      id: 3,
      path: "/todos",
      name: "todos",
    },
    {
      id: 4,
      path: "/auth/",
      name: "page1",
    },
    {
      id: 5,
      path: "/auth/page2",
      name: "page2",
    },
  ];

  return (
    <>
      <Routes>
        <Route element={< Layout1 navLinks={navLinks} />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todos" element={<Todos />} />
        </Route>
        <Route path="/auth" element={< Layout2 navLinks={navLinks} />} >
          <Route index element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

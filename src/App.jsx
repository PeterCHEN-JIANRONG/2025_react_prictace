import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Home from "./views/Home";
import About from "./views/About";
import Todos from "./views/Todos";
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";

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
      path: "/page1",
      name: "page1",
    },
    {
      id: 5,
      path: "/page2",
      name: "page1",
    },
  ];

  return (
    <>
      <header>
        <nav className="flex items-center divide-x divide-indigo-500 border border-indigo-500">
          {navLinks.map((item) => {
            return (
              <NavLink to={item.path} key={item.id} className="block px-4 py-4 hover:bg-gray-300 ">
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="todos" element={<Todos />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router";

const Layout1 = ({navLinks}) => {
  return (<>
      <header className="mb-4">
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
      <div>
        <Outlet />
      </div>
  </>)
}


export default Layout1;
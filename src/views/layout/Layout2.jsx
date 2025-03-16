import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router";

const Layout1 = ({navLinks}) => {
  return (<>
  <div className="h-dvh flex">
      <div className="min-w-[200px]">
        <nav className="divide-y divide-indigo-500 border border-indigo-500">
          {navLinks.map((item) => {
            return (
              <NavLink to={item.path} key={item.id} className="block px-4 py-4 hover:bg-gray-300 ">
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
      <div className="grow h-dvh overflow-scroll p-2">
        <Outlet />
      </div>
  </div>
  </>)
}


export default Layout1;
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
function Aside() {
  return (
    <>
      <aside
        id="sidebar"
        className="bg-dark fixed hidden z-20 h-full top-0 left-0 pt-[45px] flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-black pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto ">
            <div className="flex-1 px-3 bg-black text-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                <li className="flex items hover:text-black hover:bg-gray-200 transition-colors rounded-[8px] py-2 px-4 cursor-pointer">
                  <Link to="/">

                    <span className="ml-3 font-semibold">Dashboard</span>
                  </Link>
                </li>
                <li className="flex items hover:text-black hover:bg-gray-200 transition-colors rounded-[8px] py-2 px-4 cursor-pointer">
                  <Link to="/posts">

                    <span className="ml-3 font-semibold">Posts</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Aside;

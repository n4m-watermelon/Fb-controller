import React from "react";
import Aside from "./Aside";
import NavHeader from "./NavHeader";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Overview from "./OverView";
import Posts from "./Posts";

function Dashboard() {
  let { path } = useRouteMatch();
  return (
    <>
      <div>
        <NavHeader />
        <div className="flex overflow-hidden bg-white pt-16">
          <Aside />
          <div
            id="main-content"
            className="min-h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64 px-[24px]"
          >
            <Switch>
              <Route path="/posts" component={Posts} />
              <Route  path={path} component={Overview} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

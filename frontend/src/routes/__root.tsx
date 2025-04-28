import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="flex flex-col min-h-screen bg-[#2c2c2c] text-white">
        <Outlet />
      </div>
    </React.Fragment>
  );
}

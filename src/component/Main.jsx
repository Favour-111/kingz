import React from "react";
const lazyHome = React.lazy(() => {
  import("./Home");
});
import { Route, Routes } from "react-router-dom";
import About from "./About";
function Main() {
  return (
    <div>
      <Routes>
        <Route
          path="Home"
          element={
            <React.Suspense fallback="loading..">
              <lazyHome />
            </React.Suspense>
          }
        />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}

export default Main;

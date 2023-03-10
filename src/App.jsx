import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Layout from "./components/Layout/Layout";
import NewEmployee from "./pages/NewEmployee";
import Team from "./pages/Team";

export default function App() {
  const routeBasename = import.meta.env.VITE_ROUTE_BASENAME;

  return (
    <Fragment>
      <BrowserRouter basename={routeBasename}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<NewEmployee />} />
            <Route path="/team" element={<Team />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

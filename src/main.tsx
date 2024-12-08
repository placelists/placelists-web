import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./app";
import "./index.css";
import ErrorPage from "./pages/error-page";
import PlacelistPage from "./pages/placelist-page";
import { Path } from "./settings";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={Path.Home} element={<App />}>
          <Route path={`${Path.Placelists}/:id`} element={<PlacelistPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

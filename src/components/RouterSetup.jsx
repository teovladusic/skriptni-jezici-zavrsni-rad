import Navbar from "./Navbar";
import HomePage from "../pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehiclesPage from "../pages/VehiclesPage";

const RouterSetup = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/vehicles" element={<VehiclesPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default RouterSetup;

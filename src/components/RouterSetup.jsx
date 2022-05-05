import HomePage from "../pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehiclesPage from "../pages/VehiclesPage";
import ContactUsPage from "../pages/ContactUsPage";

const RouterSetup = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/vehicles" element={<VehiclesPage />} />
          <Route exact path="/contact" element={<ContactUsPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default RouterSetup;

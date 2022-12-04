import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountrySelection from "./components/CountrySelection";
import BuyOrders from "./routes/BuyOrders";
import DataSets from "./routes/Datasets";
import BuyOrderDetails from "./routes/BuyOrderDetails";

function App() {
  const [selectedCountries, updateSelectedCountries] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BuyOrders selectedCountries={selectedCountries} />} />
        <Route exact path="/datasets" element={<DataSets selectedCountries={selectedCountries} />} />
        <Route exact path="/buy-order-details" element={<BuyOrderDetails />} />
      </Routes>
      <CountrySelection selectedCountries={selectedCountries} updateSelectedCountries={updateSelectedCountries} />
    </BrowserRouter>
  )
}

export default App;
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountrySelection from "./components/CountrySelection";
import BuyOrders from "./routes/BuyOrders";
import DataSets from "./routes/Datasets";
import BuyOrderDetails from "./routes/BuyOrderDetails";
import CreateOrder from "./routes/CreateOrder";

function App() {
  const [selectedCountries, updateSelectedCountries] = useState([]);
  const [countries, updateCountries] = useState([]);
  const [dataSets, updateDataSets] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BuyOrders selectedCountries={selectedCountries} />} />
        <Route path="/datasets" element={<DataSets selectedCountries={selectedCountries} dataSets={dataSets} updateDataSets={updateDataSets} countries={countries} />} />
        <Route path="/buyOrderDetails/:orderId" element={<BuyOrderDetails countries={countries} dataSets={dataSets} updateDataSets={updateDataSets} />} />
        <Route path="/createOrder" element={<CreateOrder countries={countries} dataSets={dataSets} updateDataSets={updateDataSets} />} />
      </Routes>
      <CountrySelection selectedCountries={selectedCountries} updateSelectedCountries={updateSelectedCountries}
        countries={countries} updateCountries={updateCountries} />
    </BrowserRouter>
  )
}

export default App;
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountrySelection from "./components/CountrySelection";
import BuyOrders from "./routes/BuyOrders";
import DataSets from "./routes/Datasets";
import BuyOrderDetails from "./routes/BuyOrderDetails";

function App() {
  const [selectedCountries, updateSelectedCountries] = useState([]);
  const [countries, updateCountries] = useState([]);
  const [dataSets, updateDataSets] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BuyOrders selectedCountries={selectedCountries} />} />
        <Route exact path="/datasets" element={<DataSets selectedCountries={selectedCountries} dataSets={dataSets} updateDataSets={updateDataSets} />} />
        <Route exact path="/buyOrderDetails/:orderId" element={<BuyOrderDetails countries={countries} dataSets={dataSets} updateDataSets={updateDataSets}/>} />
      </Routes>
      <CountrySelection selectedCountries={selectedCountries} updateSelectedCountries={updateSelectedCountries}
        countries={countries} updateCountries={updateCountries} />
    </BrowserRouter>
  )
}

export default App;
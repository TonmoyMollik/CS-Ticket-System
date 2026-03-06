import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomerSecction from "./components/CustomerSecction";
import Hero from "./components/Hero";

const fetchApi = async () => {
  const api = await fetch("/tickets.json");
  return api.json();
};
const fetchPromise = fetchApi();

function App() {
  const [selectedCount, setSelectedCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  const handleCounts = (plus, minus) => {
    setSelectedCount(plus);
    console.log(plus);
    setResolvedCount(minus);
  };

  return (
    <>
      <div className="bg-[#F5F5F5]">
        <Header />
        <Hero selected={selectedCount} resolved={resolvedCount} />

        <CustomerSecction fetchPromise={fetchPromise} numCount={handleCounts} />

        <Footer />
      </div>
    </>
  );
}

export default App;

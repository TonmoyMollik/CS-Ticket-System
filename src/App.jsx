import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomerSecction from "./components/CustomerSecction";

const fetchApi = async () => {
  const api = await fetch("/tickets.json");
  return api.json();
};
const fetchPromise = fetchApi();

function App() {
  return (
    <>
      <Header />
      <div className="bg-[#F5F5F5]">
        <CustomerSecction fetchPromise={fetchPromise} />
      </div>

      <Footer />
    </>
  );
}

export default App;

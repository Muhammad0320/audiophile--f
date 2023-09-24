import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Headphone from "./pages/Headphone";
import Earphone from "./pages/Earphone";
import Speakers from "./pages/Speakers";
import GlobalStyles from "./styles/GlobalStyles";
import Details from "./pages/Details";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="headphones" element={<Headphone />} />
            <Route path="earphones" element={<Earphone />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="checkout" element={<CheckoutPage />} />

            <Route path="product/:productID" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

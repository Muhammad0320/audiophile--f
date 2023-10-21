import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import Headphone from "./pages/Headphone";
import Earphone from "./pages/Earphone";
import Speakers from "./pages/Speakers";
import GlobalStyles from "./styles/GlobalStyles";
import Details from "./pages/Details";
import CheckoutPage from "./pages/CheckoutPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Settings from "./features/users/Settings";
import ReviewPage from "./pages/ReviewPage";
import { useDispatch } from "react-redux";
import { setCartData } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { getMyCart } from "./service/apiCart";
import CartPage from "./pages/CartPage";
import OrderTable from "./features/Orders/OrderTable";
import PaymentConfirmationPage from "./pages/PaymentConfirmationPage";
import AccountPage from "./pages/AccountPage";
import HomePage from "./pages/HomePage";
import ProtectedRoutes from "./features/Authentication/ProtectedRoutes";
import { ViewPortProvider } from "./context/ViewPort";
import ScrollToTop from "./utils/ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartData = async () => {
      const carts = await getMyCart();

      if (carts.length) {
        dispatch(setCartData(carts));
      }
    };

    cartData();
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ViewPortProvider>
        <GlobalStyles />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<HomePage />} />
              <Route path="headphones" element={<Headphone />} />
              <Route path="earphones" element={<Earphone />} />
              <Route path="speakers" element={<Speakers />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="success" element={<PaymentConfirmationPage />} />
              <Route path="product/:slug" element={<Details />} />
            </Route>

            <Route
              element={
                <ProtectedRoutes>
                  {" "}
                  <AccountPage />{" "}
                </ProtectedRoutes>
              }
            >
              <Route index element={<Navigate replace to="settings" />} />
              <Route path="settings" element={<Settings />} />
              <Route path="my-reviews" element={<ReviewPage />} />
              <Route path="my-cart" element={<CartPage />} />
              <Route path="my-order" element={<OrderTable />} />
            </Route>

            <Route path="signup" element={<SignupPage />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>

          <Toaster
            position="top-center"
            gutter={13}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              error: {
                duration: 5000,
              },

              success: {
                duration: 3000,
              },

              style: {
                padding: "16px 24px",
                fontSize: "16px",
                backgroundColor: "var(--color-white-1)",
                color: "var(--color-dark-1)",
                maxWidth: "500px",
              },
            }}
          />
        </BrowserRouter>
      </ViewPortProvider>
    </QueryClientProvider>
  );
}

export default App;

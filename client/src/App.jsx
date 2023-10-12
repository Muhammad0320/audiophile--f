import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Headphone from "./pages/Headphone";
import Earphone from "./pages/Earphone";
import Speakers from "./pages/Speakers";
import GlobalStyles from "./styles/GlobalStyles";
import Details from "./pages/Details";
import CheckoutPage from "./pages/CheckoutPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Account from "./features/users/Account";
import Settings from "./features/users/Settings";
import ReviewPage from "./pages/ReviewPage";
import { useDispatch } from "react-redux";
import { setCartData } from "./features/cart/cartSlice";
import { useCallback, useEffect, useState } from "react";
import { getMyCart } from "./service/apiCart";
import CartPage from "./pages/CartPage";
import HomePage from "./features/HomePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

// I've successfully integrated stripe payment in my app but I sent a parameter with the success_url in my app's backend with node js and when I checked the parameter with my react app the value was `null`. I was successfully redirected to my success_url and when i checked the event data for my stripe project of stripe website the data and the parameter was present with the value I expected but I just can't access it from the frontend, please I really need help.

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartData = async () => {
      const carts = await getMyCart();

      console.log(carts);

      if (carts.length) {
        dispatch(setCartData(carts));
      }

      console.log("sent");
    };

    cartData();
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="headphones" element={<Headphone />} />
            <Route path="earphones" element={<Earphone />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="product/:slug" element={<Details />} />

            {/* <Route path="product/:productID" element={<Details />} /> */}
          </Route>

          <Route element={<Account />}>
            <Route index element={<Navigate replace to="settings" />} />
            <Route path="settings" element={<Settings />} />
            <Route path="my-reviews" element={<ReviewPage />} />
            <Route path="my-cart" element={<CartPage />} />
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
    </QueryClientProvider>
  );
}

export default App;

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

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
            <Route path="product/:slug" element={<Details />} />

            {/* <Route path="product/:productID" element={<Details />} /> */}
          </Route>

          <Route element={<Account />}>
            <Route path="me" element={<Account />} />
            <Route path="settings" element={<Settings />} />
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

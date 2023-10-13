/* eslint-disable */

import axios from "axios";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Nzip2JNj9gLI0ylAhOBBa0IHTNj2vg4S4ZMA92roceGfNLyhoaYbGyJt1PtXoEP6lpV9KJBeea3KDtov6iK6paP00fvmoVVeY"
);

export const getCheckoutSesionApi = async () => {
  const stripe = await stripePromise;

  const session = await axios.get(
    "http://127.0.0.1:3000/api/v1/orders/checkout-session",
    { withCredentials: true }
  );

  await stripe.redirectToCheckout({
    sessionId: session.data.session.id,
  });
};

export const createOrderApi = async ({ product }) => {
  const res = await axios({
    method: "POST",
    url: "http://127.0.0.1:3000/api/v1/orders/create-order",
    withCredentials: true,
    data: {
      product,
    },
  });

  return res.data;
};

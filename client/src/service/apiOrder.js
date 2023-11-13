/* eslint-disable */

import axios from "axios";

import { loadStripe } from "@stripe/stripe-js";
import { SERVER_ROOT_URL } from "../utils/constant";

const stripePromise = loadStripe(
  "pk_test_51Nzip2JNj9gLI0ylAhOBBa0IHTNj2vg4S4ZMA92roceGfNLyhoaYbGyJt1PtXoEP6lpV9KJBeea3KDtov6iK6paP00fvmoVVeY"
);

export const getCheckoutSesionApi = async () => {
  try {
    const stripe = await stripePromise;

    const session = await axios.get(
      `${SERVER_ROOT_URL}/orders/checkout-session`,
      { withCredentials: true }
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMyOrderApi = async () => {
  const res = await axios.get(`${SERVER_ROOT_URL}/orders/my-order`, {
    withCredentials: true,
  });

  return res.data.data.order;
};

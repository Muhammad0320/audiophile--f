/* eslint-disable */

import axios from "axios";

const stripe = Stripe(
  "pk_test_51Nzip2JNj9gLI0ylAhOBBa0IHTNj2vg4S4ZMA92roceGfNLyhoaYbGyJt1PtXoEP6lpV9KJBeea3KDtov6iK6paP00fvmoVVeY"
);

export const getCheckoutSesionApi = async () => {
  const session = await axios.get(
    "http://127.0.0.1:3000/api/v1/orders/checkout-session",
    { withCredentials: true }
  );

  await stripe.redirectToCheckout({
    sessionId: session.data.session.id,
  });
};

export const createOrderApi = async ({ user, product }) => {
  const res = await axios({
    method: "POST",
    url: "http://127.0.0.1:3000/api/v1/orders/create-order",
    withCredentials: true,
    data: {
      user,
      product,
    },
  });

  return res.data;
};

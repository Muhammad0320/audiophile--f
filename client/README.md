# AudioPhile e-commerce website

## Description

**A fully functional and responsive MERN Stack website for an e-commerce platform with an intuitive user interface and cool user experience . This website is packed with lots of amazing features like allowing users to browse through and purchase products, updating and managing user's data, add and manage reviews, manage their shopping carts and persisting the update in the database, handling real payment with stripe, complete orders, and lot more.**

## Features

- Product catalog.
- Product details with thumnail, gallery, descriptions, features, items in the box, reviews, average rating and ratings count and more...
- Shopping cart management: adding items to cart, updating cart item, removing cart item, and clearing the entire cart .

- Changes state in the redux to add any changes that occurs in the cart for easier management and send all the chnanges to the server in just one network trip for improved performance.
- Checkout: user can checkout products that are saved in their cart and handle their card payment with **Stripe** - a popular and trustworthy software company that helps in payment integration.
- Secured Payments and Orders - As said above that payments are hanlded with stripe api; this app also packs an advanced stripe features called Stripe Webhooks - Here, the ordering is not handled by our company but with Stripe itself where we attached an endpoint to be called by stripe on successsful checkout which inturn automatically create order.
- User profile management: Full access to the user's profile like updating current user's data, uploading a profile photo, passwords, resetting passwords for users forgot their password.
- Order management: In this website, user can access all their processed orders and the information related to the specific order, like the date of purchase, total price, order status number of items per order and lot more.
- Review management: users can manage all of their reviews by deleting and editing desired ones.

- Security: security is the our priority in this website as user's sensitive data like are not stored verbatim exactly in the database it's hashed by a powerful package called bcrypt - to handle the users password hashing and prevent decoding the hash by attackers - in the backend.

- Notification on how many total items are present in the cart
- Responsiveness: With all the nice features in this website it is also fully responsive on desktops, tablets and mobile mode.

- Feedback window - A fun little and minimalistic popup window which act as give the users a feedback about their currently fultilled request, activitiy or interaction with the app.

- This website are also coming with some amazing, intriguing and attention-sapping features in the next version of the website.

## Technologies Used

- Frontend: React.js, Redux-toolkit , Redux , React query, Axios, React hot toast , HTML5, CSS3, CSS in JS: React Styled component, React-hook-form, React-router, React-router-dom,React Cotext API , Stripe API , and more.

## Deployment

- Frontend: Vercel, Github, Netify,

-Backend: OnRender, Github

## Website Preview

You can preview this website at `https://audiophile-f-muhammad0320.vercel.app`

## Usage

1. Run the development server: `npm run dev`
2. Open your browser and visit: `http://127.0.0.1:5173/`

## Contact

For any inquiries, please contact us at `balogunmuhammadawwal4@gmail.com`

# AudioPhile e-commerce website

## Description

**A fully functional and responsive MERN Stack website for an e-commerce platform with an intuitive user interface and cool user experience . This website is packed with lots of amazing features like allowing users to browse through and purchase products, updating and managing user's data, add and manage reviews, manage their shopping carts and persisting the update in the database, handling real payment with stripe, complete orders, and lot more.**

## Features

- **Product catalog** Users can scroll through products and navigates to a detailed page of the one that catch their attention.

- **Product details** : product details with thumnail, gallery, descriptions, features, items in the box, reviews, average rating and ratings count and more...

- **Email marketing** : This app features a realtime email markiting where newly signup users are sent appeling emails. Email is also sent when even a user forget's his/her password; to reset the password with a link in the email.

- **Shopping cart** management: adding items to cart, updating cart item, removing cart item, and clearing the entire cart .

- **Limited server trips** : changes state in the redux to add any changes that occurs in the cart for easier management and send all the chnanges to the server in just one network trip for improved performance.

- **Checkout** : user can checkout products that are saved in their cart and handle their card payment with **Stripe** - a popular and trustworthy software company that helps in payment integration.

- **Secured Payments** and Orders: As said above that payments are hanlded with stripe api; this app also packs an advanced stripe features called Stripe Webhooks: here, the ordering is not handled by our company but with Stripe itself where we attached an endpoint to be called by stripe on successsful checkout which inturn automatically create order.

- **User profile** management: Full access to the user's profile like updating current user's data, uploading a profile photo, passwords and even deleting user account which can be done only if the user passes his/her password.

- **Order** : In this website, user can access all their processed orders and the information related to the specific order, like the date of purchase, total price, order status number of items per order and lot more.

- **Order Details** : In the order page user can even click an _eye_ icon to even show the overview and details of the product and can also navigate to the products age itself which can be actually useful and save users lots of clicks .

- **Review management** : Users can manage all of their reviews by deleting and editing desired reviews.

- **Security** : Security is the our priority in this website as user's sensitive data like are not stored verbatim exactly in the database it's hashed by a powerful package called bcrypt - to handle the users password hashing and prevent decoding the hash by attackers - in the backend.

- **Password Reset**: When a user forgets his/her password there is a forgot password option in the login page, Here user will provided his/her valid password to send passwordResetToken, if sent successfully a page will be shown that user should check theie email and when the user clickes on the email link, user will be redirected to a new page to update their password. And this gives this app a more professional look .

- **Cart Notification** : This gives a preview on the total quantity of items that are present in the cart.

- **Responsiveness:** With all the nice features in this website, it is also fully responsive on desktops, tablets and mobile devices.

- **Interactive Modal Window**: This app features a nice modal window which helps users to perform simple tasks instead of navigating to another page which might be annoying sometimes and can simply be minimized as simple as clicking outside the modal window.

- **Feedback window** : A fun little and minimalistic popup window which act as give the users a feedback about their currently fultilled request, activitiy or interaction with the app.

- **Future update** This website are also coming with some amazing, intriguing and attention-sapping features in the next version of the website.

## Technologies Used

- Frontend: React.js, Redux-toolkit , Redux , React query, Axios, React hot toast , HTML5, CSS3, CSS in JS: React Styled component, React-hook-form, React-router, React-router-dom,React Cotext API , Stripe API , and more...

- Backend: Node.js, Express.js, Stripe API, Bcrypt.js, Express-mongo-sanitize, Morgan - Cors - Cookie-parser - xss-clean, express-rate-limit, Helmet, HPP.

- Database: NoSQL database, MongoDB, Mongoose.

## Deployment

- Frontend: Vercel, Github, Netify,

-Backend: OnRender, Github

## Website Preview

You can preview this website at `https://audiophile-f-muhammad0320.vercel.app`

## Contact

For any inquiries, please contact us at `balogunmuhammadawwal4@gmail.com`

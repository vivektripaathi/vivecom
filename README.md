# Mock eCommerce Website

This project is a mock eCommerce website inspired by Amazon, designed to simulate an end-to-end shopping experience. It showcases front-end development skills using React and uses the [DummyJSON API](https://dummyjson.com/) for mock product data. The project covers the complete user journey from browsing products to completing a transaction.

## Project Structure

The project includes the following main features:

1. **Homepage**: Displays a welcome message or trending products.
2. **Product Listing Page**: Lists available products with brief details, allowing users to browse through all products.
3. **Product Detail Page**: Shows detailed information for a selected product, including name, price, description, and other specifications.
4. **Checkout Page**: Allows users to review selected items, enter shipping information, and proceed with the checkout process.
5. **Payment Success/Failure Page**: Provides feedback on the result of the mock payment, indicating either success or failure.

## Technologies Used

- **React**: For creating a dynamic and responsive UI.
- **React Router**: For client-side routing between pages.
- **Axios**: For handling HTTP requests to fetch product data from the DummyJSON API.
- **CSS**: For styling components and pages.

## API Usage

This project uses DummyJSON as a source for product data, simulating an inventory for an eCommerce platform. The API is used to fetch product listings, individual product details, and other relevant information.

## Setup and Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/vivektripaathi/vivecom
    cd vivecom
    ```

2. **Install dependencies:**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm start
    ```

4. The application will be accessible at `http://localhost:3000` in your browser.

## Application Flow

1. **Homepage**: Users land on the homepage, where they can explore categories or featured products.
2. **Product Listing**: Users can browse all available products.
3. **Product Detail**: When a product is clicked, users are taken to a detailed view of the product.
4. **Checkout**: Users can add products to the cart, proceed to checkout, and provide mock payment information.
5. **Payment Outcome**: Upon completing the mock payment, users see a success or failure message.

## Possible Improvements

1. **Backend Integration**: Connect with a real backend to manage inventory, user authentication, and order history.
2. **Enhanced Payment Flow**: Use a real payment gateway for an actual transaction experience.
3. **User Authentication**: Add login and signup functionality for personalized user experiences.

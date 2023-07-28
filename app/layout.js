import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";

export const metadata = {
  title: "Fresh Bite",
  description: "Plan and Enjoy Your Meals",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

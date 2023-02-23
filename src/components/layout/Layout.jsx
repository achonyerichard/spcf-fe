import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";

const Layout = ({ children }) => (
  <>
    <Navigation />
    <div>{children}</div>
    <Footer />
  </>
);
export default Layout;
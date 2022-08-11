import Navigation from "./Navigation";
import Footer from "./Footer";
 
const Layout = ({ config, children }) => (
  <div>
    <Navigation config={config} />
    {children}
    <Footer />
  </div>
);
 
export default Layout;
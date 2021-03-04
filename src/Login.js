import "./Login.css";

import Header from "./Header";
import Footer from "./Footer";
import Loginbox from "./Loginbox";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Loginbox />
      </div>
      <Footer />
    </div>
  );
};
export default Login;

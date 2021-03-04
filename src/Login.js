import "./Login.css";
import Header from "./Header";
import Footer from "./Footer";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";
// import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const Login = () => {
  const useStyles = makeStyles({
    main: {
      minHeight: "calc(100vh - 220px)",
      display: "flex",
      alignItems: "center",
    },
    loginbox: {
      display: "flex",
      margin: "0 auto",
      boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.15)",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Header />

      <div className={classes.main}>
        <div className={classes.loginbox}>
          <LoginLeft />
          <LoginRight />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;

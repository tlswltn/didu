// import "./Login.css";
import logo from "./img/logo.png";
import { makeStyles } from "@material-ui/core/styles";

const Footer = () => {
  const useStyles = makeStyles({
    footer: {
      fontSize: 14,
      width: "100%",
      height: 100,
      textAlign: "center",
      bottom: 0,
    },
  });

  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <p style={{ textAlign: "center", marginTop: 20 }}>
          220-81-99881 | (주)월급날 | 대표자:임호천 | 02-785-0642 | 서울시
          영등포구 국회대로 68길 18 (여의도동, 금영빌딩)10층 <br />ⓒ 2016 payday
          co., Ltd. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};
export default Footer;

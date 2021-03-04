import logo from "./img/logo.png";
import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
  const useStyles = makeStyles({
    header: {
      height: 120,
    },
    logotitle: {
      height: 100,
      paddingLeft: 50,
      paddingTop: 20,
    },
    logobox: {
      width: "auto",
      height: 100,
    },
  });

  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logotitle}>
          <img src={logo} className={classes.logobox} alt="logo" />
        </div>
      </header>
    </div>
  );
};
export default Header;

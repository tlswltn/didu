import help from "./img/help.png";
import bgimg from "./img/bgimg.jpg";
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";

const LoginRight = () => {
  const Drift = keyframes`
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
  `;
  const Wave = styled.div`
    opacity: 0.8;
    position: absolute;
    top: 75%;
    left: 75%;
    background: #6fc3ff;
    width: 800px;
    height: 800px;
    margin-left: -250px;
    margin-top: -250px;
    transform-origin: 50% 48%;
    border-radius: 43%;
    animation: ${Drift} 12000ms infinite linear;
  `;

  const Wave2 = styled(Wave)`
    animation: ${Drift} 16000ms infinite linear;
    opacity: 0.5;
  `;

  const Wave3 = styled(Wave)`
    animation: ${Drift} 20000ms infinite linear;
    opacity: 0.7;
  `;
  // "& wave.-two": {
  //   animation: "drift 16000ms infinite linear",
  //   opacity: 0.5,
  //   background: "#6fc3ff",
  // },
  // " & wave.-three": {
  //   opacity: 0.7,
  //   animation: "drift 20000ms infinite linear",
  // },

  const useStyles = makeStyles({
    loginright: {
      width: 600,
      height: 600,
      color: "#ffffff",
      backgroundImage: `url(${bgimg})`,
      overflow: "hidden",
      transform: "translate3d(0, 0, 0)",
      textAlign: "right",
    },
    righttxt1: {
      position: "relative",
      width: 600,
      height: 300,
      textAlign: "center",
      paddingTop: 270,
      verticalAlign: "middle",
      fontWeight: "bold",
    },
    righttxt2: {
      position: "relative",
      width: 580,
      textAlign: "right",
      paddingRight: 5,
      fontWeight: "bold",
      color: "#ffffff",
    },

    help: {
      verticalAlign: "bottom",
    },
  });

  const classes = useStyles();
  return (
    <div>
      <div className={classes.loginright}>
        <Wave />
        <Wave2 />
        <Wave3 />
        <div className={classes.righttxt1}>
          본 인사정보 시스템은 (주)월급날에서 제공합니다. <br />
          비정상적 접근 시 법적 조치를 받을 수 있습니다.
        </div>
        <div className={classes.righttxt2}>
          <img src={help} className={classes.help} alt="help" /> 익스플로러 사용
          시 도움말
        </div>
      </div>
    </div>
  );
};
export default LoginRight;

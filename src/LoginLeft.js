// import "./Login.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const LoginLeft = () => {
  const useStyles = makeStyles({
    kakaobtn: {
      width: 270,
      height: 45,
      fontSize: 16,
      fontWeight: "bold",
      backgroundColor: "#FEE34A",
      // border: 1,
      borderRadius: 10,
      marginTop: 10,
      boxShadow: "none",
    },
    btn: {
      width: 270,
      height: 45,
      fontSize: 16,
      color: "#FFFFFF",
      fontWeight: "bold",
      backgroundColor: "#3474E4",
      border: 1,
      borderRadius: 10,
      boxShadow: "none",
    },
    txt: {
      width: 270,
      height: 45,
    },
    chk: {
      border: 1,
      borderRadius: 40,
    },
    loginleft: {
      /* display: inline-block; */
      width: 400,
      height: 600,
      // boxShadow: inset,
      /* flex-grow: 1; */
      /* flex-shrink: 2; */
      backgroundColor: "#ffffff",
    },
    txtbox: {
      borderRadius: 10,
      border: 1,
      overflow: "hidden",
      marginTop: 15,
    },
    content: {
      width: 270,
      height: 440,
      // marginLeft: 60,
      // marginTop: 60,
      margin: "0 auto",
      textAlign: "center",
      paddingTop: 70,
    },
    logintext: {
      width: 270,
      height: 60,
      fontFamily: "Noto Sans KR",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 38,
      // lineHeight: 55,
      textAlign: "left",
    },

    input: {
      // width: 200,
      height: 45,
      marginTop: 10,
      fontSize: 11,
      color: "red",
    },
    input2: {
      height: 45,
      marginTop: 15,
      fontSize: 15,
      textAlign: "center",
      width: "100%",
      textDecoration: "underline",
    },
  });

  const classes = useStyles();
  return (
    <div>
      <div className={classes.loginleft}>
        <div className={classes.content}>
          <div className={classes.logintext}>로그인</div>

          <div className={classes.txtbox}>
            <TextField
              className={classes.txt}
              id="filled-basic"
              size="small"
              label="회사 ID"
              variant="filled"
            />
          </div>

          <div className={classes.txtbox}>
            <TextField
              className={classes.txt}
              id="filled-basic"
              size="small"
              label="사용자 ID"
              variant="filled"
            />
          </div>
          <div className={classes.txtbox}>
            <TextField
              className={classes.txt}
              id="filled-basic"
              type="password"
              size="small"
              label="비밀번호"
              variant="filled"
            />
          </div>

          <div className={classes.input}>
            <label>
              <Checkbox
                color="primary"
                size="small"
                style={{ padding: 1 }}
                className={classes.chk}
              ></Checkbox>
              <span style={{ color: "grey" }}>아이디저장</span>
            </label>

            <Link color="inherit" href="/">
              <span style={{ marginLeft: 30 }}>
                아이디/비밀번호를 잊으셨나요?
              </span>
            </Link>
          </div>

          <Button
            className={classes.input}
            variant="contained"
            className={classes.btn}
          >
            로그인
          </Button>

          <Button variant="contained" className={classes.kakaobtn}>
            카카오 계정으로 로그인
          </Button>

          <div className={classes.input2}>
            <Link color="inherit" href="/">
              '카카오 계정으로 로그인' 등록 방법
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginLeft;

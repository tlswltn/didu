// import "./Login.css";
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

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
      fontWeight: "bold",
    },

    icon: {
      borderRadius: 5,
      width: 16,
      height: 16,

      boxShadow:
        "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
      backgroundColor: "#f5f8fa",
    },
    checkedIcon: {
      backgroundColor: "#137cbd",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
      "&:before": {
        display: "block",
        width: 16,
        height: 16,
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
      },
      "input:hover ~ &": {
        backgroundColor: "#106ba3",
      },
    },

    loginleft: {
      width: 400,
      height: 600,

      backgroundColor: "#ffffff",
    },
    txtbox: {
      borderRadius: 10,
      border: 1,
      overflow: "hidden",
      marginTop: 15,
      // fontWeight: "bold",
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
      fontSize: 12,
      // color: "",
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
  const [isRemember, setIsRemember] = useState(false);
  const [id, setId] = useState("");
  const [comid, setComId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isRemember")) {
      setIsRemember(true);
      setComId(localStorage.getItem("comid"));
      setId(localStorage.getItem("id"));
      setPassword(localStorage.getItem("pass"));
    }
    console.log("isRemember", isRemember);
  }, []);
  // });

  const lcst = (key, value, isClear) => {
    //console.log("key", key);
    //console.log("value", value);
    //console.log("isClear", isClear);

    localStorage.setItem(key, value);
    if (isClear) localStorage.clear();
  };

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
              onChange={(e) => {
                setComId(e.target.value);
                lcst("comid", e.target.value);
              }}
              value={comid}
            />
          </div>

          <div className={classes.txtbox}>
            <TextField
              className={classes.txt}
              id="filled-basic"
              size="small"
              label="사용자 ID"
              variant="filled"
              onChange={(e) => {
                setId(e.target.value);
                lcst("id", e.target.value);
                //localstorage();
              }}
              value={id}
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
              onChange={(e) => {
                setPassword(e.target.value);
                lcst("pass", e.target.value);
              }}
              value={password}
            />
          </div>

          <div className={classes.input}>
            <label>
              {/* <Checkbox
                // defaultChecked
                color="primary"
                size="small"
                style={{ padding: 1, border: 1, borderRadius: 3 }}
                // className={classes["& MuiIconButton-label"]}
                // icon={classes.icon}
                checked={isRemember}
                onChange={(e) => {
                  setIsRemember(e.target.checked);
                  //console.log(e.target.checked);
                  lcst("isRemember", e.target.checked);
                  if (!e.target.checked) lcst("", "", true);
                }}
              ></Checkbox> */}

              <Checkbox
                color="default"
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                size="small"
                style={{ padding: 4 }}
                checked={isRemember}
                onChange={(e) => {
                  setIsRemember(e.target.checked);
                  //console.log(e.target.checked);
                  lcst("isRemember", e.target.checked);
                  if (!e.target.checked) lcst("", "", true);
                }}
              ></Checkbox>
              <span style={{ color: "grey" }}>아이디저장</span>
            </label>

            <Link color="inherit" href="/">
              <span style={{ marginLeft: 34 }}>
                아이디/비밀번호를 잊으셨나요?
              </span>
            </Link>
          </div>

          <Button variant="contained" className={classes.btn}>
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

// import "./Login.css";
import React from "react";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";
import styled from "styled-components";

const Loginbox = () => {
  const LoginDiv = styled.div`
    display: flex;
    margin: 0 auto;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.15);
  `;

  return (
    <>
      <LoginDiv>
        <LoginLeft />
        <LoginRight />
      </LoginDiv>
    </>
  );
};
export default Loginbox;

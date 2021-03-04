/* eslint-disable no-unused-vars */
// 5. 이벤트 핸들링
// 1) 컴포넌트 생성 및 불러오기
// 2) onChange 이벤트 핸들링하기
// 3) 임의 메서드 만들기
// 4) input 여러개 다루기
// 5) onKeyPress 이벤트 핸들링하기

//onChange 이벤트 설정
//state에 input 값 담기
//버튼을 누를 때 comment 값을 공백으로 설정
//3) 임의 메서드 만들기
//   Property Initializer Syntax 를 사용한 메서드 작성
import React, { useState } from "react";
//함수형 컴포넌트
const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ":" + message);
    setUsername("");
    setMessage("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />

      <input
        type="text"
        name="message"
        placeholder="입력"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onkeypress}
      />
      <button onClick={onclick}>확인</button>
    </div>
  );
};

export default EventPractice;

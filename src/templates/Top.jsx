import React from "react";
import topImage from "../images/topImage.jpg";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

const Top = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ overflow: "hidden" }}>
      <div>
        <img src={topImage} alt="maintitle" className="image-box" />
      </div>
      <div className="m-tesuto">
        <p className="mm-tesuto">シンプルなシフト管理アプリ</p>
        <h1>Main Title</h1>
      </div>
      <div className="testo">
        <p onClick={() => dispatch(push("/signup"))}>アカウント登録</p>
        <p onClick={() => dispatch(push("/signin"))}>ログイン</p>
      </div>
    </div>
  );
};

export default Top;

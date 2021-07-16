import React from "react";
import "./profile.css";
import { toPersian } from "../../../helper/functions/utils";
import Info from "./components/info/info";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-header_container">
        <label className="profile-welcome">هادی عزیز خوش آمدید</label>
        <div className="profile-header-line"></div>
        <label className="profile-balance">
          {toPersian("موجودی حساب شما: 10000")}
        </label>
        <button className="profile-addBalance">افزایش موجودی</button>
      </div>
      <div className="profile-tab_container">
        <label className="profile-tab profile-tab_enabled">پروفایل</label>
        <label className="profile-tab">رسید ها</label>
      </div>
      <Info className="profile-info" />
    </div>
  );
}

export default Profile;

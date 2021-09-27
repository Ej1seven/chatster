import React from "react";
import { useSelector } from "react-redux";
import "./home.css";

const Home = () => {
  const email = useSelector((state) => state.form.email);
  const displayName = useSelector((state) => state.form.displayName);

  return (
    <div className="home-screen">
      <div className="profile-image-container">
        <img
          className="h-40 w-40 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <p className="text-3xl mt-6 font-semibold">{displayName}</p>
        <p className="text-lg mb-2 font-thin">{email}</p>
      </div>
      <div className="followers-following-chats flex flex-row justify-around items-center text-center divide-x ">
        <div className="flex-1">
          <p className="text-3xl">100</p>
          <p className="followers-following-chats-heading">Followers</p>
        </div>
        <div className="flex-1">
          <p className="text-3xl">85</p>
          <p className="followers-following-chats-heading">Followering</p>
        </div>
        <div className="flex-1">
          <p className="text-3xl">100</p>
          <p className="followers-following-chats-heading">Chats</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
    const { username } = useParams();

  return <h1>{ username }님의 프로필</h1>;
}

export default Profile;

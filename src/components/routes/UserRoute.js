import React from "react";
// import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
// import History from "../../pages/user/History";

const UserRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));

  return user && user.token ? (
    children  ) : (
    <LoadingToRedirect />
  );
};

export default UserRoute;

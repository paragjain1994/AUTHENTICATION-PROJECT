import classes from "./StartingPageContent.module.css";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const StartingPageContent = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const time = localStorage.getItem("date");
    const currentTime = new Date().getTime();
    console.log(currentTime);
    if (token && time && currentTime - time > 1 * 10 * 1000) {
      // The token is still valid
      authCtx.logout();
      localStorage.removeItem("token");
      localStorage.removeItem("date");
      history.replace("/auth");
    }
  }, []);

  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  );
};

export default StartingPageContent;

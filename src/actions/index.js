import db from "../api/db";
import history from "../history";
import axios from "axios"

//to create a register
export const registerPost = (formValues) => async (dispatch) => {
  try {
    console.log("action1", formValues);
    const res = await db.post("/auth/register", formValues);
    if (res.status === 200) {
      console.log("status 200");

      dispatch({ type: "MESSAGE_CENTER", payload: "succcess" });
    }
    history.push("/login");
  } catch (err) {
    console.log(err.response);

    dispatch({
      type: "MESSAGE_CENTER",
      payload: "Lütfen Bilgilerinizi Kontrol Ediniz",
    });
  }
};

export const loginPost = (formValues) => async (dispatch) => {
  try {
    // console.log("action1", formValues);
    const res = await db.post("/auth/login", formValues);
    const { access_token } = res.data;
    console.log("tokkken", access_token);
    localStorage.setItem("token",`${access_token}`);

    if (res.status === 200) {
      dispatch({ type: "MESSAGE_CENTER", payload: "succcess" });
    }
    history.push("/Profile");
  } catch (err) {
    dispatch({
      type: "MESSAGE_CENTER",
      payload: "Lütfen Bilgilerinizi Kontrol Ediniz",
    });
  }
};

//profil bilgileri get ediyoruz
export const profileGet = () => async (dispatch) => {
  try {
    const res = await db.get("/auth/profile");
    console.log("asdasd", res.data);

    dispatch({ type: "PROFİLE_GET", payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

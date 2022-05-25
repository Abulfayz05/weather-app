import React from "react";
import Sunny from "./Sunny";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Weather() {
  return (
    <div>
      <ToastContainer />
      <Sunny />
    </div>
  );
}

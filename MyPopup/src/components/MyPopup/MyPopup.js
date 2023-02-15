import { ErrorIcon } from "../ErrorIcon";
import { SuccessIcon } from "../SuccessIcon";
import { CloseIcon } from "../CloseIcon";
import { motion } from "framer-motion";
import "../../styles/style.css";
import React from "react";

export const MyPopup = ({ text, type, title, trigger, onClose }) => {
  const displayAnimations = {
    open: {
      opacity: 1,
      x: "-50%",
    },
    close: {
      opacity: 0,
      x: "-100%",
    },
  };

  return (
    <section className="w-full h-full">
      <div
        className={
          " w-screen h-screen absolute top-1--2 left-1--2 -translate-x-1--2 -translate-y-1--2 bg-white opacity-70 " +
          (trigger ? "block" : "hidden")
        }
      ></div>
      <motion.div
        className={
          "absolute top-1--2 left-1--2 -translate-x-1--2 -translate-y-1--2 w-400 shadow-popup rounded overflow-hidden bg-white"
        }
        animate={trigger ? "open" : "closed"}
        variants={displayAnimations}
        initial="close"
      >
        <div
          className={
            "w-full h-full border-l-4 flex px-5 py-3 items-center gap-4 " +
            (type === "success"
              ? "border-mypopup-green"
              : type === "error"
              ? "border-red"
              : "")
          }
        >
          <span>
            {type === "success" ? (
              <SuccessIcon stroke="#1BA11B" width="25px" overflow="visible" />
            ) : type === "error" ? (
              <ErrorIcon stroke="#CC2727" width="25px" overflow="visible" />
            ) : (
              ""
            )}
          </span>
          <div className="basis-full">
            <p
              className={
                "font-bold uppercase align-left " +
                (type === "success"
                  ? "text-green"
                  : type === "error"
                  ? "text-red"
                  : "")
              }
            >
              {title}
            </p>
            <p className=" align-left text-black">{text}</p>
          </div>
          <span
            className=" cursor-pointer ml-2 hover-scale-150 transition-all"
            onClick={onClose}
          >
            <CloseIcon />
          </span>
        </div>
      </motion.div>
    </section>
  );
};

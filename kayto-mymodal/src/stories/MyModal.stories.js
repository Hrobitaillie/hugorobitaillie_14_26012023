import React from "react";

import { MyModal } from "../components/MyModal/MyModal";
import { useCycle } from "framer-motion";


export default {
  title: 'myModal',
  component: MyModal,
};

export const base = () => {
  const [isPopupOpen, TogglePopup] = useCycle(false, true);

  return (
    <>
      <button onClick={TogglePopup}>Trigger</button>
      <MyModal trigger={isPopupOpen} onClose={TogglePopup}>
        <h1>This is the title</h1>
      </MyModal>
    </>
  );
};

export const complex = () => {
    const [isPopupOpen, TogglePopup] = useCycle(false, true);
  
    return (
      <>
        <button onClick={TogglePopup}>Trigger</button>
        <MyModal trigger={isPopupOpen} onClose={TogglePopup}>
            <h1 style={{color: "teal"}}>Success</h1>
            <p>Your Employee is successfully added</p>
        </MyModal>
      </>
    );
  };

import { useEffect } from "react";
import Form from "../components/Form/Form";

import MockEmployeesList from "../components/EmployeesList/Mock";

import { useCycle } from "framer-motion";
import { MyPopup } from "kayt0-mypopup";

export default function NewEmployee() {
  const [isPopupOpen, TogglePopup] = useCycle(false, true);

  useEffect(() => {
    if (!localStorage.EmployeesList) {
      MockEmployeesList();
    }
  }, []);

  return (
    <section className="container mx-auto relative">
      <div className=" mx-[100px] shadow-header rounded-md min-h-[200px] p-8">
        <Form onClick={TogglePopup} />
        <MyPopup
          text="New employee added."
          type="success"
          title="Success"
          trigger={isPopupOpen}
          onClose={TogglePopup}
        />
      </div>
    </section>
  );
}

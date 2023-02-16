import { useEffect } from "react";
import Form from "../components/Form/Form";

import MockEmployeesList from "../components/EmployeesList/Mock";

//import useCycle from framer-motion to add the popup's display/hide statements
import { useCycle } from "framer-motion";
//import MyModal from kayt0-mymodal to add the the popup
import { MyModal } from "kayt0-mymodal";

export default function NewEmployee() {

  // initialise the popup's display/hide statements
  const [isPopupOpen, TogglePopup] = useCycle(false, true);

  useEffect(() => {
    if (!localStorage.EmployeesList) {
      MockEmployeesList();
    }
  }, []);

  return (
    <section className="container mx-auto relative">
      <div className=" mx-[100px] shadow-header rounded-md min-h-[200px] p-8">

        {/* Add a button and trigger the TogglePopup Statement on Click */}
        <Form onClick={TogglePopup} />

        {/* Add the MyModal component and specify all the props the popup needs */}
        <MyModal 
        // The state to trigger the modal when shoud be open
        trigger={isPopupOpen} 
        // The state change the modal's state
        onClose={TogglePopup}
        >
          {/* Then pass in child prop the content you wanna display inside the modal  */}
          <h1 className="text-green">Success</h1>
          <p>New employee added</p>
        </MyModal>
      </div>
    </section>
  );
}

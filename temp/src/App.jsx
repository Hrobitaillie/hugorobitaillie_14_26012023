import { useState } from 'react'
import { useCycle } from "framer-motion"
import { MyPopup } from "kayt0-mypopup"
import './App.css'

function App() {
  const [isPopupOpen, TogglePopup] = useCycle(false, true);

  return (
    <div className="App">
      <div className="card">
        <button onClick={TogglePopup}>
         Show
        </button>
      </div>
      <MyPopup
          text="New employee added."
          type="success"
          title="Success"
          trigger={isPopupOpen}
          onClose={TogglePopup}
        />
    </div>
  )
}

export default App

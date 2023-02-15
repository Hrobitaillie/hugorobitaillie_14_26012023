
# Kayt0-MyPopup

It's a simple animated popup library that will allow you to add a popup with succes or error style.
You can customize popup name and text.
There is also a close button.

[![NPM](https://img.shields.io/npm/v/kayt0-mypopup)](https://www.npmjs.com/package/kayt0-mypopup)
## Installation

### Install my-project with npm

```bash
    npm install --save kayt0-mypopup
    npm install --save framer-motion
    npm install
```
    
### Install my-project with yarn

```bash
    yarn add kayt0-mypopup
    yarn add framer-motion
    yarn
```


## Usage

```javascript
//import useCycle from framer-motion to add the popup's display/hide statements
import { useCycle } from "framer-motion";

//import MyPopup from kayt0-mypopup to add the the popup
import { MyPopup } from "kayt0-mypopup";

export default function NewEmployee() {

  // initialize the popup's display/hide statement
  const [isPopupOpen, TogglePopup] = useCycle(false, true);

  return (
        {/* Add a button and trigger the TogglePopup Statement on Click */}
        <button onClick={TogglePopup}> Show Popup </button>

        {/* Add the popup component and specify all the props the popup needs */}
        <MyPopup
          // Main text displayed inside the popup
          text="New employee added."
          // Type success or error (green or red colors used)
          type="success"
          // The title displayed inside the popup
          title="Success"
          // Use the isPopupOpen statement to show/hide the popup
          trigger={isPopupOpen}
          // Pass the TogglePopup Statement to show/hide the popup
          onClose={TogglePopup}
        />
  );
```


## License

[MIT](https://choosealicense.com/licenses/mit/) - [@hugorobitaillie](https://www.npmjs.com/~hugorobitaillie)
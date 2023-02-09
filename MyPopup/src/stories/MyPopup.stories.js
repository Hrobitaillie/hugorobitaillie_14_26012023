import React from 'react'
import { storiesOf } from '@storybook/react'
import { MyPopup } from '../components/MyPopup';
import { useCycle } from 'framer-motion'

const stories = storiesOf('MyPopup', module);

stories.add('Success', () => {
    const [isPopupOpen, TogglePopup] = useCycle(false, true);

    return(
        <>
            <button
                onClick={TogglePopup}>
                Trigger
            </button>
            <MyPopup 
                text="Bravo la popup est fonctionnelle"
                type="success"
                title="Success"
                trigger={isPopupOpen}
                onClose={TogglePopup}
            />
        </>
    )
});
stories.add('Error', () => {
    const [isPopupOpen, TogglePopup] = useCycle(false, true);

    return(
        <>
            <button
                onClick={TogglePopup}>
                Trigger
            </button>
            <MyPopup 
                text="une erreur est survenue"
                type="error"
                title="Error"
                trigger={isPopupOpen}
                onClose={TogglePopup}
            />
        </>
    )
})
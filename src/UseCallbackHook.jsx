import { useEffect, useState } from 'react'
import './App.css'
import ChildTwo from './callback_hook_example/Todos'
import ParentTwo from './callback_hook_example/ParentTwo'

function UseCallBackHook() {

    return (
        <>
            <h2>Call back hook</h2>
            <div>
                Prevents unnecessary loading of child components
                for any change in parent component.

                <p>
                    Todos (child component) are only loaded if change to todo state is done.
                </p>

            </div>
            <ParentTwo />
        </>
    )

}


export default UseCallBackHook
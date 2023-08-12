import React from 'react'
import Userpage from './Userpage';
import Content from './Conent'
import { Provider } from "react-redux";
import store from './store/index'


export default function App() {

  

    return (
        <div className='flex w-full h-screen'>
            <Provider store={store}>
            <div><Userpage/></div>
            <div className='flex py-2 flex-col  flex-grow '>    
                <div><Content/></div>   
            </div>
         </Provider>

        </div>
    )
}

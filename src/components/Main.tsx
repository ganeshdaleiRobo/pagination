import React from 'react';
import './styles/main.css';
import Render from './organisms/Render';
const Main = ()=>{
    return (
        <div className="main-wapper">
            <div className="main-inner">
                <Render/>
            </div>
        </div>
    )
}
export  default Main;
import React from 'react';
import './styles/main.css';
import Render from './organisms/Render';
import Footer from './organisms/footer/Footer';
const Main = ()=>{
    return (
        <div className="main-wapper">
            <div className="header-section">Jobs</div>
            <div className="main-inner">
                <Render/>
            </div>
            <div className="footer">
            <Footer/>
            </div>
            
        </div>
    )
}
export  default Main;
import React from 'react';
import Text from '../../atoms/Text/Text';
import Search from '../../molecules/search/Search';
import './footer.css';

const Footer = ()=>{
return (
    
    <div>
    <div className="footer-wapper">
    <Text label="Guidelines" color="black" fontSize="small"/>
    <Text label="FAQ" color="gray" fontSize="small"/>
    <Text label="API" color="black" fontSize="small"/>
    <Text label="Security" color="black" fontSize="small"/>
    <Text label="List" color="black" fontSize="small"/>
    <Text label="Bookmark" color="black" fontSize="small"/>
    <Text label="Legal" color="black" fontSize="small"/>
    <Text label="Apply to YC" color="black" fontSize="small"/>
    <Text label="Contact" color="black" fontSize="small"/>
    </div>
    <div className="footer-search"><Search/></div>
    </div>
    
   
)
}
export default Footer;
import React from 'react';
import './header.css';
import Text from '../../atoms/Text/Text';
const Header = ()=>{
return (
    <div className="header-wraper">
        <Text label="Hacker News" color="black" weight="bold"/>
        <Text label="new" color="black"/>
        <Text label="Past" color="black"/>
        <Text label="Comment" color="black"/>
        <Text label="ask" color="black"/>
        <Text label="show" color="black"/>
        <Text label="jobs" color="black"/>
        <Text label="submit" color="black"/>
    </div>
)
}
export default Header
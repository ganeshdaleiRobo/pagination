import React from 'react';
import './header.css';
import Text from '../../atoms/Text/Text';
const Header = ()=>{
return (
    <div className="header-wraper">
        <Text label="Hacker News" color="black" weight="bold" fontSize="small-medium"/>
        <Text label="new" color="black" fontSize="small-medium"/>
        <Text label="Past" color="black" fontSize="small-medium"/>
        <Text label="Comment" color="black" fontSize="small-medium"/>
        <Text label="ask" color="black" fontSize="small-medium"/>
        <Text label="show" color="black" fontSize="small-medium"/>
        <Text label="jobs" color="black" fontSize="small-medium"/>
        <Text label="submit" color="black" fontSize="small-medium"/>
    </div>
)
}
export default Header
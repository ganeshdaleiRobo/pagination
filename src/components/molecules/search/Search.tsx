import * as React from "react";
import Input from '../../atoms/input/Input';
import Text from '../../atoms/Text/Text';
import './search.css'
const Search = ()=>{
return (
    <div className="search-wapper">
        <Text label="Search" color="gray"/>
        <Input/>
        </div>
)
}
export default Search;


import { Link } from 'react-router-dom';
import { Grid } from "@mui/material";
import Item from '../Item/Item'
import './ItemList.css';


const ItemList = ({ productList }) => {


    return (
        <div className="ItemList">
            {productList.map((item) => {
                return(<Item data= {item}/>)
            })}
        </div>
    );
};

export default ItemList;

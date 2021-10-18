
import { Link } from 'react-router-dom';
import Item from '../Item/Item'
import './ItemList.css';


const ItemList = ({ data }) => {
    return (
        <div className="ItemList">
            <div className="product-list">
                {data.map((product) => {
                    return (
                        <div key={product.char_id}>
                            <Link to={`/detail/${product.char_id}`}>
                                <Item data={product} />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ItemList;

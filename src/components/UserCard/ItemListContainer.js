
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
import Spinner from '../Loader/Loader';

// firebase database:
import { collection, query, where, getDocs } from 'firebase/firestore';
import {db} from '../../firebase';

const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const [isloading, setIsLoading] = useState(true);

	useEffect(() => {
        setIsLoading(true)
        setProductList([]);

		const getProductOneData = async () => {
			const docs = [];
            const q = query(collection(db, 'products'));
            const y = query(collection(db, 'products_2'));

			const items = await getDocs(q);
			items.forEach((document) => {
				console.log(document.id, ' => ', document.data());
				docs.push({...document.data(), id: document.id})
                
			});

            const items2 = await getDocs(y);
			items2.forEach((document) => {
				console.log(document.id, ' => ', document.data());
				docs.push({...document.data(), id: document.id})
                
			});
			setProductList(docs);
            setIsLoading(false);
		}; 
		getProductOneData();
	}, []);



    console.log(productList)
    return (
        <>
            {isloading ? <Spinner /> : <ItemList productList={productList} />}
        </>

    );
}

export default ItemListContainer;


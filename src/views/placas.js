import React, {useState, useEffect} from 'react'
import ItemList from '../components/UserCard/ItemList/ItemList';
import Spinner from '../components/Loader/Loader'

//database:
import { collection, query, where, getDocs } from 'firebase/firestore';
import {db} from './../firebase'

const CategoryOneContainer = () => {

    const [productList, setProductList] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        setProductList([]);

		const requestData = async () => {
			const docs = [];
            const q = query(collection(db, 'products'));
            
			const items = await getDocs(q);
			items.forEach((document) => {
				console.log(document.id, ' => ', document.data());
				docs.push({...document.data(), id: document.id})
                
			});
            
			setProductList(docs);
            setIsLoading(false);
		};
		requestData();
	}, []);

   console.log(productList)
    return (
        <>
            {isloading ? <Spinner /> : <ItemList productList={productList} />}
        </>

    );
}

export default CategoryOneContainer;

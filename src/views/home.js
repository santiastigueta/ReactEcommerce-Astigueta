import React from 'react'
import ItemListContainer from '../components/UserCard/ItemListContainer';

const home = () => {
    const onChange = (e) => {
        console.log(e.target.value)
    };
    return (
        <div>
            
            <ItemListContainer></ItemListContainer>
        </div>
    );
};

export default home;

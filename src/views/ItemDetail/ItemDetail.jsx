import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import axios from 'axios';

//componentes
import ItemCount from '../../components/UserCard/ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({ data }) => {

    const [compra, setCompra] = useState();
    const [terminar, setTerminar] = useState(false);


    const onAdd = (cantidad) => {
        setCompra(cantidad);
        setTerminar(!terminar);
    }

    return (
        <div className="CharacterDetail">

            <Card>
                <Image src={data.img} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{data.name}</Card.Header>
                    <Card.Meta>
                        <Button secondary>Volver</Button>
                    </Card.Meta>
                    <Card.Description>{data.occupation}</Card.Description>
                </Card.Content>

                {terminar ? (
                    <Link to='/Cart'> <button>Terminar compra</button></Link>
                ) : (
                    <ItemCount initial='1' stock='10' onClick={(cant) => onAdd(cant)} />
                )}
            </Card>
        </div>
    );

}

export default ItemDetail;

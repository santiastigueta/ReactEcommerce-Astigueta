import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import axios from 'axios';

//componentes
import ItemCount from '../../components/UserCard/ItemCount/ItemCount';


const ItemDetail = ({ details }) => {

    const [compra, setCompra] = useState();
    const [terminar, setTerminar] = useState(false);


    const onAdd = (cantidad) => {
        setCompra(cantidad);
        setTerminar(!terminar);
        alert(`cantidad comprada: ${compra}`);
    }

    return (
        <div className="CharacterDetail">

            <Card>
                <Image src={details.img} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{details.name}</Card.Header>
                    <Card.Meta>
                        <Button secondary>Volver</Button>
                    </Card.Meta>
                    <Card.Description>{details.occupation}</Card.Description>
                </Card.Content>

                {terminar ? (
                    <button>Terminar compra</button>
                ) : (
                    <ItemCount initial='1' stock='10' onClick={(cant) => onAdd(cant)} />
                )}
            </Card>
        </div>
    );

}

export default ItemDetail;

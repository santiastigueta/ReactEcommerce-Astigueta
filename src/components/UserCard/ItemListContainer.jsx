
import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

import './ItemListContainer.css'

//componentes
/* import ItemCount from './ItemCount/ItemCount'; */

const ItemListContainer = ({ data }) => (


    <div className="ItemListContainer">
        <Card>
            <Image src={data.url} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{data.title}</Card.Header>
                <Card.Meta>
                    <Button positive>Mostrar más detalles</Button>
                </Card.Meta>
                <Card.Description>{data.description}</Card.Description>
            </Card.Content>
            {/*  <ItemCount />  */}
        </Card>
    </div>
);

export default ItemListContainer;


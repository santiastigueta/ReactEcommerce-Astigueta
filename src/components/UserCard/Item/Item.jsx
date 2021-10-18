
import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

//componentes
//import ItemCount from '../ItemCount/ItemCount'


const Item = ({ data }) => (

    <div className="Item">

        <Card>
            <Image src={data.img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{data.name}</Card.Header>
                <Card.Meta>
                    <Button positive>Mostrar más detalles</Button>
                </Card.Meta>
                <Card.Description>{data.occupation}</Card.Description>
            </Card.Content>
        </Card>
    </div >
);

export default Item;
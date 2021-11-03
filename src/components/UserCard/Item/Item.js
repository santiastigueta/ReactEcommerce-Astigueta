
import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router';
//componentes
//import ItemCount from '../ItemCount/ItemCount'


const Item = ({ data }) => {
    const history = useHistory();
    const { url, title, price, description } = data;

    const navigateItem = () => {
        history.push(`/item/${data.id}`)
    }

    return (
        <div className="Item">
            <Card>
                <Image src={url} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>
                        <Card.Description>{price}</Card.Description>
                    </Card.Meta>
                    <Card.Description>{description}</Card.Description>
                    <Card.Meta>
                        <Button positive onClick={navigateItem}>ver mas detalles</Button>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </div >
    );
}



export default Item;
import Card from 'react-bootstrap/esm/Card'
import CardDeck from 'react-bootstrap/esm/CardDeck'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import sample_img from '../Images/sample_image.svg'
import React from 'react'

const productList = (props) => {
    return (

        <CardDeck>
            <Card>
                <Card.Img variant="top" src={sample_img} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
             </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    )

}

export default productList;
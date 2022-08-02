import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating'


function Product(props) {
    const {product} = props;
    return (
        <Card className="product border border-opacity-25 border-2" >
            <Link to={`/product/${product.slug}`}>
                <img className="card-img-top" src={product.image} alt={product.name} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title className='fs-4'>{product.name}</Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews ={product.numReviews}/>
                <Card.Text className='fs-5'><strong>$ {product.price}</strong></Card.Text>
                <Button className='btn btn-warning'>Add to cart</Button>
            </Card.Body>
        </Card>
    );
}

export default Product;
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating'


function Product(props) {
    const {product} = props;
    return (
        <Card className="product" >
            <Link to={`/product/${product.slug}`}>
                <img className="card-img-top" src={product.image} alt={product.name} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                <Card.Title>{product.name}</Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews ={product.numReviews}/>
                <Card.Text><strong>$ {product.price}</strong></Card.Text>
                <Button className=''>Add to cart</Button>
            </Card.Body>
        </Card>
    );
}

export default Product;
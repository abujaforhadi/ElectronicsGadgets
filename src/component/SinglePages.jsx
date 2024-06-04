import  { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const  SinglePages = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.in/api/products')
      .then(response => {
        console.log(response.data.products, "test");
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  
  return (
    <>
    <div className="container p-5">
      <div className="row">
        {product.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card style={{ width: '18rem', height: '34rem' }}>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>Category: {product.category}</ListGroup.Item>
                <Card.Text className='pl-4'>Description: 
                    { product.description.length > 40 ? product.description.substring(0, 40) + "..." : product.description}
                    </Card.Text>
                <Card.Text>
                <Link to={`product/${product.id}`}>
                  <Button variant="primary"className="center-button">View More</Button>
                </Link>
                </Card.Text>
              </ListGroup>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SinglePages;

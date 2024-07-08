import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navss from "./Navss";
import Footers from "./Footers";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.in/api/products?limit=20")
      .then((response) => {
        console.log(response.data, "testProd");
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>

    <Navss />

    <Container fluid className="p-5">
      <Row className="gy-4">
        {products.map((product) => (
          <Col className="pb-5" key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <Card.Body>
              <Card.Title> {product.title?.length > 90 ? `${product.title?.slice(0, 90)} ..` : product.title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>Category: {product.category}</ListGroup.Item>
              </ListGroup>
              <Card.Footer>
                <Link to={`${product.id}`}>
                  <Button variant="primary">View More</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footers />
    </>
  );
};

export default Products;

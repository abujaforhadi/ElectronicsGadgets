import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navss from "./Navss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footers from "./Footers";

const CustomBrand = () => {
  const { item } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.in/api/products/category?type=${item}`)
      .then((response) => {
        console.log(response.data.products, "testCustomBrand");
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [item]);

  return (
    <>
      <Navss />
      <Container fluid className="p-5">
        <Row className="gy-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body>
                <Card.Title> {product.title?.length > 90 ? `${product.title?.slice(0, 90)} ..` : product.title}</Card.Title>
                  <Card.Text
                    style={{ height: "60px", overflow: "hidden" }}
                  ></Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Price: $ {product.price}</ListGroup.Item>
                  <ListGroup.Item>Category: {product.category}</ListGroup.Item>
                  <Card.Text className="p-3">
                    Description:
                    {product.description.length > 40
                      ? product.description.substring(0, 40) + "..."
                      : product.description}
                  </Card.Text>
                  <Card.Footer>
                    <Link to={`/product/${product.id}`}>
                      <Button variant="primary" className="center-button">
                        View More
                      </Button>
                    </Link>
                  </Card.Footer>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footers />
    </>
  );
};

export default CustomBrand;

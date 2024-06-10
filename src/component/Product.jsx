import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Img1 from "../assets/img/image.jpg";

const Product = () => {
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
       <Image src={Img1} />

      <div className="container p-5">
        <h5 className="text-center">Shop All</h5>
        <div className="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill row justify-content-md-center">
          <Button
            variant="primary"
            size="lg"
            className="rounded-pill size-lg ml-4"
          >
            {" "}
            Mobile{" "}
          </Button>{" "}
          <Button variant="secondary" className="rounded-pill size-lg ml-4">
            Laptop
          </Button>{" "}
          <Button variant="success" className="rounded-pill size-lg ml-4">
            Audio
          </Button>{" "}
          <Button variant="warning" className="rounded-pill size-lg ml-4">
            Gaming
          </Button>{" "}
          <Button variant="danger" className="rounded-pill size-lg ml-4">
            Appliences
          </Button>{" "}
          <Button variant="info" className="rounded-pill size-lg ml-4">
            Television
          </Button>{" "}
        </div>
      </div>

      <div className="container p-5">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <Card style={{ width: "18rem", height: "28rem" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text
                    style={{ height: "60px", overflow: "hidden" }}
                  ></Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                  <ListGroup.Item>Category: {product.category}</ListGroup.Item>
                  <Link to={`product/${product.id}`}>
                    <Button variant="primary">View More</Button>
                  </Link>
                </ListGroup>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;

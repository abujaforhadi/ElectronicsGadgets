import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navss from "./Navss";

const CustomBrand = () => {
  const { item } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.in/api/products/category?type=${item}`)
      .then((response) => {
        console.log(response.data.products, "testCustomBrand");
        setProduct(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [item]);

  return (
    <>
    <Navss />
      <div className="container p-5">
        <div className="row">
          {product.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <Card style={{ width: "18rem", height: "34rem" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Price: $ {item.price}</ListGroup.Item>
                  <ListGroup.Item>Category: {item.category}</ListGroup.Item>
                  <Card.Text className="pl-4">
                    Description:
                    {item.description.length > 40
                      ? item.description.substring(0, 40) + "..."
                      : item.description}
                  </Card.Text>
                  <Card.Text>
                    <Link to={`/product/${item.id}`}>
                      <Button variant="primary" className="center-button">
                        View More
                      </Button>
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

export default CustomBrand;

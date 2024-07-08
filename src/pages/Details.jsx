import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navss from "../component/Navss";
import { SketchPicker } from 'react-color'

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

function Details() {
  
  const [product, setProducts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.in/api/products/${id}`)
      .then((response) => {
        console.log(response.data.product, "testDetails");
        setProducts(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navss />
      
      <div className="d-flex justify-content-center m-5 p-5">
      <MDBCard style={{ maxWidth: '840px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4' className=" ">
          <MDBCardImage  src={product.image}  alt={product.title} fluid />
        </MDBCol>
       
       <MDBCol md='8' >
       <div className="" style={{backgroundColor: "#f7f7f7"}}>
          <MDBCardBody>
            <MDBCardTitle>{product.title}</MDBCardTitle>
            <MDBCardText>
            <small className='text-muted'>{product.description}</small>
              
            </MDBCardText>
            <MDBCardText>
            Price: ${product.price}
            </MDBCardText>
            <Button variant="outline-primary" size="lg" className="mr-2 bg-primary text-white">    Buy   </Button>
          </MDBCardBody>
          </div>
        </MDBCol>
      
      </MDBRow>
    </MDBCard>
      </div>
    </>
  );
}

export default Details;

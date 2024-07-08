import  { useState, useEffect } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';

function Navss (){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.in/api/products/category')
      .then(response => {
        console.log(response.data.categories, "testNav");
        setProducts(response.data.categories);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary bg-primary">
        <Container fluid>
          <Navbar.Brand href="/" className='text-warning font-weight-bold'>X<span className='text-light'>STORE</span> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title={<span className='text-white'>Categories</span>} id="navbarScrollingDropdown">
             
               {
                  products.map((item) => 
                  <NavDropdown.Item key={item.id}><Link   to={`/category/${item}`}> {item} </Link></NavDropdown.Item>
                
                  )
                }
            
                
              </NavDropdown>
              
               {/* <Navbar.Brand title="Products" id="navbarScrollingDropdown">
              {products.map((product) => 
                
                <Link to= {product}>{product}</Link>
              )}
                
              </Navbar.Brand>  */}
              
            </Nav>
            
          </Navbar.Collapse>
          <Link to={"product"}><Navbar.Brand className='text-white font-weight-bold'>Our Products </Navbar.Brand></Link>
        </Container>
      </Navbar>{" "}
    </>
  )
}

export default Navss

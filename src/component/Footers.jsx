import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';


const Footers = () => {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#343a40' }}>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faFacebookF} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faTwitter} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faGoogle} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faInstagram} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/abujaforhadi/' role='button'>
          <FontAwesomeIcon icon={faLinkedinIn} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/abujaforhadi/' role='button'>
          <FontAwesomeIcon icon={faGithub} />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4, pb-4'>
          <p>
            Leading highlighter Brands: Unleash Innovation with our Diverse brand Selection!
          </p>

        </section>

        <section className=''>
          <MDBRow className='row justify-content-md-center'>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Shop XBoss</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Mobile
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Head phones
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Laptops
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Appliances
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Customer Service</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Our Account
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Shopping and returns
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Store Location
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>#JoinXBoss</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Our Story
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Our Blog
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Cookies Setting
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Privacy
                  </a>
                </li>
              </ul>
            </MDBCol>


          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-warning font-weight-bold' href='/home'> X<span className='text-light'>STORE</span>
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footers;
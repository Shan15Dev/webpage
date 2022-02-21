import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon
  } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <div id='footer'>
            <MDBFooter className='text-center' color='white' bgColor='dark'>
                <MDBContainer className='p-4'>
                    <section className='mb-4'>
                        <a className='btn btn-outline-light btn-floating m-1' href='https://twitter.com/Shan15dev' role='button'>
                            <MDBIcon fab icon='twitter' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/shan15dev/' role='button'>
                            <MDBIcon fab icon='instagram' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/Shan15Dev/' role='button'>
                            <MDBIcon fab icon='github' />
                        </a>
                    </section>

                    <section className='mb-4'>
                        <p>
                           According to the imprint requirement of Switzerland, this website does NOT need and imprint because it is intended for private purposes
                        </p>
                    </section>
                </MDBContainer >

                <div className='text-center p-3'>
                    © 2022 Copyright: Shan15Dev
                </div>
            </MDBFooter >
        </div>
  );
}

export default Footer;
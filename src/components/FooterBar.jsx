import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const FooterBar = () => (
  <div className="container-fluid section-black">
      <div className="container">
          <div className="row section">
              <div className="col-md-3 offset-md-2">
                  <h3>Areas covered</h3>
                  <p>UK
                    <br />Europe
                      <br />Asia
                  </p>
              </div>
              <div className="col-md-2">
                  <h3>Follow us</h3>
                  <p>
                      <a href="https://www.instagram.com/nota_labs/" target="_window" style={{background: 'none'}}><i className="fab fa-instagram icon-size-white" style={{marginRight: '20px'}}></i></a>
                      <a href="https://twitter.com/Notalabs1" target="_window" style={{background: 'none'}}><i className="fab fa-twitter-square icon-size-white"></i></a>
                  </p>
              </div>
              <div className="col-md-3">
                  <h3>Get in touch</h3>
                  <p><a href="mailto:hello@notalabs.co.uk">hello@notalabs.co.uk</a></p>
                  <p><a href="tel:08001448810">0800 144 88 10</a></p>
              </div>
          </div>
      </div>
  </div>
)
export default FooterBar;
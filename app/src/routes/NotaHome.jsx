import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container, Heading } from 'styled-minimal';

import logo_nota_labs from '../components/resources/logo_nota_labs.svg'
import btn_expand from '../components/resources/btn_expand.png'
import Channel4_logo from '../components/resources/Channel4_logo.png'
import NPower_logo from '../components/resources/NPower_logo.png'
import Nationwide_logo from '../components/resources/Nationwide_logo.png'
import O2_logo from '../components/resources/O2_logo.png'
import Samsung_logo from '../components/resources/Samsung_logo.png'
import SkySports_logo from '../components/resources/SkySports_logo.png'
import VirginMoney_logo from '../components/resources/VirginMoney_logo.png'
import Vodafone_logo from '../components/resources/Vodafone_logo.png'
import profile_ben_simmonds from '../components/resources/profile_ben_simmonds.png'
import profile_james_odwyer from '../components/resources/profile_james_odwyer.png'

const StyledContainer = styled(Container)`
  align-items: center;
  text-align: center;

  h1,
  a {
    color: #fff;
    line-height: 1;
  }

  a {
    text-decoration: underline;
  }
`;


const Navigation = () => (
    <nav className="navbar navbar-expand-lg fixed-top nav_colour">
        <a className="navbar-brand" href="#top">
            <img src={logo_nota_labs} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" style={{fontSize: '40px'}}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="p-2 text-dark scroll" href="#about" data-toggle="collapse" data-target="#navbarSupportedContent">About</a>
            </li>
            <li className="nav-item">
              <a className="p-2 text-dark scroll" href="#how" data-toggle="collapse" data-target="#navbarSupportedContent">How</a>
            </li>
            <li className="nav-item">   
              <a className="p-2 text-dark scroll" href="#work" data-toggle="collapse" data-target="#navbarSupportedContent">Work</a>
            </li>  
            <li className="nav-item">
              <a className="p-2 text-dark scroll" href="#who" data-toggle="collapse" data-target="#navbarSupportedContent">Who</a>
            </li>
            <li className="nav-item">
              <a className="p-2 text-dark scroll" href="#bottom" data-toggle="collapse" data-target="#navbarSupportedContent">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
);

const Hero = () => (
    <div className="container-fluid padding-hero hero-image" id="top">
        <div className="container">
            <div className="row d-flex">
                <div className="col-12">
                    {/* <!-- Content here --> */}
                    <h1 className="text_center hero fade-in one">People-shaped<br />digital products</h1>
                    <p className="text_center hero-tag fade-in two">user research • product strategy • rapid prototyping • digital design</p>
                </div>
            </div>
        </div>
    </div>
)

const WhoAreWe = () => (
    <div className="container-fluid padding-hero section-image" id="about">
        <div className="container">
            <div className="row section">
                <div className="col-md-8 offset-md-2">
                    {/* <!-- Content here --> */}
                    <h2 className="font-white"><span style={{fontWeight: '400'}}>We're a team of</span> user-experience consultants and product designers.</h2>
                    <h2 className="font-white"><span style={{fontWeight: '400'}}>We focus on one thing: helping companies</span> design digital products around the needs of their users.</h2>
                </div>
            </div>
        </div>
    </div>
)

const How = () => (
    <div className="container-fluid" id="how">
        <div className="container">
            <div className="row section">
                <div className="col-md-8 offset-md-2">
                    {/* <!-- Content here --> */}
                    <h2 className="section_header yellow-block">How:</h2>
                    <h2>Typically we will:</h2>
                    <ul>
                        <li className="disc">Map your users needs <span style={{fontWeight: '400'}}>and</span> product opportunities, <span style={{fontWeight: '400'}}>using a range of research and workshop activities</span></li>
                        <li className="disc">Make and test prototypes, <span style={{fontWeight: '400'}}>quickly finding the version that is most valuable, viable and intuitive</span></li>
                        <li className="disc"><span style={{fontWeight: '400'}}>Create</span> UX and design <span style={{fontWeight: '400'}}>assets that your team needs to build the product efficiently and with consistency</span></li>
                    </ul>
                    {/* <!-- Hidden content here --> */}
                    <h2 className="expand-link example">
                        <a data-toggle="collapse" href=".collapseMe" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Full list of services <img src={btn_expand} className="expand" />
                        </a>
                    </h2>
                    <div className="collapse collapseMe" id="collapseExample">
                        <ul>
                            <li className="disc-none list-heading">Discover opportunities, issues, users needs</li>
                            <li className="disc-none list-heading-small">User-needs research</li>
                            <li className="disc-none list-heading-small">Experience maps, JtBD maps</li>
                            <li className="disc-none list-heading-small">Market opportunity maps</li>
                            <li className="disc-none list-heading-small">Requirements workshops</li>
                            <li className="disc-none list-heading-small">Expert reviews</li>
                            <li className="disc-none list-heading-small">Usability testing</li>
                            {/* <!-- next heading --> */}
                            <li className="disc-none list-heading">Define a winning direction</li>
                            <li className="disc-none list-heading-small">Prioritisation workshops</li>
                            <li className="disc-none list-heading-small">Design sprints</li>
                            <li className="disc-none list-heading-small">Rapid concepting and testing</li>
                            <li className="disc-none list-heading-small">Vision and strategy definition</li>
                            <li className="disc-none list-heading-small">Product roadmapping</li>
                            {/* <!-- next heading --> */}
                            <li className="disc-none list-heading">Design a solid structure</li>
                            <li className="disc-none list-heading-small">IA, content, data structure</li>
                            <li className="disc-none list-heading-small">Mental models, task analysis</li>
                            <li className="disc-none list-heading-small">Service blueprints</li>
                            <li className="disc-none list-heading-small">Journeys and flows</li>
                            <li className="disc-none list-heading-small">Low-fidelity prototyping</li>
                            {/* <!-- next heading --> */}
                            <li className="disc-none list-heading">Design how it looks, feels, works</li>
                            <li className="disc-none list-heading-small">Design systems</li>
                            <li className="disc-none list-heading-small">Psychology in design</li>
                            <li className="disc-none list-heading-small">High-fidelity prototyping</li>
                        </ul>
                    </div>
                    {/* <!-- end of hidden content --> */}
                </div>
            </div>
        </div>
    </div>
)

const Work = () => (
    <div className="container-fluid light_grey" id="work">
        <div className="container">
            <div className="row section">
                <div className="col-md-8 offset-md-2">
                    {/* <!-- Content here --> */}
                    <h2 className="section_header yellow-block">Work</h2>
                    <h2>Speak to us about how we've helped:</h2>
                    <ul>
                        <li className="disc"><span style={{fontWeight: '400'}}>A high-street bank design a new simplified investment service</span></li>
                        <li className="disc"><span style={{fontWeight: '400'}}>02 redesign their website to increase product findability and customer self-service</span></li>
                        <li className="disc"><span style={{fontWeight: '400'}}>Nationwide speed up customer-servicing by redesigning their digital tool-set</span></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-5 offset-md-2 offset-1">
                    <img src={Channel4_logo} className="img-fluid" />
                </div>
                <div className="col-5">
                    <img src={NPower_logo} className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col-5 offset-md-2 offset-1">
                    <img src={Nationwide_logo} className="img-fluid" />
                </div>
                <div className="col-5">
                    <img src={O2_logo} className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col-5 offset-md-2 offset-1">
                    <img src={Samsung_logo} className="img-fluid" />
                </div>
                <div className="col-5">
                    <img src={SkySports_logo} className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col-5 offset-md-2 offset-1">
                    <img src={VirginMoney_logo} className="img-fluid" />
                </div>
                <div className="col-5">
                    <img src={Vodafone_logo} className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
)

const AboutUs = () => (
    <div className="container-fluid" id="who">
        <div className="container">
            <div className="row section">
                <div className="col-md-8 offset-md-2">
                    <h2 className="section_header yellow-block">Who</h2>
                </div>
                <div className="col-md-4 offset-md-2">
                    {/* <!-- Content here --> */}
                    <div className="profile_box profile-padding">
                        <img src={profile_ben_simmonds} className="profile_image" />
                        <h3 className="margin-top-20">Ben Simmonds</h3>
                        <p>Experience Director</p>
                        <p><a href="https://www.linkedin.com/in/ben-simmonds-0312922/" target="_blank"><i className="fab fa-linkedin icon-size"></i></a></p>
                    </div>
                    {/* <!--<div className="profile_box profile-padding">
                      <img src={profile_james_odwyer} className="profile_image">
                      <H3 className="margin-top-20">Fergus Lean</H3>
                      <p>Design Director</p>
                      <p><i className="fab fa-linkedin"></i></p>
                  </div>--> */}
                </div>
                <div className="col-md-4">
                    {/* <!-- Content here --> */}
                    <div className="profile_box profile-padding">
                        <img src={profile_james_odwyer} className="profile_image" />
                        <h3 className="margin-top-20">James O'Dwyer</h3>
                        <p>Design Director</p>
                        <p><a href="https://www.linkedin.com/in/jamesodwyer/" target="_blank"><i className="fab fa-linkedin icon-size"></i></a></p>
                    </div>
                    {/* <!--<div className="profile_box profile-padding">
                      <img src={profile_james_odwyer} className="profile_image">
                      <H3 className="margin-top-20">Trusted specialist partners</H3>
                      <p>Development, Project Management...</p>
                      <p><i className="fab fa-linkedin" style="color: white;"></i></p>
                  </div>--> */}
                </div>
            </div>
        </div>
    </div>
)

const GetInTouch = () => (
    <div className="container-fluid light_grey" id="bottom">
        <div className="container">
            <div className="row section">
                <div className="col-md-8 offset-md-2">
                    {/* <!-- Content here --> */}
                    <h2 className="section_header yellow-block"><a href="mailto:hello@notalabs.co.uk" style={{color: 'black'}}>Get in touch if you're looking to:</a></h2>
                    <span style={{fontWeight: '400'}}>
                        <ul>
                            <li className="disc"><span style={{fontWeight: '400'}}>Get a clearer picture of your customers needs</span></li>
                            <li className="disc"><span style={{fontWeight: '400'}}>Spot new product opportunities</span></li>
                            <li className="disc"><span style={{fontWeight: '400'}}>Know the right thing to build... before building the wrong thing</span></li>
                            <li className="disc"><span style={{fontWeight: '400'}}>Identify existing usability problems</span></li>
                            <li className="disc"><span style={{fontWeight: '400'}}>Build a 'vision' product prototype</span></li>
                            <li className="disc"><span style={{fontWeight: '400'}}>Build a product feature roadmap</span></li>
                            <li className="disc"><span style={{fontWeight: '400'}}>Create quality UX and design assets ready for build</span></li>
                        </ul>
                    </span>
                    <br /><br />
                    <a href="mailto:hello@notalabs.co.uk"><button type="button" className="btn btn-primary btn-lg btn-block">Get in touch</button></a>
                </div>
            </div>
        </div>
    </div>
)

const Footer = () => (
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

const NotaHome = () => (
    <div>
        <Navigation />
        <Hero />
        <WhoAreWe />
        <How />
        <Work />
        <AboutUs />
        <GetInTouch />
        <Footer />
    </div>
);

export default NotaHome;

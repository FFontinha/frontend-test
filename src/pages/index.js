import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Topbar from '../components/topbar'
import Image from '../components/image'

import usersIcon from './../../resources/icon_for_users.svg';
import logoIcon from './../../resources/favicon-32x32.png';



import 'bootstrap/dist/css/bootstrap.min.css';


// styles
const title = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Roboto, Arial',
  padding: '20px',
  color: '#484644',
}

const blueTitle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Roboto, Arial',
  padding: '20px',
  color: 'DodgerBlue'
}

const description = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: 'Arial',
  color: '#484644',
  fontSize: '20px',
}

const userIcon = {
  position: 'relative',
  right: '15px',
  bottom: '8px',
  maxHeight: '32px',
  maxWidth: '32px',
}

const logo = {
  maxHeight: '40px',
  maxWidth: '40px',
}



// markup
const IndexPage = () => {
  return (
    <main>
      <Topbar/>
      <Container>
        <div className ="mt-5" style={title}>
          <img style={userIcon} src={usersIcon} alt="titleIcon"></img><h2><strong>FOR USERS</strong></h2>
        </div>
        <div style={description}>
          <aside>Content management and collaboration for a better workflow</aside>
        </div>
      </Container>
      <hr className="my-5"/>
      <Container>
        <div name="Drive" className ="mt-5">
          <Row>
            <Col xs={12} md={6}>
              <div className="my-auto">
                <h2 style={blueTitle}><strong>Drive</strong></h2>
                <aside className="my-3" style={description}>Content management with version control and advanced search</aside>
                <p style={description}><a href="#">Learn more ></a></p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Image style={{ width: '100%' }} fileName="drive.png" alt="Drive" />
            </Col>
          </Row>
          <br/><br/>
          <Row>
            <Col xs={12} md={12}>
              <p style={description}>Designed for power users in professional services who demand advanced features and increased productivity</p>
            </Col>
          </Row>
        </div>
      </Container>
        <hr className="my-5"/>
      <Container>
        <div name="Reader" className ="mt-5">
          <Row>
            <Col xs={{span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <Image style={{ width: '100%' }} fileName="reader.png"  alt="Reader"/>
            </Col>
            <Col xs={{span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
              <div>
                <h2 style={blueTitle}><strong>Reader</strong></h2>
                <aside className="my-3" style={description}>Viewer of cloud content including PDFs, websites, images and more</aside>
                <p style={description}><a href="#">Learn more ></a></p>
              </div>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs={12} md={12}>
              <p style={description}>A file viewer for all your content in Synergy Drive, with a cohesive user interface and functionality</p>
            </Col>
          </Row>
        </div>
      </Container>
      <hr className="my-5"/>
      <Container>
        <div name="Compare" className ="mt-5">
          <Row>
            <Col xs={12} md={6}>
              <div>
                <h2 style={blueTitle}><strong>Compare</strong></h2>
                <aside className="my-3" style={description}>Compare different versions of Microsoft Office files</aside>
                <p style={description}><a href="#">Learn more ></a></p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Image style={{ width: '100%' }} fileName="compare.png"  alt="Compare"/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs={12} md={12}>
              <p style={description}>Find every change in your documents easily, with its full integration with Synergy Drive’s version control functionality</p>
            </Col>
          </Row>
        </div>
      </Container>
      <hr className="my-5"/>
      <Container>
        <div name="References" className ="mt-5">
          <Row>
            <Col xs={{span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <Image style={{ width: '100%' }} fileName="references.png"  alt="References"/>
            </Col>
            <Col xs={{span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
              <div>
                <h2 style={blueTitle}><strong>References</strong></h2>
                <aside className="my-3" style={description}>Keep track and review all your sources of information</aside>
                <p style={description}><a href="#">Learn more ></a></p>
              </div>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs={12} md={12}>
              <p style={description}>Integrated into Microsoft Office, you can insert and track all the original information you are using in your documents</p>
            </Col>
          </Row>
        </div>
      </Container>
      <footer style={{ width: '100%' }} className="bg-light text-center mt-5">
          <h2>CONTACT</h2>
          <p>Synergy Cloud is limited to a select number of partners at the moment. If you are interested in learning more, please reach out using the chat functionality or by email:</p>
          <a href="mailto:hello@synergy.page">hello@synergy.page</a>
          <p className="mt-5"><img style={logo} src={logoIcon} alt="Logo Icon"></img></p>
          <div className="mt-5">
            <ul style={{'display':'inline'}}>
              <li className="mx-3" style={{'display':'inline'}}><a href="#">Privacy Policy</a></li>
              <li className="mx-3" style={{'display':'inline'}}><a  href="#">Terms and Conditions</a></li>
            </ul>
          <br/><br/>
          </div>

      </footer>
    </main>

  );
}

export default IndexPage

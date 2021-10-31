import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';

function EachFeature(props) {
  return (
    <div className="feature-container">
      <Row>
        <Col>
          <div className="description">
            <h2 className="title">{props.title}</h2>
            <h3 className="subTitle">{props.subTitle}</h3>
            <ol>{props.step1}</ol>
            <ol>{props.step2}</ol>
            <ol>{props.step3}</ol>
            <ol>{props.step4}</ol>
          </div>
        </Col>
        <Col>
          <video 
            className="video" 
            src={props.video} 
            width="700" 
            height="400" 
            controls="controls" 
          />
        </Col>
      </Row>
    </div>
  ); 
}

export default EachFeature; 
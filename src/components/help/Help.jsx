import React from 'react';
import './Help.css';
import { Form, Button } from 'react-bootstrap';

function FrequentQuestions(props) {
  return(
    <details className="container details-container">
      <summary>{props.question}</summary>
      {props.answer}
    </details>
  ); 
}; 

function EmailForm() {
  return(
    <Form className="container chat-container">
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="John Smith" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button className="chat-submit" variant="outline-secondary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

function Help() {
  return (
    <div>
      <h1 className="page-title container">H E L P</h1>
      <div className="section help-section">
        <h2 className="container sub-heading">Frequently Asked Questions:</h2>
        <FrequentQuestions 
          question="The page did not load correcly."
          answer="Try refreshing the page. If the issue persist please reach out to our custumer services. 
          Phone: 1-800-123-4567 Email: customerservices@cryptotracker.com "
        />
        <FrequentQuestions 
          question="How do I edit my portfolio?"
          answer="Please go to our Features page for more information on how to edit your portfolio."
        />
        <FrequentQuestions 
          question="How do I search for a specific coin?"
          answer="Please go to our Search page to search for a specific coin."
        />
        <FrequentQuestions 
          question="The coin I bought went up, what should I do?"
          answer="Watch and enjoy this video. https://www.youtube.com/watch?v=NUYvbT6vTPs"
        />
      </div>
      <div className="section help-section">
        <h2 className="container sub-heading">Chat with us:</h2>
        <EmailForm />
      </div>
      <div className="section help-section">
        <h2 className="container sub-heading">Call us:</h2>
        <h3 className="container">1-800-123-4567</h3>
      </div>
    </div>
  );
}; 

export default Help;
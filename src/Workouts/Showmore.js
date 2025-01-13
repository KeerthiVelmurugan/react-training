import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Showmore = () => {

    let content = `The sun dipped below the horizon, casting a warm glow across the tranquil lake.
    In the bustling city, people hurriedly walked by, lost in their own thoughts and ambitions.
    The old bookstore smelled of aged paper and ink, a haven for those seeking literary treasures.
    High above, a flock of birds soared through the sky, painting patterns with their synchronized flight.`
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card">

        <Container>
            <Row>
                <Col>
      <Card>
        
        {showMore ? content : `${content.slice(0, 100)}...`}
      
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
      </Card>
      </Col>
      <Col>
      <Card>
        
        {showMore ? content : `${content.slice(0, 100)}...`}
      
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
      </Card>
      </Col>
      </Row>
      </Container>
      
    </div>
  );
};

export default Showmore;

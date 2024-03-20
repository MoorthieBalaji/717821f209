import React, { useState, useEffect } from 'react';
import jsonData from './products.json'; 
import { Card } from 'react-bootstrap';
function Sproducts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div>
      <h1>PRODUCTS</h1>
      <div className="card-container text-center mt-5" style={{marginLeft:'500px'}}>
        {data && data.items.map(item => (
          <Card key={item.id} style={{ backgroundColor:'sandybrown',width: '18rem', margin: '10px' }}>
            <Card.Body>
              <Card.Title>{item.productname}</Card.Title>
              <Card.Text>
                PRICE: {item.price}
              </Card.Text>
              <Card.Text>
                RATING: {item.rating}
              </Card.Text>
              <Card.Text>
                DISCOUNT: {item.discount}
              </Card.Text>
              <Card.Text>
                AVAILABILITY: {item.availability}
              </Card.Text>

            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Sproducts;

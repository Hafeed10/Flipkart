// Pages.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './pages.css';
import logo1 from '../../asstes/images/1.webp';
import logo2 from '../../asstes/images/2.webp';
import logo5 from '../../asstes/images/6.webp';

const Card = (props) => (
  <div className="card">
    <img src={props.imgUrl} alt={props.alt || 'Image'} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {props.cards.map((card) => (
      <Card
        key={card.id}
        title={card.title}
        // content={card.content}
        imgUrl={card.imgUrl}
      />
    ))}
  </div>
);

class Pages extends React.Component {
  render() {
    const cardsData = [
      { id: 1, title: 'Realme.C51',imgUrl: logo1 },
      { id: 2, title: 'Realme.C51', imgUrl: logo2 },
      { id: 3, title: 'Realme.C51', imgUrl: logo2 },
      { id: 4, title: 'Realme.C51',imgUrl: logo1 },
      { id: 5, title: 'Realme.C51', imgUrl: logo2 },
      { id: 6, title: 'Realme.C51', imgUrl: logo2 },
      // ... (add more data as needed)
    ];

    return (
      <div className="container1">
        <div className='mop'>
          <CardContainer cards={cardsData} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Pages />, document.getElementById('root'));

export default Pages;

import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:"http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:"https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating:4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image:"http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating:4.8
  },
  {
    id:4,
    name: "Doncasu",
    image:"https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating:4.7
  },
  {
    id:5,
    name: "Kimbap",
    image:"http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating:4.6
  }
];

Food.propTypes = {  // proptypes의 안정성를 높히기위한는 고드
  name: PropTypes.string.isRequired,          //name의 proptypes의 자료형이 string이 아니면 페이지->검사->콘송에서 경고를 줌
  picture: PropTypes.string.isRequired,      //picture의 proptypes의 자료형이 string가 페이지->검사->콘송에서 아니면 경고를 줌
  rating: PropTypes.number        //rating의 proptypes의 자료형이 number가 페이지->검사->콘송에서 아니면 경고를 줌
};


function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return ( 
  <div>
    {foodILike.map(dish => (
    <Food 
      key={dish.id} 
      name={dish.name} 
      picture={dish.image} 
      rating={dish.rating} 
    />))}
    </div>
  ); 
}

export default App;

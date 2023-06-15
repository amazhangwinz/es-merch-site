import React from 'react';
import ItemCard from '../components/ItemCard';

const Homepage = () => {
  return (
    <div>
      <h1>
        HOME PAGE
      </h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
        <ItemCard title='test' description='this is a description' image='https://st1.latestly.com/wp-content/uploads/2023/05/John-Cena-Dancing-With-Headphones.jpg' colours={['blue']} price={12.99}/>
        <ItemCard title='test' description='this is a description' image='https://st1.latestly.com/wp-content/uploads/2023/05/John-Cena-Dancing-With-Headphones.jpg' colours={['blue']} price={12.99}/>
        <ItemCard title='test' description='this is a description' image='https://st1.latestly.com/wp-content/uploads/2023/05/John-Cena-Dancing-With-Headphones.jpg' colours={['blue']} price={12.99}/>
        <ItemCard title='test' description='this is a description' image='https://st1.latestly.com/wp-content/uploads/2023/05/John-Cena-Dancing-With-Headphones.jpg' colours={['blue']} price={12.99}/>
        <ItemCard title='test' description='this is a description' image='https://st1.latestly.com/wp-content/uploads/2023/05/John-Cena-Dancing-With-Headphones.jpg' colours={['blue']} price={12.99}/>
        <ItemCard title='test' description='this is a description' image='https://st1.latestly.com/wp-content/uploads/2023/05/John-Cena-Dancing-With-Headphones.jpg' colours={['blue']} price={12.99}/>
        <ItemCard title='test' description='this is a description' image='https://st1.latestly.com/wp-content/uploads/2023/05/John-Cena-Dancing-With-Headphones.jpg' colours={['blue']} price={12.99}/>
        <ItemCard title='test' description='this is a description' image='https://st1.latestly.com/wp-content/uploads/2023/05/John-Cena-Dancing-With-Headphones.jpg' colours={['blue']} price={12.99}/>
      </div>

    </div>

  )
}

export default Homepage;

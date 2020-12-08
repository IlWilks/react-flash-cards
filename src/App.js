import React from "react"
import './App.css';
import { Container, Header } from 'semantic-ui-react';
import Cards from "./Cards";
import CardForm from "./CardForm";

class App extends React.Component {

  state = {
    cards: [
      {id:1, question:"What is 2+2?", answer:"4"},
      {id:2, question:"What is the capitol of the US?", answer:"Washington D.C."},
      {id:3, question:"What country has the largest population?", answer:"India"},
    ]
  }
  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addCard = (cardData) => {
    let card = {id:this.getId(), ...cardData}
    this.setState({cards:[card, ...this.state.cards], })
  }

  removeCard = (id) => {
    let cards = this.state.cards.filter((card) => card.id !== id);
    this.setState({cards})
  }

  render() {
  return (
    <Container>
      <Header as="h1">React Flash Cards</Header>
      <Cards cards={this.state.cards} remove={this.removeCard}/>
      <Container>
        <Header as="h2">Add Flash Card</Header>
        <CardForm add={this.addCard}/>
      </Container>
    </Container>
  );
  }
}

export default App;

import React from "react"
import './App.css';
import { Container, Header } from 'semantic-ui-react';
import Cards from "./Cards";
import CardForm from "./CardForm";

class App extends React.Component {

  state = {
    cards: [
      {id:1, question:"What is 2+2?", answer:"4", showSide: true, editForm: false},
      {id:2, question:"What is the capitol of the US?", answer:"Washington D.C.", showSide: true, editForm: false},
      {id:3, question:"What country has the largest population?", answer:"India", showSide: true, editForm: false},
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

  flipCard = (id) => {
    let flippedCards = this.state.cards.map((c)=> {
      if (c.id !== id) {
        return c
      }
      return {...c, showSide:!c.showSide}
    })
    this.setState({cards: flippedCards})
  }

  updateCard = (updateCard) => {
    console.log("changed")
    console.log(updateCard)
    let updatedcards = this.state.cards.map((c) => {
      if (c.id === updateCard.id) {
        return {...updateCard, showSide: true}
      }
      return c
    });

    this.setState({ cards: updatedcards });
  }

  editToggle = (id) => {
    console.log("editt")
    let editedcards = this.state.cards.map((c) => {
      if (c.id !== id) {
        return c
      }
      return {...c, editForm:!c.editForm}
    })
    this.setState({ cards: editedcards });

  }

  render() {
  const { cards } = this.state;
  return (
    <Container>
      <Header as="h1">React Flash Cards</Header>
      <Cards cards={cards} 
              remove={this.removeCard}
              flip={this.flipCard}
              edit={this.editToggle}
              updateHandler ={this.updateCard}/>
      <Container>
        <Header as="h2">Add Flash Card</Header>
        <CardForm add={this.addCard}/>
      </Container>
    </Container>
  );
  }
}

export default App;

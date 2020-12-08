import React from "react"
import { Button, Container, Table } from "semantic-ui-react"
import Card from "./Card";
const Cards = ({cards, remove, flip, edit, updateHandler}) => (
  <Table celled padded>
    <Table.Body>
      {
        cards.map( card => ( 
          <Card key={card.id} {...card} 
                remove = {remove}   
                flip = {flip}
                edit = {edit}
                updateHandler = {updateHandler}
                />
        ))
      }
    </Table.Body>
  </Table>
)

export default Cards;
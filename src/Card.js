import React from "react"
import { Button, Table } from "semantic-ui-react"
import CardForm from "./CardForm";

const Card = ({id, question, answer, showSide, editForm, remove, flip, edit, updateHandler}) => {
  return (
  <Table.Row>
    <Table.Cell>{showSide ? question : answer}</Table.Cell>
    <Table.Cell>
      <Button color="blue" onClick={()=>remove(id)}>
        Delete
      </Button>
      <Button color="green" onClick={()=>flip(id)}>
        Flip
      </Button>
      <Button floated="right" color="yellow" onClick ={()=>edit(id)}>
        Edit
      </Button>
    </Table.Cell>
    {editForm &&(
    <Table.Cell>
      <CardForm
          id={id}
          question={question}
          answer={answer}
          edit = {edit}
          updateCard = {updateHandler}
      />
    </Table.Cell>
    )}
  </Table.Row> 
  )
}

export default Card
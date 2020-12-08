import React from "react"
import { Button, Table } from "semantic-ui-react"

const Card = ({id, question, answer, showSide, remove, flip}) => (
  <Table.Row>
    <Table.Cell>{showSide ? question : answer}</Table.Cell>
    <Table.Cell>
      <Button color="blue" onClick={()=>remove(id)}>
        Delete
      </Button>
      <Button color="green" onClick={()=>flip(id)}>
        Flip
      </Button>
    </Table.Cell>
  </Table.Row> 
  )

export default Card
import React from "react"
import { useState } from "react";
import { Form } from "semantic-ui-react"
const CardForm = (props) => {
  const [question, setQuestion] = useState(props.question ? props.question : "");
  const [answer, setAnswer] = useState(props.answer ? props.answer : "");

  const [card, setCard] = useState({ Tquestion: "", Tanswer: "" });

  const handleSubmit = () => {
    if (props.id) {
      props.updateCard({ question, answer, id: props.id });
    } else {
      props.add({question, answer})
    }
    setQuestion("");
    setAnswer("");
  };
  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value});
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
      <Form.Input 
        name="Tquestion"
        label="Question"
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
        placeholder="question"
        />
        <Form.Input 
          name="Tanswer"
          label="Answer"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
          placeholder="answer"
         />
        <Form.Button>Submit</Form.Button>
      </Form.Group>
    </Form>
    )
}

export default CardForm
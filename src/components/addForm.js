import React from "react";
import { MdAddBox } from "react-icons/md";
import { Button, Form } from "react-bootstrap";

export default function addForm({
  addToDo,
  addSubToDo,
  value,
  hideAdd,
  helpText
}) {
  const [text, setText] = React.useState("");
  let handleAddToDo = (text) => {
    addSubToDo ? addSubToDo(value, text) : addToDo(text);

    setText("");
    hideAdd && hideAdd();
  };

  return (
    <Form>
      <Form.Group controlId="addToDo">
        <Form.Label>{helpText ? helpText : "Add ToDo"}</Form.Label>
        <Form.Control
          value={text}
          type="text"
          placeholder={helpText ? helpText : "Enter ToDo"}
          onChange={(event) => setText(event.target.value)}
        />
        <Form.Text className="text-muted">Add anything you want ToDo</Form.Text>
        <Button
          clasName={"addNew"}
          onClick={() => handleAddToDo(text)}
          disabled={(text.length === 0 || !text.trim()) && true}
        >
          <MdAddBox />
        </Button>
      </Form.Group>
    </Form>
  );
}

import React from "react";
import { MdDone, MdClose } from "react-icons/md";
import { Button, Form } from "react-bootstrap";

export default function EditForm({
  parent,
  text,
  editToDo,
  hideEdit,
  editSubToDo
}) {
  const [value, setValue] = React.useState(text);

  let updateToDo = (parent, text, newValue, editToDo, editSubToDo) => {
    editSubToDo
      ? editSubToDo(parent, text, newValue)
      : editToDo(text, newValue);
    hideEdit(false);
  };

  return (
    <Form>
      <Form.Group controlId="addToDo">
        <Form.Label>Edit ToDo</Form.Label>
        <Form.Control
          className={"editToDo"}
          type="text"
          placeholder="Enter new ToDo"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Form.Text className="text-muted">Modify your ToDo</Form.Text>
        <Button
          className={"update"}
          onClick={() => updateToDo(parent, text, value, editToDo, editSubToDo)}
        >
          <MdDone />
        </Button>
        <Button
          className={"cancel"}
          variant="danger"
          onClick={() => hideEdit()}
        >
          <MdClose />
        </Button>
      </Form.Group>
    </Form>
  );
}

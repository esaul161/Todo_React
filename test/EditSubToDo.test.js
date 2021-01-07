import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../src/App";
import { mount, configure } from "enzyme";

configure({ adapter: new Adapter() });
test("Editing sub ToDo", () => {
  const wrapper = mount(<App />);
  //ToDos array need to be empty at the beginning
  expect(wrapper.find(".list-group").first().props().children.length).toEqual(
    0
  );

  //The button need to be disabled at the beginning
  expect(wrapper.find("button").props().disabled).toEqual(true);

  //Adding a ToDo to the list
  const input = wrapper.find("input");
  input.simulate("focus");
  input.simulate("change", { target: { value: "foo" } });
  input.simulate("blur");
  wrapper.update();

  //checking the value of the ToDo added need to be eaual to foo
  expect(wrapper.find("input").props().value).toEqual("foo");

  //After setting a value on the input the button need to be enabled
  expect(wrapper.find("button").props().disabled).toEqual(false);

  //Adding the ToDo to the list
  wrapper.find("button").simulate("click");

  //Checnking the list again need to be only One ToDo
  expect(wrapper.find(".list-group").first().props().children.length).toEqual(
    1
  );

  //Click on the add button
  wrapper.find(".add").first().simulate("click");

  const subInput = wrapper.find("input").last();
  subInput.simulate("focus");
  subInput.simulate("change", { target: { value: "sub foo" } });
  subInput.simulate("blur");
  wrapper.update();

  //Click on the add button
  wrapper.find(".btn").last().simulate("click");

  //Click expand to see the list of sub ToDos
  wrapper.find(".expand").first().simulate("click");

  wrapper.find(".editSubToDo").first().simulate("click");

  const newInput = wrapper.find(".editToDo").first();
  newInput.simulate("focus");
  newInput.simulate("change", { target: { value: "sub testfoo" } });
  newInput.simulate("blur");
  wrapper.update();

  //Clicking on update to save the new sub ToDo value
  wrapper.find(".update").first().simulate("click");

  //checking the updated value of the sub ToDo
  expect(wrapper.find(".nameSubToDo").props().children).toEqual("sub testfoo");
});

test("Cancel editing sub ToDo", () => {
  const wrapper = mount(<App />);
  //ToDos array need to be empty at the beginning
  expect(wrapper.find(".list-group").first().props().children.length).toEqual(
    0
  );

  //The button need to be disabled at the beginning
  expect(wrapper.find("button").props().disabled).toEqual(true);

  //Adding a ToDo to the list
  const input = wrapper.find("input");
  input.simulate("focus");
  input.simulate("change", { target: { value: "foo" } });
  input.simulate("blur");
  wrapper.update();

  //checking the value of the ToDo added need to be eaual to foo
  expect(wrapper.find("input").props().value).toEqual("foo");

  //After setting a value on the input the button need to be enabled
  expect(wrapper.find("button").props().disabled).toEqual(false);

  //Adding the ToDo to the list
  wrapper.find("button").simulate("click");

  //Checnking the list again need to be only One ToDo
  expect(wrapper.find(".list-group").first().props().children.length).toEqual(
    1
  );

  //Click on the add button
  wrapper.find(".add").first().simulate("click");

  const subInput = wrapper.find("input").last();
  subInput.simulate("focus");
  subInput.simulate("change", { target: { value: "sub foo" } });
  subInput.simulate("blur");
  wrapper.update();

  //Click on the add button
  wrapper.find(".btn").last().simulate("click");

  //Click expand to see the list of sub ToDos
  wrapper.find(".expand").first().simulate("click");

  wrapper.find(".editSubToDo").first().simulate("click");

  const newInput = wrapper.find(".editToDo").first();
  newInput.simulate("focus");
  newInput.simulate("change", { target: { value: "sub testfoo" } });
  newInput.simulate("blur");
  wrapper.update();

  //Clicking on cancel to not save the new ToDo value
  wrapper.find(".cancel").first().simulate("click");

  //checking the updated value of the sub ToDo
  expect(wrapper.find(".nameSubToDo").props().children).toEqual("sub foo");
});

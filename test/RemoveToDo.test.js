import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../src/App";
import { mount, configure } from "enzyme";

configure({ adapter: new Adapter() });
test("Delete ToDo", () => {
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

  //Deleting the added ToDo
  wrapper.find(".delete").first().simulate("click");

  //Checnking the list again need to be empty
  expect(wrapper.find(".list-group").first().props().children.length).toEqual(
    0
  );
});

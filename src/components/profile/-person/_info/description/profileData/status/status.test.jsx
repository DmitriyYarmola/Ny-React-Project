import React from "react";
import { create } from "react-test-renderer";
import Status from "./status";

describe("Profile Status Component", () => {
  test("Status from props should be in the state", () => {
    const component = create(<Status status="SUBSCRIBE" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("SUBSCRIBE");
  });

  test("Checked span", () => {
    const component = create(<Status status="SUBSCRIBE" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("Checked input", () => {
    const component = create(<Status status="SUBSCRIBE" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("Checked text in span", () => {
    const component = create(<Status status="SUBSCRIBE" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("SUBSCRIBE");
  });

  test("Input should be displayed editMode istead of span", () => {
    const component = create(<Status status="SUBSCRIBE" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("SUBSCRIBE");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn()
    const component = create(<Status status="SUBSCRIBE" updateUserStatus={mockCallback}/>);
    const instance = component.getInstance()
    instance.deActivedEditMode()
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});

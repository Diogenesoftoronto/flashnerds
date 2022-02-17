import React from "react";

import { render, cleanup } from "@testing-library/react";

// import component
// mock data
mock = 
  [ {id: 1,
  deck_id: 1,
  question: "hello world",
  answer: "bye world",
  likes: 2}, 
  {id: 2,
    deck_id: 2,
    question: "yo world",
    answer: "bro world",
    likes: 4} 
]
afterEach(cleanup);

test("renders without crashing", () => {
  render(<Flashcard />)
})
// should render the front of the card with the text 'hello world'
test("should render front of card with question", () => {

  const { getByText } = render(<Flashcard {...mock[0]} />)
  expect(getByText("hello world")).toBeInTheDocument();
})
// should render the back of the card with the text 'bye world'
test("should render back of card with answer", () => {

  const { getByText } = render(<Flashcard {...mock[1]}  />)
  fireEvent.click(screen.getByText('reveal'))
  expect(getByText(mock[1].answer)).toBeInTheDocument();
})
// should remove card 
test("should remove card and render empty", () => {

  const { getByText } = render(<Flashcard {...mock[0]} />);
  fireEvent.click(screen.getByText('remove'))
  expect(getByText(mock[0].question)).not.toBeInTheDocument();
})
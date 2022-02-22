import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import FlashcardPost from '../components/FlashcardPost';

const comments = [
  {
    id: 1,
    avatar: "https://i.imgur.com/LpaY82x.png",
    userName: "Bobby",
    content: "This is a comment.",
    likes: 20,
    timestamp: 1645483654553
  },
  {
    id: 2,
    avatar: "https://i.imgur.com/LpaY82x.png",
    userName: "Bobby's Twin",
    content: "This is another comment.",
    likes: 200,
    timestamp: 1645483650000
  }
];

const question = "Question";
const answer = "Answer";
const likes = 0;


function Home() {
  const { currentUser } = useAuth();

  // return (
  //   <div>
  //     Home: {currentUser.name}
  //   </div>
  // )




  return (
    <div>
      <header className="page-title">
        <h1>Dashboard</h1>
        Home: {currentUser && currentUser.name}
      </header>
      <FlashcardPost
        question={question}
        answer={answer}
        likes={likes}
        onBack={() => alert("onBack")}
        onNext={() => alert("onNext")}
        comments={comments}
        />
    </div>
  );

}

export default Home
import React from 'react'

function useGetComments() {
     const comments = [
    "This is a great point!",
    "I completely agree with this.",
    "Interesting perspective, I hadn't thought of it that way.",
    "Could you elaborate on this further?",
    "Thanks for sharing this insightful comment.",
    "Well said!",
    "This resonates with me.",
    "I'm learning a lot from this discussion.",
    "Excellent contribution!",
    "Keep up the good work!",
  ];
  return comments[Math.floor(Math.random() * comments.length)];
}

export default useGetComments;

 

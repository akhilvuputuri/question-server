const express = require('express');
const app = express();

const topicsList = [
  "MileLion",
  "Stocks Discussion",
  "Investments",
  "Insurance",
  "Property",
  "Credit Card",
  "Savings",
  "Lifestyle",
  "Family",
  "Retirement",
  "Career",
  "CPF"
]

const questions = [
  {
    topics: new Set(["Savings", "Bank-Account", "Credit-Card", "OCBC-360", "UOB-One"]),
    title: "Should I consider OCBC 360 Account or UOB ONE Account?",
    profile: "Jacqueline Yan, Content Strategist at Seedly",
    answer: "Hi Anon! Since your concern is being able to hit the $500 credit card minimum spend for higher interest, I'd say OCBC 360 is a better choice?...",
  },
  {
    topics: new Set(["Bank-Account", "Savings", "DBS-Multiplier", "DBS", "Mile-Lion", "Credit-Card"]),
    title: "Will paying for Simplygo registered as a cc spending under DBS multiplier",
    author: "Chan Seng Hoong",
    answer: "Yes, simplygo expenditure counts towards credit card spending.",
  }
]

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.get('/questions', (req, res) => {
  res.send(questions);
})

app.get('/questions/:topic', (req, res) => {
  const filteredQuestions = questions.filter( question => question.topics.has(req.params.topic))
  res.send(filteredQuestions);
})

app.get('/topicsList', (req, res) => {
  res.send(topicsList)
})

port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
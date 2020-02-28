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
  "CPF",
  "Loans",
  "Savings Account",
  "Payments",
  "Entrepreneurship",
  "Multi Currency Cards"
]

const questions = [
  {
    topics: ["Savings", "Bank Account", "Credit Card", "OCBC 360", "UOB One"],
    title: "Should I consider OCBC 360 Account or UOB ONE Account?",
    author: "Jacqueline Yan, Content Strategist at Seedly",
    answer: "Hi Anon! Since your concern is being able to hit the $500 credit card minimum spend for higher interest, I'd say OCBC 360 is a better choice?...",
  },
  {
    topics: ["Bank Account", "Savings", "DBS Multiplier", "DBS", "Mile Lion", "Credit Card"],
    title: "Will paying for Simplygo registered as a cc spending under DBS multiplier",
    author: "Chan Seng Hoong",
    answer: "Yes, simplygo expenditure counts towards credit card spending.",
  },
  {
    topics: ["Investments"],
    title: "What is your top buys during this market downturn?",
    author: "Citibank Cashback + Card — worth applying?",
    answer: "Asia Equity. Has been my favourite for a long time. Here is everything about me and what I do best."
  },
  {
    topics: ["Career", "General"],
    title: "Should I stay in my job? What would be the possible repercussions if I leave after only 5 months?",
    author: "Andy Sim, HR Professional at a Financial Institution",
    answer: "Hi Anon, \n\n Aside from pay, you've to ask yourself if the company/role that you are in provides you with lots of opportunities to showcase your value? Does the company listens and recognises your contribution and make you feel valued? Does the company provide you with learning and development opportunities to help develop your career? Does the company provide good benefits like flexi working/time or outpatient medical/inpatient cover? Do you have great collegues?\n\nPay is only one part of a bigger equation to help you evaluate if a company is good or not. Please try to avoid job hopping JUST because of your pay unless you have a very valid reason that you can explain to your future company.\n\nPossible repercussions? Your next company might not even want to put you through an interview if they find that your stint in any company is only a few months."
  },
  {
    topics: ["Education", "Career"],
    title: "I do not have any degree. Should I consider part time study in my mid 30s?",
    author: "Davin Lee W J",
    answer: "If yr kids alr grown up and required less attention, no harm to go back to school. I have many friends go back to campus for post graduate at mid 30s.\n\nIf u r employed, the degree will definitely b vy helpful for yr next job as most of the company still treat academic qualification as requirement for certain position."
  },
  {
    topics: ["Robo-Advisors", "Investments"],
    title: "Heard that UOB is coming out with another Robo-Advisor, can anyone confirm this? Thoughts on it if it's true?",
    author: "Davin Lee W J",
    answer: "Every other day there will be a new robo advisor come out to the market, we r not here to collect Pokemon. So stick to 1 or 2 robo advisor that u feel comfortable with. I choose 1 as they r pioneer in Singapore n still active in the market today. They may not b the best but it's the 1 I feel comfortable with and reachable when I need answer."
  },
  {
    topics: ["Undergraduate", "Education", "Career"],
    title: "How important are internships?",
    author: "Rais M",
    answer: "As an undergraduate at NUS, I believe you have the option of going for both the exchange program as well as internship.\n\nHowever, if given a choice, I would opt for internship. Internship is the time for you to gain relevant working experience. As an employer, and if I were to hire a fresh grad, I would choose someone who went for internship over someone who do not."
  },
  {
    topics: ["Education", "Career", "Undergraduate"],
    title: "The Business Admin Courses in Singapore: NUS vs SMU vs NTU. Which is the best and why?",
    author: "Andy Sim, HR Professional at a Financial Institution",
    answer: "Graduated from NTU Biz so am biased towards NTU biz course haha.\n\nReason is simple: 3 years degree course, can start work earlier, have a headstart amongst the rest.\n\nBut this 3 unis biz courses are mostly the same here and there. If you are fortunate enough to make it to local unis, it's already a blessing. Employment opportunities are aplenty if you know how to present yourself well to the employers and be yourself in front of them. Make full use of your time in uni to build up your portfolio, learn transferrable skills and most importantly, do your work well."
  },
  {
    topics: ["Property", "Investments", "Credit Card", "Stocks Discussion"],
    title: "Now that the economy is heading into crisis, Is it a good time to start buying stocks and hold for the future",
    author: "Pascal S, MBA Graduate at Singapore Management University",
    answer: "Yes, it is."
  },
]

app.get('/', (req, res) => {
  res.send("Hello World");
});

// app.get('/questions/author/:author', (req, res) => {
//   res.send(questions);
// })

app.get('/questions/:topic', (req, res) => {
  if (req.params.topic === "all") {
    res.send(questions);
    } else {
    const filteredQuestions = questions.filter( question => question.topics.includes(req.params.topic))
    res.send(filteredQuestions);
  }
})

app.get('/topicsList', (req, res) => {
  res.send(topicsList)
})

port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
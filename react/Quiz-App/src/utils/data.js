export const quizes = [
  {
    quizId: "abcd",
    title: "General Knowledge Quiz",
    description: "A basic quiz to test your general knowledge.",
    category: "General Knowledge",
    language: "en",
    tags: ["geography", "history", "science"],
    questions: [
      {
        questionId: "q1",
        question: "What is the capital of France?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Berlin",
            explanation: "Capital of Germany",
          },
          {
            optionId: "b",
            answer: "Madrid",
            explanation: "Capital of Spain",
          },
          {
            optionId: "c",
            answer: "Paris",
            explanation: "Capital of France",
          },
          {
            optionId: "d",
            answer: "Rome",
            explanation: "Capital of Italy",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Great job! Paris is the capital of France.",
          incorrect: "Oops! The correct answer is Paris.",
        },
        hint: "It’s a European city.",
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "Which planet is known as the Red Planet?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Venus",
            explanation: "Known for its thick atmosphere.",
          },
          {
            optionId: "b",
            answer: "Mars",
            explanation: "Known as the Red Planet.",
          },
          {
            optionId: "c",
            answer: "Jupiter",
            explanation: "Largest planet in the solar system.",
          },
          {
            optionId: "d",
            answer: "Saturn",
            explanation: "Famous for its rings.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Mars is known as the Red Planet.",
          incorrect: "Oops! The correct answer is Mars.",
        },
        hint: "It has a reddish appearance.",
        difficulty: "easy",
      },
      {
        questionId: "q3",
        question: "What is the largest ocean on Earth?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Atlantic Ocean",
            explanation: "Second-largest ocean.",
          },
          {
            optionId: "b",
            answer: "Indian Ocean",
            explanation: "Third-largest ocean.",
          },
          {
            optionId: "c",
            answer: "Arctic Ocean",
            explanation: "Smallest ocean.",
          },
          {
            optionId: "d",
            answer: "Pacific Ocean",
            explanation: "Largest ocean in the world.",
          },
        ],
        correctAnswer: "d",
        feedback: {
          correct: "Great! The Pacific Ocean is the largest ocean on Earth.",
          incorrect: "Oops! The correct answer is the Pacific Ocean.",
        },
        hint: "It covers more than 30% of Earth's surface.",
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "Who wrote the play 'Romeo and Juliet'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "William Shakespeare",
            explanation: "The famous playwright.",
          },
          {
            optionId: "b",
            answer: "Charles Dickens",
            explanation: "Known for novels like 'Oliver Twist'.",
          },
          {
            optionId: "c",
            answer: "Jane Austen",
            explanation: "Famous for novels like 'Pride and Prejudice'.",
          },
          {
            optionId: "d",
            answer: "Mark Twain",
            explanation: "Known for 'The Adventures of Tom Sawyer'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Shakespeare wrote 'Romeo and Juliet'.",
          incorrect: "Oops! The correct answer is William Shakespeare.",
        },
        hint: "He is famous for his plays and sonnets.",
        difficulty: "easy",
      },
      {
        questionId: "q5",
        question: "Which element has the chemical symbol 'O'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Oxygen",
            explanation: "The element with the symbol 'O'.",
          },
          {
            optionId: "b",
            answer: "Osmium",
            explanation: "A dense metal, but not 'O'.",
          },
          {
            optionId: "c",
            answer: "Ozone",
            explanation:
              "Ozone contains oxygen, but is not the same as the element.",
          },
          {
            optionId: "d",
            answer: "Opium",
            explanation: "A drug, not an element.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'O' is the symbol for Oxygen.",
          incorrect: "Oops! The correct answer is Oxygen.",
        },
        hint: "It's essential for breathing.",
        difficulty: "easy",
      },
      {
        questionId: "q6",
        question: "In which country would you find the Great Barrier Reef?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Australia",
            explanation:
              "The Great Barrier Reef is located off the coast of Australia.",
          },
          {
            optionId: "b",
            answer: "United States",
            explanation: "The USA does not have the Great Barrier Reef.",
          },
          {
            optionId: "c",
            answer: "Mexico",
            explanation: "Mexico does not have the Great Barrier Reef.",
          },
          {
            optionId: "d",
            answer: "South Africa",
            explanation: "South Africa does not have the Great Barrier Reef.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The Great Barrier Reef is in Australia.",
          incorrect: "Oops! The correct answer is Australia.",
        },
        hint: "It is one of the largest coral reefs in the world.",
        difficulty: "medium",
      },
      {
        questionId: "q7",
        question: "What is the largest animal on Earth?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Elephant",
            explanation: "Largest land animal.",
          },
          {
            optionId: "b",
            answer: "Blue Whale",
            explanation: "The largest animal, both in size and weight.",
          },
          {
            optionId: "c",
            answer: "Giraffe",
            explanation: "Tallest land animal, but not the largest overall.",
          },
          {
            optionId: "d",
            answer: "Shark",
            explanation: "Sharks are large, but the Blue Whale is larger.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! The Blue Whale is the largest animal on Earth.",
          incorrect: "Oops! The correct answer is the Blue Whale.",
        },
        hint: "It lives in the ocean and can grow up to 100 feet long.",
        difficulty: "medium",
      },
      {
        questionId: "q8",
        question: "What is the chemical formula for water?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "H2O",
            explanation:
              "Water consists of two hydrogen atoms and one oxygen atom.",
          },
          {
            optionId: "b",
            answer: "CO2",
            explanation: "CO2 is carbon dioxide, not water.",
          },
          {
            optionId: "c",
            answer: "O2",
            explanation: "O2 is the formula for oxygen, not water.",
          },
          {
            optionId: "d",
            answer: "H2O2",
            explanation: "H2O2 is hydrogen peroxide, not water.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! H2O is the chemical formula for water.",
          incorrect: "Oops! The correct answer is H2O.",
        },
        hint: "It’s essential for life on Earth.",
        difficulty: "easy",
      },
      {
        questionId: "q9",
        question: "Which continent is the largest by area?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Africa",
            explanation: "Africa is large, but not the largest.",
          },
          {
            optionId: "b",
            answer: "Asia",
            explanation: "Asia is the largest continent.",
          },
          {
            optionId: "c",
            answer: "North America",
            explanation: "North America is not the largest.",
          },
          {
            optionId: "d",
            answer: "Antarctica",
            explanation: "Antarctica is large, but Asia is larger.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Asia is the largest continent by area.",
          incorrect: "Oops! The correct answer is Asia.",
        },
        hint: "It is home to the largest population and many countries.",
        difficulty: "medium",
      },
      {
        questionId: "q10",
        question: "Who developed the theory of general relativity?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Isaac Newton",
            explanation: "Newton developed the laws of motion and gravity.",
          },
          {
            optionId: "b",
            answer: "Albert Einstein",
            explanation: "Einstein developed the theory of general relativity.",
          },
          {
            optionId: "c",
            answer: "Nikola Tesla",
            explanation:
              "Tesla was known for his work in electromagnetism, not relativity.",
          },
          {
            optionId: "d",
            answer: "Marie Curie",
            explanation:
              "Curie was a physicist known for her research on radioactivity.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct:
            "Correct! Albert Einstein developed the theory of general relativity.",
          incorrect: "Oops! The correct answer is Albert Einstein.",
        },
        hint: "His theory revolutionized our understanding of space and time.",
        difficulty: "hard",
      },
    ],
  },
  {
    quizId: "efgh",
    title: "Science Quiz",
    description: "Test your knowledge on basic science concepts.",
    category: "Science",
    language: "en",
    tags: ["physics", "biology", "chemistry"],
    questions: [
      {
        questionId: "q1",
        question: "What is the capital of France?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Berlin",
            explanation: "Capital of Germany",
          },
          {
            optionId: "b",
            answer: "Madrid",
            explanation: "Capital of Spain",
          },
          {
            optionId: "c",
            answer: "Paris",
            explanation: "Capital of France",
          },
          {
            optionId: "d",
            answer: "Rome",
            explanation: "Capital of Italy",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Great job! Paris is the capital of France.",
          incorrect: "Oops! The correct answer is Paris.",
        },
        hint: "It’s a European city.",
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "Which planet is known as the Red Planet?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Venus",
            explanation: "Known for its thick atmosphere.",
          },
          {
            optionId: "b",
            answer: "Mars",
            explanation: "Known as the Red Planet.",
          },
          {
            optionId: "c",
            answer: "Jupiter",
            explanation: "Largest planet in the solar system.",
          },
          {
            optionId: "d",
            answer: "Saturn",
            explanation: "Famous for its rings.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Mars is known as the Red Planet.",
          incorrect: "Oops! The correct answer is Mars.",
        },
        hint: "It has a reddish appearance.",
        difficulty: "easy",
      },
      {
        questionId: "q3",
        question: "What is the largest ocean on Earth?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Atlantic Ocean",
            explanation: "Second-largest ocean.",
          },
          {
            optionId: "b",
            answer: "Indian Ocean",
            explanation: "Third-largest ocean.",
          },
          {
            optionId: "c",
            answer: "Arctic Ocean",
            explanation: "Smallest ocean.",
          },
          {
            optionId: "d",
            answer: "Pacific Ocean",
            explanation: "Largest ocean in the world.",
          },
        ],
        correctAnswer: "d",
        feedback: {
          correct: "Great! The Pacific Ocean is the largest ocean on Earth.",
          incorrect: "Oops! The correct answer is the Pacific Ocean.",
        },
        hint: "It covers more than 30% of Earth's surface.",
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "Who wrote the play 'Romeo and Juliet'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "William Shakespeare",
            explanation: "The famous playwright.",
          },
          {
            optionId: "b",
            answer: "Charles Dickens",
            explanation: "Known for novels like 'Oliver Twist'.",
          },
          {
            optionId: "c",
            answer: "Jane Austen",
            explanation: "Famous for novels like 'Pride and Prejudice'.",
          },
          {
            optionId: "d",
            answer: "Mark Twain",
            explanation: "Known for 'The Adventures of Tom Sawyer'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Shakespeare wrote 'Romeo and Juliet'.",
          incorrect: "Oops! The correct answer is William Shakespeare.",
        },
        hint: "He is famous for his plays and sonnets.",
        difficulty: "easy",
      },
      {
        questionId: "q5",
        question: "Which element has the chemical symbol 'O'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Oxygen",
            explanation: "The element with the symbol 'O'.",
          },
          {
            optionId: "b",
            answer: "Osmium",
            explanation: "A dense metal, but not 'O'.",
          },
          {
            optionId: "c",
            answer: "Ozone",
            explanation:
              "Ozone contains oxygen, but is not the same as the element.",
          },
          {
            optionId: "d",
            answer: "Opium",
            explanation: "A drug, not an element.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'O' is the symbol for Oxygen.",
          incorrect: "Oops! The correct answer is Oxygen.",
        },
        hint: "It's essential for breathing.",
        difficulty: "easy",
      },
      {
        questionId: "q6",
        question: "In which country would you find the Great Barrier Reef?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Australia",
            explanation:
              "The Great Barrier Reef is located off the coast of Australia.",
          },
          {
            optionId: "b",
            answer: "United States",
            explanation: "The USA does not have the Great Barrier Reef.",
          },
          {
            optionId: "c",
            answer: "Mexico",
            explanation: "Mexico does not have the Great Barrier Reef.",
          },
          {
            optionId: "d",
            answer: "South Africa",
            explanation: "South Africa does not have the Great Barrier Reef.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The Great Barrier Reef is in Australia.",
          incorrect: "Oops! The correct answer is Australia.",
        },
        hint: "It is one of the largest coral reefs in the world.",
        difficulty: "medium",
      },
      {
        questionId: "q7",
        question: "What is the largest animal on Earth?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Elephant",
            explanation: "Largest land animal.",
          },
          {
            optionId: "b",
            answer: "Blue Whale",
            explanation: "The largest animal, both in size and weight.",
          },
          {
            optionId: "c",
            answer: "Giraffe",
            explanation: "Tallest land animal, but not the largest overall.",
          },
          {
            optionId: "d",
            answer: "Shark",
            explanation: "Sharks are large, but the Blue Whale is larger.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! The Blue Whale is the largest animal on Earth.",
          incorrect: "Oops! The correct answer is the Blue Whale.",
        },
        hint: "It lives in the ocean and can grow up to 100 feet long.",
        difficulty: "medium",
      },
      {
        questionId: "q8",
        question: "What is the chemical formula for water?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "H2O",
            explanation:
              "Water consists of two hydrogen atoms and one oxygen atom.",
          },
          {
            optionId: "b",
            answer: "CO2",
            explanation: "CO2 is carbon dioxide, not water.",
          },
          {
            optionId: "c",
            answer: "O2",
            explanation: "O2 is the formula for oxygen, not water.",
          },
          {
            optionId: "d",
            answer: "H2O2",
            explanation: "H2O2 is hydrogen peroxide, not water.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! H2O is the chemical formula for water.",
          incorrect: "Oops! The correct answer is H2O.",
        },
        hint: "It’s essential for life on Earth.",
        difficulty: "easy",
      },
      {
        questionId: "q9",
        question: "Which continent is the largest by area?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Africa",
            explanation: "Africa is large, but not the largest.",
          },
          {
            optionId: "b",
            answer: "Asia",
            explanation: "Asia is the largest continent.",
          },
          {
            optionId: "c",
            answer: "North America",
            explanation: "North America is not the largest.",
          },
          {
            optionId: "d",
            answer: "Antarctica",
            explanation: "Antarctica is large, but Asia is larger.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Asia is the largest continent by area.",
          incorrect: "Oops! The correct answer is Asia.",
        },
        hint: "It is home to the largest population and many countries.",
        difficulty: "medium",
      },
      {
        questionId: "q10",
        question: "Who developed the theory of general relativity?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Isaac Newton",
            explanation: "Newton developed the laws of motion and gravity.",
          },
          {
            optionId: "b",
            answer: "Albert Einstein",
            explanation: "Einstein developed the theory of general relativity.",
          },
          {
            optionId: "c",
            answer: "Nikola Tesla",
            explanation:
              "Tesla was known for his work in electromagnetism, not relativity.",
          },
          {
            optionId: "d",
            answer: "Marie Curie",
            explanation:
              "Curie was a physicist known for her research on radioactivity.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct:
            "Correct! Albert Einstein developed the theory of general relativity.",
          incorrect: "Oops! The correct answer is Albert Einstein.",
        },
        hint: "His theory revolutionized our understanding of space and time.",
        difficulty: "hard",
      },
    ],
  },
  {
    quizId: "ijkl",
    title: "World History Quiz",
    description: "Test your knowledge of world history.",
    category: "History",
    language: "en",
    tags: ["ancient", "medieval", "modern"],
    questions: [
      {
        questionId: "q1",
        question: "Who was the first president of the United States?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "George Washington",
            explanation: "He served as the first president from 1789 to 1797.",
          },
          {
            optionId: "b",
            answer: "Thomas Jefferson",
            explanation:
              "Third president of the U.S., known for writing the Declaration of Independence.",
          },
          {
            optionId: "c",
            answer: "Abraham Lincoln",
            explanation:
              "Sixteenth president, known for the Emancipation Proclamation.",
          },
          {
            optionId: "d",
            answer: "James Madison",
            explanation: "Fourth president, known for the War of 1812.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! George Washington was the first president.",
          incorrect: "Oops! The correct answer is George Washington.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "What year did World War II end?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "1941",
            explanation:
              "U.S. entered World War II in 1941, but the war continued.",
          },
          {
            optionId: "b",
            answer: "1945",
            explanation:
              "World War II ended in 1945 after the defeat of Germany and Japan.",
          },
          {
            optionId: "c",
            answer: "1950",
            explanation:
              "The Korean War started in 1950, but World War II ended in 1945.",
          },
          {
            optionId: "d",
            answer: "1939",
            explanation:
              "World War II began in 1939, but did not end until 1945.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! World War II ended in 1945.",
          incorrect: "Oops! The correct answer is 1945.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q3",
        question: "What is the capital of France?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Berlin",
            explanation: "Capital of Germany.",
          },
          {
            optionId: "b",
            answer: "Madrid",
            explanation: "Capital of Spain.",
          },
          {
            optionId: "c",
            answer: "Paris",
            explanation: "Capital of France.",
          },
          {
            optionId: "d",
            answer: "Rome",
            explanation: "Capital of Italy.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Great job! Paris is the capital of France.",
          incorrect: "Oops! The correct answer is Paris.",
        },
        hint: "It’s a European city.",
        difficulty: "easy",
      },
      {
        questionId: "q4",
        question: "Which planet is known as the Red Planet?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Venus",
            explanation: "Known for its thick atmosphere.",
          },
          {
            optionId: "b",
            answer: "Mars",
            explanation: "Known as the Red Planet.",
          },
          {
            optionId: "c",
            answer: "Jupiter",
            explanation: "Largest planet in the solar system.",
          },
          {
            optionId: "d",
            answer: "Saturn",
            explanation: "Famous for its rings.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Mars is known as the Red Planet.",
          incorrect: "Oops! The correct answer is Mars.",
        },
        hint: "It has a reddish appearance.",
        difficulty: "easy",
      },
      {
        questionId: "q5",
        question: "What is the largest ocean on Earth?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Atlantic Ocean",
            explanation: "Second-largest ocean.",
          },
          {
            optionId: "b",
            answer: "Indian Ocean",
            explanation: "Third-largest ocean.",
          },
          {
            optionId: "c",
            answer: "Arctic Ocean",
            explanation: "Smallest ocean.",
          },
          {
            optionId: "d",
            answer: "Pacific Ocean",
            explanation: "Largest ocean in the world.",
          },
        ],
        correctAnswer: "d",
        feedback: {
          correct: "Great! The Pacific Ocean is the largest ocean on Earth.",
          incorrect: "Oops! The correct answer is the Pacific Ocean.",
        },
        hint: "It covers more than 30% of Earth's surface.",
        difficulty: "medium",
      },
      {
        questionId: "q6",
        question: "Who wrote the play 'Romeo and Juliet'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "William Shakespeare",
            explanation: "The famous playwright.",
          },
          {
            optionId: "b",
            answer: "Charles Dickens",
            explanation: "Known for novels like 'Oliver Twist'.",
          },
          {
            optionId: "c",
            answer: "Jane Austen",
            explanation: "Famous for novels like 'Pride and Prejudice'.",
          },
          {
            optionId: "d",
            answer: "Mark Twain",
            explanation: "Known for 'The Adventures of Tom Sawyer'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Shakespeare wrote 'Romeo and Juliet'.",
          incorrect: "Oops! The correct answer is William Shakespeare.",
        },
        hint: "He is famous for his plays and sonnets.",
        difficulty: "easy",
      },
      {
        questionId: "q7",
        question: "Which element has the chemical symbol 'O'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Oxygen",
            explanation: "The element with the symbol 'O'.",
          },
          {
            optionId: "b",
            answer: "Osmium",
            explanation: "A dense metal, but not 'O'.",
          },
          {
            optionId: "c",
            answer: "Ozone",
            explanation:
              "Ozone contains oxygen, but is not the same as the element.",
          },
          {
            optionId: "d",
            answer: "Opium",
            explanation: "A drug, not an element.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'O' is the symbol for Oxygen.",
          incorrect: "Oops! The correct answer is Oxygen.",
        },
        hint: "It's essential for breathing.",
        difficulty: "easy",
      },
      {
        questionId: "q8",
        question: "In which country would you find the Great Barrier Reef?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Australia",
            explanation:
              "The Great Barrier Reef is located off the coast of Australia.",
          },
          {
            optionId: "b",
            answer: "United States",
            explanation: "The USA does not have the Great Barrier Reef.",
          },
          {
            optionId: "c",
            answer: "Mexico",
            explanation: "Mexico does not have the Great Barrier Reef.",
          },
          {
            optionId: "d",
            answer: "South Africa",
            explanation: "South Africa does not have the Great Barrier Reef.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The Great Barrier Reef is in Australia.",
          incorrect: "Oops! The correct answer is Australia.",
        },
        hint: "It is one of the largest coral reefs in the world.",
        difficulty: "medium",
      },
      {
        questionId: "q9",
        question: "What is the largest animal on Earth?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Elephant",
            explanation: "Largest land animal.",
          },
          {
            optionId: "b",
            answer: "Blue Whale",
            explanation: "The largest animal, both in size and weight.",
          },
          {
            optionId: "c",
            answer: "Giraffe",
            explanation: "Tallest land animal, but not the largest overall.",
          },
          {
            optionId: "d",
            answer: "Shark",
            explanation: "Sharks are large, but the Blue Whale is larger.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! The Blue Whale is the largest animal on Earth.",
          incorrect: "Oops! The correct answer is the Blue Whale.",
        },
        hint: "It lives in the ocean and can grow up to 100 feet long.",
        difficulty: "medium",
      },
      {
        questionId: "q10",
        question: "What year did the first man land on the moon?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "1965",
            explanation: "The moon landing occurred in 1969, not 1965.",
          },
          {
            optionId: "b",
            answer: "1969",
            explanation:
              "Neil Armstrong and Buzz Aldrin landed on the moon in 1969.",
          },
          {
            optionId: "c",
            answer: "1971",
            explanation: "The first moon landing was in 1969, not 1971.",
          },
          {
            optionId: "d",
            answer: "1973",
            explanation: "The first moon landing was in 1969, not 1973.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! The first manned moon landing took place in 1969.",
          incorrect: "Oops! The correct answer is 1969.",
        },
        hint: "Neil Armstrong was the first to walk on the moon.",
        difficulty: "medium",
      },
    ],
  },
  {
    quizId: "mnop",
    title: "Geography Quiz",
    description: "How well do you know the world’s geography?",
    category: "Geography",
    language: "en",
    tags: ["countries", "capitals", "landmarks"],
    questions: [
      {
        questionId: "q1",
        question: "Which is the largest country in the world by area?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "China",
            explanation:
              "China is the most populous country, but not the largest by area.",
          },
          {
            optionId: "b",
            answer: "Canada",
            explanation: "Canada is the second-largest country by area.",
          },
          {
            optionId: "c",
            answer: "Russia",
            explanation:
              "Russia is the largest country in the world by land area.",
          },
          {
            optionId: "d",
            answer: "United States",
            explanation: "The U.S. is large, but not the largest by area.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Correct! Russia is the largest country by area.",
          incorrect: "Oops! The correct answer is Russia.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "What is the capital of Australia?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Sydney",
            explanation: "Sydney is the most famous city, but not the capital.",
          },
          {
            optionId: "b",
            answer: "Melbourne",
            explanation: "Melbourne is a major city, but not the capital.",
          },
          {
            optionId: "c",
            answer: "Canberra",
            explanation: "Canberra is the capital city of Australia.",
          },
          {
            optionId: "d",
            answer: "Brisbane",
            explanation:
              "Brisbane is a large city in Australia, but not the capital.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Correct! Canberra is the capital of Australia.",
          incorrect: "Oops! The correct answer is Canberra.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q3",
        question: "What year did World War II end?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "1941",
            explanation:
              "U.S. entered World War II in 1941, but the war continued.",
          },
          {
            optionId: "b",
            answer: "1945",
            explanation:
              "World War II ended in 1945 after the defeat of Germany and Japan.",
          },
          {
            optionId: "c",
            answer: "1950",
            explanation:
              "The Korean War started in 1950, but World War II ended in 1945.",
          },
          {
            optionId: "d",
            answer: "1939",
            explanation:
              "World War II began in 1939, but did not end until 1945.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! World War II ended in 1945.",
          incorrect: "Oops! The correct answer is 1945.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "Who was the first president of the United States?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "George Washington",
            explanation: "He served as the first president from 1789 to 1797.",
          },
          {
            optionId: "b",
            answer: "Thomas Jefferson",
            explanation:
              "Third president of the U.S., known for writing the Declaration of Independence.",
          },
          {
            optionId: "c",
            answer: "Abraham Lincoln",
            explanation:
              "Sixteenth president, known for the Emancipation Proclamation.",
          },
          {
            optionId: "d",
            answer: "James Madison",
            explanation: "Fourth president, known for the War of 1812.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! George Washington was the first president.",
          incorrect: "Oops! The correct answer is George Washington.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q5",
        question: "What is the largest ocean on Earth?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Atlantic Ocean",
            explanation: "Second-largest ocean.",
          },
          {
            optionId: "b",
            answer: "Indian Ocean",
            explanation: "Third-largest ocean.",
          },
          {
            optionId: "c",
            answer: "Arctic Ocean",
            explanation: "Smallest ocean.",
          },
          {
            optionId: "d",
            answer: "Pacific Ocean",
            explanation: "Largest ocean in the world.",
          },
        ],
        correctAnswer: "d",
        feedback: {
          correct: "Great! The Pacific Ocean is the largest ocean on Earth.",
          incorrect: "Oops! The correct answer is the Pacific Ocean.",
        },
        hint: "It covers more than 30% of Earth's surface.",
        difficulty: "medium",
      },
      {
        questionId: "q6",
        question: "Who wrote the play 'Romeo and Juliet'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "William Shakespeare",
            explanation: "The famous playwright.",
          },
          {
            optionId: "b",
            answer: "Charles Dickens",
            explanation: "Known for novels like 'Oliver Twist'.",
          },
          {
            optionId: "c",
            answer: "Jane Austen",
            explanation: "Famous for novels like 'Pride and Prejudice'.",
          },
          {
            optionId: "d",
            answer: "Mark Twain",
            explanation: "Known for 'The Adventures of Tom Sawyer'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Shakespeare wrote 'Romeo and Juliet'.",
          incorrect: "Oops! The correct answer is William Shakespeare.",
        },
        hint: "He is famous for his plays and sonnets.",
        difficulty: "easy",
      },
      {
        questionId: "q7",
        question: "Which element has the chemical symbol 'O'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Oxygen",
            explanation: "The element with the symbol 'O'.",
          },
          {
            optionId: "b",
            answer: "Osmium",
            explanation: "A dense metal, but not 'O'.",
          },
          {
            optionId: "c",
            answer: "Ozone",
            explanation:
              "Ozone contains oxygen, but is not the same as the element.",
          },
          {
            optionId: "d",
            answer: "Opium",
            explanation: "A drug, not an element.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'O' is the symbol for Oxygen.",
          incorrect: "Oops! The correct answer is Oxygen.",
        },
        hint: "It's essential for breathing.",
        difficulty: "easy",
      },
      {
        questionId: "q8",
        question: "In which country would you find the Great Barrier Reef?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Australia",
            explanation:
              "The Great Barrier Reef is located off the coast of Australia.",
          },
          {
            optionId: "b",
            answer: "United States",
            explanation: "The USA does not have the Great Barrier Reef.",
          },
          {
            optionId: "c",
            answer: "Mexico",
            explanation: "Mexico does not have the Great Barrier Reef.",
          },
          {
            optionId: "d",
            answer: "South Africa",
            explanation: "South Africa does not have the Great Barrier Reef.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The Great Barrier Reef is in Australia.",
          incorrect: "Oops! The correct answer is Australia.",
        },
        hint: "It is one of the largest coral reefs in the world.",
        difficulty: "medium",
      },
      {
        questionId: "q9",
        question: "What is the largest animal on Earth?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Elephant",
            explanation: "Largest land animal.",
          },
          {
            optionId: "b",
            answer: "Blue Whale",
            explanation: "The largest animal, both in size and weight.",
          },
          {
            optionId: "c",
            answer: "Giraffe",
            explanation: "Tallest land animal, but not the largest overall.",
          },
          {
            optionId: "d",
            answer: "Shark",
            explanation: "Sharks are large, but the Blue Whale is larger.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! The Blue Whale is the largest animal on Earth.",
          incorrect: "Oops! The correct answer is the Blue Whale.",
        },
        hint: "It lives in the ocean and can grow up to 100 feet long.",
        difficulty: "medium",
      },
      {
        questionId: "q10",
        question: "What year did the first man land on the moon?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "1965",
            explanation: "The moon landing occurred in 1969, but not 1965.",
          },
          {
            optionId: "b",
            answer: "1969",
            explanation:
              "Neil Armstrong and Buzz Aldrin landed on the moon in 1969.",
          },
          {
            optionId: "c",
            answer: "1971",
            explanation: "The first moon landing was in 1969, not 1971.",
          },
          {
            optionId: "d",
            answer: "1973",
            explanation: "The first moon landing was in 1969, not 1973.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! The first manned moon landing took place in 1969.",
          incorrect: "Oops! The correct answer is 1969.",
        },
        hint: "Neil Armstrong was the first to walk on the moon.",
        difficulty: "medium",
      },
    ],
  },
  {
    quizId: "qrst",
    title: "Famous People Quiz",
    description: "How well do you know the famous personalities from history?",
    category: "Famous People",
    language: "en",
    tags: ["history", "celebrities", "leaders"],
    questions: [
      {
        questionId: "q1",
        question:
          "Who was the first woman to fly solo across the Atlantic Ocean?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Amelia Earhart",
            explanation: "Amelia Earhart made history with her solo flight.",
          },
          {
            optionId: "b",
            answer: "Marie Curie",
            explanation: "Marie Curie was a pioneering scientist, not a pilot.",
          },
          {
            optionId: "c",
            answer: "Harriet Tubman",
            explanation:
              "Harriet Tubman was a key figure in the abolition movement.",
          },
          {
            optionId: "d",
            answer: "Rosie the Riveter",
            explanation:
              "Rosie the Riveter is an iconic symbol, not a historical person.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct:
            "Correct! Amelia Earhart was the first woman to fly solo across the Atlantic.",
          incorrect: "Oops! The correct answer is Amelia Earhart.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q2",
        question: "Who is known as the 'Father of India'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Jawaharlal Nehru",
            explanation:
              "Nehru was India's first Prime Minister, but not the 'Father of India'.",
          },
          {
            optionId: "b",
            answer: "Mahatma Gandhi",
            explanation:
              "Mahatma Gandhi is known as the 'Father of India' for his role in the independence movement.",
          },
          {
            optionId: "c",
            answer: "Subhas Chandra Bose",
            explanation:
              "Bose was a prominent leader but not referred to as the 'Father of India'.",
          },
          {
            optionId: "d",
            answer: "Bhagat Singh",
            explanation:
              "Bhagat Singh was a revolutionary, but not known as the 'Father of India'.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Mahatma Gandhi is known as the 'Father of India'.",
          incorrect: "Oops! The correct answer is Mahatma Gandhi.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q3",
        question: "Who was the first woman to win a Nobel Prize?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Marie Curie",
            explanation:
              "Marie Curie won two Nobel Prizes, one in Physics and another in Chemistry.",
          },
          {
            optionId: "b",
            answer: "Dorothy Hodgkin",
            explanation:
              "Dorothy Hodgkin was awarded the Nobel Prize in Chemistry, but not first.",
          },
          {
            optionId: "c",
            answer: "Rosalind Franklin",
            explanation:
              "Rosalind Franklin made crucial contributions to the discovery of DNA but did not win a Nobel Prize.",
          },
          {
            optionId: "d",
            answer: "Malala Yousafzai",
            explanation:
              "Malala Yousafzai won the Nobel Peace Prize, but she was not the first woman to win a Nobel.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct:
            "Correct! Marie Curie was the first woman to win a Nobel Prize.",
          incorrect: "Oops! The correct answer is Marie Curie.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question:
          "Who was the first woman to become a Supreme Court Justice in the United States?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Ruth Bader Ginsburg",
            explanation:
              "Ruth Bader Ginsburg was a key figure in the U.S. Supreme Court but was not the first female justice.",
          },
          {
            optionId: "b",
            answer: "Sandra Day O'Connor",
            explanation:
              "Sandra Day O'Connor was the first woman appointed to the U.S. Supreme Court in 1981.",
          },
          {
            optionId: "c",
            answer: "Sonia Sotomayor",
            explanation:
              "Sonia Sotomayor was appointed to the Supreme Court later, but was not the first female justice.",
          },
          {
            optionId: "d",
            answer: "Elena Kagan",
            explanation:
              "Elena Kagan became a Supreme Court Justice but was not the first woman in the position.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct:
            "Correct! Sandra Day O'Connor was the first woman to become a U.S. Supreme Court Justice.",
          incorrect: "Oops! The correct answer is Sandra Day O'Connor.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q5",
        question:
          "Who was the first woman to be elected as the Prime Minister of the United Kingdom?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Theresa May",
            explanation:
              "Theresa May became Prime Minister in 2016, but she was not the first woman to hold this role.",
          },
          {
            optionId: "b",
            answer: "Margaret Thatcher",
            explanation:
              "Margaret Thatcher was the first female Prime Minister of the UK, serving from 1979 to 1990.",
          },
          {
            optionId: "c",
            answer: "Harriet Harman",
            explanation:
              "Harriet Harman served as acting Prime Minister temporarily but was never elected as the Prime Minister.",
          },
          {
            optionId: "d",
            answer: "Elizabeth II",
            explanation:
              "Queen Elizabeth II was a monarch, not a prime minister.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct:
            "Correct! Margaret Thatcher was the first woman elected as Prime Minister of the UK.",
          incorrect: "Oops! The correct answer is Margaret Thatcher.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q6",
        question: "Who was the first female astronaut to travel into space?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Sally Ride",
            explanation:
              "Sally Ride was the first American woman in space, in 1983.",
          },
          {
            optionId: "b",
            answer: "Valentina Tereshkova",
            explanation:
              "Valentina Tereshkova was the first woman to fly into space in 1963, as a Soviet cosmonaut.",
          },
          {
            optionId: "c",
            answer: "Mae Jemison",
            explanation:
              "Mae Jemison became the first African American woman to go into space, but not the first female astronaut.",
          },
          {
            optionId: "d",
            answer: "Eileen Collins",
            explanation:
              "Eileen Collins was the first female space shuttle pilot, but not the first woman in space.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct:
            "Correct! Valentina Tereshkova was the first female astronaut in space.",
          incorrect: "Oops! The correct answer is Valentina Tereshkova.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q7",
        question: "Who was the first woman to win a solo Olympic gold medal?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Helen Wills Moody",
            explanation:
              "Helen Wills Moody won multiple Olympic golds, but she was not the first woman to win one.",
          },
          {
            optionId: "b",
            answer: "Charlotte Cooper",
            explanation:
              "Charlotte Cooper was the first woman to win an Olympic gold, doing so in 1900.",
          },
          {
            optionId: "c",
            answer: "Wilma Rudolph",
            explanation:
              "Wilma Rudolph won three Olympic gold medals, but she was not the first woman to win a solo gold.",
          },
          {
            optionId: "d",
            answer: "Nadia Comăneci",
            explanation:
              "Nadia Comăneci achieved perfect 10s in gymnastics but was not the first woman to win a solo gold medal.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct:
            "Correct! Charlotte Cooper was the first woman to win an Olympic gold medal.",
          incorrect: "Oops! The correct answer is Charlotte Cooper.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q8",
        question:
          "Who was the first woman to serve as a U.S. Secretary of State?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Condoleezza Rice",
            explanation:
              "Condoleezza Rice was the second female Secretary of State, serving after Madeleine Albright.",
          },
          {
            optionId: "b",
            answer: "Madeleine Albright",
            explanation:
              "Madeleine Albright was the first woman to serve as the U.S. Secretary of State.",
          },
          {
            optionId: "c",
            answer: "Hillary Clinton",
            explanation:
              "Hillary Clinton served as Secretary of State later but was not the first woman in the position.",
          },
          {
            optionId: "d",
            answer: "Eleanor Roosevelt",
            explanation:
              "Eleanor Roosevelt was a former First Lady but never served as Secretary of State.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct:
            "Correct! Madeleine Albright was the first woman to serve as U.S. Secretary of State.",
          incorrect: "Oops! The correct answer is Madeleine Albright.",
        },
        difficulty: "medium",
      },
    ],
  },
  {
    quizId: "uvwx",
    title: "Music Quiz",
    description: "Test your knowledge about famous musicians and songs.",
    category: "Music",
    language: "en",
    tags: ["artists", "albums", "songs"],
    questions: [
      {
        questionId: "q1",
        question: "Who is known as the 'King of Pop'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Elvis Presley",
            explanation: "Elvis was known as the 'King of Rock and Roll'.",
          },
          {
            optionId: "b",
            answer: "Michael Jackson",
            explanation:
              "Michael Jackson is widely known as the 'King of Pop'.",
          },
          {
            optionId: "c",
            answer: "Prince",
            explanation:
              "Prince was a music icon but known as 'The Artist Formerly Known As'.",
          },
          {
            optionId: "d",
            answer: "Whitney Houston",
            explanation:
              "Whitney was a legendary singer but not known as the 'King of Pop'.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Michael Jackson is the 'King of Pop'.",
          incorrect: "Oops! The correct answer is Michael Jackson.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "Which band wrote the hit song 'Hey Jude'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "The Beatles",
            explanation:
              "The Beatles wrote 'Hey Jude', one of their most famous songs.",
          },
          {
            optionId: "b",
            answer: "The Rolling Stones",
            explanation:
              "The Rolling Stones are famous, but they did not write 'Hey Jude'.",
          },
          {
            optionId: "c",
            answer: "Led Zeppelin",
            explanation:
              "Led Zeppelin is known for classic rock, but not for 'Hey Jude'.",
          },
          {
            optionId: "d",
            answer: "Queen",
            explanation:
              "Queen is a legendary band, but 'Hey Jude' was written by The Beatles.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'Hey Jude' was written by The Beatles.",
          incorrect: "Oops! The correct answer is The Beatles.",
        },
        difficulty: "medium",
      },
    ],
  },
  {
    quizId: "yzab",
    title: "Literature Quiz",
    description:
      "Test your knowledge on famous authors and works of literature.",
    category: "Literature",
    language: "en",
    tags: ["authors", "novels", "poetry"],
    questions: [
      {
        questionId: "q1",
        question: "Who wrote the novel '1984'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "George Orwell",
            explanation:
              "Orwell is famous for writing '1984', a dystopian novel.",
          },
          {
            optionId: "b",
            answer: "Aldous Huxley",
            explanation: "Huxley wrote 'Brave New World', not '1984'.",
          },
          {
            optionId: "c",
            answer: "Ray Bradbury",
            explanation: "Bradbury wrote 'Fahrenheit 451', not '1984'.",
          },
          {
            optionId: "d",
            answer: "J.R.R. Tolkien",
            explanation:
              "Tolkien is famous for 'The Lord of the Rings', not '1984'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! '1984' was written by George Orwell.",
          incorrect: "Oops! The correct answer is George Orwell.",
        },
        difficulty: "hard",
      },
      {
        questionId: "q2",
        question: "Which novel features the character 'Atticus Finch'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "To Kill a Mockingbird",
            explanation:
              "Atticus Finch is a central character in 'To Kill a Mockingbird'.",
          },
          {
            optionId: "b",
            answer: "Pride and Prejudice",
            explanation: "Atticus Finch is not a character in this novel.",
          },
          {
            optionId: "c",
            answer: "The Great Gatsby",
            explanation:
              "Atticus Finch is not a character in 'The Great Gatsby'.",
          },
          {
            optionId: "d",
            answer: "Moby-Dick",
            explanation: "Atticus Finch is not in 'Moby-Dick'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct:
            "Correct! Atticus Finch is a character in 'To Kill a Mockingbird'.",
          incorrect: "Oops! The correct answer is 'To Kill a Mockingbird'.",
        },
        difficulty: "medium",
      },
    ],
  },
];

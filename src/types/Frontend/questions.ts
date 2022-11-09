export type Tanswer = {
  topic?: string,
  answer: string[],
  id: number
};

export type Tanswers = Tanswer[];

export type TQuestion = {
  question: string,
  answers: Tanswers,
  id: number
}

export type TQuestions = TQuestion[]

export type TSubjectOfQuestion = {
  title: string,
  questions: TQuestions,
  id: number
}

export type TSubjectOfQuestions = TSubjectOfQuestion[]
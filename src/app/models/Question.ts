export interface Question {
  id: number;
  questionText: string;
  options: Option[];
}

export interface Option {
  text: string;
}
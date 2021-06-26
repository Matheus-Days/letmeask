import { QuestionType } from "../hooks/useRoom";

export function sortQuestions(
  order: string | undefined,
  questionsArray: QuestionType[]
) {
  switch (order) {
    case "likes": {
      questionsArray.sort((a, b) => {
        return b?.likeCount - a?.likeCount;
      });
      return questionsArray;
    }
    case "oldest": {
      questionsArray.sort((a, b) => {
        return a?.createdAt - b?.createdAt;
      });
      return questionsArray;
    }
    case "newest": {
      questionsArray.sort((a, b) => {
        return b?.createdAt - a?.createdAt;
      });
      return questionsArray;
    }
    default:
      return questionsArray;
  }
}

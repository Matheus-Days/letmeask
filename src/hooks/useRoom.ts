import { useState, useEffect } from "react";

import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

export type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: number;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likedId: string | undefined;
};

type FireBaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    createdAt: number;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

export function useRoom(roomId: string) {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const fireBaseQuestions: FireBaseQuestions =
        databaseRoom?.questions ?? {};

      const parsedQuestions = Object.entries(fireBaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            createdAt: value.createdAt,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
            likeCount: Object.values(value.likes ?? {}).length,
            likedId: Object.entries(value.likes ?? {}).find(
              ([key, like]) => like.authorId === user?.id
            )?.[0],
          };
        }
      );

      setTitle(databaseRoom?.title);
      setQuestions(parsedQuestions);
    });

    return () => {
      roomRef.off("value");
    };
  }, [roomId, user?.id]);

  return { questions, title };
}

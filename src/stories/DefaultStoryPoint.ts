import { StoryLinePoint } from "../interfaces/StoryLinePoint";

export const DefaultStoryPoint: StoryLinePoint = {
  id: -1,
  message: "GAME OVER",
  options: [{ message: "Start over?", key: "Y", next: 0 }]
};

import { StoryLine } from "../interfaces/StoryLine";

export const DarkRoom: StoryLine = {
  name: "A dark room",
  story: [
    {
      id: 0,
      message:
        "You find yourself in a dark room. The only item in your pocket is a set of keys.",
      options: [
        {
          message: "Ask if anyone else is in the room.",
          key: "A",
          next: 1
        },
        {
          message: "Yell for help.",
          key: "S",
          next: 2
        }
      ]
    },
    {
      id: 1,
      message: "There is no answer",
      options: []
    },
    {
      id: 2,
      message: "A faint voice responds, but you cannot make out the words...",
      options: []
    }
     {
      id: 3,
      message: "A littel girls laugh comes from the shadows",
      options: []
    }
  ]
};

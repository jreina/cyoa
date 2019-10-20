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
        },
        {
          message: "Sob uncontrollably.",
          key: "W",
          next: 3
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
    },
    {
      id: 3,
      message: "You hear the sound of metal slamming against metal, then someone yelling, 'Silence wretch! Or I'll come in there and shut you up!",
      options: [
        {
          message: "Slink back in fear.",
          key: "A",
          next: 7
        },
        {
          message: "Step towards the voice.",
          key: "S",
          next: 8
        }
      ]
    }

  ]
};

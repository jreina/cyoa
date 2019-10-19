import { StoryLineOption } from "./StoryLineOption";

export interface StoryLinePoint {
    id: number;
    message: string;
    options: Array<StoryLineOption>;
}
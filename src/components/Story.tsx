import React, { Component, FormEvent, ChangeEvent } from "react";
import { StoryLine } from "../interfaces/StoryLine";
import { StoryLinePoint } from "../interfaces/StoryLinePoint";
import { StoryLineOption } from "../interfaces/StoryLineOption";
import { DefaultStoryPoint } from "../stories/DefaultStoryPoint";

type StoryProps = { story: StoryLine };
type StoryState = {
  current: StoryLinePoint;
  choice: null | StoryLineOption;
  inputValue: string;
};

export class Story extends Component<StoryProps, StoryState> {
  constructor(props: { story: StoryLine }) {
    super(props);

    this.state = {
      current: props.story.story[0],
      choice: null,
      inputValue: ""
    };
  }

  render() {
    return (
      <div className="story">
        <div className="message">{this.state.current.message}</div>
        <ul className="options">
          {this.state.current.options.map(({ key, message }) => (
            <li key={key}>
              [{key}] {message}
            </li>
          ))}
        </ul>
        <form onSubmit={this._handleSubmit}>
          <span className="caret">></span>
          <input
            type="text"
            className="cursor"
            id="choice"
            autoComplete="off"
            autoFocus
            onChange={this._handleChange}
            value={this.state.inputValue}
          />
        </form>
      </div>
    );
  }

  private _handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const choice = this.state.current.options.find(
      ({ key }) => key.toUpperCase() === this.state.inputValue.toUpperCase()
    ) as StoryLineOption;

    if(!choice) {
      return this.setState({ current: DefaultStoryPoint })
    }

    const nextState =
      this.props.story.story.find(({ id }) => id === choice.next) ||
      DefaultStoryPoint;
    this.setState({ current: nextState, choice, inputValue: '' });
  };

  private _handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    if (
      inputValue !== "" &&
      !this.state.current.options.some(({ key }) => {
        return key.toUpperCase() === inputValue.toUpperCase();
      })
    ) {
      return;
    }
    this.setState({ inputValue });
  };
}

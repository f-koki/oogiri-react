import React from "react";
import Form from "../../atoms/Form";

type Props = {};

type State = {};

export default class Answer extends React.Component<Props, State> {
  render() {
    return (
      <div className="Answer">
        {/* TODO: お題 */}
        <Form method="post" />
      </div>
    );
  }
}

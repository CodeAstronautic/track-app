import React from "react";

// import TimerForm from '../Forms/TimerForm'
import Timer from "../listTask/Timer";

const EditableTimer = (props) => {
  return (
    <Timer
      id={props.id}
      title={props.title}
      project={props.project}
      elapsed={props.elapsed}
      runningSince={props.runningSince}
      onTrashClick={props.onTrashClick}
      onStartClick={props.onStartClick}
      onStopClick={props.onStopClick}
    />
    // <TimerForm
    //   id={props.id}
    //   title={props.title}
    //   project={props.project}
    //   onFormSubmit={timer => {
    //     props.onFormSubmit(timer)
    //   }}
    // />
  );
  // return (
  //   <Timer
  //     id={this.props.id}
  //     title={this.props.title}
  //     project={this.props.project}
  //     elapsed={this.props.elapsed}
  //     runningSince={this.props.runningSince}
  //     onTrashClick={this.props.onTrashClick}
  //     onStartClick={this.props.onStartClick}
  //     onStopClick={this.props.onStopClick}
  //   />
  // )
};

export default EditableTimer;

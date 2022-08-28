import React from "react";

import TimerForm from "./TimerForm";

const ToggleableTimerForm = ({ times, setTimes, createTimer,handleInputChange , settask , task }) => {
  return (
    <TimerForm
      times={times}
      setTimes={setTimes}
      createTimer={createTimer}
      handleInputChange={handleInputChange}
      settask={settask}
      task={task}
    />
  );
};

export default ToggleableTimerForm;

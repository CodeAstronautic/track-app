import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import EditableTimerList from '../EditForms/EditableTimerList'
import ToggleableTimerForm from '../Forms/ToggleableTimerForm'
import { newTimer } from '../../helper/helpers'
const timer = {
  title: "",
  project: "",
  id: uuid, 
  elapsed: 0,
  runningSince: Date.now()
}
function TimerDashboard() {
  const [times, setTimes] = useState(timer)
  const [task, settask] = useState([])
  const updateTimer = (attrs) => {
    const timerUpdatedata = times.map(timer => {
      if (timer.id === attrs.id) {
        return Object.assign({}, timer, {
          title: attrs.title,
          project: attrs.project
        })
      } else {
        return timer
      }
    })
    setTimes(timerUpdatedata)
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTimes({
      ...times,
      [name]: value,
    });
  };
  const createTimer = (timer) => {
    const data = newTimer(timer)
    setTimes([data, ...times])
  }
  const deleteTimer = (timerId) => {
    setTimes(
      times.filter(t => t.id !== timerId)
    )
  }
  const startTimer = (timerId) => {
    const now = Date.now()
    const timerData = task.map((timer) => {
      if (timer.id === timerId) {
        return { ...timer, runningSince: now }
      } else {
        return timer
      }
    })
    settask([...timerData])
  }
  const stopTimer = (timerId) => {
    const now = Date.now()
    const timerData = task.map((timer) => {
      if (timer.id === timerId) {
        const lastElapsed = now - timer.runningSince
        return Object.assign({}, timer, {
          elapsed: timer.elapsed + lastElapsed,
          runningSince: null
        })
      } else {
        return timer
      }
    })
    settask(timerData)
  }
  return (
    <>

      <EditableTimerList
        timers={task}
        onFormSubmit={attrs => updateTimer(attrs)}
        onTrashClick={timerId => deleteTimer(timerId)}
        onStartClick={timerId => startTimer(timerId)}
        onStopClick={timerId => stopTimer(timerId)}
      />

      <ToggleableTimerForm
        times={times}
        setTimes={setTimes}
        createTimer={createTimer}
        handleInputChange={handleInputChange}
        settask={settask}
        task={task}
      />
    </>
  )
}

export default TimerDashboard

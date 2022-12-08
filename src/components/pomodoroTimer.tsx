import useInterval from '../hooks/useInterval'
import React from 'react'
import SecondsConverter from '../utils/secondsConverter'

interface PomodoroTimerProps {
  defaultPomodoroTime: number
}

export default function PomodoroTimer(pomodoroTimerProps: PomodoroTimerProps) {
  const {defaultPomodoroTime} = pomodoroTimerProps

  const [time, setTime] = React.useState(defaultPomodoroTime)
  const [isRunning, setIsRunning] = React.useState(false)

  useInterval(
    () => {
      if (time === 0) {
        setIsRunning(false)
        return
      }
      setTime(time - 1)
    },
    isRunning ? 1000 : null,
  )

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    handleStop()
    setTime(defaultPomodoroTime)
  }

  return (
    <div
      style={{
        borderWidth: 1,
        borderRadius: 25,
        width: 200,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '40%',
        }}>
        <label htmlFor='pomodoroTime'>Pomodoro Timer</label>
        <h1 id='pomodoroTime'>{SecondsConverter(time)}</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
        }}>
        <button
          onClick={handleStart}
          style={{
            backgroundColor: 'green',
            color: 'white',
            borderRadius: 5,
            padding: 5,
          }}>
          Start
        </button>
        <button
          onClick={handleStop}
          style={{
            backgroundColor: 'red',
            color: 'white',
            borderRadius: 5,
            padding: 5,
          }}>
          Stop
        </button>
        <button
          onClick={handleReset}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: 5,
            padding: 5,
          }}>
          Reset
        </button>
      </div>
    </div>
  )
}

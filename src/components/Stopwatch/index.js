import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timeInSeconds: 0,
  }

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => {
    clearInterval(this.TimerId)
  }

  incrementTimeInSeconds = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }

  getTimeFormat = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  onClickStart = () => {
    this.TimerId = setInterval(this.incrementTimeInSeconds, 1000)
  }

  onClickStop = () => {
    this.clearTimerInterval()
  }

  onClickReset = () => {
    this.clearTimerInterval()
    this.setState({
      timeInSeconds: 0,
    })
  }

  render() {
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-label-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch-image"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="time-display">{this.getTimeFormat()}</h1>
            <div className="controls-container">
              <button
                type="button"
                className="button start-button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset-button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

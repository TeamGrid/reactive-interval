import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

const intervals = {}
export function reactiveInterval(interval = 1000) {
  if (!Tracker.currentComputation) return
  if (!intervals[interval]) {
    intervals[interval] = new IntervalDependency(interval)
  }
  Tracker.currentComputation.onStop(() => {
    if (intervals[interval] && !intervals[interval].hasDependents()) {
      intervals[interval].stop()
      intervals[interval] = null
    }
  })
  intervals[interval].depend()
}

export function wrapFunction(fn, interval) {
  return function(...args) {
    reactiveInterval(interval)
    return fn.apply(this, args)
  }
}

export class IntervalDependency extends Tracker.Dependency {
  constructor(interval) {
    super()
    this._interval = interval
    this.start()
  }
  start() {
    if (this._intervalId) this.stop()
    this._intervalId = setInterval(Meteor.bindEnvironment(() => this.changed()), this._interval)
  }
  stop() {
    clearInterval(this._intervalId)
    this._intervalId = null
  }
}

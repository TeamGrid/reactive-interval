import { Tinytest } from 'meteor/tinytest';
import { reactiveInterval } from 'meteor/teamgrid:reactive-interval';
import { Tracker } from 'meteor/tracker'
import { Meteor } from 'meteor/meteor'

Tinytest.addAsync('reactive-interval - should be reactive', (test, next) => {
  let counter = 0
  const computation = Tracker.autorun(() => {
    reactiveInterval(1000) // every second
    counter++
  })

  setTimeout(Meteor.bindEnvironment(() => {
    computation.stop()
    test.equal(counter, 4)
    next()
  }), 3200)
});

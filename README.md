# Reactive intervals for Meteor

Reactively rerun functions based on a specified interval. This allowes you to do reactive updates based on time (e.g. view the current time, that reactively updates every second).

## Install

Install [`teamgrid:reactive-interval`](http://atmospherejs.com/teamgrid/reactive-interval) from Atmosphere:

```bash
meteor add teamgrid:reactive-interval
```

## Exports

#### `function` reactiveInterval
reactive function, that automatically reruns based on the specified interval.
````javascript
  import { reactiveInterval } from 'meteor/teamgrid:reactive-interval';
  Tracker.autorun(() => {
    reactiveInterval(1000); // reruns every second
  });
````

#### `function` wrapFunction
small helper function, that allowes you to wrap a function to update reactively based on a interval. This makes this package easy to use with libraries like `moment.js`
````javascript
  import { wrapFunction } from 'meteor/teamgrid:reactive-interval';
  import Moment from 'moment';
  const moment = wrapFunction(Moment, 1000); // all moment objects constructed with moment will update reactively every 1000ms
````

#### `class` IntervalDependency
`IntervalDependency` inherits from `Tracker.Dependency` and automatically call the `changed` method based on the specified interval.
````javascript
  import { IntervalDependency } from 'meteor/teamgrid:reactive-interval';
  const interval = 1000; // milliseconds
  const dep = new IntervalDependency(interval);
````

## Contributions

Contributions are welcome. Please open issues and/or file Pull Requests.

***

Made by [TeamGrid](http://www.teamgridapp.com).

Package.describe({
  name: 'teamgrid:reactive-interval',
  version: '1.0.1_1',
  // Brief, one-line summary of the package.
  summary: 'Reactively rerun functions based on a specified interval.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/TeamGrid/reactive-interval.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.1');
  api.use('ecmascript');
  api.use('tracker');
  api.mainModule('reactive-interval.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tracker');
  api.use('teamgrid:reactive-interval');
  api.mainModule('reactive-interval-tests.js');
});

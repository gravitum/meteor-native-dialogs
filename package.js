Package.describe({
  name: 'gravitum:native-dialogs',
  version: '0.1.1',
  // Brief, one-line summary of the package.
  summary: 'Android/IOS native dialogs with with simple API. Fallback to html in brrowser.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/gravitum/meteor-native-dialogs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
  "cordova-plugin-dialogs": "https://github.com/partus/cordova-plugins-dialog/tarball/2f2bfb52d631977fdf4a8d35c1a3cb4e5f721648"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('templating', 'client');
  api.use('gravitum:popup-views', 'client');
  api.export("Dialogs");
  api.addFiles('fallbacks.html', 'client');
  api.addFiles('dialogs.js', 'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('gravitum:popup-views');
});

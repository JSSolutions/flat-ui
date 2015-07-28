Package.describe({
  name: 'jss:flat-ui',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('twbs:bootstrap');
  api.use('jquery@1.11.1', 'client');

  api.addFiles(['flat-ui.css', 'flat-ui.js'], 'client');
  // '/packages/jss_flat-ui/*'
  api.addFiles([
    'fonts/glyphicons/flat-ui-icons-regular.eot',
    'fonts/glyphicons/flat-ui-icons-regular.svg',
    'fonts/glyphicons/flat-ui-icons-regular.ttf',
    'fonts/glyphicons/flat-ui-icons-regular.woff',
    'fonts/glyphicons/selection.json',
    'fonts/lato/lato-black.eot',
    'fonts/lato/lato-black.svg',
    'fonts/lato/lato-black.ttf',
    'fonts/lato/lato-black.woff',
    'fonts/lato/lato-bold.eot',
    'fonts/lato/lato-bold.svg',
    'fonts/lato/lato-bold.ttf',
    'fonts/lato/lato-bold.woff',
    'fonts/lato/lato-bolditalic.eot',
    'fonts/lato/lato-bolditalic.svg',
    'fonts/lato/lato-bolditalic.ttf',
    'fonts/lato/lato-bolditalic.woff',
    'fonts/lato/lato-italic.eot',
    'fonts/lato/lato-italic.svg',
    'fonts/lato/lato-italic.ttf',
    'fonts/lato/lato-italic.woff',
    'fonts/lato/lato-light.eot',
    'fonts/lato/lato-light.svg',
    'fonts/lato/lato-light.ttf',
    'fonts/lato/lato-light.woff',
    'fonts/lato/lato-regular.eot',
    'fonts/lato/lato-regular.svg',
    'fonts/lato/lato-regular.ttf',
    'fonts/lato/lato-regular.woff'
  ], 'client', {isAsset: true});
});
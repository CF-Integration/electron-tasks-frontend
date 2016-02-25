module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname,
    filename: "./assets/js/script.js"
  },
  module: {
    loaders: [
      { test: "\.html$", loader: "html" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  node: {
    fs: "empty",
    angular2: "empty",
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
  },
  externals: [
    (function () {
      var IGNORES = [
        'electron'
      ];
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })()
  ]
};
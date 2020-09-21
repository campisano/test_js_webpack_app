# base project

### project structure

```
mkdir dist
mkdir src
```

### main files

```
cat > dist/index.html << 'EOF'
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="data:;base64,=">
    <title>Hello Webpack</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
EOF
```
```
cat > src/main.js << 'EOF'
import App from "./app.js";

let app = new App("root");
app.write("Hello Webpack");
EOF
```
```
cat > src/app.js << 'EOF'
"use strict";

export default class App {
  constructor(elementId) {
    this.element = window.document.getElementById(elementId);
  }

  write(content) {
    this.element.innerHTML = content;
  }
}
EOF
```

### node project config

```
cat > package.json << 'EOF'
{
  "name": "test_js_webpack_app",
  "main": "src/main.js",
  "scripts": {
    "start": "webpack-dev-server --config ./webpack.config.js --mode development",
    "build": "webpack --config ./webpack.config.js --mode production",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
EOF
```

### webpack config

```
cat > webpack.config.js << 'EOF'
module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        include: /src/,
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
EOF
```

### babel config

```
cat > .babelrc << 'EOF'
{
  "presets": ["@babel/preset-env"]
}
EOF
```

### setup dependencies

```
npm install --save-dev webpack webpack-dev-server webpack-cli
npm install --save-dev @babel/core @babel/preset-env
npm install --save-dev babel-loader
```

### start

```
npm run start
```

### build

```
npm run build
```

### references

* [How to set up a modern JavaScript project [Tutorial]](https://www.robinwieruch.de/javascript-project-setup-tutorial/)
* [How to set up a Webpack project [Tutorial]](https://www.robinwieruch.de/webpack-setup-tutorial)

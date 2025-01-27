#!/bin/bash

# Fonction pour créer un dossier s'il n'existe pas
create_directory() {
  if [ ! -d "$1" ]; then
    mkdir -p "$1"
    echo "Dossier créé : $1"
  fi
}

# Fonction pour créer un fichier avec du contenu
create_file_with_content() {
  local file_path=$1
  local content=$2
  if [ ! -f "$file_path" ]; then
    echo "$content" > "$file_path"
    echo "Fichier créé avec contenu : $file_path"
  fi
}

# Contenu des fichiers
PACKAGE_JSON='{
    "name": "typescript_dependencies",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "start-dev": "webpack-dev-server --open",
      "build": "webpack",
      "test": "jest"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "@babel/plugin-proposal-export-default-from": "^7.5.2",
      "@babel/preset-typescript": "^7.7.2",
      "@types/jest": "^24.0.23",
      "@typescript-eslint/eslint-plugin": "^2.4.0",
      "@typescript-eslint/parser": "^2.4.0",
      "clean-webpack-plugin": "^3.0.0",
      "fork-ts-checker-webpack-plugin": "^1.5.1",
      "html-webpack-plugin": "^3.2.0",
      "jest": "^24.9.0",
      "source-map": "^0.7.3",
      "ts-jest": "^24.1.0",
      "ts-loader": "^6.2.0",
      "typescript": "^3.6.4",
      "webpack": "^4.41.2",
      "webpack-cli": "^3.3.9",
      "webpack-dev-server": "^3.8.2"
    }
}'
ESLINT_RC_JS="module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};"
TSCONFIG_JSON='{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
    "skipLibCheck": true
  }
}'
WEBPACK_CONFIG_JS='const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};'

# Base directory
BASE_DIR="typescript_project"

# Création des dossiers et fichiers pour chaque tâche
create_directory "$BASE_DIR/task_0/js"
create_file_with_content "$BASE_DIR/task_0/package.json" "$PACKAGE_JSON"
create_file_with_content "$BASE_DIR/task_0/.eslintrc.js" "$ESLINT_RC_JS"
create_file_with_content "$BASE_DIR/task_0/tsconfig.json" "$TSCONFIG_JSON"
create_file_with_content "$BASE_DIR/task_0/webpack.config.js" "$WEBPACK_CONFIG_JS"
create_file_with_content "$BASE_DIR/task_0/js/main.ts" ""

create_directory "$BASE_DIR/task_1/js"
create_file_with_content "$BASE_DIR/task_1/package.json" "$PACKAGE_JSON"
create_file_with_content "$BASE_DIR/task_1/tsconfig.json" "$TSCONFIG_JSON"
create_file_with_content "$BASE_DIR/task_1/webpack.config.js" "$WEBPACK_CONFIG_JS"
create_file_with_content "$BASE_DIR/task_1/js/main.ts" ""

create_directory "$BASE_DIR/task_2/js"
create_file_with_content "$BASE_DIR/task_2/package.json" "$PACKAGE_JSON"
create_file_with_content "$BASE_DIR/task_2/tsconfig.json" "$TSCONFIG_JSON"
create_file_with_content "$BASE_DIR/task_2/webpack.config.js" "$WEBPACK_CONFIG_JS"
create_file_with_content "$BASE_DIR/task_2/js/main.ts" ""

create_directory "$BASE_DIR/task_3/js"
create_file_with_content "$BASE_DIR/task_3/package.json" "$PACKAGE_JSON"
create_file_with_content "$BASE_DIR/task_3/tsconfig.json" "$TSCONFIG_JSON"
create_file_with_content "$BASE_DIR/task_3/webpack.config.js" "$WEBPACK_CONFIG_JS"
create_file_with_content "$BASE_DIR/task_3/js/main.ts" ""
create_file_with_content "$BASE_DIR/task_3/js/interface.ts" ""
create_file_with_content "$BASE_DIR/task_3/js/crud.d.ts" ""

create_directory "$BASE_DIR/task_4/js/subjects"
create_file_with_content "$BASE_DIR/task_4/package.json" "$PACKAGE_JSON"
create_file_with_content "$BASE_DIR/task_4/tsconfig.json" "$TSCONFIG_JSON"
create_file_with_content "$BASE_DIR/task_4/js/subjects/Cpp.ts" ""
create_file_with_content "$BASE_DIR/task_4/js/subjects/Java.ts" ""
create_file_with_content "$BASE_DIR/task_4/js/subjects/React.ts" ""
create_file_with_content "$BASE_DIR/task_4/js/subjects/Subject.ts" ""
create_file_with_content "$BASE_DIR/task_4/js/subjects/Teacher.ts" ""

create_directory "$BASE_DIR/task_5/js"
create_file_with_content "$BASE_DIR/task_5/package.json" "$PACKAGE_JSON"
create_file_with_content "$BASE_DIR/task_5/tsconfig.json" "$TSCONFIG_JSON"
create_file_with_content "$BASE_DIR/task_5/webpack.config.js" "$WEBPACK_CONFIG_JS"
create_file_with_content "$BASE_DIR/task_5/js/main.ts" ""

# Création du fichier README.md à la racine
create_file_with_content "$BASE_DIR/README.md" "# TypeScript Project"

# Message de fin
echo "Structure complète du projet créée avec succès dans le dossier '$BASE_DIR' ! 🚀"

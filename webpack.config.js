const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

console.log("mode", mode);

const PAGES_DIR = [];
let PAGES_NAME;
const createEntryPoints = () => {
  const entryPoints = {};
  const webPagesPath = path.resolve(__dirname, "src/pages");
  const webPagesName = fs.readdirSync(webPagesPath);
  webPagesName.forEach((item, index, obj) => {
    if (item === ".DS_Store") {
      webPagesName.splice(index, 1);
    }
  });
  webPagesName.forEach((item) => {
    PAGES_DIR.push(path.resolve(__dirname, `src/pages/${item}`));
  });
  PAGES_NAME = webPagesName;
  webPagesName.forEach((pageName) => {
    entryPoints[pageName] = path.join(webPagesPath, `/${pageName}/main.js`);
  });
  return entryPoints;
};

function filename(name, ext) {
  if (ext === "html") {
    return `${name}.${ext}`;
  }
  if (name) {
    if (mode === "development") {
      return `${ext}/${name}.${ext}`;
    } else {
      return `${ext}/${name}.[contenthash].${ext}`;
    }
  } else {
    if (mode === "development") {
      return `${ext}/[name].${ext}`;
    } else {
      return `${ext}/[name].[contenthash].${ext}`;
    }
  }
}

module.exports = {
  mode,
  entry: createEntryPoints(),
  output: {
    filename: filename(false, "js"),
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    alias: {
      ScrollMagic: path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"
      ),
      "debug.addIndicators": path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"
      ),
      "@Components": path.resolve(__dirname, "src/components/"),
    },
  },
  devtool: mode === "development" ? "source-map" : "cheap-source-map",
  // devServer: {
  //   contentBase: path.resolve(__dirname, "dist"),
  //   // hot: mode === "development",
  //   // contentBase: path.join(__dirname, './dist')
  // },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: filename(false, "css"),
    }),
    ...PAGES_NAME.map(
      (pageName, i) =>
        new HTMLWebpackPlugin({
          filename: filename(pageName, "html"),
          template: `${PAGES_DIR[i]}/${pageName}.pug`,
          showErrors: true,
          chunks: [pageName],
          minify: {
            collapseWhitespace: mode === "production",
          },
        })
    ),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};

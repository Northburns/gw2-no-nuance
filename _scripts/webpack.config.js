import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './src/index.js',
  mode: 'development',
  devtool: "inline-source-map",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[id].[chunkhash].js'
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};

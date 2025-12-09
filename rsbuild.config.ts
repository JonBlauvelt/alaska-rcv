import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginEslint } from '@rsbuild/plugin-eslint';

export default defineConfig({
  plugins: [pluginReact(), pluginEslint()],
  html: {
    template: './public/index.html',
  },
  output: {
    distPath: {
        root: 'build',
    },
  },
  source: {
    // Compile all JS files and exclude core-js
    include: [{ not: /[\\/]core-js[\\/]/ }],
  },
  tools: {
    rspack: {
      module: {
        rules: [
          {
            // Match .png asset
            // You can change this regular expression to match different types of files
            test: /\.(png|pdn|mkv){1}$/,
            type: 'asset/resource',
            generator: {
              filename: 'static/media/[name].[hash][ext]',
            },
          },
        ],
      },
    },
  },
});

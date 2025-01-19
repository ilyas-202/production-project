import { BuildOptions } from "./types/config";
import path from "path";
import webpack from 'webpack'
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";


export function buildWebpackConfig(optins: BuildOptions): webpack.Configuration {

    const {paths, mode, isDev} = optins;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(optins),
        module: {
            rules: buildLoaders(optins)
          },
          resolve: buildResolvers(optins),
          devtool: isDev ? 'inline-source-map' : undefined,
          devServer: isDev ? buildDevServer(optins) : undefined,
         
      }
} 
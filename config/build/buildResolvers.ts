import webpack, { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers(optins: BuildOptions): ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [optins.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
      }
}
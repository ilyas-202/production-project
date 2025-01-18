import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(optins: BuildOptions): DevServerConfiguration {

    return {
        port: optins.port,
        open: true,
        historyApiFallback: true,
    }
}
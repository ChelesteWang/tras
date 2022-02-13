import Koa from "koa";
import { spawn } from "child_process";
import os = require('os');

const app = new Koa();

export interface DevServerOptions {
  port: string;
  index: string;
  staticDir: string;
  watchDir: string;
  onBeforeRebuild?: () => void;
  onAfterRebuild?: () => void;
}

const defaultOptions: DevServerOptions = {
    port: "3000",
    index: "",
    staticDir: "",
    watchDir: "",
};

const onWatch = (path: string) =>{

}

const startDevServer = () => {
    const platform = `esbuild-dev-server-${process.platform}-${os.arch()}`;
};

const sendError = (ctx) => {
    // 发送 Error
};

const handleError = (err) => {
    // 处理 Error
}

const sendReload = () => {
    // 发送 Reload
};

const handleReload = (err) => {

}

const start = () => {};

app.listen(3000);

console.log("[tras dev-server] is starting at localhost:3000");

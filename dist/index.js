"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("colors"));
const server_1 = __importDefault(require("./server"));
const PORT = process.env.PORT || 3000;
server_1.default.listen(3000, () => {
    // console.log(`[server]: Server is running at port ${PORT}`.info)    
    console.log(colors_1.default.green(`[server]: Server is running at port ${PORT}`));
});

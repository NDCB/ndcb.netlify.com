import {
  readFile as fsReadFile,
  readFileSync as fsReadFileSync,
} from "fs-extra";

import { absolutePathToString } from "./absolutePath";
import { File, filePath } from "./file";
import { FileContents, fileContents } from "./fileContents";

export type FileReaderAsync = (file: File) => Promise<FileContents>;

export type FileReaderSync = (file: File) => FileContents;

export const readFile: FileReaderAsync = async (file) =>
  fileContents(await fsReadFile(absolutePathToString(filePath(file)), "utf8"));

export const readFileSync: FileReaderSync = (file) =>
  fileContents(fsReadFileSync(absolutePathToString(filePath(file)), "utf8"));

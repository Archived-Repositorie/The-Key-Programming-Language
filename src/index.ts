import * as fs from 'fs';
import { Interpreter } from './language/interpreter';
import { Regexs } from './util/regex';

let folder: string;

folder = "./test/";

fs.readdirSync(folder).map(x => folder + x).forEach(x => new Interpreter(x));





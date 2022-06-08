import { readFileSync } from "fs"
import { Regexs } from "../util/regex";

type Word = {
    type: string;
    name: any;
}

type Line = {
    fullValue: string;
    splitValue: string[];
    number: number;
}

export class Interpreter {
    words: Word[] = [];
    lines: Line[] = [];

    constructor(file: string) {
        let i: number = 0;
        readFileSync(file, "utf8").split("\n").forEach(line => {
            i++
            this.lines.push({
                fullValue: line,
                splitValue: line.split(" "),
                number: i
            });
            new Regexs().code(line).forEach(word => {
                this.wordAssigment(word, this.lines[i - 1]);
            });
        });
        console.table(this.words);
    }

    private wordAssigment(word: string, line: Line) {
        switch (true) {
            case word.toUpperCase() === word && new Regexs().testWord(word):
                this.words.push({ type: "builtin", name: word });
                break;
            case word == String("True") || word === String("False"):
                this.words.push({ type: "boolean", name: word });
                break;
            case word.startsWith("\"") && word.endsWith("\"") || word.startsWith("'") && word.endsWith("'"):
                this.words.push({ type: "string", name: word });
                break;
            case !isNaN(parseFloat(word)) && parseFloat(word) != parseInt(word):
                this.words.push({ type: "float", name: word });
                break;
            case !isNaN(parseFloat(word)) && parseFloat(word) == parseInt(word):
                this.words.push({ type: "int", name: word });
                break;
            case new Regexs().testWord(word):
                this.words.push({ type: "variable", name: word });
                break;
            default:
                throw new SyntaxError(`${word} is unknown, ${line.number}:${line.splitValue.indexOf(word)}`);
        }
    }
}
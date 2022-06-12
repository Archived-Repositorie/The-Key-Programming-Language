import { Line, Word } from "../interpreter";

export const cmd = 
(word: Word, words: Word[], line: Line, lines: Line[], args: Word[]): void => {
    console.log(`word: ${word.name}`,`line: ${line.fullValue}`, `args: ${args.map(a => a.name).join(", ")}`);
}
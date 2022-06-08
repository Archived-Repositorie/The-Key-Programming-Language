import { Line, Word } from "./interpreter";


export const handler = (words: Word[], lines: Line[]) => {
    words.forEach(word => {
        require(`./keys/${word}`).cmd(word, words, word.line, lines);
    })
}
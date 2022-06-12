import { Line, Word } from "./interpreter";


export const handler = (words: Word[], lines: Line[]) => {
    words.forEach(word => {
        const args: Word[] = words.filter(x => x.numberOnLine >= word.numberOnLine + 1);
        switch (word.type) {
            case "builtin":
                try {require(`./keys/${word.name}`).cmd(word, words, word.line, lines, args)}
                catch (e) {}
                break;
        }
    })
}
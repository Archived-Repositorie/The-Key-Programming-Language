export class Regexs {
    codeRegex: RegExp;
    output: string[] = [];

    constructor() {
        this.codeRegex = /("|')(.+?)\1|(\S+)/gm;
    }

    code(code: string) {
        let m;
        const regex = this.codeRegex;
        while((m = regex.exec(code)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            m = m.filter((m: any, g: number) => g == 0);
            this.output.push(m.join(" "));
        }
        return this.output;
    }
}
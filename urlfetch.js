class UrlFetch {

    constructor() {}

    getInfo() {
        return {
            id: 'urlfetch',
            name: 'UrlFetch',
            blocks: [{
                opcode: 'fetch',
                blockType: Scratch.BlockType.COMMAND,
                text: 'UrlFetch',
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "https://www.google.com/"
                    }
                }
            }]
        }
    }

    fetch(args) {
        const text = Scratch.Cast.toString(args.TEXT);
        console.log(text);
        log.log(text);
    }
}

Scratch.extensions.register(new UrlFetch());

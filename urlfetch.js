class UrlFetch {

    constructor() {}

    getInfo() {
        return {
            id: 'urlfetch',
            name: 'UrlFetch',
            blocks: [{
                opcode: 'fetch',
                blockType: Scratch.BlockType.COMMAND,
                text: 'fetch',
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
        const text = args.TET ;
        console.log(Scratch.Cast)
        console.log(text);
        log.log(text);
    }
}

Scratch.extensions.register(new UrlFetch());

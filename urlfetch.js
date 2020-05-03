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
                },
                menus: {}
            }]
        }
    }

    fetch(args) {
        console.log(Scratch)
        console.log(args);
    }
}

Scratch.extensions.register(new UrlFetch());

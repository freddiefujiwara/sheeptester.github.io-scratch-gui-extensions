class UrlFetch {

    constructor() {}

    getInfo() {
        return {
            id: 'urlfetch',
            name: 'UrlFetch',
            blocks: [{
                opcode: 'fetch',
                blockType: Scratch.BlockType.COMMAND,
                text: 'fetch [URL]',
                arguments: {
                    URL: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "https://www.google.com/"
                    }
                },
                menus: {}
            }]
        }
    }

    fetch(args) {
        console.log(args.URL);
        var script = document.createElement('script');
        script.src = args.URL;

        document.getElementsByTagName('head')[0].appendChild(script);
    }
}

Scratch.extensions.register(new UrlFetch());

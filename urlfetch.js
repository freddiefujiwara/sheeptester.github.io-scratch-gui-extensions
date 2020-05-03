const nets = require('nets');
class UrlFetch {

    constructor(runtime) {this.runtime=runtime;}

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
        console.log(this.runtime);
        console.log(args.URL);
        var script = window.document.createElement('script');
        script.src = args.URL;

        window.document.getElementsByTagName('head')[0].appendChild(script);
    }
}

Scratch.extensions.register(new UrlFetch());

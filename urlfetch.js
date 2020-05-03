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

    fetch({URL}) {
         return fetch(URL).then(res => res.text())
      .catch(err => '');
    }
}

Scratch.extensions.register(new UrlFetch());

const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

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
                        type: ArgumentType.STRING,
                        defaultValue: "https://www.google.com/"
                    }
                }
            }]
        }
    }

    fetch(args) {
        const text = Cast.toString(args.TEXT);
        console.log(text);
        log.log(text);
    }
}

Scratch.extensions.register(new UrlFetch());

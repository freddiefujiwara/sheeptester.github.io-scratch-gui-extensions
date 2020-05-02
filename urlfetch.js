class UrlFetch {

  constructor() {}

  getInfo() { 
    return {
      id: 'urlfetch',
      name: 'UrlFetch', 
      blocks: [ 
        {
          opcode: 'fetch',
          blockType: Scratch.BlockType.COMMAND,　
          text: 'UrlFetch' 
        }
      ]
    }
  }

  fetch() {
    console.log('fetch');
  }
}

Scratch.extensions.register(new UrlFetch());

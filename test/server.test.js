const assert = require('assert');
const server = require('../server'); // Adjust the path as necessary

describe('Server Startup', () => {
    it('should start without errors', (done) => {
        server.start((err) => {
            assert.strictEqual(err, null);
            done();
        });
    });
});
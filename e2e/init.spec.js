const detox = require('detox');
const adapter = require('detox/runners/jest/adapter');
const specReporter = require('detox/runners/jest/specReporter');
const config = require('../package.json').detox;

// Set the default timeout
jest.setTimeout(120000);

// eslint-disable-next-line no-undef
jasmine.getEnv().addReporter(adapter);

// This takes care of generating status logs on a per-spec basis.
// By default, jest only reports at file-level.
// eslint-disable-next-line no-undef
jasmine.getEnv().addReporter(specReporter);

beforeAll(async () => {
  await detox.init(config);
}, 300000);

beforeEach(async () => {
  await adapter.beforeEach();
}, 2000);

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});

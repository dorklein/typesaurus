/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  roots: ['<rootDir>/src/'],
  testRegex: ['tests\\.ts$', 'tests/.+\\.ts$'],
  setupFilesAfterEnv: ['<rootDir>/test/setupAdmin.ts']
}

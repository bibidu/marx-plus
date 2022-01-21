const { execSync } = require('child_process')

execSync(`
pnpm install &&
pnpm install --filter @marx/inject-template-button --filter @marx/export-button
`)
const { execSync } = require('child_process')

execSync(`
pnpm run build --filter @marx/inject-template-button --filter @marx/export-button
`)
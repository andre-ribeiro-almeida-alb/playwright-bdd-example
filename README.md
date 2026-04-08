How to migrate from npm to pnpm:

1. Install `pnpm` with `npm install -g pnpm`
2. Add `"packageManager": "pnpm@<version>"` with your specific version to the `package.json`
3. Run `pnpm import`
4. Delete `package-lock.json`

Run `pnpm watch` for your tests.
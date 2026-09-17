# `Theme Editor`

Create a theme using TextMate Scopes and Semantic Highlighting which can be used in VSCode

## Usage

Try out: https://el-angel.github.io/theme-editor/
(Semantic Highlighting is not available on GitHub Pages)

Local usage

```sh
$ git clone git@github.com:el-angel/theme-editor.git
$ cd ./theme-editor
$ npm install
$ npm start   # from repo root (uses npm workspaces)
# or just the client:
$ npm run start --workspace=@kerberjg-vscode-editor/client

// enable semantic highlighting server (separate terminal, from repo root)
$ npx ts-node-dev --respawn packages/server/src/index.ts
```

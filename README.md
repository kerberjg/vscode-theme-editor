# VSCode/TextMate Theme Editor

Customize or create VSCode themes using TextMate scopes and Semantic Highlighting.

## ✨ Features

- 🪄 Customize VSCode/TextMate themes
- 👀 Preview changes in real-time
- 💻 Supports Semantic Highlighting
- 📦 Export themes - ready to use in VSCode
- **New! 💚**: **Import** existing themes for customization and editing
- **New! 💚**: **Rich editing** features
  - Replace all occurrences of a color
  - Update theme metadata (name, author, etc.)

Based on amazing work by [@el-angel](https://github.com/el-angel) - [`el-angel/theme-editor`](https://github.com/el-angel/theme-editor), and updated by [@kerberjg](https://github.com/kerberjg).

<!--
![](./screenshot.png 'Theme Editor')
-->

## 🔮 Usage Guide

<!--
### Online Editor

Available now! ✨ https://kerberjg.github.io/vscode-theme-editor
-->

### Run locally

Make sure to have Node.js and Yarn installed on your system before running the following commands:

```
$ git clone https://github.com/kerberjg/vscode-theme-editor.git
$ cd ./vscode-theme-editor
$ yarn install
$ yarn start

// enable semantic highlighting
$ cd ./packages/server
$ yarn start
```

## 🛠 Development Guide

Package structure:

// table
| Package | Description |
|---------|-------------|
| `client` | The frontend client for the theme editor |
| `server` | The backend server for the theme editor |
| `shared` | Shared utilities and components for both client and server |
| `textmate-utilities` | Utilities for working with TextMate scopes |
| `semantic-tokens-utilities` | Utilities for working with Semantic Highlighting |

## See also:

- [el-angel/theme-editor](https://github.com/el-angel/theme-editor): original project (currently abandoned)
- [@anche/textmate-utilities](https://github.com/el-angel/theme-editor/tree/main/packages/textmate-utilities)
- [@anche/semantic-tokens-utilities](https://github.com/el-angel/theme-editor/tree/main/packages/semantic-tokens-utilities)

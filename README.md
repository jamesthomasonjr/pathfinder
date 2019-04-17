# Pathfinder README

Pathfinder is a Visual Studio Code extension which improves the built-in Explorer.
This extension aims to bring over NERDTree functionality to ease developer transition from Vim to VS Code.

## Features
- Adds a `pathfinder.showExplorerMenu` command
  - This command shows a quick pick menu with options to add, move, delete, and copy files.
- Binds `m` to `pathfinder.showExplorerMenu`
- Binds `s` to open a file in a split view
- Rebinds `<enter>` to open files/directories instead of rename them

## Installation
Replace `.vscode` with `.vscode-insiders` or `.vscode-oss` as appropriate
```bash
git clone git@github.com:jamesthomasonjr/pathfinder.git & \
cd pathfinder & \
npm install & \
npm run compile & \
ln -s $(PWD) ~/.vscode/extensions/

## Extension Settings
- None yet

## Planned features
- `s` should alway open a file in a vertical split
  - Right now, this should be based on vscode settings. By default, this is vertical.
- `i` should open a file in a horizontal split
- Configuration to select if `Delete the current node` permanently deletes the node or moves it to the trash
  - Currently defaulted to move to trash
- `pathfinder.showExplorerMenu` should auto-select action without `<enter>`
- `Add child node` should be able to determine whether to create a file or directory by the name
  - Like NERDTree, if the name ends in `/`, it should a directory

## Known Issues
- None... yet?


## Release Notes
### 0.0.1
Unreleased...

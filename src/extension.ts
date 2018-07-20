'use strict';

import * as vscode from 'vscode';

// @TODO: Look into using a single add command, and determining if the new node is a directory by whether or not it
// ends in "/"
const add_file = 'Add a childnode (File)';
const add_dir = 'Add a childnode (Directory)';
const rename = 'Move the current node';
const remove = 'Delete the current node';
const copy = 'Copy the current node';

export function activate(/* context: vscode.ExtensionContext */) {
    // @TODO: Look into allowing single characters like "m" to fire off the command instead of having to type "m<enter>"
    vscode.commands.registerCommand('pathfinder.showExplorerMenu', async () => {
        let action = await vscode.window.showQuickPick([
            add_file,
            add_dir,
            rename,
            remove,
            copy
        ]);

        if (add_file === action) {
            vscode.commands.executeCommand('explorer.newFile');
        }
        if (add_dir === action) {
            vscode.commands.executeCommand('explorer.newFolder');
        }
        if (rename === action) {
            vscode.commands.executeCommand('renameFile');
        }
        if (remove === action) {
            // @TODO: Provide a setting that determines to delete or move to trash
            // vscode.commands.executeCommand('deleteFile');
            vscode.commands.executeCommand('moveFileToTrash');
        }
        if (copy === action) {
            await vscode.commands.executeCommand('filesExplorer.copy');
            await vscode.commands.executeCommand('filesExplorer.paste');
            await vscode.commands.executeCommand('renameFile');
        }
    });
}

export function deactivate() {
    // Should anything go here?
}

'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.otherWindow', () => {
        const activeEditor = vscode.window.activeTextEditor;
        const c = activeEditor.viewColumn;
        const td = activeEditor.document;
        if (c == 1){ // become side-by-side 
            vscode.window.showTextDocument(td, vscode.ViewColumn.Two, true);      
            // switch new column anyway 
        }
        vscode.commands.executeCommand('workbench.action.navigateEditorGroups');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}
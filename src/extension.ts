'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.otherWindow', () => {
        if (vscode.window.visibleTextEditors.every(editor => editor.viewColumn === vscode.ViewColumn.One)) {
            const td = vscode.window.activeTextEditor.document;
            vscode.window.showTextDocument(td, vscode.ViewColumn.Two, true);      
            // become side-by-side 
            // switch new column anyway 
        }
        vscode.commands.executeCommand('workbench.action.navigateEditorGroups');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}
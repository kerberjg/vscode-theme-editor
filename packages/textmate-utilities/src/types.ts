import { Position } from '@kerberjg-vscode-editor/shared';

type Scope = string;

export interface TextMateRule {
    scopes: Scope[];
}

export interface TextMateNode extends Position, TextMateRule {}

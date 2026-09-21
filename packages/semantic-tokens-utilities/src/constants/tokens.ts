// import { TokenType, TokenModifier } from 'typescript-vscode-sh-plugin/lib/constants';

// HACK: `export declare const enum` breaks Babel, so they're declared first and exported second later
const enum TokenType {
    class = 0,
    enum = 1,
    interface = 2,
    namespace = 3,
    typeParameter = 4,
    type = 5,
    parameter = 6,
    variable = 7,
    enumMember = 8,
    property = 9,
    function = 10,
    member = 11,
    _ = 12
}
const enum TokenModifier {
    declaration = 0,
    static = 1,
    async = 2,
    readonly = 3,
    defaultLibrary = 4,
    local = 5,
    _ = 6
}
const enum TokenEncodingConsts {
    typeOffset = 8,
    modifierMask = 255
}
const enum VersionRequirement {
    major = 3,
    minor = 7
}

export {
    TokenType,
    TokenModifier,
    TokenEncodingConsts,
    VersionRequirement
};

export const tokenTypes: string[] = [];
tokenTypes[TokenType.class] = 'class';
tokenTypes[TokenType.enum] = 'enum';
tokenTypes[TokenType.interface] = 'interface';
tokenTypes[TokenType.namespace] = 'namespace';
tokenTypes[TokenType.typeParameter] = 'typeParameter';
tokenTypes[TokenType.type] = 'type';
tokenTypes[TokenType.parameter] = 'parameter';
tokenTypes[TokenType.variable] = 'variable';
tokenTypes[TokenType.enumMember] = 'enumMember';
tokenTypes[TokenType.property] = 'property';
tokenTypes[TokenType.function] = 'function';
tokenTypes[TokenType.member] = 'member';

export const tokenModifiers: string[] = [];
tokenModifiers[TokenModifier.declaration] = 'declaration';
tokenModifiers[TokenModifier.static] = 'static';
tokenModifiers[TokenModifier.async] = 'async';
tokenModifiers[TokenModifier.readonly] = 'readonly';
tokenModifiers[TokenModifier.defaultLibrary] = 'defaultLibrary';
tokenModifiers[TokenModifier.local] = 'local';

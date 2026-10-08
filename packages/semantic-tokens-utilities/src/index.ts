import createToken from './CreateToken';
import createTokenString from './CreateTokenString';
import parser from './Parser';
import type { SemanticTokensParserResult } from './Parser';
import * as matcher from './Matcher';
import type { SemanticToken, Token } from './types';
import * as Presets from './FallbackPresets';
import initialize from './Initialize';

export { initialize };
export { Presets };
export { createToken };
export { createTokenString };
export { parser };
export { matcher };

// types
export type { SemanticToken, Token };
export type { SemanticTokensParserResult };

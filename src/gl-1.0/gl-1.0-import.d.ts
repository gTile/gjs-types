

import GL10 from '@gtile/gl-1.0';

declare global {
    export interface GjsGiImports {
        GL: typeof GL10;
    }
}

export default GjsGiImports;



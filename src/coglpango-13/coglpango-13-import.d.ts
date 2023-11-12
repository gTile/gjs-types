

import CoglPango13 from '@gtile/coglpango-13';

declare global {
    export interface GjsGiImports {
        CoglPango: typeof CoglPango13;
    }
}

export default GjsGiImports;



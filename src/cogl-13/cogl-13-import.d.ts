

import Cogl13 from '@gtile/cogl-13';

declare global {
    export interface GjsGiImports {
        Cogl: typeof Cogl13;
    }
}

export default GjsGiImports;





import Pango10 from '@gtile/pango-1.0';

declare global {
    export interface GjsGiImports {
        Pango: typeof Pango10;
    }
}

export default GjsGiImports;



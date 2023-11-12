

import Polkit10 from '@gtile/polkit-1.0';

declare global {
    export interface GjsGiImports {
        Polkit: typeof Polkit10;
    }
}

export default GjsGiImports;





import GnomeDesktop40 from '@gtile/gnomedesktop-4.0';

declare global {
    export interface GjsGiImports {
        GnomeDesktop: typeof GnomeDesktop40;
    }
}

export default GjsGiImports;



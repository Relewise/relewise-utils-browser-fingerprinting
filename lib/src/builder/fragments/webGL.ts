import { IFingerprintFragment } from '../fingerprint-fragment';

export class WebGL implements IFingerprintFragment {
    get(): string {
        const canvas = document.createElement('canvas');
        let gl;
        let renderer = '';

        try {
            gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        } catch (e) {
        }

        if (gl) {
            const debugInfo = (gl as any).getExtension('WEBGL_debug_renderer_info');
            renderer = (gl as any).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        }

        return renderer;
    }
}

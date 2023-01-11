import { BrowserFingerPrintBuilder } from './builder';

export class Fingerprint {
    /**
     * This method expects to be run in a browser context, as it reads values from the browser.
     * @param salt 
     * @returns Fingerprint identifier
     */
    static async get(salt: string): Promise<string | null> {
        try {
            const id = `${this.browserFingerprint()}_${salt}_${this.getRotator()}`;

            const encoder = new TextEncoder();
            const hashedValue: ArrayBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(id));

            const hashArray = Array.from(new Uint8Array(hashedValue));
            const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

            return hashHex.substring(0, 32);
        } catch {
            if (crypto.subtle === undefined) {
                console.error('window.crypto is null. In general, you should use this API only in secure contexts (HTTPS).')
            } else {
                console.error('Failed to generate fingerprint.');
            }

            return null;
        }
    }

    private static browserFingerprint() {
        return BrowserFingerPrintBuilder.build();
    }

    private static getRotator() {
        const date = new Date();
        return `${date.getFullYear()}-${date.getMonth() + 1}-1`;
    }
}
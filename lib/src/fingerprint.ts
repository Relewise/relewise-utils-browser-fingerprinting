import { BrowserFingerPrintBuilder } from './builder';

export class Fingerprint {
    /**
     * This method expects to be run in a browser context, as it reads values from the browser.
     * @param datasetId 
     * @returns Fingerprint identifier
     */
    static async get(datasetId: string): Promise<string> {
        const id = `${this.browserFingerprint()}_${datasetId}_${this.getSalt()}`;

        const encoder = new TextEncoder();
        const hashedValue: ArrayBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(id));

        const hashArray = Array.from(new Uint8Array(hashedValue));                
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

        return hashHex.substring(0, 32);
    }

    private static browserFingerprint() {
        return new BrowserFingerPrintBuilder().build();
    }

    private static getSalt() {
        const date = new Date();
        return `${date.getFullYear()}-${date.getMonth()+1}-1`;
    }
}




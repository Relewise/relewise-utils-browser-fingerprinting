import { IFingerprintFragment } from '../fingerprint-fragment';

export class Languages implements IFingerprintFragment {
    get(): string {
        return window.navigator.languages.reduce((prev, current) => `${prev + current}_`, '');
    }
}

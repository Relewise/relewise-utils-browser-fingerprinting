import { IFingerprintFragment } from '../fingerprint-fragment';

export class UserAgent implements IFingerprintFragment {
    get(): string {
        return window.navigator.userAgent;
    }
}

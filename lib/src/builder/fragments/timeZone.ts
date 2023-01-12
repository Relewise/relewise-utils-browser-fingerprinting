import { IFingerprintFragment } from '../fingerprint-fragment';

export class TimeZone implements IFingerprintFragment {
    get(): string {
        return new Date().getTimezoneOffset().toString();
    }
}

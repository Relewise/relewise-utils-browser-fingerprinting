import { IFingerprintFragment } from '../fingerprint-fragment';

export class DeviceMemory implements IFingerprintFragment {
    get(): string {
        return ((window.navigator as any).deviceMemory ?? 0).toString();
    }
}
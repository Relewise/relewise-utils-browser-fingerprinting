import { IFingerprintFragment } from '../fingerprint-fragment';

export class Plugins implements IFingerprintFragment {
    get(): string {
        if (window.navigator.plugins?.length === 0)
            return '';

        let pluginNames = '';

        for (let index = 0; index < window.navigator.plugins.length; index++) {
            const element = window.navigator.plugins[index];
            pluginNames += element.name;
        }

        return pluginNames;
    }
}

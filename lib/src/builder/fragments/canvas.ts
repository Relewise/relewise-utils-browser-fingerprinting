import { IFingerprintFragment } from '../fingerprint-fragment';

export class Canvas implements IFingerprintFragment {
    get(): string {

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (ctx) {
            const text = 'i9asdm..$#po((^@KbXrww!~cz';

            ctx.textBaseline = 'top';
            ctx.font = '16px \'Arial\'';
            ctx.textBaseline = 'alphabetic';
            ctx.rotate(.05);
            ctx.fillStyle = '#f60';
            ctx.fillRect(125, 1, 62, 20);
            ctx.fillStyle = '#069';
            ctx.fillText(text, 2, 15);
            ctx.fillStyle = 'rgba(102, 200, 0, 0.7)';
            ctx.fillText(text, 4, 17);
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'blue';
            ctx.fillRect(-20, 10, 234, 5);
        }

        return canvas.toDataURL();
    }
}

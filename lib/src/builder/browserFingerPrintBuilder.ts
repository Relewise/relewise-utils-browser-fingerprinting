import { Canvas } from './fragments/canvas';
import { Languages } from './fragments/languages';
import { Plugins } from './fragments/plugins';
import { UserAgent } from './fragments/userAgent';
import { WebGL } from './fragments/webGL';

export class BrowserFingerPrintBuilder {

    private static fragments = [
        new UserAgent(),
        new Languages(),
        new Canvas(),
        new Plugins(),
        new WebGL(),
    ];

    build(): string {
        return BrowserFingerPrintBuilder.fragments.reduce((prev, current) => prev + current.get(), '');
    }
}

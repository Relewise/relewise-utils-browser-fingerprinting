import { Canvas } from './fragments/Canvas';
import { Languages } from './fragments/Languages';
import { Plugins } from './fragments/Plugins';
import { UserAgent } from './fragments/UserAgent';
import { WebGL } from './fragments/WebGL';

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

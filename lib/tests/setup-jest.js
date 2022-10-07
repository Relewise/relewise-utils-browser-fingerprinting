import { TextEncoder, TextDecoder } from 'util';
import { Crypto } from '@peculiar/webcrypto'

global.crypto = new Crypto()
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

Object.defineProperty(global.self, 'crypto', {
    value: {
        subtle: new Crypto().subtle,
    },
});
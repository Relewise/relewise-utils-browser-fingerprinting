import { test, expect } from '@jest/globals'
import { Fingerprint } from '../../src'

const salt = '21f4f3ad-2340-470a-8a59-31313e06c157';

test('Get generate fingerprint', async() => {
    const id: string | null = await Fingerprint.get(salt);
    expect(id).toBeDefined();
});

test('Fingerprints - ensure the same', async() => {
    const id: string | null = await Fingerprint.get(salt);
    const id2: string | null = await Fingerprint.get(salt);

    expect(id).toEqual(id2);
});

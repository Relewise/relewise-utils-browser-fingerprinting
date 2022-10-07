import { test, expect } from '@jest/globals'
import { Fingerprint } from '../../src'

const datasetId = '21f4f3ad-2340-470a-8a59-31313e06c157';

/**
 * @jest-environment jsdom
 */
test('Get generate fingerprint', async() => {
    const id: string = await Fingerprint.get(datasetId);
    expect(id).toBeDefined;
});

/**
 * @jest-environment jsdom
 */
test('Fingerprints - ensure the same', async() => {
    const id: string = await Fingerprint.get(datasetId);
    const id2: string = await Fingerprint.get(datasetId);

    expect(id).toEqual(id2);
});

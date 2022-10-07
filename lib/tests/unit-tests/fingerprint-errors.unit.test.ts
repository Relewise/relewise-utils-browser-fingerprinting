/**
 * @jest-environment node
 */
import { test, expect } from '@jest/globals'
import { Fingerprint } from '../../src'

const salt = '21f4f3ad-2340-470a-8a59-31313e06c157';

jest.spyOn(global.console, 'error').mockImplementation(() => { });

test('Running in node - fails', async() => {
   
    const id: string|null = await Fingerprint.get(salt);
    expect(id).toBeNull();

    expect(console.error).toHaveBeenCalledTimes(1); 
});

test('Fake running in insecure mode', async() => {
    const id: string|null = await Fingerprint.get(salt);
    expect(id).toBeNull();

    expect(console.error).toHaveBeenCalledTimes(2); 
});
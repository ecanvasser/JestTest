import { capitalize, reverseString } from './exercises'

test('String gets capitalized', () => {
    expect(capitalize('app')).toBe('App');
})

test('String gets reversed', () => {
    expect(reverseString('Test')).toBe('tseT');
})
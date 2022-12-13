import { capitalize } from './exercises'

test('String gets capitalized', () => {
    expect(capitalize('app')).toBe('App');
})
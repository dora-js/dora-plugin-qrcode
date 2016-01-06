import expect from 'expect';
import { getHref } from '../src/utils';

describe('utils', () => {

  it('getHref', () => {
    expect(getHref({}, '192.168.0.1')).toBe('http://192.168.0.1');
    expect(getHref({href:'http://a.com'}, '192.168.0.1')).toBe('http://a.com');
  });
});


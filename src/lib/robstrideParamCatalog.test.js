import { describe, expect, it } from 'vitest';
import { toRobstrideCliType } from './robstrideParamCatalog';

describe('robstride parameter catalog helpers', () => {
  it('maps only parameter types supported by the v0.3.5 WS API', () => {
    expect(toRobstrideCliType('uint8')).toBe('u8');
    expect(toRobstrideCliType('uint16')).toBe('u16');
    expect(toRobstrideCliType('uint32')).toBe('u32');
    expect(toRobstrideCliType('int8')).toBe('i8');
    expect(toRobstrideCliType('float')).toBe('f32');
  });

  it('does not silently reinterpret signed 16/32-bit values as unsigned', () => {
    expect(toRobstrideCliType('int16')).toBe('');
    expect(toRobstrideCliType('int32')).toBe('');
  });
});

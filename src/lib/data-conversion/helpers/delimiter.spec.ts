import { describe, expect, it } from 'vitest';
import {
    delimiter,
    parseDelimiter,
} from 'src/lib/data-conversion/helpers/delimiter';

describe('parse-delimiter', () => {
    it('case 1', () => {
        const input = delimiter('3.2', 2);
        const output = ['3.2', '2', '3.2.2'];
        expect(parseDelimiter(input)).toEqual(output);
    });
    it('case 2', () => {
        const input = '# Section 3.2.1.1.2 text';
        const output = ['3.2.1.1', '2', '3.2.1.1.2'];
        expect(parseDelimiter(input)).toEqual(output);
    });
});

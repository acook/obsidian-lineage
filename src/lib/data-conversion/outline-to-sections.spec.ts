import { describe, expect, test } from 'vitest';
import { outlineToSections } from 'src/lib/data-conversion/outline-to-sections';
import { outlineExamples } from 'src/lib/data-conversion/test-data/outline-examples';

describe('outline-to-sections', () => {
    for (const [name, data] of Object.entries(outlineExamples)) {
        test(name, () => {
            expect(outlineToSections(data.outline)).toEqual(data.sections);
        });
    }

    test('has a section', () => {
        const input = [
            '- 1',
            '\t- 1.1',
            '# Section 1.2',
            '\t\t- 1.2',
            '- 2',
            '- 3',
            '\t- 3.1',
        ];
        expect(() => outlineToSections(input.join('\n'))).toThrowError(
            'Outline has a section annotation',
        );
    });
});

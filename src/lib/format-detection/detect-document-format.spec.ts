import { describe, expect, it } from 'vitest';
import { detectDocumentFormat } from 'src/lib/format-detection/detect-document-format';

describe('detectDocumentFormat', () => {
    it('should return "document" when parseDelimiter matches', () => {
        const text = [
            '---',
            'key: value',
            '---',
            'text',
            '# Section 1',
            'text',
        ].join('\n');

        const result = detectDocumentFormat(text);

        expect(result).toBe('sections');
    });

    it('should return "outline" when bullet points are found', () => {
        const text = ['---', 'key: value', '---', '- item 1', '- item 2'].join(
            '\n',
        );

        const result = detectDocumentFormat(text);

        expect(result).toBe('outline');
    });

    it('should return undefined when no delimiter or bullet points are found', () => {
        const text = ['---', 'key: value', '---', 'This is a line.'].join('\n');

        const result = detectDocumentFormat(text);

        expect(result).toBeUndefined();
    });

    it('should return undefined when bullet points are mixed with text', () => {
        const text = [
            '---',
            'key: value',
            '---',
            'This is a line.',
            '- item 1',
        ].join('\n');

        const result = detectDocumentFormat(text);

        expect(result).toBe(undefined);
    });

    it('should return "document" when both delimiter and bullet points are present, prioritize delimiter', () => {
        const text = [
            '---',
            'key: value',
            '---',
            '- item 1',
            '# Section 1',
            'text',
        ].join('\n');

        const result = detectDocumentFormat(text);

        expect(result).toBe('sections');
    });
    it('should detect single bullet text in non-strict mode', () => {
        const text = '- 1';
        const result = detectDocumentFormat(text, false);

        expect(result).toBe('outline');
    });
});

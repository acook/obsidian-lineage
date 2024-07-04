import { expect, test, vi } from 'vitest';
import { pasteNode } from 'src/stores/document/reducers/clipboard/paste-node/paste-node';
import { __id__ } from 'src/helpers/test-helpers/__id__';
import { text } from 'src/helpers/test-helpers/text';

const state = {
    n: 0,
    c: 0,
    s: 0,
};

vi.mock('src/helpers/id', () => {
    return {
        id: {
            rootNode: () => 'r-',
            node: () => 'n-' + state.n++,
            column: () => 'c-' + state.c++,
            snapshot: () => 's-' + state.s++,
        },
    };
});

test('paste node: 1', () => {
    const c0 = 'cEdo';
    const c1 = 'c-2';
    const root = 'rqBD';
    const n1 = 'nbhL';
    const n2 = __id__.node();
    const n2_1 = __id__.node();
    const n2_2 = __id__.node();
    const n3 = 'nM0s';
    const original = {
        columns: [
            { id: c0, groups: [{ nodes: [n1, n2, n3], parentId: root }] },
            { id: c1, groups: [{ nodes: [n2_1, n2_2], parentId: n2 }] },
        ],
        content: {
            [n1]: { content: '1' },
            [n2]: { content: '2' },
            [n2_1]: { content: '2.1' },
            [n2_2]: { content: '2.2' },
            [n3]: { content: '3' },
        },
    };

    const input = {
        columns: [{ id: c0, groups: [{ nodes: [n1, n3], parentId: root }] }],
        content: { [n1]: { content: '1' }, [n3]: { content: '3' } },
    };
    const action = {
        type: 'DOCUMENT/PASTE_BRANCH',
        payload: {
            targetNodeId: 'nbhL',
            text: '\r\n# Section 1\r\n2\r\n\r\n# Section 1.1\r\n2.1\r\n\r\n# Section 1.2\r\n2.2',
        },
    };
    pasteNode(input, action);
    expect(input.columns).toEqual(original.columns);
    expect(input.content).toEqual(original.content);
    expect(text(original)).toEqual(text(input));
});

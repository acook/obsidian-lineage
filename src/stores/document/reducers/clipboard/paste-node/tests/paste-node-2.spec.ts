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

test('paste node: 2', () => {
    const c0 = 'ceNs';
    const c1 = 'cExd';
    const c2 = 'cIs-';
    const root = 'r4Ke';
    const n1 = 'nNeo';
    const n3 = 'n0_t';
    const n2 = __id__.node();
    const n2_1 = __id__.node();
    const n2_1_1 = __id__.node();
    const n2_1_2 = __id__.node();
    const n2_1_3 = __id__.node();
    const n2_2 = __id__.node();
    const n2_2_1 = __id__.node();
    const n2_2_2 = __id__.node();
    const n2_2_3 = __id__.node();
    const n1_1 = 'nOiI';
    const n1_1_1 = 'nQBI';
    const n1_1_2 = 'n15h';
    const n3_1 = 'nM4u';
    const n3_1_1 = 'nrPV';
    const n3_2 = 'n-qa';
    const original = {
        columns: [
            { id: c0, groups: [{ nodes: [n1, n2, n3], parentId: root }] },
            {
                id: c1,
                groups: [
                    { nodes: [n1_1], parentId: n1 },
                    { nodes: [n2_1, n2_2], parentId: n2 },
                    { nodes: [n3_1, n3_2], parentId: n3 },
                ],
            },
            {
                id: c2,
                groups: [
                    { nodes: [n1_1_1, n1_1_2], parentId: n1_1 },
                    { nodes: [n2_1_1, n2_1_2, n2_1_3], parentId: n2_1 },
                    { nodes: [n2_2_1, n2_2_2, n2_2_3], parentId: n2_2 },
                    { nodes: [n3_1_1], parentId: n3_1 },
                ],
            },
        ],
        content: {
            [n1]: { content: '1' },
            [n2]: { content: '2' },
            [n2_1]: { content: '2.1' },
            [n2_2]: { content: '2.2' },
            [n3]: { content: '3' },
            [n2_1_1]: { content: '2.1.1' },
            [n2_1_2]: { content: '2.1.2' },
            [n2_2_1]: { content: '2.2.1' },
            [n2_2_2]: { content: '2.2.2' },
            [n2_2_3]: { content: '2.2.3' },
            [n2_1_3]: { content: '2.1.3' },
            [n1_1]: { content: '1.1' },
            [n1_1_1]: { content: '1.1.1' },
            [n1_1_2]: { content: '1.1.2' },
            [n3_1]: { content: '3.1' },
            [n3_1_1]: { content: '3.1.1' },
            [n3_2]: { content: '3.2' },
        },
    };

    const input = {
        columns: [
            { id: c0, groups: [{ nodes: [n1, n3], parentId: root }] },
            {
                id: c1,
                groups: [
                    { nodes: [n1_1], parentId: n1 },
                    { nodes: [n3_1, n3_2], parentId: n3 },
                ],
            },
            {
                id: c2,
                groups: [
                    { nodes: [n1_1_1, n1_1_2], parentId: n1_1 },
                    { nodes: [n3_1_1], parentId: n3_1 },
                ],
            },
        ],
        content: {
            [n1]: { content: '1' },
            [n3]: { content: '3' },
            [n1_1]: { content: '1.1' },
            [n1_1_1]: { content: '1.1.1' },
            [n1_1_2]: { content: '1.1.2' },
            [n3_1]: { content: '3.1' },
            [n3_1_1]: { content: '3.1.1' },
            [n3_2]: { content: '3.2' },
        },
    };
    const action = {
        type: 'DOCUMENT/PASTE_BRANCH',
        payload: {
            targetNodeId: 'nNeo',
            text: '\r\n# Section 1\r\n2\r\n\r\n# Section 1.1\r\n2.1\r\n\r\n# Section 1.1.1\r\n2.1.1\r\n\r\n# Section 1.1.2\r\n2.1.2\r\n\r\n# Section 1.1.3\r\n2.1.3\r\n\r\n# Section 1.2\r\n2.2\r\n\r\n# Section 1.2.1\r\n2.2.1\r\n\r\n# Section 1.2.2\r\n2.2.2\r\n\r\n# Section 1.2.3\r\n2.2.3',
        },
    };
    pasteNode(input, action);
    expect(input.columns).toEqual(original.columns);
    expect(input.content).toEqual(original.content);
    expect(text(original)).toEqual(text(input));
});

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

test('paste node: 3', () => {
    const c0 = 'cemvnv6Lj';
    const c1 = 'cst6p2MSo';
    const c2 = 'cD3EOcA1K';
    const c3 = 'c-5';
    const c4 = 'c-6';

    const root = 'rGEupImbx';
    const n1 = 'nrWB5k08N';
    const n1_1 = 'nDtRWB4bF';
    const n1_1_1 = 'nS6RdGDIU';
    const n1_1_2 = 'np_gZzU9G';
    const n2 = 'nT_HAScRm';
    const n2_1 = 'nVWpyW13z';
    const n2_1_1 = 'nyApaGu6y';
    const n2_1_2 = 'nf47XN_1c';
    const n2_1_3 = 'ntif7TZna';
    const n2_2 = 'naH4koEbW';
    const n2_2_1 = 'nG6DYCBgV';
    const n2_2_2 = 'nQmyLG82D';
    const n2_2_3 = 'n6I7uOvB_';
    const n3 = __id__.node();
    const n3_1 = __id__.node();
    const n3_1_1 = __id__.node();
    const n3_1_2 = __id__.node();
    const n3_1_3 = __id__.node();
    const n3_1_3_1 = __id__.node();
    const n3_1_3_2 = __id__.node();
    const n3_1_3_2_1 = __id__.node();
    const n3_1_3_2_2 = __id__.node();
    const n3_1_3_2_3 = __id__.node();
    const n3_1_3_2_4 = __id__.node();
    const n3_2 = __id__.node();
    const n4 = 'nPBFPHLf-';
    const n4_1 = 'nVcFNccmv';
    const n4_2 = 'nyLC-f62y';
    const n4_3 = 'nhC_k1_4M';
    const n4_4 = 'nTfWr1unG';
    const original = {
        columns: [
            {
                id: c0,
                groups: [{ nodes: [n1, n2, n3, n4], parentId: root }],
            },
            {
                id: c1,
                groups: [
                    { nodes: [n1_1], parentId: n1 },
                    { nodes: [n2_1, n2_2], parentId: n2 },
                    { nodes: [n3_1, n3_2], parentId: n3 },
                    { nodes: [n4_1, n4_2, n4_3, n4_4], parentId: n4 },
                ],
            },
            {
                id: c2,
                groups: [
                    { nodes: [n1_1_1, n1_1_2], parentId: n1_1 },
                    { nodes: [n2_1_1, n2_1_2, n2_1_3], parentId: n2_1 },
                    { nodes: [n2_2_1, n2_2_2, n2_2_3], parentId: n2_2 },
                    { nodes: [n3_1_1, n3_1_2, n3_1_3], parentId: n3_1 },
                ],
            },
            {
                id: c3,
                groups: [{ nodes: [n3_1_3_1, n3_1_3_2], parentId: n3_1_3 }],
            },
            {
                id: c4,
                groups: [
                    {
                        nodes: [n3_1_3_2_1, n3_1_3_2_2, n3_1_3_2_3, n3_1_3_2_4],
                        parentId: n3_1_3_2,
                    },
                ],
            },
        ],
        content: {
            [n1]: { content: '1' },
            [n1_1]: { content: '1.1' },
            [n1_1_1]: { content: '1.1.1' },
            [n1_1_2]: { content: '1.1.2' },
            [n2]: { content: '2' },
            [n2_1]: { content: '2.1' },
            [n2_1_1]: { content: '2.1.1' },
            [n2_1_2]: { content: '2.1.2' },
            [n2_1_3]: { content: '2.1.3' },
            [n2_2]: { content: '2.2' },
            [n2_2_1]: { content: '2.2.1' },
            [n2_2_2]: { content: '2.2.2' },
            [n2_2_3]: { content: '2.2.3' },
            [n3]: { content: '3' },
            [n3_1]: { content: '3.1' },
            [n3_1_1]: { content: '3.1.1' },
            [n3_2]: { content: '3.2' },
            [n3_1_2]: { content: '3.1.2' },
            [n3_1_3]: { content: '3.1.3' },
            [n3_1_3_1]: { content: '3.1.3.1' },
            [n3_1_3_2]: { content: '3.1.3.2' },
            [n3_1_3_2_1]: { content: '3.1.3.2.1' },
            [n3_1_3_2_2]: { content: '3.1.3.2.2' },
            [n3_1_3_2_3]: { content: '3.1.3.2.3' },
            [n3_1_3_2_4]: { content: '3.1.3.2.4' },
            [n4]: { content: '4' },
            [n4_1]: { content: '4.1' },
            [n4_2]: { content: '4.2' },
            [n4_3]: { content: '4.3' },
            [n4_4]: { content: '4.4' },
        },
    };

    const input = {
        columns: [
            { id: c0, groups: [{ nodes: [n1, n2, n4], parentId: root }] },
            {
                id: c1,
                groups: [
                    { nodes: [n1_1], parentId: n1 },
                    { nodes: [n2_1, n2_2], parentId: n2 },
                    { nodes: [n4_1, n4_2, n4_3, n4_4], parentId: n4 },
                ],
            },
            {
                id: c2,
                groups: [
                    { nodes: [n1_1_1, n1_1_2], parentId: n1_1 },
                    { nodes: [n2_1_1, n2_1_2, n2_1_3], parentId: n2_1 },
                    { nodes: [n2_2_1, n2_2_2, n2_2_3], parentId: n2_2 },
                ],
            },
        ],
        content: {
            [n1]: { content: '1' },
            [n1_1]: { content: '1.1' },
            [n1_1_1]: { content: '1.1.1' },
            [n1_1_2]: { content: '1.1.2' },
            [n2]: { content: '2' },
            [n2_1]: { content: '2.1' },
            [n2_1_1]: { content: '2.1.1' },
            [n2_1_2]: { content: '2.1.2' },
            [n2_1_3]: { content: '2.1.3' },
            [n2_2]: { content: '2.2' },
            [n2_2_1]: { content: '2.2.1' },
            [n2_2_2]: { content: '2.2.2' },
            [n2_2_3]: { content: '2.2.3' },
            [n4]: { content: '4' },
            [n4_1]: { content: '4.1' },
            [n4_2]: { content: '4.2' },
            [n4_3]: { content: '4.3' },
            [n4_4]: { content: '4.4' },
        },
    };
    const action = {
        type: 'DOCUMENT/PASTE_BRANCH',
        payload: {
            targetNodeId: 'nT_HAScRm',
            text: '\r\n# Section 1\r\n3\r\n\r\n# Section 1.1\r\n3.1\r\n\r\n# Section 1.1.1\r\n3.1.1\r\n\r\n# Section 1.1.2\r\n3.1.2\r\n\r\n# Section 1.1.3\r\n3.1.3\r\n\r\n# Section 1.1.3.1\r\n3.1.3.1\r\n\r\n# Section 1.1.3.2\r\n3.1.3.2\r\n\r\n# Section 1.1.3.2.1\r\n3.1.3.2.1\r\n\r\n# Section 1.1.3.2.2\r\n3.1.3.2.2\r\n\r\n# Section 1.1.3.2.3\r\n3.1.3.2.3\r\n\r\n# Section 1.1.3.2.4\r\n3.1.3.2.4\r\n\r\n# Section 1.2\r\n3.2',
        },
    };
    pasteNode(input, action);
    expect(input.columns).toEqual(original.columns);
    expect(input.content).toEqual(original.content);
    expect(text(original)).toEqual(text(input));
});

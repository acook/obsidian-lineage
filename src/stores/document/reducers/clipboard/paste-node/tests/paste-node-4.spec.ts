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

test('paste node: 4', () => {
    const c0 = 'ccYtq_EFK';
    const c1 = 'cI7fbhrfF';
    const c2 = 'cRmzuaMBq';
    const c3 = 'cVhKa6tsQ';
    const c4 = 'cyYLw-a4O';
    const c5 = 'c-6';
    const root = 'rhwlWOL6F';
    const n2 = 'nNcm24fOG';
    const n2_1 = 'nZrd7oNkC';
    const n2_1_1 = 'nXNnB8xgd';
    const n2_1_2 = 'nkHhjzdS8';
    const n2_1_3 = 'nl-pe99JH';
    const n2_2 = 'n8CFlCark';
    const n2_2_1 = 'njEY-Wj_8';
    const n2_2_2 = 'nNKVO8AK9';
    const n2_2_3 = 'nwOhenQXP';
    const n3 = 'nNXpXszYk';
    const n3_1 = 'n1GfVu_EW';
    const n3_1_1 = 'np0uUC6Ye';
    const n3_1_2 = 'n9VM5zjkf';
    const n3_1_3 = 'nKJB5fb-Y';
    const n3_1_3_1 = 'nL8Gl9BkN';
    const n3_1_3_2 = 'npwdso4IS';
    const n3_1_3_2_1 = 'n0Imz00Q_';
    const n3_1_3_2_2 = 'nyBHWI7g2';
    const n3_1_3_2_3 = 'n6grj3aGi';
    const n3_1_3_2_4 = 'nKS-xIR7r';
    const n3_2 = 'na2ZnwWZz';
    const n4 = 'n2IN8CZHS';
    const n4_1 = 'nnNTAdPLT';
    const n4_2 = 'nOXkeYnJS';
    const n4_3 = 'nBFKpv8AH';
    const n4_4 = 'nplXxF5md';
    const n1 = __id__.node();
    const n1_1 = __id__.node();
    const n1_1_1 = __id__.node();
    const n1_1_1_1 = __id__.node();
    const n1_1_1_1_1 = __id__.node();
    const n1_1_1_1_1_1 = __id__.node();
    const n1_1_1_1_1_2 = __id__.node();
    const n1_1_1_1_1_3 = __id__.node();
    const n1_1_1_1_2 = __id__.node();
    const n1_1_1_1_3 = __id__.node();
    const n1_1_1_2 = __id__.node();
    const n1_1_1_3 = __id__.node();
    const n1_1_2 = __id__.node();
    const n1_1_2_1 = __id__.node();
    const n1_1_2_1_1 = __id__.node();
    const n1_1_2_1_1_1 = __id__.node();
    const n1_2 = __id__.node();
    const n1_3 = __id__.node();
    const n1_4 = __id__.node();
    const n1_4_1 = __id__.node();
    const n1_4_2 = __id__.node();
    const n1_4_3 = __id__.node();
    const n1_4_4 = __id__.node();
    const n2_3 = 'nEOII-cG0';
    const n2_4 = 'nQ1LOY6K3';
    const n2_5 = 'nqUDMVS_x';
    const n2_5_1 = 'nlwFVnn5t';
    const n2_5_1_1 = 'nPbMZAvZ6';
    const n5 = 'nlcDtpkxx';
    const n6 = 'n4LzdhPjZ';
    const n6_1 = 'n9S9yzHwl';
    const n6_1_1 = 'nDhUqy0TF';
    const n6_1_2 = 'ntJ4fg6_W';
    const original = {
        columns: [
            {
                id: c0,
                groups: [{ nodes: [n1, n2, n3, n4, n5, n6], parentId: root }],
            },
            {
                id: c1,
                groups: [
                    { nodes: [n1_1, n1_2, n1_3, n1_4], parentId: n1 },
                    { nodes: [n2_1, n2_2, n2_3, n2_4, n2_5], parentId: n2 },
                    { nodes: [n3_1, n3_2], parentId: n3 },
                    { nodes: [n4_1, n4_2, n4_3, n4_4], parentId: n4 },
                    { nodes: [n6_1], parentId: n6 },
                ],
            },
            {
                id: c2,
                groups: [
                    { nodes: [n1_1_1, n1_1_2], parentId: n1_1 },
                    {
                        nodes: [n1_4_1, n1_4_2, n1_4_3, n1_4_4],
                        parentId: n1_4,
                    },
                    { nodes: [n2_1_1, n2_1_2, n2_1_3], parentId: n2_1 },
                    { nodes: [n2_2_1, n2_2_2, n2_2_3], parentId: n2_2 },
                    { nodes: [n2_5_1], parentId: n2_5 },
                    { nodes: [n3_1_1, n3_1_2, n3_1_3], parentId: n3_1 },
                    { nodes: [n6_1_1, n6_1_2], parentId: n6_1 },
                ],
            },
            {
                id: c3,
                groups: [
                    {
                        nodes: [n1_1_1_1, n1_1_1_2, n1_1_1_3],
                        parentId: n1_1_1,
                    },
                    { nodes: [n1_1_2_1], parentId: n1_1_2 },
                    { nodes: [n2_5_1_1], parentId: n2_5_1 },
                    { nodes: [n3_1_3_1, n3_1_3_2], parentId: n3_1_3 },
                ],
            },
            {
                id: c4,
                groups: [
                    {
                        nodes: [n1_1_1_1_1, n1_1_1_1_2, n1_1_1_1_3],
                        parentId: n1_1_1_1,
                    },
                    { nodes: [n1_1_2_1_1], parentId: n1_1_2_1 },
                    {
                        nodes: [n3_1_3_2_1, n3_1_3_2_2, n3_1_3_2_3, n3_1_3_2_4],
                        parentId: n3_1_3_2,
                    },
                ],
            },
            {
                id: c5,
                groups: [
                    {
                        nodes: [n1_1_1_1_1_1, n1_1_1_1_1_2, n1_1_1_1_1_3],
                        parentId: n1_1_1_1_1,
                    },
                    { nodes: [n1_1_2_1_1_1], parentId: n1_1_2_1_1 },
                ],
            },
        ],
        content: {
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
            [n3_1_2]: { content: '3.1.2' },
            [n3_1_3]: { content: '3.1.3' },
            [n3_1_3_1]: { content: '3.1.3.1' },
            [n3_1_3_2]: { content: '3.1.3.2' },
            [n3_1_3_2_1]: { content: '3.1.3.2.1' },
            [n3_1_3_2_2]: { content: '3.1.3.2.2' },
            [n3_1_3_2_3]: { content: '3.1.3.2.3' },
            [n3_1_3_2_4]: { content: '3.1.3.2.4' },
            [n3_2]: { content: '3.2' },
            [n4]: { content: '4' },
            [n4_1]: { content: '4.1' },
            [n4_2]: { content: '4.2' },
            [n4_3]: { content: '4.3' },
            [n4_4]: { content: '4.4' },
            [n1]: { content: '1' },
            [n1_1]: { content: '1.1' },
            [n1_1_1]: { content: '1.1.1' },
            [n1_1_2]: { content: '1.1.2' },
            [n1_1_2_1]: { content: '1.1.2.1' },
            [n1_1_2_1_1]: { content: '1.1.2.1.1' },
            [n1_1_2_1_1_1]: { content: '1.1.2.1.1.1' },
            [n1_1_1_1]: { content: '1.1.1.1' },
            [n1_1_1_1_1]: { content: '1.1.1.1.1' },
            [n1_1_1_1_1_1]: { content: '1.1.1.1.1.1' },
            [n1_1_1_1_1_2]: { content: '1.1.1.1.1.2' },
            [n1_1_1_1_1_3]: { content: '1.1.1.1.1.3' },
            [n1_1_1_1_2]: { content: '1.1.1.1.2' },
            [n1_1_1_1_3]: { content: '1.1.1.1.3' },
            [n1_1_1_2]: { content: '1.1.1.2' },
            [n1_1_1_3]: { content: '1.1.1.3' },
            [n1_2]: { content: '1.2' },
            [n1_3]: { content: '1.3' },
            [n1_4]: { content: '1.4' },
            [n1_4_1]: { content: '1.4.1' },
            [n1_4_2]: { content: '1.4.2' },
            [n1_4_3]: { content: '1.4.3' },
            [n1_4_4]: { content: '1.4.4' },
            [n2_3]: { content: '2.3' },
            [n2_4]: { content: '2.4' },
            [n2_5]: { content: '2.5' },
            [n2_5_1]: { content: '2.5.1' },
            [n2_5_1_1]: { content: '2.5.1.1' },
            [n5]: { content: '5' },
            [n6]: { content: '6' },
            [n6_1]: { content: '6.1' },
            [n6_1_1]: { content: '6.1.1' },
            [n6_1_2]: { content: '6.1.2' },
        },
    };

    const input = {
        columns: [
            {
                id: c0,
                groups: [{ nodes: [n2, n3, n4, n5, n6], parentId: root }],
            },
            {
                id: c1,
                groups: [
                    { nodes: [n2_1, n2_2, n2_3, n2_4, n2_5], parentId: n2 },
                    { nodes: [n3_1, n3_2], parentId: n3 },
                    { nodes: [n4_1, n4_2, n4_3, n4_4], parentId: n4 },
                    { nodes: [n6_1], parentId: n6 },
                ],
            },
            {
                id: c2,
                groups: [
                    { nodes: [n2_1_1, n2_1_2, n2_1_3], parentId: n2_1 },
                    { nodes: [n2_2_1, n2_2_2, n2_2_3], parentId: n2_2 },
                    { nodes: [n2_5_1], parentId: n2_5 },
                    { nodes: [n3_1_1, n3_1_2, n3_1_3], parentId: n3_1 },
                    { nodes: [n6_1_1, n6_1_2], parentId: n6_1 },
                ],
            },
            {
                id: c3,
                groups: [
                    { nodes: [n2_5_1_1], parentId: n2_5_1 },
                    { nodes: [n3_1_3_1, n3_1_3_2], parentId: n3_1_3 },
                ],
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
            [n3_1_2]: { content: '3.1.2' },
            [n3_1_3]: { content: '3.1.3' },
            [n3_1_3_1]: { content: '3.1.3.1' },
            [n3_1_3_2]: { content: '3.1.3.2' },
            [n3_1_3_2_1]: { content: '3.1.3.2.1' },
            [n3_1_3_2_2]: { content: '3.1.3.2.2' },
            [n3_1_3_2_3]: { content: '3.1.3.2.3' },
            [n3_1_3_2_4]: { content: '3.1.3.2.4' },
            [n3_2]: { content: '3.2' },
            [n4]: { content: '4' },
            [n4_1]: { content: '4.1' },
            [n4_2]: { content: '4.2' },
            [n4_3]: { content: '4.3' },
            [n4_4]: { content: '4.4' },
            [n2_3]: { content: '2.3' },
            [n2_4]: { content: '2.4' },
            [n2_5]: { content: '2.5' },
            [n2_5_1]: { content: '2.5.1' },
            [n2_5_1_1]: { content: '2.5.1.1' },
            [n5]: { content: '5' },
            [n6]: { content: '6' },
            [n6_1]: { content: '6.1' },
            [n6_1_1]: { content: '6.1.1' },
            [n6_1_2]: { content: '6.1.2' },
        },
    };
    const action = {
        type: 'DOCUMENT/PASTE_BRANCH',
        payload: {
            targetNodeId: 'nNcm24fOG',
            text: '\r\n# Section 1\r\n1\r\n\r\n# Section 1.1\r\n1.1\r\n\r\n# Section 1.1.1\r\n1.1.1\r\n\r\n# Section 1.1.1.1\r\n1.1.1.1\r\n\r\n# Section 1.1.1.1.1\r\n1.1.1.1.1\r\n\r\n# Section 1.1.1.1.1.1\r\n1.1.1.1.1.1\r\n\r\n# Section 1.1.1.1.1.2\r\n1.1.1.1.1.2\r\n\r\n# Section 1.1.1.1.1.3\r\n1.1.1.1.1.3\r\n\r\n# Section 1.1.1.1.2\r\n1.1.1.1.2\r\n\r\n# Section 1.1.1.1.3\r\n1.1.1.1.3\r\n\r\n# Section 1.1.1.2\r\n1.1.1.2\r\n\r\n# Section 1.1.1.3\r\n1.1.1.3\r\n\r\n# Section 1.1.2\r\n1.1.2\r\n\r\n# Section 1.1.2.1\r\n1.1.2.1\r\n\r\n# Section 1.1.2.1.1\r\n1.1.2.1.1\r\n\r\n# Section 1.1.2.1.1.1\r\n1.1.2.1.1.1\r\n\r\n# Section 1.2\r\n1.2\r\n\r\n# Section 1.3\r\n1.3\r\n\r\n# Section 1.4\r\n1.4\r\n\r\n# Section 1.4.1\r\n1.4.1\r\n\r\n# Section 1.4.2\r\n1.4.2\r\n\r\n# Section 1.4.3\r\n1.4.3\r\n\r\n# Section 1.4.4\r\n1.4.4',
            position: 'up',
        },
    } as const;
    pasteNode(input, action);
    expect(input.columns).toEqual(original.columns);
    expect(input.content).toEqual(original.content);
    expect(text(original)).toEqual(text(input));
});

import { Content } from 'src/stores/document/document-state-type';
import { TreeIndexDict } from 'src/stores/view/subscriptions/helpers/calculate-tree-index';

export const formatHeadings = (
    content: Content,
    treeIndexDict: TreeIndexDict,
) => {
    for (const nodeId in content) {
        const currentContent = content[nodeId]?.content;
        if (!currentContent) continue;
        const sectionNumber = treeIndexDict[nodeId];
        if (!sectionNumber) continue;
        const depth = sectionNumber.split('.').length;
        const symbol = `${'#'.repeat(Math.min(depth, 6))} `;
        const lines = currentContent.split('\n');
        const updatedLines = lines.map((line) => {
            const match = /^#+ /.exec(line);
            if (match) {
                return line.replace(match[0], symbol);
            }
            return line;
        });
        content[nodeId] = {
            content: updatedLines.join('\n'),
        };
    }
};

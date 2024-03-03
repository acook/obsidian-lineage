import { findNodeColumn } from 'src/stores/document/helpers/find-node-column';
import {
    createColumn,
    createGroup,
} from 'src/stores/document/helpers/create-node';
import { findChildGroup } from 'src/stores/document/helpers/search/find-child-group';
import { Column, NodeId, Columns } from 'src/stores/document/document-type';

export const moveNodeAsChild = (
    columns: Columns,
    node: NodeId,
    targetNode: NodeId,
) => {
    const targetGroup = findChildGroup(columns, targetNode);
    if (targetGroup) {
        targetGroup.nodes.push(node);
    } else {
        const currentColumnIndex = findNodeColumn(columns, targetNode);
        let targetColumn: Column | undefined;
        targetColumn = columns[currentColumnIndex + 1];

        if (!targetColumn) {
            const newColumn = createColumn();
            columns.push(newColumn);
            targetColumn = newColumn;
        }
        const newGroup = createGroup(targetNode);
        newGroup.nodes.push(node);
        targetColumn.groups.push(newGroup);
    }
};

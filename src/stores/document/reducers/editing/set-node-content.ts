import { findNode } from 'src/stores/document/helpers/find-node';
import { DocumentState } from 'src/stores/document/document-reducer';

export type SetNodeContentAction = {
    type: 'SET_NODE_CONTENT';
    payload: {
        nodeId: string;
        content: string;
    };
};
export const setNodeContent = (
    state: DocumentState,
    action: SetNodeContentAction,
) => {
    const node = findNode(state.columns, action.payload.nodeId);
    if (node) {
        node.content = action.payload.content;
    }
};
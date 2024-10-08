import { LineageView } from 'src/view/view';
import { DocumentsStoreAction } from 'src/stores/documents/documents-store-actions';
import { saveNodeContent } from 'src/view/actions/keyboard-shortcuts/helpers/commands/commands/helpers/save-node-content';
import { focusContainer } from 'src/stores/view/subscriptions/effects/focus-container';
import { alignBranch } from 'src/stores/view/subscriptions/effects/align-branch/align-branch';

export const onDocumentsStateUpdate = (
    view: LineageView,
    action: DocumentsStoreAction,
) => {
    if (!view.container) return;
    if (action.type === 'WORKSPACE/ACTIVE_LEAF_CHANGE') {
        if (view.viewStore.getValue().document.editing.activeNodeId) {
            saveNodeContent(view);
        }
    }
    if (
        view.isActive &&
        (action.type === 'WORKSPACE/SET_ACTIVE_LINEAGE_VIEW' ||
            action.type === 'WORKSPACE/RESIZE')
    ) {
        focusContainer(view);
        alignBranch(view);
    }
};

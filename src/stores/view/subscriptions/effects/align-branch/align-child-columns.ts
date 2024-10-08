import { ViewState } from 'src/stores/view/view-state-type';
import { DocumentState } from 'src/stores/document/document-state-type';
import {
    AlignBranchState,
    alignElement,
} from 'src/stores/view/subscriptions/effects/align-branch/helpers/align-element/align-element';
import { Settings } from 'src/stores/settings/settings-type';
import { getNodeElement } from 'src/stores/view/subscriptions/effects/align-branch/helpers/get-node-element';
import { alignChildGroupOfColumn } from 'src/stores/view/subscriptions/effects/align-branch/align-child-group-of-column';
import { alignInactiveColumn } from 'src/stores/view/subscriptions/effects/align-branch/align-inactive-column';

export const alignChildColumns = (
    viewState: ViewState,
    documentState: DocumentState,
    container: HTMLElement,
    localState: AlignBranchState,
    settings: Settings,
    behavior?: ScrollBehavior,
    alignInactiveColumns = false,
) => {
    let activeBranchNodeOfPreviousColumn: string | null =
        viewState.document.activeNode;
    for (const column of documentState.document.columns) {
        if (localState.columns.has(column.id)) continue;

        const activeNodesOfColumn =
            viewState.document.activeNodesOfColumn[column.id];

        const activeBranchNode: string | null =
            activeNodesOfColumn && activeBranchNodeOfPreviousColumn
                ? activeNodesOfColumn[activeBranchNodeOfPreviousColumn]
                : null;
        activeBranchNodeOfPreviousColumn = activeBranchNode;
        if (activeBranchNode) {
            const element = getNodeElement(container, activeBranchNode);
            if (element) {
                const columnId = alignElement(
                    container,
                    element,
                    settings,
                    behavior,
                );
                if (columnId) localState.columns.add(columnId);
            }
        } else {
            const childGroup = column.groups.find((g) =>
                viewState.document.activeBranch.childGroups.has(g.parentId),
            );
            if (childGroup) {
                alignChildGroupOfColumn(
                    viewState,
                    container,
                    column.id,
                    settings,
                    behavior,
                );
            } else if (alignInactiveColumns) {
                alignInactiveColumn(column, container, settings, behavior);
            }
        }
    }
};

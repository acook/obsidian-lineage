import { AllDirections } from 'src/stores/view/view-store-actions';
import { saveNodeContent } from 'src/view/actions/keyboard-shortcuts/helpers/commands/commands/helpers/save-node-content';
import Lineage from 'src/main';
import { getActiveLineageView } from 'src/view/actions/keyboard-shortcuts/helpers/commands/commands/helpers/get-active-lineage-view';

export const moveNode = (plugin: Lineage, direction: AllDirections) => {
    const view = getActiveLineageView(plugin);
    saveNodeContent(view);
    view.store.dispatch({
        type: 'DOCUMENT/MOVE_NODE',
        payload: { direction },
    });
};
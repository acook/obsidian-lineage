import { LineageView } from 'src/view/view';
import { Settings } from 'src/stores/settings/settings-type';
import { SettingsActions } from 'src/stores/settings/settings-reducer';
import { applyFontSize } from 'src/stores/view/subscriptions/effects/css-variables/apply-font-size';
import { applyContainerBg } from 'src/stores/view/subscriptions/effects/css-variables/apply-container-bg';
import { applyActiveBranchBg } from 'src/stores/view/subscriptions/effects/css-variables/apply-active-branch-bg';
import { applyCardWidth } from 'src/stores/view/subscriptions/effects/css-variables/apply-card-width';
import { applyZoom } from 'src/stores/view/subscriptions/effects/align-branch/helpers/apply-zoom';
import { alignBranch } from 'src/stores/view/subscriptions/effects/align-branch/align-branch';
import { Notice } from 'obsidian';

export const onPluginSettingsUpdate = (
    view: LineageView,
    state: Settings,
    action: SettingsActions,
) => {
    if (!view.container) return;
    const type = action.type;
    if (type === 'SET_FONT_SIZE') {
        applyFontSize(view, state.view.fontSize);
    } else if (type === 'SET_CONTAINER_BG') {
        applyContainerBg(view, state.view.theme.containerBg);
    } else if (type === 'SET_ACTIVE_BRANCH_BG') {
        applyActiveBranchBg(view, state.view.theme.activeBranchBg);
    } else if (type === 'SET_CARD_WIDTH') {
        applyCardWidth(view, state.view.cardWidth);
    } else if (action.type === 'UI/CHANGE_ZOOM_LEVEL') {
        applyZoom(
            view.viewStore.getValue(),
            view.container,
            state.view.zoomLevel,
            true,
        );
    } else if (action.type === 'SET_DOCUMENT_TYPE') {
        view.saveDocument();
    }

    const shouldAlign =
        type === 'SET_HORIZONTAL_SCROLLING_MODE' ||
        type === 'UPDATE_AXIS_OFFSET' ||
        type === 'UI/CHANGE_ZOOM_LEVEL' ||
        type === 'SET_CARD_WIDTH' ||
        type === 'SET_LIMIT_PREVIEW_HEIGHT';
    if (view.isActive && shouldAlign) {
        alignBranch(view, 'instant');
    }
    if (
        type === 'SET_HORIZONTAL_SCROLLING_MODE' &&
        state.view.scrolling.horizontalScrollingMode === 'fixed-position'
    ) {
        if (view.isActive) new Notice('Hold space to change card position');
    }
};

import { SettingsStore } from 'src/main';
import { ColorComponent, Setting } from 'obsidian';
import { getDefaultTheme } from 'src/stores/view/subscriptions/effects/css-variables/helpers/get-default-theme';

export const ActiveBranchColor = (
    container: HTMLElement,
    settingsStore: SettingsStore,
) => {
    const settingsState = settingsStore.getValue();

    let input: ColorComponent;

    const setValue = () => {
        input.setValue(
            settingsState.view.theme.activeBranchBg ||
                getDefaultTheme().activeBranchBg,
        );
    };
    new Setting(container)
        .setName('Active branch color')
        .addColorPicker((cb) => {
            input = cb;
            cb.onChange((color) => {
                settingsStore.dispatch({
                    type: 'SET_ACTIVE_BRANCH_BG',
                    payload: {
                        backgroundColor: color,
                    },
                });
            });
            setValue();
        })
        .addExtraButton((cb) => {
            cb.setIcon('reset')
                .onClick(() => {
                    settingsStore.dispatch({
                        type: 'SET_ACTIVE_BRANCH_BG',
                        payload: {
                            backgroundColor: undefined,
                        },
                    });
                    setValue();
                })
                .setTooltip('Reset');
        });
};

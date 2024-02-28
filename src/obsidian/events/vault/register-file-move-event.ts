import { TFile } from 'obsidian';
import Lineage from 'src/main';
import { fileViewTypeCache } from 'src/obsidian/patches/set-view-state';
import { updatePath } from 'src/view/helpers/stores-cache';
import { fileHistoryStore } from 'src/stores/file-history/file-history-store';

export const registerFileRenameEvent = (plugin: Lineage) => {
    plugin.registerEvent(
        plugin.app.vault.on('rename', (file, oldPath) => {
            if (file instanceof TFile) {
                if (fileViewTypeCache[oldPath]) {
                    updatePath(oldPath, file.path);
                    fileHistoryStore.dispatch({
                        type: 'UPDATE_DOCUMENT_PATH',
                        payload: {
                            newPath: file.path,
                            oldPath,
                        },
                    });
                    plugin.settings.dispatch({
                        type: 'UPDATE_DOCUMENT_PATH',
                        payload: {
                            newPath: file.path,
                            oldPath,
                        },
                    });
                }
            }
        }),
    );
};
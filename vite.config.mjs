import { defineConfig } from 'vitest/config';

const configMain = defineConfig({
    test: {
        threads: true,
        environment: 'node',
        exclude: ['temp/**', "node_modules/**"],
    },
});

export default configMain;

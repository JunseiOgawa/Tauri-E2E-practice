import path from 'path';

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    port: 4444,
    specs: [
        './e2e-tests/**/*.e2e.ts'  // または './e2e-tests/*.e2e.ts'
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'wry',
        'tauri:options': {
            application: path.join(process.cwd(), 'src-tauri', 'target', 'release', 'tauri-e2e-practice' + (process.platform === 'win32' ? '.exe' : ''))
        }
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}

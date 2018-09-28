const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

const host = '127.0.0.1'; 
const port = 4730;  

exports.config = {

    specs: [
        './features/**/*.feature'
    ],

    reporters: ['spec'],
    host: host,
    port: port,
    maxInstances: 1,
    capabilities: [
        {
            appiumVersion: '1.8.1',
            browserName: '',
            platformName: 'Android',
            app: './apk/TrianguloApp.apk',
            appPackage: 'com.eliasnogueira.trianguloapp',
            appActivity: 'com.eliasnogueira.trianguloapp.MainActivity',
            deviceName: 'Android Emulator',
            waitforTimeout: waitforTimeout,
            commandTimeout: commandTimeout,
        }
    ],

    logLevel: 'silent',
    screenshotPath: './errorShots/',
    connectionRetryCount: 3,
    services: ['appium'],
    appium: {
        waitStartTime: 6000,
        waitforTimeout: waitforTimeout,
        command: 'appium',
        logFileName: 'appium.log',
        args: {
            address: host,
            port: port,
            commandTimeout: commandTimeout,
            sessionOverride: true,
            debugLogSpacing: true
        }
    },

    framework: 'cucumber',

    cucumberOpts: {
        require: ['./features/step-definitions/*'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: false,
        snippets: false,
        source: true,
        profile: [],
        strict: true,
        tagExpression: [],
        timeout: 50000,
        ignoreUndefinedDefinitions: true,
    },
}
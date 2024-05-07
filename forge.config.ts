import { platform } from "os";

module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin', 'win32', 'win64', 'linux'],
            config: {
                
            }
        }
    ]
}
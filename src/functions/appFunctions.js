const { CONFIG } = require('../../config')
const fs = require('fs')

function createMappingsDir() {
    if (!fs.existsSync(CONFIG.JSON_RESPONSES_FOLDER)) {
        fs.mkdirSync(CONFIG.JSON_RESPONSES_FOLDER)
    }
}

module.exports = {
    createMappingsDir
}
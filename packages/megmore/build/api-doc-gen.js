/**/
const fs =  require('fs')
const Walker = require('walker')
const entries_path =  './src/lib/'

const walkTask = new Walker(entries_path)

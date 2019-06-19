const glob = require("glob")
const path = require("path")
const fse = require('fs-extra')
const fs = require('fs')
const files=glob.sync(path.resolve(__dirname,'../src/icon/icons/**/*.ts'))
files.forEach(f=>{
  const output = path.resolve(__dirname, `../lib/icons/${path.basename(f, '.ts')}`) + '.js'
  fse.copySync(f, output)
  const data = `${fs.readFileSync(f)}`
  fs.writeFileSync(output, data.replace(`import { register } from '../icon'`,`const {register}=require('@mobov/vui').MIcon`))
  console.log(`${path.basename(f, '.ts')}输出完成`)
})
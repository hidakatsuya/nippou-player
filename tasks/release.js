'use strict'

const exec = require('child_process').exec
const packager = require('electron-packager')
const archiver = require('archiver')
const fs = require('fs')
const path = require('path')

if (process.env.PLATFORM_TARGET === 'clean') {
  require('del').sync(['builds/*', '!.gitkeep'])
  console.log('\x1b[33m`builds` directory cleaned.\n\x1b[0m')
} else pack()

/**
 * Build webpack in production
 */
function pack () {
  console.log('\x1b[33mBuilding webpack in production mode...\n\x1b[0m')
  let pack = exec('npm run pack')

  pack.stdout.on('data', data => console.log(data))
  pack.stderr.on('data', data => console.error(data))
  pack.on('exit', code => build())
}

/**
 * Use electron-packager to build electron app
 */
function build () {
  let options = require('../config').building

  console.log('\x1b[34mBuilding electron app(s)...\n\x1b[0m')
  packager(options, (err, appPaths) => {
    if (err) {
      console.error('\x1b[31mError from `electron-packager` when building app...\x1b[0m')
      console.error(err)
    } else {
      console.log('Build(s) successful!')

      console.log('\x1b[34mArchiving built app(s)...\n\x1b[0m')
      archive(appPaths)
      console.log('Archive(s) successful!')

      console.log(appPaths)
      console.log('\n\x1b[34mDONE\n\x1b[0m')
    }
  })
}

function archive (appPaths) {
  appPaths.forEach(appPath => {
    let dest = fs.createWriteStream(`${appPath}.zip`)
    let zipper = archiver('zip')

    zipper.on('error', e => { throw e })
    zipper.pipe(dest)
    zipper.directory(appPath, path.basename(appPath))
    zipper.finalize()
  })
}

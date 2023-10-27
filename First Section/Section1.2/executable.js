const username = process.argv[2] // this gets whatever text is beside the filename 

if (!username) {
    const path = require('path')
    const appName = process.argv[1].split(path.sep).pop() // this returns the file directory 
    console.error(`Missing argument! Example: node %s YOUR_NAME`, appName) // %s is a place holder for arguments passed

    process.exit(1)
}

console.log(`Hello %s!`, username)

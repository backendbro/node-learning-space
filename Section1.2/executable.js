const username = process.argv[2] // this gets whatever text is beside the filename 

if (!username) {
    const appName = process.argv[1].split(require("path").sep).pop() // this returns the file directory 
    console.error(`Missing argument! Example: %s YOUR_NAME`, appName) // %s is a place holder for arguments passed

    process.exit(1)
}

console.log(`Hello %s!`, username)

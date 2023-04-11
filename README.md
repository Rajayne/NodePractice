# NodePractice

# Get Started
1. Install NVM using Microsoft curl url in command line:
    - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
2. Verify installation with: command -v nvm
3. List currently installed version of NPM using: nvm ls
4. Install current stable LTS release with: nvm install --lts
5. Install current realse for Node.js: nvm install node
6. Check currently installed versions using: npm --version, and: node --version

# Initialize NPM in directory
Navigate to working folder and enter: npm init --yes for default

# Install Packages
- Install dependencies with: npm install
    - Similar to Python's pip install -r requirements.txt
- Install axios with: npm install axios

# Node Process
Process is a global object in Node
- process.env returns value of environment variables
- process.argv returns argument variables
- process.exit exits program and returns exit code to shell

# Run File
Using node {file_name} i.e. node node.js
- Including additional text after file run command is considered args that is listed in process.argv
- Ex. node node.js COLOR="White", will include COLOR on process.argv

# Node Modules
- No <script> tags in Node, must export and import explicitly
- All imports use the require keyword, to import local files must specify relative paths
- Ex. const math = require("./math");
    - Use ./ to indicate current directory and ../ is parent directory
- Use module.exports to explicitly state in export file what can be imported
    - module.exports = {add, subtract} etc.
- Now, inside of working file, can use the exported functions:
    - console.log(math.add(1,2))
- Can also list as variables for import:
    - const {add, subtract} = require("./math");
    - Can now console.log(add(1, 2)) without math variable

# File System
Node built-in fs module
fs.readFile(path, encoding, callback)
- path to file
- encoding how to interpret, usually "utf8"
- callback is a function that takes params error and data
fs.writeFile(path, data, encoding, callback)
- data to output to file, typically a string
- Will default overwrite all data unless specifying flag i.e. {encoding: 'utf8', flag: 'a'} in param encoding
- a = append
fs.appendFile(path, data, encoding, callback)
- appends to file without needing flag

# Node Callbacks
Error-first callback parameter
Must require fs to use module

# Test Files Using Jest
- Test files should be named NAME_OF_FILE.test.js
- Tests can be in same directory as JS file or in a '__tests__' folder
- If missing package.json, create empty jest.config.js
- Run tests using command: jest NAME_OF_FILE
- If only one test file, simply: jest


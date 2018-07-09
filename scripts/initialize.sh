#!/usr/bin/env bash

set_and_deploy() {
    #Compile contracts for access to build/ABI
    echo "Compiling Expopulo Contract"
    cp -r ./node_modules/expopulo/contracts/ .
    truffle compile
    #Initialize
    echo "Deploying Expopulo Contract"
    truffle exec scripts/setup.js
}

set_and_deploy

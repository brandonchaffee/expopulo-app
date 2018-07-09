#!/usr/bin/env bash

set_and_deploy() {
    #Compile contracts for access to build/ABI
    echo "Compiling Expopulo Contract"
    cd ./node_modules/expopulo/
    truffle compile --contracts_build_directory=../../build/contracts/
    cd ../../
    #Initialize
    echo "Deploying Expopulo Contract"
    truffle exec scripts/setup.js
}

set_and_deploy

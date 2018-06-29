#!/usr/bin/env bash

set_and_deploy() {
    #Compile contracts for access to build/ABI
    echo "Compiling contracts"
    truffle compile
    #Initialize
    echo "Deploying example contract"
    truffle exec scripts/setup.js
}

set_and_deploy

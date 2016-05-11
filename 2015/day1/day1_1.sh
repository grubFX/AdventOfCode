#!/bin/bash
expr $(cat input1.txt | sed -e 's/\(.\)/\1\n/g' | grep '(' | wc -l) - $(cat input1.txt | sed -e 's/\(.\)/\1\n/g' | grep ')' | wc -l)

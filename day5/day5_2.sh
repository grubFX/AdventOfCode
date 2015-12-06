#/bin/bash
cat input5.txt | grep '\(..\).*\1' | grep '\(.\).\1' | wc -l

#/bin/bash
cat input5.txt | grep '[aeiou].*[aeiou].*[aeiou]' | grep '\(.\)\1' | grep -v 'ab\|cd\|pq\|xy' | wc -l

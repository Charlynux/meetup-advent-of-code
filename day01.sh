sed "s/\n/ /g" input | awk '{ sum+=int($1/3)-2 } END { print sum }'
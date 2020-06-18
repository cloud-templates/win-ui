#!/usr/bin/env sh
vant-cli build-site

#superman-cdn /win-ui ./site/*.js
#
#rm -rf site/*.js

gh-pages -d site --add

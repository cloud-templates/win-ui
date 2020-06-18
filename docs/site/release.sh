#!/usr/bin/env sh
vant-cli build-site

rm -rf site/*.js

gh-pages -d site --add

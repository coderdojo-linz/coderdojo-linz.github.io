@echo off

docker run -it -p 4000:4000 -v "%CD%":/project cibuilds/jekyll hugo --host="0.0.0.0" serve

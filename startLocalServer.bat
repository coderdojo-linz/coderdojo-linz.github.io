@echo off

set MYDIR=%~dp0

rem lines below are only needed for "Docker toolbox for windows"
set MYDIR=%MYDIR:C:\=/c/%
set MYDIR=%MYDIR:\=/%
set MYDIR=%MYDIR:~0,-1%
echo %MYDIR%


docker run -it -p 4000:4000 -v "%MYDIR%":/root/project cibuilds/jekyll jekyll serve --host "0.0.0.0" 

@ECHO OFF
REM dotnet --info
dotnet build Bravo.sln
dotnet test Bravo.sln --no-build
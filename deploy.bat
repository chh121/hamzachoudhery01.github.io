@echo off
echo Building website...
npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    exit /b %errorlevel%
)

echo Deploying website...
npm run deploy
if %errorlevel% neq 0 (
    echo Deployment failed!
    exit /b %errorlevel%
)

echo.
echo Deployment completed successfully!
echo Your website is available at: https://hamzachoudhery01.github.io/
echo.
pause
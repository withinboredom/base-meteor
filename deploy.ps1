# --------------------------
# Leadbox Meteor deployment script for Azure
# by kellerman@leadbox.ca
# Version: 0.3
# --------------------------
# Please run this script on root folder of your meteor app
# ---------------------------
# Prerequisites:
# --- Visual Studio with C++ installed
# --- Node 0.12.7
# --- Python 2.7.x
# --- Meteor
# --- Demeteorizer
# --- Git?

function Expand-ZIPFile($file, $destination)
{
	Write-Host
	$shell = new-object -com shell.application
	$zip = $shell.NameSpace($file)
	foreach($item in $zip.items())
	{
		$shell.Namespace($destination).copyhere($item)
	}
}

$bcryptUrl = "http://cardealerstg.blob.core.windows.net/public/bcrypt-0.8.4.zip";
$wc = New-Object System.Net.WebClient;
$currentPath = (Get-Item -Path ".\" -Verbose).FullName;
$bundlePath = Join-path $currentPath ".demeteorized\bundle";
$buildPath =  Join-path $bundlePath "programs\server";
$bcryptPath = Join-path $buildPath "npm\npm-bcrypt\node_modules\bcrypt"
$sourceServerFile = Join-path $bundlePath "main.js";
$targetServerFile = Join-path $bundlePath "server.js";
$packageJson = Join-path $buildPath "package.json";
$deployCmdUrl = "https://github.com/leadbox/node12-azure/raw/master/deploy.cmd";
$deploymentUrl = "https://github.com/leadbox/node12-azure/raw/master/.deployment";
$iisnodeYmlUrl = "https://github.com/leadbox/node12-azure/raw/master/iisnode.yml";

#Clean Screen
Clear-Host

Write-Host "Installing demeteorizer"
npm -g install demeteorizer

#Demeteorize app
demeteorizer

#Rename main.js
if(Test-Path $sourceServerFile) {
	Write-Host "Renaming main.js file to server.js";
	Move-Item -Force $sourceServerFile $targetServerFile
}

#Update node version
Write-Host "Updating node version to 0.12.7";
(Get-Content $packageJson) -replace '"node": "0.10.40"', '"node": "0.12.7"' | Set-Content ($packageJson)

#Build
Push-Location $buildPath
npm install | Out-Null
Pop-Location

#Bcrypt
Push-Location $bcryptPath
Write-Host "Removing old bcrypt version"
Remove-Item -Recurse "*"
New-Item -ItemType Directory -Force -Path "temp" | Out-Null
#Download bcrypt
Write-Host "Downloading bcrypt zip file";
$bcryptZipFilePath = (Join-path $bcryptPath  "temp/bcrypt.zip");
$wc.DownloadFile($bcryptUrl, $bcryptZipFilePath);

Write-Host "Expanding bcrypt";
Expand-ZIPFile -File $bcryptZipFilePath -Destination $bcryptPath | Out-Null;

Write-Host "Running npm install"
npm install | Out-Null
Write-Host "Remove temp folder"
Remove-Item "temp" -Recurse
Pop-Location

#Deployment files
Write-Host "Downloading deploy files (iisnode, deploy.cmd, .deployment)";
$deployFile = Join-path $bundlePath "deploy.cmd";
$wc.DownloadFile($deployCmdUrl, $deployFile);
$wc.DownloadFile($deploymentUrl, (Join-path $bundlePath ".deployment"));
$wc.DownloadFile($iisnodeYmlUrl, (Join-path $bundlePath "iisnode.yml"));

#Replace node urls for 32bits files and change version
(Get-Content $deployFile) -replace '/v0.12.0/x64/', '/v0.12.7/' | Set-Content $deployFile

#Git process
$response = Read-Host "Finished. Do you want to init git (plz, be carefully, if your meteor app is under git control, skip this)? (y/n)";
if ($response -eq 'y') {
Push-Location $bundlePath
	git init | Out-Null
	git add -A .
	git commit -m "Demeteorized Meteor"
	git config http.postBuffer 52428800

	$response =  Read-Host "Do you want to push your git repository?";
	if ($response -eq 'y') {
		$remote = Read-Host "Please add your azure remote url? (y/n)";
		git remote add azure $remote;
		git push azure master
	}
Pop-Location
}
param([String]$github_token = $env:GITHUB_TOKEN)
$ErrorActionPreference = "Stop"

function cut {
    param(
        [Parameter(ValueFromPipeline = $True)] [string]$inputobject,
        [string]$delimiter,
        [int]$fieldIndex
    )

    process {
        return ($inputobject -split $delimiter)[$fieldIndex - 1]
    }
}

if (!$github_token) {
    echo ""
    echo "GITHUB_TOKEN environment variable is missing"
    echo ""
    echo "TRAVIS DEPLOY KEY GENERATOR"
    echo ""
    echo "What it does : generate a new private and public key, add the public key as a deploy key
with write access to the origin remote github repository, encrypt the private key as
github_deploy_key.enc and add the configuration necessary to use it in .travis.yml file"
    echo ""
    echo "Use it like this:"
    echo ""
    echo "  $env:GITHUB_TOKEN=""GITHUB_TOKEN"""
    echo "  .\generate_travis_deploy_key.ps1"
    echo ""
    echo "Or like this:"
    echo ""
    echo "  .\generate_travis_deploy_key.ps1 ""GITHUB_TOKEN"""
    echo ""
    echo "where ""GITHUB_TOKEN"" is a github token with write access to the current repository : (origin)"
    echo ""
    echo "You must have the travis executable installed on your system and available in the PATH"
    echo ""
    echo "You also must be authenticated on travis cli (travis login --auto)"
    echo ""
    exit
}

$url = "$(git config --get remote.origin.url)"
$owner = "$(echo $url | cut -d / -f 4)"
$reponame = "$(echo $url | cut -d / -f 5 | cut -d \. -f 1)"

# generate a new private and public key
ssh-keygen -t rsa -b 4096 -f github_deploy_key -N System.String -C "$url" -q

$pubkey = "$(cat github_deploy_key.pub)"

# add the PUBLIC key to the github repository as a deploy key with write access
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
curl https://api.github.com/repos/$owner/$reponame/keys -H @{"Authorization" = "token $github_token"} -Method "POST" -Body @"
{
    "title": "travis deploy key",
    "key": "$pubkey",
    "read_only": false
}
"@

# use travis to encrypt the private key as github_deploy_key.enc and remove the private key
travis encrypt-file github_deploy_key --pro --add --no-interactive -w /tmp/github_deploy_key -f
git add github_deploy_key.enc

# cleaning
rm github_deploy_key
rm github_deploy_key.pub

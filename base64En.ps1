Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues['*:ErrorAction'] = 'Stop'
function ThrowOnNativeFailure {
    if (-not $?) {
        throw 'Native Failure'
    }
}
$Text = ""
if ($args.count -gt 0) {
    $Text = $args[0]
}else{
    Write-Output "Precisa informar o texto"
}
$Bytes = [Utils.System.Text.Encoding]::Unicode.GetBytes($Text)
$EncodedText =[Convert]::ToBase64String($Bytes)
$EncodedText
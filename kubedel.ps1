Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues['*:ErrorAction'] = 'Stop'
function ThrowOnNativeFailure {
    if (-not $?) {
        throw 'Native Failure'
    }
}
$namespace = ""
if ($args.count -gt 0) {
    $namespace = $args[0]
}

$pod = "(^[\w\d]+\-[\w\d\-]+)"
if ($args.count -gt 1) {
    $pod = "(^" + $args[1] + "[\w\d\-]+)"
}
$type = "pod"
if ($args.count -gt 2) {
    $type = $args[2]
}

Write-Host "================ Pods ================"
    
$PODS = kubectl -n $namespace get pods | Select-String -Pattern $pod  -AllMatches
if ($PODS.matches.length -gt 1) {
    for ($index = 0 ; $index -le $PODS.matches.length - 1 ; $index++) {
        Write-Host $index":" $PODS.matches[$index].Value
    }
    Write-Host "Q: to quit."
    $selection = Read-Host "Please select a pod"

    Write-Output "You selected:" $PODS.Matches[$selection].Value
    kubectl -n $namespace delete $type $PODS.Matches[$selection].Value
}
else {
    Write-Output "Selected:" $PODS.Matches[0].Value
    kubectl -n $namespace delete $type $PODS.Matches[0].Value
}
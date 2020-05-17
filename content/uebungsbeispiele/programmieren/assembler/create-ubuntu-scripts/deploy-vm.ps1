# Note that you will need to change the following two names as they
# also used for unique DNS name.
$ResourceGroupName = 'coderdojo-asm-3'
$VmName = 'cd-asm-02'
$StorageAccountName = "cdasm01"

$ResourceGroupLocation = 'westeurope'
$TemplateFile = 'C:\Code\GitHub\coderdojo-linz.github.io\trainingsanleitungen\fundamentals\create-ubuntu-scripts\ubuntu-with-dev-tools.json'

# Check if resource group already exists
$ResourceGroupCount = Get-AzureRmResourceGroup | Where { $_.ResourceGroupName -match $ResourceGroupName } | Measure | Select Count
if ($ResourceGroupCount.Count -eq 0) {
    # Resource group does not yet exist, create it
    New-AzureRmResourceGroup -Name $ResourceGroupName -Location $ResourceGroupLocation -Verbose -Force -ErrorAction Stop 
}

# Trigger deployment
New-AzureRmResourceGroupDeployment -Name ((Get-ChildItem $TemplateFile).BaseName + '-' + ((Get-Date).ToUniversalTime()).ToString('MMdd-HHmm')) `
                                   -ResourceGroupName $ResourceGroupName `
                                   -TemplateFile $TemplateFile `
                                   -vmName $VmName -storageAccountName $StorageAccountName `
                                   -Force -Verbose

# Just some useful other commands:
# Login-AzureRMAccount
# Get-AzureRmVMImageSku -Location 'northeurope' -Offer 'UbuntuServer' -PublisherName 'Canonical'
# Remove-AzureRmResourceGroup -Name $ResourceGroupName -Force -Verbose


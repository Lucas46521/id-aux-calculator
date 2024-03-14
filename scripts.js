// Adiciona um ouvinte de eventos para o campo de ID do bloco
document.getElementById("itemInput").addEventListener("input", function() {
    var blockIDErrorButton = document.getElementById('blockIDErrorButton');
    if (this.value === "") {
        blockIDErrorButton.style.display = 'none';
    } else if (isNaN(this.value)) {
        blockIDErrorButton.style.display = 'inline';
    } else {
        blockIDErrorButton.style.display = 'none';
    }
});

// Adiciona um ouvinte de eventos para o botão de erro do ID do bloco
document.getElementById("blockIDErrorButton").addEventListener("click", function() {
    var blockIDErrorDescription = document.getElementById('blockIDErrorDescription');
    if (blockIDErrorDescription.style.display === 'none') {
        blockIDErrorDescription.style.display = 'block';
    } else {
        blockIDErrorDescription.style.display = 'none';
    }
});

// Adiciona um ouvinte de eventos para o campo de ID do item
document.getElementById("itemInput2").addEventListener("input", function() {
    var itemIDErrorButton = document.getElementById('itemIDErrorButton');
    if (this.value === "") {
        itemIDErrorButton.style.display = 'none';
    } else if (isNaN(this.value)) {
        itemIDErrorButton.style.display = 'inline';
    } else {
        itemIDErrorButton.style.display = 'none';
    }
});

// Adiciona um ouvinte de eventos para o botão de erro do ID do item
document.getElementById("itemIDErrorButton").addEventListener("click", function() {
    var itemIDErrorDescription = document.getElementById('itemIDErrorDescription');
    if (itemIDErrorDescription.style.display === 'none') {
        itemIDErrorDescription.style.display = 'block';
    } else {
        itemIDErrorDescription.style.display = 'none';
    }
});

// Adiciona um ouvinte de eventos para o campo de dados do bloco
document.getElementById("blockstateInput").addEventListener("input", function() {
    var blockDataErrorButton = document.getElementById('blockDataErrorButton');
    if (this.value === "") {
        blockDataErrorButton.style.display = 'none';
    } else if (isNaN(this.value)) {
        blockDataErrorButton.style.display = 'inline';
    } else {
        blockDataErrorButton.style.display = 'none';
    }
});

// Adiciona um ouvinte de eventos para o botão de erro do dados do bloco
document.getElementById("blockDataErrorButton").addEventListener("click", function() {
    var blockDataErrorDescription = document.getElementById('blockDataErrorDescription');
    if (blockDataErrorDescription.style.display === 'none') {
        blockDataErrorDescription.style.display = 'block';
    } else {
        blockDataErrorDescription.style.display = 'none';
    }
});

// Adiciona um ouvinte de eventos para o campo de dados do item
document.getElementById("blockstateInput2").addEventListener("input", function() {
    var itemDataErrorButton = document.getElementById('itemDataErrorButton');
    if (this.value === "") {
        itemDataErrorButton.style.display = 'none';
    } else if (isNaN(this.value)) {
        itemDataErrorButton.style.display = 'inline';
    } else {
        itemDataErrorButton.style.display = 'none';
    }
});

// Adiciona um ouvinte de eventos para o botão de erro do dados do item
document.getElementById("itemDataErrorButton").addEventListener("click", function() {
    var itemDataErrorDescription = document.getElementById('itemDataErrorDescription');
    if (itemDataErrorDescription.style.display === 'none') {
        itemDataErrorDescription.style.display = 'block';
    } else {
        itemDataErrorDescription.style.display = 'none';
    }
});

function getBlockAUXID() {
    var minecraft_id = document.getElementById("itemInput").value;
    var blockstate_data = document.getElementById("blockstateInput").value;
    var ench_bool = document.getElementById("blockEnch").value;

    // Verifica se o ID do bloco é um número
    if (!isNaN(minecraft_id) && !isNaN(blockstate_data)) {
        var block_data_values = ((blockstate_data * 1) + (ench_bool * 1));
        let data_value = 0b0;
        let is_block = true;
        let calculation = (is_block && minecraft_id > 255 ? 255 - minecraft_id : minecraft_id) << 16 | data_value + block_data_values;
        document.getElementById('outputValue').value = calculation;
        document.getElementById('blockIDError').style.display = 'none';
        document.getElementById('blockDataError').style.display = 'none';
    } else {
        document.getElementById('blockIDError').style.display = 'inline';
        document.getElementById('blockDataError').style.display = 'inline';
        document.getElementById('blockIDError').textContent = errorMessage;
        document.getElementById('blockDataError').textContent = errorMessage;
    }
}

function getItemAUXID() {
    var minecraft_id = document.getElementById("itemInput2").value;
    var item_blockstate_data = document.getElementById("blockstateInput2").value;
    var ench_bool = document.getElementById("itemEnch").value;

    // Verifica se o ID do item é um número
    if (!isNaN(minecraft_id) && !isNaN(item_blockstate_data)) {
        var item_data_values = ((item_blockstate_data * 1) + (ench_bool * 1));
        let data_value = 0b0;
        let is_block = false;
        let calculation = (is_block && minecraft_id > 255 ? 255 - minecraft_id : minecraft_id) << 16 | data_value + item_data_values;
        document.getElementById('outputValue2').value = calculation;
        document.getElementById('itemIDError').style.display = 'none';
        document.getElementById('itemDataError').style.display = 'none';
    } else {
        document.getElementById('itemIDError').style.display = 'inline';
        document.getElementById('itemDataError').style.display = 'inline';
        document.getElementById('itemIDError').textContent = errorMessage;
        document.getElementById('itemDataError').textContent = errorMessage;
    }
}

function clearBlockContents() {
    document.getElementById('blockEnch').value = '0';
    document.getElementById('itemInput').value = '';
    document.getElementById('blockstateInput').value = '';
    document.getElementById('outputValue').value = '';
}

function clearItemContents() {
    document.getElementById('itemEnch').value = '0';
    document.getElementById('itemInput2').value = '';
    document.getElementById('blockstateInput2').value = '';
    document.getElementById('outputValue2').value = '';
}

function copyBlockAUXID() {
    var copyText = document.getElementById("outputValue");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
}

function copyItemAUXID() {
    var copyText = document.getElementById("outputValue2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function redirectToHome() {
        window.location.href = "https://lucas46521.github.io/";
    }
const testField = document.querySelector("#testField");
const duplicateField = document.querySelector("#duplicateField");
testField.addEventListener('keyup', function() {
    duplicateField.textContent = testField.value
});

document.querySelector("#button").addEventListener('click', function(submit) {
    submit.preventDefault();
    testField.value = "";
    console.log(duplicateField.textContent);
    duplicateField.textContent = "";
})
        
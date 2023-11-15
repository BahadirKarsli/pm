function updateCustomText() {
    const numberOfPersonSelect = document.getElementById('numberOfPerson');
    const customTextDiv = document.getElementById('customText');

    const selectedNumberOfPerson = numberOfPersonSelect.value;

    let newText;
    if (selectedNumberOfPerson === '1') {
        newText = 'Katsayı: 1';
    } 
    else if (selectedNumberOfPerson === '2') {
        newText = 'Katsayı: 0.6';
    } 
    else if (selectedNumberOfPerson === '3') {
        newText = 'Katsayı: 0.4';
    } 
    else if (selectedNumberOfPerson === '4') {
        newText = 'Katsayı: 0.3';
    } 
    else if (selectedNumberOfPerson === '5 veya daha fazla') {
        newText = 'Katsayı: 1/kişi sayısı';
    } 

    customTextDiv.textContent = newText;
}

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('numberOfPerson').addEventListener('change', updateCustomText);
    updateCustomText();
});

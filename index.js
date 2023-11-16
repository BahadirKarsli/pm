function updateActivityTypeOptions() {
    const academicActivityTypeSelect = document.querySelector('[name="academicActivityType"]');
    const activityTypeSelect = document.querySelector('#activityTypeSelect');
    const selectedAcademicActivityType = academicActivityTypeSelect.value;

    const options = {
        'Yayın': [
            ['1.1.a', 'WoS Quartile Q1'],
            ['1.1.b', 'WoS Quartile Q2'],
            ['1.1.c', 'WoS Quartile Q3'],
            ['1.1.d', 'WoS Quartile Q4'],
            ['1.2.a', 'SCOPUS Quartile Q1'],
            ['1.2.b', 'SCOPUS Quartile Q2'],
            ['1.2.c', 'SCOPUS Quartile Q3'],
            ['1.2.d', 'SCOPUS Quartile Q4'],
            ['1.3.a', 'WoS tarafından taranan ESCI, ESSCI vb. gibi dergilerde yayımlanmış araştırma makalesi'],
            ['1.4.a', 'WoS ve SCOPUS tarafından taranan konferans (sempozyum) kitaplarında yayımlanmış araştırma makalesi'],
            ['1.5.a', 'Diğer uluslararası hakemli dergilerde yayımlanmış araştırma makalesi'],
            ['1.6.a', 'ULAKBİM TR Dizin tarafından taranan ulusal hakemli dergilerde yayımlanmış araştırma makalesi'],
            ['1.7.a', 'Tanınmış uluslararası yayınevleri tarafından yayımlanmış özgün bilimsel kitap'],
            ['1.8.a', 'Tanınmış uluslararası yayınevleri tarafından yayımlanmış özgün bilimsel kitaplarda bölüm yazarlığı'],
            ['1.9.a', 'Tanınmış ulusal yayınevleri tarafından yayımlanmış özgün bilimsel kitap'],
            ['1.10.a', 'Tanınmış ulusal yayınevleri tarafından yayımlanmış özgün bilimsel kitaplarda bölüm']
        ],
        'Tasarım': [
            ['2.1.a', 'Endüstriyel, çevresel veya grafiksel tasarım; sahne, moda veya çalgı tasarımı']
        ],
        'Sergi': [
            ['3.1.a', 'Özgün yurtdışı bireysel etkinlik'],
            ['3.2.a', 'Özgün yurtiçi bireysel etkinlik'],
            ['3.3.a', 'Özgün yurtdışı grup/karma/toplu etkinlik'],
            ['3.4.a', 'Özgün yurtiçi grup/karma/toplu etkinlik']
        ],
        'Patent': [
            ['4.1.a', 'Uluslararası patent'],
            ['4.2.a', 'Ulusal patent'],
            ['4.3.a', 'Uluslararası Faydalı Model'],
            ['4.4.a', 'Ulusal Faydalı Model']
        ],
        'Atıf': [
            ['5.1.a', 'SCI, SCI-Expanded, SSCI ve AHCI kapsamındaki dergilerde yayımlanmış makalelerde atıf'],
            ['5.2.a', 'Alan endeksleri (varsa) kapsamındaki dergilerde yayımlanmış makalelerde atıf'],
            ['5.3.a', 'Diğer uluslararası hakemli dergilerde yayımlanmış makalelerde atı'],
            ['5.4.a', 'ULAKBİM tarafından taranan ulusal hakemli dergilerde yayımlanmış makalelerde atıf'],
            ['5.5.a', 'Tanınmış uluslararası yayınevleri tarafından yayımlanmış özgün bilimsel kitapta atıf'],
            ['5.6.a', 'Tanınmış ulusal yayınevleri tarafından yayımlanmış özgün bilimsel kitapta atıf'],
            ['5.7.a', 'Güzel sanatlardaki eserlerin uluslararası kaynak veya yayın organlarında yer alması veya gösterime ya da dinletime girmesi'],
            ['5.8.a', 'Güzel sanatlardaki eserlerin ulusal kaynak veya yayın organlarında yer alması veya gösterime ya da dinletime girmesi']
        ]
    };

    // Add new options based on selected academic activity type
    const selectedOptions = options[selectedAcademicActivityType] || [];
    activityTypeSelect.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.innerText = 'Seçiniz...';
    activityTypeSelect.appendChild(defaultOption);

    selectedOptions.forEach(([value, label]) => {
        const option = document.createElement('option');
        option.value = value;
        option.innerText = value + " - " + label;
        activityTypeSelect.appendChild(option);
    });
}

function saveForm() {
    const form = document.getElementById("applicationForm");
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    // Store data in local storage
    localStorage.setItem('formData', JSON.stringify(data));

    // Handle successful response from server
    console.log("Form data saved to local storage");
}

const form = document.getElementById("applicationForm");
form.addEventListener('input', saveForm);

function loadLocalStorage() {
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        const form = document.getElementById("applicationForm");
        for (const [key, value] of Object.entries(formData)) {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) {
                input.value = value;
            }
        }
    }
}

function clearForm() {
    const form = document.getElementById("applicationForm");
    form.reset();
    localStorage.removeItem('formData');
    console.log("Form data local storage cleared");
}

window.addEventListener('load', () => {
    loadLocalStorage();
    updateActivityTypeOptions();
    const activityTypeSelect = document.querySelector('#activityTypeSelect');
    const activityType = localStorage.getItem('activityType');
    if (activityType) {
        activityTypeSelect.value = activityType;
    }
});

window.addEventListener('load', loadLocalStorage);
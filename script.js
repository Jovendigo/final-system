const {ipcRenderer} = require('electron');
let studentId = document.getElementById('studentId');
let dateOccurred = document.getElementById('dateOccurred');
let csHours = document.getElementById('csHours');
let Submit = document.getElementById('submit');


Submit.addEventListener('click', () => {
    let data = '{' +
        '\\"Id\\"'+ Id.value + '\\",' +
        '\\"studentId\\":\\"' + studentId.value + '\\",' +
        '\\"violation\\":\\"' + violation.value + '\\",' +
        '\\"violationType\\":\\"' + violationType.value + '\\",' +
        '\\"communityServiceHours\\":\\"' + communityServiceHours.value + '\\"' +
        '\\"date\\":\\"' + date.value + '\\"'
        '}';
    ipcRenderer.send('item-channel', data);
});
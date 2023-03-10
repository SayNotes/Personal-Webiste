const tahun = new Date();
let birthday = new Date('June 2, 2005');
let now = tahun.getFullYear() - birthday.getFullYear();

if ( tahun.getMonth() < birthday.getMonth() ||
    (tahun.getMonth() == birthday.getMonth() &&
    tahun.getDate() < birthday.getDate())
) {
    now--;
};
document.querySelector('#age').innerHTML = `${now} Tahun`;

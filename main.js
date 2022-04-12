function getData (url) {
    const data = [];
    d3.dsv(';', url, (row) => {
        data.push(row);
    });
    return data;
}

function main () {  
    const dataTable = getData(dataUrl);
    console.log(dataTable);
}

const dataUrl = 'https://raw.githubusercontent.com/nivan/testPython/main/ListaParlamentarEmExercicio.csv';
main();
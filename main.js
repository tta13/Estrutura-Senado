function getData (url) {
    const data = [];
    const SenateSet = new Set();
    const CodParlKey = "ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.CodigoParlamentar";

    var pastRow;
    var i = 0;

    d3.dsv(';', url, (row) => {

        if (i != 0) {
            if (row[CodParlKey] != pastRow[CodParlKey]) {
                if (pastRow[CodParlKey] != "") {
                    data.push(pastRow);
                }
            }
        }

        pastRow = row
        i = 1;
    });


    //console.log(data.sort())
    return data;
}

function getParties() {
    return
}

function main () {  
    const dataTable = getData(dataUrl);
    //console.log(dataTable);
}

const dataUrl = 'https://raw.githubusercontent.com/nivan/testPython/main/ListaParlamentarEmExercicio.csv';
main();
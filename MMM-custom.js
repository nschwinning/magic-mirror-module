Module.register("MMM-custom", {
    defaults: {

    },

    getDom: function () {
        let self = this;

        const table = document.createElement("table");
        table.className = "small mmm-custom-table";

        const tHead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        const lineCol = document.createElement('th');
        lineCol.innerText = 'Linie';

        const platformCol = document.createElement('th');
        platformCol.innerText = 'Gleis';

        const destinationCol = document.createElement('th');
        destinationCol.innerText = 'Ziel';

        const departureCol = document.createElement('th');
        departureCol.innerText = 'Abfahrt';

        headerRow.appendChild(lineCol);
        headerRow.appendChild(platformCol);
        headerRow.appendChild(destinationCol);
        headerRow.appendChild(departureCol);

        tHead.appendChild(headerRow);
        table.appendChild(tHead);

        const tBody = document.createElement('tbody');

        const firstRow = document.createElement('tr');

        const firstLineCol = document.createElement('th');
        firstLineCol.innerText = '107';

        const firstPlatformCol = document.createElement('th');
        firstPlatformCol.innerText = '5';

        const firstDestinationCol = document.createElement('th');
        firstDestinationCol.innerText = 'Ägypten Hbf';

        const firstDepartureCol = document.createElement('th');
        firstDepartureCol.innerText = '8 Min';

        firstRow.appendChild(firstLineCol);
        firstRow.appendChild(firstPlatformCol);
        firstRow.appendChild(firstDestinationCol);
        firstRow.appendChild(firstDepartureCol);

        tBody.appendChild(firstRow);
        table.appendChildt(tBody);

        return table;
    },

});
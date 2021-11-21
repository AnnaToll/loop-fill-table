/** 
 * Skapa en tabell med 5 kolumner och 2 rader
 * Första raden i tabellen skall innehålla en knapp per kolumn, dvs totalt fem knappar på först raden.
 * - Första knappen skall heta "1", och hämta endast ett ord från http://mardby.se/AJK15G/lorem_text_random.php?numberOfWords=valueFromInput
 * - Andra knappen skall heta "2", och hämta två ord från samma URL
 * - Tredje knappen skall heta "3", och hämta tre ord från samma URL
 * - Gör samma sak för knapp 4 och 5
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * http://mardby.se/AJK15G/lorem_text_random.php?numberOfWords=3
 * http://mardby.se/AJK15G/lorem_text_random.php?numberOfWords=10
 *
 * Varje knapp hämtar datan och placerar datan under respektive knapp, i andra raden.
 * Datan är en array med ord, dessa ord skall visas i en lista där varje ord är en listitem <il>
 * 
 * 
 * Skall ungefär se ut på följande sätt, efter att varje knapp gjort ett anrop
 * |-----|-----|-----|-----|-----|
 * |  1  |  2  |  3  |  4  |  5  |
 * |-----|-----|-----|-----|-----|
 * |.asd |.asd |.qwe |.qwe |.wer |
 * |     |.weq |.ewr |.gfd |.sfd |
 * |     |     |.ewr |.gfd |.cvx |
 * |     |     |     |.gfd |.dff |
 * |     |     |     |     |.bvc |
 * |-----|-----|-----|-----|-----|
 */
	
let table = document.createElement('table'),
    row1 = document.createElement('tr'),
    row2 = document.createElement('tr');

document.body.append(table);
table.append(row1, row2);

for (let i = 1; i <= 5; i++) {
    let column1 = document.createElement('td'),
        column2 = document.createElement('td'),
        button = document.createElement('button');
    row1.append(column1);
    row2.append(column2);
    column1.append(button);
    button.innerText = i;
    button.addEventListener('click', async function addDataToUl() {
        let ul = document.createElement('ul');
        let buttonCell = document.querySelector(`table tr:nth-child(2) td:nth-child(${i})`);
        let response = await fetch(`http://mardby.se/AJK15G/lorem_json_array.php?numberOfWords=${i}`);
        let arrayWords = await response.json();
        for (let word of arrayWords) {
            let li = document.createElement('li');
            li.innerText = word;
            ul.append(li);
            buttonCell.append(ul);
        }  
    })
}




//init event on ComboBox of Automaton Type
let select = document.getElementById('CBAutomateType');
select.addEventListener('change', function(){
    let label = document.getElementById('labelAutomate');
    label.innerHTML = this.options[this.selectedIndex].innerHTML;
});


//init event on ComboBox of colors
let selectColor = document.getElementById('selectColor');
selectColor.addEventListener('change', function() {
    grid.changeColor(this.options[this.selectedIndex].value); 
});

//init event on ComboBox of Cell's size
let selectSize = document.getElementById('CBSize');
selectSize.addEventListener('change', function(){
    Settings.get().setSizeCell(this.options[this.selectedIndex].value);
    grid.changeSizeCell();
});

//init event click on button to lauch automaton
let buttonAutomate = document.getElementById('buttonAutomate');
buttonAutomate.addEventListener('click', ()=>{
    let number = document.getElementById('iterateInput').value;
    let delay = document.getElementById('delayIterate').value;
    let select = document.getElementById('CBAutomateType');
    let type = select.options[select.selectedIndex].value;
    let automate;
    switch(type){
        case 'A': automate = new GameOfLife(grid.getGrid()); break;
        case 'B': automate = new DayNight(grid.getGrid()); break;
        case 'C': automate = new HighLife(grid.getGrid()); break;
        default : throw new Error('Not implemented Automaton type');
    }        
    grid.iterate(automate, number, delay);
});


//init event click on a button to randomize the grid
let buttonRandom = document.getElementById('buttonRandomGrid');
buttonRandom.addEventListener('click', ()=>{
    grid.randomizeGrid();
});

//init event click on a button to fill the grid
let buttonFill = document.getElementById('buttonFillGrid');
buttonFill.addEventListener('click', ()=>{
    grid.fillGrid();
});

//init event click on a button to empty the grid
let buttonEmpty = document.getElementById('buttonEmptyGrid');
buttonEmpty.addEventListener('click', ()=>{
    grid.emptyGrid();
});


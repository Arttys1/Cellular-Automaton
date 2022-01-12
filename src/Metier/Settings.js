class Settings
{
    #sizeCell = 50;
    #nbCellHeight = 12;
    #nbCellWidth = 18;
    #heightContainer = 600;
    #widthContainer = 900;

    static #instance = null;

    constructor(){

    }

    static get()
    {
        if(this.#instance == null)
        {
            this.#instance = new Settings();
        }
        return this.#instance;
    }

    getSizeCell() { return this.#sizeCell; }

    setSizeCell(value){
        this.#sizeCell = value;
        this.#nbCellHeight = Math.trunc(this.getHeightContainer() / this.#sizeCell);
        this.#nbCellWidth = Math.trunc(this.getWidthContainer() / this.#sizeCell);        
    }

    getNbCellHeight() { return this.#nbCellHeight; }

    getNbCellWidth() { return this.#nbCellWidth; }

    getHeightContainer() { return this.#heightContainer; }

    setHeightContainer(value)
    {
        this.#heightContainer = value;
        this.#nbCellHeight = Math.round(this.getHeightContainer() / this.getSizeCell());
    }

    getWidthContainer() { return this.#widthContainer; }

    setWidthContainer(value) {
        this.#widthContainer = value;
        this.#nbCellWidth = Math.round(this.getWidthContainer() / this.getSizeCell());
    }
}
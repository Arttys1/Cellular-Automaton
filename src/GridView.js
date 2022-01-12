class GridView
{
    #grille = null;
    #containerName = '';
    #rectsMap = new Map();
    #stage = null;

    constructor(container)
    {
        Settings.get().setSizeCell(30);
        this.#grille = new Grille();
        this.#containerName = container;
        this.initContainer();
    }

    initContainer()
    {
        this.#stage = new Konva.Stage({
            container: this.#containerName,
            width: Settings.get().getWidthContainer(),
            height: Settings.get().getHeightContainer(),
        });

        let layer = new Konva.Layer();        
        this.#stage.add(layer);
        this.#createGrille(layer);
    }

    #createGrille(layer)
    {
        this.#rectsMap.clear();
        layer.clear();
        for(const cellule of this.#grille.getCellules())
        {
            var rectangle = this.#rect(cellule);
            rectangle.on('click', function(){ 
                grid.clickRect(this);
             });
            this.#rectsMap.set(rectangle, cellule);
            layer.add(rectangle);
        }
    }

    #rect(cellule)
    { 
        let sizeSquare = Settings.get().getSizeCell();
        let coord = cellule.getCoordonnee();    
        return new Konva.Rect({
            x: coord.getX() * sizeSquare,
            y: coord.getY() * sizeSquare,
            width: sizeSquare,
            height: sizeSquare,
            fill: this.#getColor(cellule),
            stroke: 'black',
            strokeWidth: 1,
        })
    }

    #getColor(cellule)
    {
        let color;

        switch(cellule.getEtat())
        {
            case Etat.MORT: color = 'white'; break;
            case Etat.VIVANT: color = 'cyan'; break;
            default : throw new Error('Not implemented enum case');
        }

        return color;
    }

    Mapget(key)
    {
        return this.#rectsMap.get(key);
    }

    clickRect(rectangle)
    {        
        try
        {
            let cell = this.Mapget(rectangle);
            if(cell.getEtat() == Etat.MORT)
                cell.setEtat(Etat.VIVANT);
            else
                cell.setEtat(Etat.MORT);
            rectangle.setFill(this.#getColor(cell));
        }
        catch(e)
        {
            document.write(e);
        }
    }

    getGrid() { return this.#grille; }

    randomizeGrid()
    {
        this.#grille.randomizeGrid();
        this.initContainer();
    }

    async iterate(automate, number, delay)
    {
        for(let i = 0; i < number; i++)
        {
            automate.iterate();
            this.initContainer();
            await new Promise(resolve => {
                setTimeout((delay) => { resolve('') }, delay);
            })
        }
    }

}
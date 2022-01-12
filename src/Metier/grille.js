class Grille{
    #cellulesMap = null;

    constructor()
    {
        this.#cellulesMap = new Map();
        this.#generateGrille();
    }

    #generateGrille()
    {
        let settings = Settings.get();
        this.#cellulesMap.clear();
        for(let i = 0; i < settings.getNbCellWidth(); i++)
        {
            for(let j = 0; j < settings.getNbCellHeight(); j++)
            {
                let coord = new Coordonnee(i, j);
                let cell = new Cellule(coord);
                this.#cellulesMap.set(coord.stringify(), cell);
            }
        }
        
        //Add neighbor
        for(const cell of this.getCellules())
        {
            for(const dir of Direction.getValues())
            {
                let coord = cell.getCoordonnee().getVoisin(dir);
                let voisin = this.getCell(coord.stringify());
                if(voisin !== undefined)
                {
                    cell.addVoisin(voisin);    
                }
            }
        }
    }

    getCellules()
    {
        return this.#cellulesMap.values();
    }

    getCell(coord)
    {
        return this.#cellulesMap.get(coord);
    }

    randomizeGrid()
    {
        for(const cell of this.getCellules())
        {
            if(Math.random() < 0.5)
            {
                cell.setEtat(Etat.VIVANT);
            }
            else{
                cell.setEtat(Etat.MORT);
            }
        }
    }
}
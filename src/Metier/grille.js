/**
 * Classe représentant la grille. Elle contient toutes les cellules. 
 */
class Grille{
    #cellulesMap = null;

    /**
     * Constructeur
     */
    constructor()
    {
        this.#cellulesMap = new Map();
        this.#generateGrille();
    }

    #generateGrille()
    {
        let settings = Settings.get();
        this.#cellulesMap.clear();
        for(let i = 0; i < settings.getNbCellWidth() + 6; i++)
        {
            for(let j = 0; j < settings.getNbCellHeight() + 6; j++)
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

    /**
     * Méthode permettant de renvoyer toutes les cellules de la grille.
     * @returns Toutes les cellules de la grilles.
     */
    getCellules()
    {
        return this.#cellulesMap.values();
    }

    /**
     * Méthode permettant de renvoyer une cellule selon sa coordonnée.
     * @param {*} coord coordonnée de la cellule souhaité.
     * @returns la cellule associée à la coordonnée.
     */
    getCell(coord)
    {
        return this.#cellulesMap.get(coord);
    }

    /**
     * Méthode permettant de choisir aléatoirement l'état de chaque cellule de la grille.
     */
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

    /**
     * Méthode remplissant toute la grille de cellules vivantes.
     */
    fillGrid()
    {
        for(const cell of this.getCellules())
        {
            cell.setEtat(Etat.VIVANT);
        }
    }
}
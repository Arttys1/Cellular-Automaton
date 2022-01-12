class Automate
{
    #grid = null;
    #buffer = new Map();

    constructor(grid)
    {
        if(this.constructor === Automate)
        {
            throw new TypeError("Can't instanciate abstract class");
        }

        if(!grid instanceof Grille)
        {
            throw new Error("grid must be of Type 'Grille'");
        }
        this.#grid = grid;
    }

    iterate()
    {
        this.#buffer.clear();
        for(const cell of this.#grid.getCellules())
        {
            this.#addBuffer(cell, this.isCellAlive(cell));
        }
        
        for (const [cell, etat] of this.#buffer) {
            cell.setEtat(etat);
        }
    }

    #addBuffer(cell, etat) { this.#buffer.set(cell, etat); }

    getCountAlive(neighbors)
    {
        let i = 0;
        for(const cell of neighbors)
        {         
            if(cell.getEtat() === Etat.VIVANT)
            {
                i++;
            }
        }
        return i;
    }
}
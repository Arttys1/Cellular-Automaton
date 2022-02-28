/**
 * Classe abstraite représentant un automate cellulaire.
 */
class Automate
{
    #grid = null;
    #buffer = new Map();

    /**
     * Constructeur abstrait.
     * @param {*} grid La grille de l'automate
     */
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

    /**
     * Méthode permettant de réaliser une itération de l'automate.
     */
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

    #isBorder(cell)
    {
        let res = false;
        let maxX = Settings.get().getNbCellWidth() - 1;
        let maxY = Settings.get().getNbCellHeight() - 1;
        let coordonnee = cell.getCoordonnee();
        
        if(coordonnee.getX() == 0 || coordonnee.getX() == maxX
        || coordonnee.getY() == 0 || coordonnee.getY() == maxY)
        {
            res = true;
        }

        return res;
    }

    #addBuffer(cell, etat) { this.#buffer.set(cell, etat); }

    /**
     * Méthode permettant de compter le nombre de voisins vivants d'une Cellule.
     * @param {*} neighbors Le tableau de voisins à tester
     * @returns Le nombre de voisins vivants d'une Cellule.
     */
    _getCountAlive(neighbors)
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
/**
 * Classe représentant l'automate "Jeu de la vie". Hérité de Automate.
 */
class GameOfLife extends Automate {
    constructor(grid){
        super(grid);
    }

    /**
     * Méthode permettant vérifier si une cellule est vivante selon les règles de l'automate.
     * @param {*} cell cellule à vérifier.
     * @returns L'état dans lequel elle va être.
     */
    isCellAlive(cell)
    {
        let etat = cell.getEtat();
        let count = this._getCountAlive(cell.getVoisins());
        if(cell.getEtat() === Etat.VIVANT)
        {
            if(count !== 3 && count !== 2)
            {
                etat = Etat.MORT;
            }
        }
        else {
            if(count === 3)
            {
                etat = Etat.VIVANT
            }
        }

        return etat;
    }
}
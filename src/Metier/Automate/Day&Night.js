/**
 * Classe représentant l'automate "Day&Night". Hérité de Automate.
 */
class DayNight extends Automate{
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
        let etat = cell.getEtat()
        let count = this._getCountAlive(cell.getVoisins());
        if(etat === Etat.VIVANT)
        {
            if(count !== 3 && count !== 4 && count !== 6 &&  count !== 7 && count !== 8)
            {
                etat = Etat.MORT;
            }
        }
        else
        {
            if(count === 3 || count === 6 || count === 7 || count === 8)
            {
                etat = Etat.VIVANT;
            }
        }
        return etat;
    }
}
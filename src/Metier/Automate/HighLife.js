/**
 * Classe représentant l'automate "HighLife". Hérite de Automate.
 */
class HighLife extends Automate{
    /**
     * Constructeur.
     * @param {*} grid grid de l'automate. 
     */
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
            if(count !== 2 && count !== 3)
            {
                etat = Etat.MORT;
            }
        }
        else
        {
            if(count === 3 || count === 6)
            {
                etat = Etat.VIVANT;
            }
        }
        return etat;

     }


}
/**
 * Enumération représentant l'état d'une cellule.
 */
class Etat
{
    #etat = '';
    constructor(etat)
    {
        this.#etat = etat;
    }

    static VIVANT = new Etat('VIVANT'); 
    static MORT = new Etat('MORT'); 

    /**
     * Méthode renvoyant toutes les valeurs possibles de l'énumération.
     * @returns Toutes les valeurs possibles de l'énumération.
     */
    static getValues()
    {
        return [VIVANT, MORT];
    }
}
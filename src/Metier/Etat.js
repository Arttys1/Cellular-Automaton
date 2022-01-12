class Etat
{
    #etat = '';
    constructor(etat)
    {
        this.#etat = etat;
    }

    static VIVANT = new Etat('VIVANT'); 
    static MORT = new Etat('MORT'); 

    static getValues()
    {
        return [VIVANT, MORT];
    }
}
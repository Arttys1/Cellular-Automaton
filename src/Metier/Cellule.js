class Cellule
{
    #coordonnee = null;
    #etat = null;
    #voisins = [];

    constructor(coord)
    {
        this.#coordonnee = coord;
        this.#etat = Etat.MORT;
    }

    addVoisin(voisin)
    {
        this.#voisins.push(voisin);
    }

    getVoisins() { return this.#voisins; }

    getEtat() { return this.#etat; }

    setEtat(etat)
    {
        if(etat instanceof Etat)
            this.#etat = etat;
        else
            throw new Error("L'etat de la cellule doit être une enum Etat");
    }

    getCoordonnee() { return this.#coordonnee; }

}
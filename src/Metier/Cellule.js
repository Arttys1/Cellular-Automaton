class Cellule
{
    #coordonnee = null;
    #etat = null;
    #voisins = [];

    /**
     * Constructeur
     * @param {*} coord coordonnée de la cellule. 
     */
    constructor(coord)
    {
        this.#coordonnee = coord;
        this.#etat = Etat.MORT;
    }

    /**
     * Méthode permettant d'ajouter un voisins
     * @param {*} voisin Cellule à ajouter aux voisins
     */
    addVoisin(voisin)
    {
        this.#voisins.push(voisin);
    }

    /**
     * Méthode permettant de renvoyer les voisins de la case.
     * @returns les voisins de la case.
     */
    getVoisins() { return this.#voisins; }

    /**
     * Accesseur de l'état de la case.
     * @returns L'état de la case.
     */
    getEtat() { return this.#etat; }

    /**
     * Mutateur de l'etat de la case.
     * @param {*} etat nouvel etat de la case.
     */
    setEtat(etat)
    {
        if(etat instanceof Etat)
            this.#etat = etat;
        else
            throw new Error("L'etat de la cellule doit être une enum Etat");
    }

    /**
     * Accesseur de la coordonnée de la case.
     * @returns La coordonnée de la case.
     */
    getCoordonnee() { return this.#coordonnee; }

}
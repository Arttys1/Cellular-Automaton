/**
 * Singleton contenant les paramètres généraux de l'application.
 */
class Settings
{
    #sizeCell = 50;
    #nbCellHeight = 12;
    #nbCellWidth = 18;
    #heightContainer = 600;
    #widthContainer = 900;
    #couleur = Couleur.BLANC_CYAN;

    static #instance = null;

    constructor(){

    }

    /**
     * Méthode permettant de récupérer l'instance du singleton.
     * @returns L'instance du singleton.
     */
    static get()
    {
        if(this.#instance == null)
        {
            this.#instance = new Settings();
        }
        return this.#instance;
    }

    /**
     * Accesseur de la taille des cellules.
     * @returns la taille des cellules.
     */
    getSizeCell() { return this.#sizeCell; }

    /**
     * Mutateur de la taille des cellules.
     * @param {*} value la taille des cellules.
     */
    setSizeCell(value){
        this.#sizeCell = value;
        this.#nbCellHeight = Math.trunc(this.getHeightContainer() / this.#sizeCell);
        this.#nbCellWidth = Math.trunc(this.getWidthContainer() / this.#sizeCell);        
    }

    /**
     * Accesseur du nombre de case en hauteur.
     * @returns Le nombre de case en hauteur.
     */
    getNbCellHeight() { return this.#nbCellHeight; }

    /**
     * Accesseur du nombre de case en largeur.
     * @returns Le nombre de case en largeur.
     */
    getNbCellWidth() { return this.#nbCellWidth; }

    /**
     * Accesseur de la taille en hauteur du conteneur.
     * @returns la taille en hauteur du conteneur.
     */
    getHeightContainer() { return this.#heightContainer; }

    /**
     * Mutateur de la taille en hauteur du conteneur.
     * @param {*} value la taille en hauteur du conteneur.
     */
    setHeightContainer(value)
    {
        this.#heightContainer = value;
        this.#nbCellHeight = Math.round(this.getHeightContainer() / this.getSizeCell());
    }

    /**
     * Accesseur de la taille en largeur du conteneur.
     * @returns la taille en largeur du conteneur.
     */
    getWidthContainer() { return this.#widthContainer; }

    /**
     * Mutateur de la taille en largeur du conteneur.
     * @param {*} value la taille en largeur du conteneur.
     */
    setWidthContainer(value) {
        this.#widthContainer = value;
        this.#nbCellWidth = Math.round(this.getWidthContainer() / this.getSizeCell());
    }

    /**
     * Accesseur de la couleur des cellules
     * @returns La couleur des cellules
     */
    getCouleur() { return this.#couleur; }

    /**
     * Mutateur de la couleur des cellules.
     * @param {*} couleur La nouvelle couleur. 
     */
    setCouleur(couleur) {this.#couleur = couleur; }

}
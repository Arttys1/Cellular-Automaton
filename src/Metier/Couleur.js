/**
 * Enumération représentant les différentes couleurs que peut prendre les cellules
 */
class Couleur
{
    #couleurMort = '';
    #couleurVivant = '';

    /**
     * Constructeur
     * @param {*} mort couleur de la cellule morte 
     * @param {*} vivant couleur de la cellule vivante
     */
    constructor(mort, vivant)
    {
        this.#couleurMort = mort;
        this.#couleurVivant = vivant;
    }

    /**
     * Constante renvoyant une couleur blanc-cyan.
     */
    static BLANC_CYAN = new Couleur('white', 'cyan');

    /**
     * Constante renvoyant une couleur noir-orange.
     */
    static NOIR_ORANGE = new Couleur('black', 'orange');

    /**
     * Constante renvoyant une couleur aléatoire
     */
    static ARC_EN_CIEL = new Couleur('black', Konva.Util.getRandomColor());

    /**
     * Accesseur de la couleur de la mort.
     * @returns La couleur quand la cellule est morte.
     */
    getMort() { return this.#couleurMort; }

    /**
     * Accesseur de la couleur de la vie.
     * @returns La couleur quand la cellule est vivante.
     */
    getVivant() { return this.#couleurVivant; }


}
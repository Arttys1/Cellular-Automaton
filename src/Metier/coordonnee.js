/**
 * Classe représentant la coordonnée d'une cellule. 
 */
class Coordonnee
{
    #x = 0;
    #y = 0;

    /**
     * Constructeur.
     * @param {*} x La position en x de la coordonnée
     * @param {*} y La position en y de la coordonnée
     */
    constructor(x, y)
    {
        this.#x = x;
        this.#y = y;
    }

    /**
     * Accesseur de la position en x de la coordonnée
     * @returns La position en x de la coordonnée
     */
    getX()
    {
        return this.#x;
    }
    
    /**
     * Accesseur de la position en y de la coordonnée
     * @returns La position en y de la coordonnée
     */
    getY()
    {
        return this.#y;    
    }

    /**
     * Méthode permettant de retourner la coordonnée voisine selon une direction.
     * @param {*} direction La direction de la coordonnée souhaité.
     * @returns La coordonnée voisine à celle ci dans la direction souhaité.
     */
    getVoisin(direction)
    {
        let x = this.#x;
        let y = this.#y;
        let voisin;
        switch(direction)
        {
            case Direction.HAUT: voisin = new Coordonnee(x, y - 1); break;
            case Direction.BAS: voisin = new Coordonnee(x, y + 1); break;
            case Direction.DROITE: voisin = new Coordonnee(x + 1, y); break;
            case Direction.GAUCHE: voisin = new Coordonnee(x - 1, y); break;
            case Direction.HAUT_DROITE: voisin = new Coordonnee(x + 1, y - 1); break;
            case Direction.HAUT_GAUCHE: voisin = new Coordonnee(x - 1, y - 1); break;
            case Direction.BAS_DROITE: voisin = new Coordonnee(x + 1, y + 1); break;
            case Direction.BAS_GAUCHE: voisin = new Coordonnee(x - 1, y + 1); break;
        }
        return voisin;
    }

    /**
     * Méthode permettant de transformer la coordonnée en string.
     * Est utilisé avec l'objet Map.
     * @returns Un string représentant l'objet.
     */
    stringify()
    {
        return this.#x + "/" + this.#y;
    }
}
class Coordonnee
{
    #x = 0;
    #y = 0;

    constructor(x, y)
    {
        this.#x = x;
        this.#y = y;
    }

    getX()
    {
        return this.#x;
    }
    
    getY()
    {
        return this.#y;    
    }

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

    stringify()
    {
        return this.#x + "/" + this.#y;
    }
}
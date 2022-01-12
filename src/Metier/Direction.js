class Direction
{
    #direction = '';
    constructor(dir)
    {
        this.#direction = dir;
    }

    static HAUT = new Direction('HAUT');
    static BAS = new Direction('BAS'); 
    static GAUCHE = new Direction('GAUCHE'); 
    static DROITE = new Direction('DROITE'); 
    static HAUT_DROITE = new Direction('HAUT_DROITE'); 
    static HAUT_GAUCHE = new Direction('HAUT_GAUCHE'); 
    static BAS_DROITE = new Direction('BAS_DROITE'); 
    static BAS_DROITE = new Direction('BAS_GAUCHE'); 

    static getValues()
    {
        return [ Direction.HAUT, Direction.BAS, Direction.GAUCHE, Direction.DROITE, Direction.HAUT_DROITE, Direction.HAUT_GAUCHE, Direction.BAS_DROITE, Direction.BAS_GAUCHE ];
    }


}
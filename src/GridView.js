/**
 * Classe représentant la vue de la grille.
 */
class GridView
{
    #grille = null;
    #containerName = '';
    #rectsMap = new Map();
    #stage = null;

    /**
     * Constructeur
     * @param {*} container id du conteneur de la grille 
     */
    constructor(container)
    {
        Settings.get().setSizeCell(20);
        this.#grille = new Grille();
        this.#containerName = container;
        this.loadContainer();
    }

    /**
     * Méthode permettant d'initialiser le conteneur.
     * Permet aussi de l'actualiser.
     */
    loadContainer()
    {
        if(this.#stage != null)
        {
            this.#stage.destroy();  //free memory
        }
        this.#stage = new Konva.Stage({
            container: this.#containerName,
            width: Settings.get().getWidthContainer(),
            height: Settings.get().getHeightContainer(),
        });

        let layer = new Konva.Layer();        
        this.#stage.add(layer);
        this.#createGrille(layer);
    }

    #createGrille(layer)
    {
        this.#rectsMap.clear();
        layer.clear();
        for(const cellule of this.#grille.getCellules())
        {
            var rectangle = this.#rect(cellule);
            rectangle.on('click', function(){ 
                grid.clickRect(this);
             });
            this.#rectsMap.set(rectangle, cellule);
            layer.add(rectangle);
        }
    }

    #rect(cellule)
    { 
        let sizeSquare = Settings.get().getSizeCell();
        let coord = cellule.getCoordonnee();    
        return new Konva.Rect({
            x: coord.getX() * sizeSquare - 3 * sizeSquare,
            y: coord.getY() * sizeSquare - 3 * sizeSquare,
            width: sizeSquare,
            height: sizeSquare,
            fill: this.#getColor(cellule),
            stroke: this.#getStroke(Settings.get().getCouleur()),
            strokeWidth: 1,
        })
    }

    #getStroke(couleur)
    {
        let stroke = 'black';

        if(couleur === Couleur.NOIR_ORANGE)
        {
            stroke = 'white';
        }

        return stroke;
    }

    #getColor(cellule)
    {
        let couleur = Settings.get().getCouleur();
        let color;

        switch(cellule.getEtat())
        {
            case Etat.MORT: color = couleur.getMort(); break;
            case Etat.VIVANT: color = couleur.getVivant(); break;
            default : throw new Error('Not implemented enum case');
        }

        return color;
    }

    /**
     * Méthode permettant de renvoyer la cellule associé à un rectangle
     * @param {*} key Rectangle associé à la cellule souhaité
     * @returns La cellule associé au rectangle en paramètre
     */
    getCell(key)
    {
        return this.#rectsMap.get(key);
    }

    /**
     * Evenement du click sur un rectangle. Permet de changer l'etat du rectangle.
     * @param {*} rectangle le rectangle envoyant l'evenement 
     */
    clickRect(rectangle)
    {        
        try
        {
            let cell = this.getCell(rectangle);
            if(cell.getEtat() == Etat.MORT)
                cell.setEtat(Etat.VIVANT);
            else
                cell.setEtat(Etat.MORT);
            rectangle.setFill(this.#getColor(cell));
        }
        catch(e)
        {
            document.write(e);
        }
    }

    /**
     * Accesseur de la grille.
     * @returns La grille
     */
    getGrid() { return this.#grille; }

    /**
     * Méthode permettant de choisir aléatoirement l'état de chacune des cellules de la grille.
     */
    randomizeGrid()
    {
        this.#grille.randomizeGrid();
        this.loadContainer();
    }

    /**
     * Méthode permettant de changer la couleur de la grille.
     * @param {*} n 
     */
    changeColor(n)
    {
        switch(n)
        {
            case '1': Settings.get().setCouleur(Couleur.BLANC_CYAN); break;
            case '2': Settings.get().setCouleur(Couleur.NOIR_ORANGE); break;
            default: throw new Error('not implemented Color');
        }
        this.loadContainer();
    }

    /**
     * Méthode asynchrone permettant d'itérer un certain nombre de fois l'automate.
     * @param {*} automate Automate qui va changer a grille.
     * @param {*} number Nombre d'itérations
     * @param {*} delay Délai entre chaque itération
     */
    async iterate(automate, number, delay)
    {
        for(let i = 0; i < number; i++)
        {
            automate.iterate();
            this.loadContainer();
            await new Promise(resolve => {  //permet d'attendre entre chaque itération
                setTimeout(() => { resolve('') }, delay);
            })
        }
    }

}
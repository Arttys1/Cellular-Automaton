class GameOfLife extends Automate {
    constructor(grid){
        super(grid);
    }

    isCellAlive(cell)
    {
        let etat = cell.getEtat();
        let count = this.getCountAlive(cell.getVoisins());
        if(cell.getEtat() === Etat.VIVANT)
        {
            if(count !== 3 && count !== 2)
            {
                etat = Etat.MORT;
            }
        }
        else {
            if(count === 3)
            {
                etat = Etat.VIVANT
            }
        }

        return etat;
    }
}
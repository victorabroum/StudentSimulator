export class Status{
    public cr: number;
    public fome: number;
    public energia: number;

    constructor(cr:number=4.5, fome:number=100, energia:number=100){
        this.cr = cr;
        this.fome = fome;
        this.energia = energia;
    }

    statusOkay(){
        if(this.cr <= 0 || this.fome <= 0 || this.energia <= 0){
            return false;
        }else{
            return true;
        }
    }

    restart(){
        this.cr = 4.5;
        this.fome = 100;
        this.energia = 100;
    }

    died(){
        this.cr = 0;
        this.fome = 0;
        this.energia = 0;
    }
}
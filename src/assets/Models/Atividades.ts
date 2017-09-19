class Atividade{
    private tipo: number;
    private cr: number;
    private fome: number;
    private energia: number;

    constructor(tipo:number, cr:number, fome:number, energia:number){
        this.tipo = tipo;
        this.cr = cr;
        this.fome = fome;
        this.energia = energia;
    }

    getCR(){
        return this.cr;
    }

    getFome(){
        return this.fome;
    }

    getEnergia(){
        return this.energia;
    }
}

export class Atividades{
    listaAtividades: Array<{tipo:number, atv:Atividade}> = [];

    constructor(){
        var aux = new Atividade(0, -0.1, 4, -2);
        this.listaAtividades.push({
            tipo:0,
            atv: aux
        })

        aux = new Atividade(1, 0.1, -10, -15);
        this.listaAtividades.push({
            tipo: 1,
            atv: aux
        })

        aux = new Atividade(2, 0.3, -15, -10);
        this.listaAtividades.push({
            tipo: 2,
            atv: aux
        })

        aux = new Atividade(3, -0.3, 25, 15);
        this.listaAtividades.push({
            tipo: 3,
            atv: aux
        })

        aux = new Atividade(4, -0.5, -5, 30);
        this.listaAtividades.push({
            tipo: 4,
            atv: aux
        })

        aux = new Atividade(5, -1, 15, 15);
        this.listaAtividades.push({
            tipo: 4,
            atv: aux
        })
    }
}
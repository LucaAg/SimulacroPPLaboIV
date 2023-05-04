enum eGenero{
    Femenino,Masculino
}

export class Actor {
    nombre:string = "";
    apellido:string = "";
    genero:eGenero;
    edad:number;
    pais:string = "";
    foto:string = "";

    constructor(nombre:string,apellido:string, genero:eGenero, edad:number, pais:string, foto:string)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
        this.edad = edad;
        this.pais = pais;  
        this.foto = foto;    
    }
}

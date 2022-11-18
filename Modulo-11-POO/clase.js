class Estudiante{
    #nombre;
    #asignaturas=[];
    constructor(nombre){
        this.#nombre=nombre;
        
    }
    getAsignaturas(){
        return this.#asignaturas;
    }
    getNombre(){
        return this.#nombre;
    }
    obtenDatos(){
        console.log(this.getNombre() + " "+this.getAsignaturas());
    }

 
}
estudiante= new Estudiante("Jose");
estudiante.getAsignaturas().push("JavaScript");
estudiante.getAsignaturas().push("HTML");
estudiante.getAsignaturas().push("CSS");
estudiante.obtenDatos();

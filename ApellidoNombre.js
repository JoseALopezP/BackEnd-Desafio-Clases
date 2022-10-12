class Usuario{
    //constructor
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    //metodos
    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(bookNombre, bookAutor){
        const book = {
            nombre: bookNombre,
            autor: bookAutor
        }
        this.libros.push(book);
    }
    getBookNames(){
        const books = [];
        for(let i=0; i<this.libros.length; i++){
            books.push(this.libros[i].nombre);
        }
        return books;
    }
}

const usuario = new Usuario('Eduardo', 'grossi', [], []);
console.log(usuario);
console.log(`El nombre de usuario es: ${usuario.getFullName()}`)
usuario.addMascota('chucho');
usuario.addMascota('Lola');
usuario.addMascota('Pupi');
console.log(`El usuario tiene: ${usuario.countMascotas()} mascotas`)
usuario.addBook('El hombre eterno','G. K. Chesterton');
usuario.addBook('Viaje al centro de la tierra', 'Julio Verne');
console.log(`EL usuario tiene los siguientes libros: ${usuario.getBookNames()}`);

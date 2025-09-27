import { IAnimalRepo } from "../Domain/repositories/ianimal";
import { Animal, CreadorDeAnimal } from "../Domain/entities/animal";

export class AnimalRepoMemory implements IAnimalRepo {
    private animals: Animal[] = [];

    constructor() {
        this.Animalestontos();
    }

    private Animalestontos() {
        const datos = [
            {
                nombre: "Firulais",
                especie: "Perro",
                edad: 5,
                estado: "Saludable",
                vacunas: ["Rabia", "Parvovirus"],
                descripcion: "Un perro muy amigable",
                fotos: ["foto1.jpg"],
                estadoAdopcion: "Disponible",
                id_refugio: "refugio1"
            },
            {
                nombre: "Luna",
                especie: "Gato",
                edad: 3,
                estado: "Saludable",
                vacunas: ["Triple Felina", "Rabia"],
                descripcion: "Gata muy cariñosa y juguetona",
                fotos: ["luna1.jpg", "luna2.jpg"],
                estadoAdopcion: "Disponible",
                id_refugio: "refugio2"
            },
            {
                nombre: "Max",
                especie: "Perro",
                edad: 2,
                estado: "En tratamiento",
                vacunas: ["Rabia"],
                descripcion: "Cachorro energético, necesita entrenamiento",
                fotos: ["max1.jpg"],
                estadoAdopcion: "En proceso",
                id_refugio: "refugio1"
            },
            {
                nombre: "Mimi",
                especie: "Gato",
                edad: 7,
                estado: "Saludable",
                vacunas: ["Triple Felina", "Leucemia Felina"],
                descripcion: "Gata mayor muy tranquila, ideal para apartamento",
                fotos: ["mimi1.jpg", "mimi2.jpg", "mimi3.jpg"],
                estadoAdopcion: "Disponible",
                id_refugio: "refugio3"
            },
            {
                nombre: "Rocky",
                especie: "Perro",
                edad: 4,
                estado: "Saludable",
                vacunas: ["Rabia", "Parvovirus", "Moquillo"],
                descripcion: "Perro guardián muy leal y protector",
                fotos: ["rocky1.jpg"],
                estadoAdopcion: "Adoptado",
                id_refugio: "refugio2"
            },
            {
                nombre: "Nala",
                especie: "Gato",
                edad: 1,
                estado: "Saludable",
                vacunas: ["Triple Felina"],
                descripcion: "Gatita bebé muy curiosa y activa",
                fotos: ["nala1.jpg", "nala2.jpg"],
                estadoAdopcion: "Disponible",
                id_refugio: "refugio1"
            },
            {
                nombre: "Toby",
                especie: "Perro",
                edad: 6,
                estado: "Saludable",
                vacunas: ["Rabia", "Parvovirus", "Hepatitis"],
                descripcion: "Perro maduro muy obediente y calmado",
                fotos: ["toby1.jpg"],
                estadoAdopcion: "En proceso",
                id_refugio: "refugio3"
            },
            {
                nombre: "Simba",
                especie: "Gato",
                edad: 4,
                estado: "Saludable",
                vacunas: ["Triple Felina", "Rabia", "Leucemia Felina"],
                descripcion: "Gato grande y majestuoso, muy independiente",
                fotos: ["simba1.jpg", "simba2.jpg"],
                estadoAdopcion: "Disponible",
                id_refugio: "refugio2"
            },
            {
                nombre: "Bella",
                especie: "Perro",
                edad: 3,
                estado: "Saludable",
                vacunas: ["Rabia", "Parvovirus"],
                descripcion: "Perra muy dulce y sociable con niños",
                fotos: ["bella1.jpg", "bella2.jpg", "bella3.jpg"],
                estadoAdopcion: "Disponible",
                id_refugio: "refugio1"
            },
            {
                nombre: "Coco",
                especie: "Gato",
                edad: 5,
                estado: "En tratamiento",
                vacunas: ["Triple Felina"],
                descripcion: "Gato rescatado, en recuperación pero muy amoroso",
                fotos: ["coco1.jpg"],
                estadoAdopcion: "No disponible",
                id_refugio: "refugio3"
            }
        ];
        
        // Usa el factory para crear con ID automáticoxº
        this.animals.push(...datos.map(CreadorDeAnimal));
    }

    insertAnimal(animal: Animal): void {

}

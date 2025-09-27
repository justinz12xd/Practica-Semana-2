import { IAnimalRepo } from "../Domain/repositories/ianimal";
import { Animal } from "../Domain/entities/animal";
import { v4 as uuidv4 } from "uuid";


export class AnimalRepoMemory implements IAnimalRepo {
    private animals: Animal[] = [];//nuevos animales aqui.
    
    //Callback de insert
    async insert(animal: Animal, callback: (err: Error | null, result?: Animal) => void): Promise<void> {
        this.animals.push(animal);
        return callback(null, animal);
    }

}
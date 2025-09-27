import { Animal } from "../entities/animal";

export interface IAnimalRepo {
  insert(animal: Animal, callback: (err: Error | null, result?: Animal) => void): void; 
  getById(id: string): Promise<Animal | undefined>; 
  update(id: string, data: Partial<Animal>): Promise<Animal>; 
  delete(id: string): Promise<boolean>; 
}
import { Animal } from "./animal";

export interface IAnimalRepo {
  insert(animal: Animal, callback: (err: Error | null, result?: Animal) => void): void; // CREATE (callback)
  getById(id: string): Promise<Animal | undefined>; // READ (async/await)
  update(id: string, data: Partial<Animal>): Promise<Animal>; // UPDATE (promise)
  delete(id: string): Promise<boolean>; // DELETE (async/await)
}
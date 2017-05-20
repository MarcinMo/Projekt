import { InMemoryDbService } from 'angular-in-memory-web-api';
export class DaneService implements InMemoryDbService {
  createDb() {
    let mecze = [
     
    ];
    return {mecze};
  }
}
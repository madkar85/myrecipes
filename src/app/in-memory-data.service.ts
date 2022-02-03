import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb () {
    const recipes = [
      {id: 2, name: 'Chocolate chip cookies', ingrediense: ['200g rumsvarmt smör', '1.5 dl strösocker', '1.5 dl farinsocker', '1 msk vaniljsocker', '1 ägg', '1 äggula', '4 dl vetemjöl', '1 tsk bakpulver', '0.5 tsk salt','200g mjölkchoklad skuren i bitar', '200g vit choklad skuren i bitar'], 
      steps: ['Sätt ungnen på 200 grader och klä två eller tre plåtar med bakplåtspapper. Det beror på hur stora kakorna blir', 'Vispa rumsvarmt smör, socker, farinsocker och vaniljsocker krämigt med elvisp eller i bakmaskin i någon minut', 'Tillsätt ägg och äggula, rör om tills smeten går ihop', 'Arbeta in vetemjöl, bakpulver och salt', 'Knåda ihop till en smidig smet', 'Tillsätt chokladen och arbeta in i degen', 'Rulla till ca 20 bollar, beroende på hur stora kakor du vill ha', 'Lägg ungefär 6-8 bollar per plåt', 'Grädda i mitten av ugnen i 9-10 minuter', 'Låt svalna plant, gärna på plåten om det går. Annars går kakorna sönder']},
      {id: 3, name: 'Korvstroganoff', ingrediense: ['Falukorv', 'lök', 'tomatpuré']},
      {id: 4, name: 'Snabbrisotto', ingrediense: ['Ris', 'lök', 'grädde', 'kyckling']},
      {id: 5, name: 'Pasta med bacon och svampsås', 
      ingrediense: ['4 portioner valfri pasta', '1 paket bacon', '250g champinjoner', '1 lök', '2dl grädde', '100g riven ost'],
      steps: ['Koka pasten enligt instruktionerna på paketet', 'Hacka löken fint', 'Skiva svampen', 'Skär baconen i bitar', 
      'Stek baconen på medelhög värme någon minut, tills den börjar få färg', 'Tillsätt löken och stek några minuter tills löken börjar mjukna',
    'Tillsätt grädden och osten.', 'Sänk värmen och låt såsen småkoka några minuter', 'Servera pastan med såsen']}
    ];
    return {recipes};
  }

  genId(recipes: Recipe[]): number {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1:11;
  }
  constructor() { }
}

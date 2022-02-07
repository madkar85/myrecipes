import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb () {
    const recipes = [
      {id: 2, name: 'Chocolate chip cookies', 
      ingrediense: ['200g rumsvarmt smör', '1.5 dl strösocker', '1.5 dl farinsocker', 
      '1 msk vaniljsocker', '1 ägg', '1 äggula', '4 dl vetemjöl', '1 tsk bakpulver', '0.5 tsk salt','200g mjölkchoklad skuren i bitar', 
      '200g vit choklad skuren i bitar'], 
      steps: ['Sätt ungnen på 200 grader och klä två eller tre plåtar med bakplåtspapper. Det beror på hur stora kakorna blir', 
      'Vispa rumsvarmt smör, socker, farinsocker och vaniljsocker krämigt med elvisp eller i bakmaskin i någon minut', 
      'Tillsätt ägg och äggula, rör om tills smeten går ihop', 'Arbeta in vetemjöl, bakpulver och salt', 
      'Knåda ihop till en smidig smet', 'Tillsätt chokladen och arbeta in i degen', 
      'Rulla till ca 20 bollar, beroende på hur stora kakor du vill ha', 'Lägg ungefär 6-8 bollar per plåt',
       'Grädda i mitten av ugnen i 9-10 minuter', 'Låt svalna plant, gärna på plåten om det går. Annars går kakorna sönder']},
      {id: 3, name: 'Korvstroganoff', 
      ingrediense: ['400g falukorv', '1 gul lök', '1 röd paprika', '2 msk tomatpuré', 
      '1 msk soja', '1 tsk dijonsenap', '3 dl vispgrädde'], 
      steps: ['Koka riset enligt förpackningen', 'Skär falukorven i stavar', 'Finhacka löken', 'Skär paprikan i bitar', 
      'Stek falukorven i smör på mellan-hög värme några minuter tills den fått färg', 
      'Tillsätt lök och stek tills den blivit mjuk, tillsätt eventuellt lite mer smör',
       'Tillsätt tomatpuré, rör om och stek någon minut', 'Tillsätt paprika, grädde, soja och dijonsenap', 
       'Sänk värmen och koka några minuter. Om du vill ha såsen lite tjockare, pudra på lie vetemjöl, rör om och låt koka några minuter till', 
       'Servera stroganoffen med riset']},
      {id: 4, name: 'One-pot-Risoni med pumpa och kyckling', 
      ingrediense: ['400g risoni (risformad pasta)', '1 butternutpumpa', '500g champinjoner', '1 rödlök', 
      '2 vitlöksklyftor','10g salvia', 'smör att steka i','olja att steka i (jag använde olivolja)','ca 300g kyckling', '2 kuber grönsaksbuljong eller 3 msk grönsaksfond','3 msk senap (jag använder vanlij senap, för starkare smak kan man använda dijonsenap)', '2 msk vit vinäger (ta den du har hemma, jag använder vitvinsvinäger)', 
      '10g solrosfrön', 'ca 50g parmesan'], 
      steps:['Dela pumpan, gröp ur kärnorna med en sked och skär i 2-3cm stora bitar', 'Borsta eller skölj av svampen, skär eventuellt bort stammen och skär i tunna skivor', 
      'Skala och skär rödlöken i strimlor', 'Skala och finhacka vitlöken, eller pressa med vitlökspress', 'Plocka salviabladen', 
      'Skär kyckligen i mindre bitar', 'Lägg 2msk smör och 2 msk olja i en stor kastrull, lägg i salviabladen. Stek på medelhög-hög värme i max en minut. Ta sedan ur bladen', 
      'Stek kycklingbitarna i samma kastrull i 3-5 minuter tills de blivit gyllenbruna på alla sidor. Ta sedan ur de ur kastrullen.',
       'Lägg pumpan, champinjonerna, lök och vitlök i kastrullen och stek på medelvärme under omrörning i 8-10 minuter', 
       'Tillsätt risoni, buljong eller fond, 3 msk senap och 2msk vinäger i kastrullen.', 'Häll över 1 liter vatten och lägg i kycklingen', 
       'Koka upp, sänk värmen och låt allt puttra under omrörning i 7-10 minuter', 
       'Sätt en torr stekpanna på medelvärme, rosta solrosfröna i 1-2 minuter. De ska få lite färg men inte bli brända. Ta de ur stekpannan och lägg åt sidan', 
       'Riv osten fint och rör ner i kastrullen tillsammans med 1 msk smör. Krydda efter smak med salt och peppar', 
       'Servera i djupa tallrikar, strö solrosfröna över maten vid servering.']},
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

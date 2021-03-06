import { Titul } from './titul';
import { StavIssue } from './stav-issue.enum';


export class Issue {
  titul: Titul = new Titul();
  nazev: string = ""; //název na titulní straně	text	Název tak jak je na konkrétním čísle novin
  podnazev: string = ""; //podnázev na titulní straně	text	Podnázev tak jak je na konkrétním čísle novin.
  vydani: string = ""; //vydání	text	název vydání tak jak je uveden na titulní straně
  mutace: string = ""; //mutace	text	název mutace
  datum_vydani: Date = new Date(); //datum vydání	datum	
  cas_vydani: number = 0; //čas vydání	čas	generuje se (hlavně důležité v případě více vydání téže mutace v jednom dni) na základě názvu vydání. Bude existovat tabulka, která každému názvu vydání přiřadí čas kvůli řazení
  pocet_stran: number = 0; //počet stran	celé číslo	předpokládám, že vždy sudé. 0 může znamenat že nevyšlo, -1 že není znám počet stran
  stav: StavIssue = StavIssue.OK; //stav	kód	kódovaný údaj, významy: ok, poškozeno - čitelné, poškozeno - ztráta informace, chybí celé stránky, není vůbec (zničeno/ztráta)
  rocnik: string = ""; //ročník	text	jak je uveden na exempláři
  cislo: number = 0; //číslo	číslo	pořadové číslo uvedené na čísle
  druhe_cislo: number = 0; //druhé číslo	číslo	další paralelní číslování, kdyby bylo třeba
  stav_popis: string = ""; //stav - popis	text	podrobný popis poškození
  vlastnictvi: string = ""; //vlastnictví	text	sigla nebo název instituce (která nemá siglu)
  carovy_kod: string = ""; //čárový kód	text	čárák svazku, ve kterém je číslo
  signatura: string = ""; //signatura	text	signatura svazku ve kterém je číslo
  id_bib_zaznamu: string = ""; //id bib záznamu	id	prolink na bib. záznam (id, URL)
  uuid_cisla: string = ""; //uuid čísla	text	pokud je to z Krameria
  uuid_titulu: string = ""; //uuid titulu	text	pokud je to z Krameria
  url_krameria: string = ""; //URL krameria	text	pokud je to z Krameria
  typ: string = ""; //typ	kód	tištěné/fotokopie/mikrofilm/digitální
  
  state: string = "0"; // Slouzi pro oznaceni aktualinho stavu v ramci aplikace. Tj, automaticke generovane, podtverzeno
}
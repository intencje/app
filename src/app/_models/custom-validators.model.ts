import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
	static cannotContainSwearwords(control: AbstractControl): ValidationErrors | null {
		let swearwords = ['chuj', 'chuja', 'chujek', 'chuju', 'chujem', 'chujnia',
			'chujowy', 'chujowa', 'chujowe', 'cipa', 'cipę', 'cipe', 'cipą',
			'cipie', 'dojebać', 'dojebac', 'dojebie', 'dojebał', 'dojebal',
			'dojebała', 'dojebala', 'dojebałem', 'dojebalem', 'dojebałam',
			'dojebalam', 'dojebię', 'dojebie', 'dopieprzać', 'dopieprzac',
			'dopierdalać', 'dopierdalac', 'dopierdala', 'dopierdalał',
			'dopierdalal', 'dopierdalała', 'dopierdalala', 'dopierdoli',
			'dopierdolił', 'dopierdolil', 'dopierdolę', 'dopierdole', 'dopierdoli',
			'dopierdalający', 'dopierdalajacy', 'dopierdolić', 'dopierdolic',
			'dupa', 'dupie', 'dupą', 'dupcia', 'dupeczka', 'dupy', 'dupe', 'huj',
			'hujek', 'hujnia', 'huja', 'huje', 'hujem', 'huju', 'jebać', 'jebac',
			'jebał', 'jebal', 'jebie', 'jebią', 'jebia', 'jebak', 'jebaka', 'jebal',
			'jebał', 'jebany', 'jebane', 'jebanka', 'jebanko', 'jebankiem',
			'jebanymi', 'jebana', 'jebanym', 'jebanej', 'jebaną', 'jebana',
			'jebani', 'jebanych', 'jebanymi', 'jebcie', 'jebiący', 'jebiacy',
			'jebiąca', 'jebiaca', 'jebiącego', 'jebiacego', 'jebiącej', 'jebiacej',
			'jebia', 'jebią', 'jebie', 'jebię', 'jebliwy', 'jebnąć', 'jebnac',
			'jebnąc', 'jebnać', 'jebnął', 'jebnal', 'jebną', 'jebna', 'jebnęła',
			'jebnela', 'jebnie', 'jebnij', 'jebut', 'koorwa', 'kórwa', 'kurestwo',
			'kurew', 'kurewski', 'kurewska', 'kurewskiej', 'kurewską', 'kurewska',
			'kurewsko', 'kurewstwo', 'kurwa', 'kurwaa', 'kurwami', 'kurwą', 'kurwe',
			'kurwę', 'kurwie', 'kurwiska', 'kurwo', 'kurwy', 'kurwach', 'kurwami',
			'kurewski', 'kurwiarz', 'kurwiący', 'kurwica', 'kurwić', 'kurwic',
			'kurwidołek', 'kurwik', 'kurwiki', 'kurwiszcze', 'kurwiszon',
			'kurwiszona', 'kurwiszonem', 'kurwiszony', 'kutas', 'kutasa', 'kutasie',
			'kutasem', 'kutasy', 'kutasów', 'kutasow', 'kutasach', 'kutasami',
			'matkojebca', 'matkojebcy', 'matkojebcą', 'matkojebca', 'matkojebcami',
			'matkojebcach', 'nabarłożyć', 'najebać', 'najebac', 'najebał',
			'najebal', 'najebała', 'najebala', 'najebane', 'najebany', 'najebaną',
			'najebana', 'najebie', 'najebią', 'najebia', 'naopierdalać',
			'naopierdalac', 'naopierdalał', 'naopierdalal', 'naopierdalała',
			'naopierdalala', 'naopierdalała', 'napierdalać', 'napierdalac',
			'napierdalający', 'napierdalajacy', 'napierdolić', 'napierdolic',
			'nawpierdalać', 'nawpierdalac', 'nawpierdalał', 'nawpierdalal',
			'nawpierdalała', 'nawpierdalala', 'obsrywać', 'obsrywac', 'obsrywający',
			'obsrywajacy', 'odpieprzać', 'odpieprzac', 'odpieprzy', 'odpieprzył',
			'odpieprzyl', 'odpieprzyła', 'odpieprzyla', 'odpierdalać',
			'odpierdalac', 'odpierdol', 'odpierdolił', 'odpierdolil',
			'odpierdoliła', 'odpierdolila', 'odpierdoli', 'odpierdalający',
			'odpierdalajacy', 'odpierdalająca', 'odpierdalajaca', 'odpierdolić',
			'odpierdolic', 'odpierdoli', 'odpierdolił', 'opieprzający',
			'opierdalać', 'opierdalac', 'opierdala', 'opierdalający',
			'opierdalajacy', 'opierdol', 'opierdolić', 'opierdolic', 'opierdoli',
			'opierdolą', 'opierdola', 'piczka', 'pieprznięty', 'pieprzniety',
			'pieprzony', 'pierdel', 'pierdlu', 'pierdolą', 'pierdola', 'pierdolący',
			'pierdolacy', 'pierdoląca', 'pierdolaca', 'pierdol', 'pierdole',
			'pierdolenie', 'pierdoleniem', 'pierdoleniu', 'pierdolę', 'pierdolec',
			'pierdola', 'pierdolą', 'pierdolić', 'pierdolicie', 'pierdolic',
			'pierdolił', 'pierdolil', 'pierdoliła', 'pierdolila', 'pierdoli',
			'pierdolnięty', 'pierdolniety', 'pierdolisz', 'pierdolnąć',
			'pierdolnac', 'pierdolnął', 'pierdolnal', 'pierdolnęła', 'pierdolnela',
			'pierdolnie', 'pierdolnięty', 'pierdolnij', 'pierdolnik', 'pierdolona',
			'pierdolone', 'pierdolony', 'pierdołki', 'pierdzący', 'pierdzieć',
			'pierdziec', 'pizda', 'pizdą', 'pizde', 'pizdę', 'piździe', 'pizdzie',
			'pizdnąć', 'pizdnac', 'pizdu', 'podpierdalać', 'podpierdalac',
			'podpierdala', 'podpierdalający', 'podpierdalajacy', 'podpierdolić',
			'podpierdolic', 'podpierdoli', 'pojeb', 'pojeba', 'pojebami',
			'pojebani', 'pojebanego', 'pojebanemu', 'pojebani', 'pojebany',
			'pojebanych', 'pojebanym', 'pojebanymi', 'pojebem', 'pojebać',
			'pojebac', 'pojebalo', 'popierdala', 'popierdalac', 'popierdalać',
			'popierdolić', 'popierdolic', 'popierdoli', 'popierdolonego',
			'popierdolonemu', 'popierdolonym', 'popierdolone', 'popierdoleni',
			'popierdolony', 'porozpierdalać', 'porozpierdala', 'porozpierdalac',
			'poruchac', 'poruchać', 'przejebać', 'przejebane', 'przejebac',
			'przyjebali', 'przepierdalać', 'przepierdalac', 'przepierdala',
			'przepierdalający', 'przepierdalajacy', 'przepierdalająca',
			'przepierdalajaca', 'przepierdolić', 'przepierdolic', 'przyjebać',
			'przyjebac', 'przyjebie', 'przyjebała', 'przyjebala', 'przyjebał',
			'przyjebal', 'przypieprzać', 'przypieprzac', 'przypieprzający',
			'przypieprzajacy', 'przypieprzająca', 'przypieprzajaca',
			'przypierdalać', 'przypierdalac', 'przypierdala', 'przypierdoli',
			'przypierdalający', 'przypierdalajacy', 'przypierdolić',
			'przypierdolic', 'qrwa', 'rozjebać', 'rozjebac', 'rozjebie',
			'rozjebała', 'rozjebią', 'rozpierdalać', 'rozpierdalac', 'rozpierdala',
			'rozpierdolić', 'rozpierdolic', 'rozpierdole', 'rozpierdoli',
			'rozpierducha', 'skurwić', 'skurwiel', 'skurwiela', 'skurwielem',
			'skurwielu', 'skurwysyn', 'skurwysynów', 'skurwysynow', 'skurwysyna',
			'skurwysynem', 'skurwysynu', 'skurwysyny', 'skurwysyński',
			'skurwysynski', 'skurwysyństwo', 'skurwysynstwo', 'spieprzać',
			'spieprzac', 'spieprza', 'spieprzaj', 'spieprzajcie', 'spieprzają',
			'spieprzaja', 'spieprzający', 'spieprzajacy', 'spieprzająca',
			'spieprzajaca', 'spierdalać', 'spierdalac', 'spierdala', 'spierdalał',
			'spierdalała', 'spierdalal', 'spierdalalcie', 'spierdalala',
			'spierdalający', 'spierdalajacy', 'spierdolić', 'spierdolic',
			'spierdoli', 'spierdoliła', 'spierdoliło', 'spierdolą', 'spierdola',
			'srać', 'srac', 'srający', 'srajacy', 'srając', 'srajac', 'sraj',
			'sukinsyn', 'sukinsyny', 'sukinsynom', 'sukinsynowi', 'sukinsynów',
			'sukinsynow', 'śmierdziel', 'udupić', 'ujebać', 'ujebac', 'ujebał',
			'ujebal', 'ujebana', 'ujebany', 'ujebie', 'ujebała', 'ujebala',
			'upierdalać', 'upierdalac', 'upierdala', 'upierdoli', 'upierdolić',
			'upierdolic', 'upierdoli', 'upierdolą', 'upierdola', 'upierdoleni',
			'wjebać', 'wjebac', 'wjebie', 'wjebią', 'wjebia', 'wjebiemy',
			'wjebiecie', 'wkurwiać', 'wkurwiac', 'wkurwi', 'wkurwia', 'wkurwiał',
			'wkurwial', 'wkurwiający', 'wkurwiajacy', 'wkurwiająca', 'wkurwiajaca',
			'wkurwić', 'wkurwic', 'wkurwi', 'wkurwiacie', 'wkurwiają', 'wkurwiali',
			'wkurwią', 'wkurwia', 'wkurwimy', 'wkurwicie', 'wkurwiacie', 'wkurwić',
			'wkurwic', 'wkurwia', 'wpierdalać', 'wpierdalac', 'wpierdalający',
			'wpierdalajacy', 'wpierdol', 'wpierdolić', 'wpierdolic', 'wpizdu',
			'wyjebać', 'wyjebac', 'wyjebali', 'wyjebał', 'wyjebac', 'wyjebała',
			'wyjebały', 'wyjebie', 'wyjebią', 'wyjebia', 'wyjebiesz', 'wyjebie',
			'wyjebiecie', 'wyjebiemy', 'wypieprzać', 'wypieprzac', 'wypieprza',
			'wypieprzał', 'wypieprzal', 'wypieprzała', 'wypieprzala', 'wypieprzy',
			'wypieprzyła', 'wypieprzyla', 'wypieprzył', 'wypieprzyl', 'wypierdal',
			'wypierdalać', 'wypierdalac', 'wypierdala', 'wypierdalaj',
			'wypierdalał', 'wypierdalal', 'wypierdalała', 'wypierdalala',
			'wypierdalać', 'wypierdolić', 'wypierdolic', 'wypierdoli',
			'wypierdolimy', 'wypierdolicie', 'wypierdolą', 'wypierdola',
			'wypierdolili', 'wypierdolił', 'wypierdolil', 'wypierdoliła',
			'wypierdolila', 'zajebać', 'zajebac', 'zajebie', 'zajebią', 'zajebia',
			'zajebiał', 'zajebial', 'zajebała', 'zajebiala', 'zajebali', 'zajebana',
			'zajebani', 'zajebane', 'zajebany', 'zajebanych', 'zajebanym',
			'zajebanymi', 'zajebiste', 'zajebisty', 'zajebistych', 'zajebista',
			'zajebistym', 'zajebistymi', 'zajebiście', 'zajebiscie', 'zapieprzyć',
			'zapieprzyc', 'zapieprzy', 'zapieprzył', 'zapieprzyl', 'zapieprzyła',
			'zapieprzyla', 'zapieprzą', 'zapieprza', 'zapieprzy', 'zapieprzymy',
			'zapieprzycie', 'zapieprzysz', 'zapierdala', 'zapierdalać',
			'zapierdalac', 'zapierdalaja', 'zapierdalał', 'zapierdalaj',
			'zapierdalajcie', 'zapierdalała', 'zapierdalala', 'zapierdalali',
			'zapierdalający', 'zapierdalajacy', 'zapierdolić', 'zapierdolic',
			'zapierdoli', 'zapierdolił', 'zapierdolil', 'zapierdoliła',
			'zapierdolila', 'zapierdolą', 'zapierdola', 'zapierniczać',
			'zapierniczający', 'zasrać', 'zasranym', 'zasrywać', 'zasrywający',
			'zesrywać', 'zesrywający', 'zjebać', 'zjebac', 'zjebał', 'zjebal',
			'zjebała', 'zjebala', 'zjebana', 'zjebią', 'zjebali', 'zjeby',

			'CHUJ', 'CHUJA', 'CHUJEK', 'CHUJU', 'CHUJEM', 'CHUJNIA',
			'CHUJOWY', 'CHUJOWA', 'CHUJOWE', 'CIPA', 'CIPĘ', 'CIPE', 'CIPĄ',
			'CIPIE', 'DOJEBAĆ', 'DOJEBAC', 'DOJEBIE', 'DOJEBAŁ', 'DOJEBAL',
			'DOJEBAŁA', 'DOJEBALA', 'DOJEBAŁEM', 'DOJEBALEM', 'DOJEBAŁAM',
			'DOJEBALAM', 'DOJEBIĘ', 'DOJEBIE', 'DOPIEPRZAĆ', 'DOPIEPRZAC',
			'DOPIERDALAĆ', 'DOPIERDALAC', 'DOPIERDALA', 'DOPIERDALAŁ',
			'DOPIERDALAL', 'DOPIERDALAŁA', 'DOPIERDALALA', 'DOPIERDOLI',
			'DOPIERDOLIŁ', 'DOPIERDOLIL', 'DOPIERDOLĘ', 'DOPIERDOLE', 'DOPIERDOLI',
			'DOPIERDALAJĄCY', 'DOPIERDALAJACY', 'DOPIERDOLIĆ', 'DOPIERDOLIC',
			'DUPA', 'DUPIE', 'DUPĄ', 'DUPCIA', 'DUPECZKA', 'DUPY', 'DUPE', 'HUJ',
			'HUJEK', 'HUJNIA', 'HUJA', 'HUJE', 'HUJEM', 'HUJU', 'JEBAĆ', 'JEBAC',
			'JEBAŁ', 'JEBAL', 'JEBIE', 'JEBIĄ', 'JEBIA', 'JEBAK', 'JEBAKA', 'JEBAL',
			'JEBAŁ', 'JEBANY', 'JEBANE', 'JEBANKA', 'JEBANKO', 'JEBANKIEM',
			'JEBANYMI', 'JEBANA', 'JEBANYM', 'JEBANEJ', 'JEBANĄ', 'JEBANA',
			'JEBANI', 'JEBANYCH', 'JEBANYMI', 'JEBCIE', 'JEBIĄCY', 'JEBIACY',
			'JEBIĄCA', 'JEBIACA', 'JEBIĄCEGO', 'JEBIACEGO', 'JEBIĄCEJ', 'JEBIACEJ',
			'JEBIA', 'JEBIĄ', 'JEBIE', 'JEBIĘ', 'JEBLIWY', 'JEBNĄĆ', 'JEBNAC',
			'JEBNĄC', 'JEBNAĆ', 'JEBNĄŁ', 'JEBNAL', 'JEBNĄ', 'JEBNA', 'JEBNĘŁA',
			'JEBNELA', 'JEBNIE', 'JEBNIJ', 'JEBUT', 'KOORWA', 'KÓRWA', 'KURESTWO',
			'KUREW', 'KUREWSKI', 'KUREWSKA', 'KUREWSKIEJ', 'KUREWSKĄ', 'KUREWSKA',
			'KUREWSKO', 'KUREWSTWO', 'KURWA', 'KURWAA', 'KURWAMI', 'KURWĄ', 'KURWE',
			'KURWĘ', 'KURWIE', 'KURWISKA', 'KURWO', 'KURWY', 'KURWACH', 'KURWAMI',
			'KUREWSKI', 'KURWIARZ', 'KURWIĄCY', 'KURWICA', 'KURWIĆ', 'KURWIC',
			'KURWIDOŁEK', 'KURWIK', 'KURWIKI', 'KURWISZCZE', 'KURWISZON',
			'KURWISZONA', 'KURWISZONEM', 'KURWISZONY', 'KUTAS', 'KUTASA', 'KUTASIE',
			'KUTASEM', 'KUTASY', 'KUTASÓW', 'KUTASOW', 'KUTASACH', 'KUTASAMI',
			'MATKOJEBCA', 'MATKOJEBCY', 'MATKOJEBCĄ', 'MATKOJEBCA', 'MATKOJEBCAMI',
			'MATKOJEBCACH', 'NABARŁOŻYĆ', 'NAJEBAĆ', 'NAJEBAC', 'NAJEBAŁ',
			'NAJEBAL', 'NAJEBAŁA', 'NAJEBALA', 'NAJEBANE', 'NAJEBANY', 'NAJEBANĄ',
			'NAJEBANA', 'NAJEBIE', 'NAJEBIĄ', 'NAJEBIA', 'NAOPIERDALAĆ',
			'NAOPIERDALAC', 'NAOPIERDALAŁ', 'NAOPIERDALAL', 'NAOPIERDALAŁA',
			'NAOPIERDALALA', 'NAOPIERDALAŁA', 'NAPIERDALAĆ', 'NAPIERDALAC',
			'NAPIERDALAJĄCY', 'NAPIERDALAJACY', 'NAPIERDOLIĆ', 'NAPIERDOLIC',
			'NAWPIERDALAĆ', 'NAWPIERDALAC', 'NAWPIERDALAŁ', 'NAWPIERDALAL',
			'NAWPIERDALAŁA', 'NAWPIERDALALA', 'OBSRYWAĆ', 'OBSRYWAC', 'OBSRYWAJĄCY',
			'OBSRYWAJACY', 'ODPIEPRZAĆ', 'ODPIEPRZAC', 'ODPIEPRZY', 'ODPIEPRZYŁ',
			'ODPIEPRZYL', 'ODPIEPRZYŁA', 'ODPIEPRZYLA', 'ODPIERDALAĆ',
			'ODPIERDALAC', 'ODPIERDOL', 'ODPIERDOLIŁ', 'ODPIERDOLIL',
			'ODPIERDOLIŁA', 'ODPIERDOLILA', 'ODPIERDOLI', 'ODPIERDALAJĄCY',
			'ODPIERDALAJACY', 'ODPIERDALAJĄCA', 'ODPIERDALAJACA', 'ODPIERDOLIĆ',
			'ODPIERDOLIC', 'ODPIERDOLI', 'ODPIERDOLIŁ', 'OPIEPRZAJĄCY',
			'OPIERDALAĆ', 'OPIERDALAC', 'OPIERDALA', 'OPIERDALAJĄCY',
			'OPIERDALAJACY', 'OPIERDOL', 'OPIERDOLIĆ', 'OPIERDOLIC', 'OPIERDOLI',
			'OPIERDOLĄ', 'OPIERDOLA', 'PICZKA', 'PIEPRZNIĘTY', 'PIEPRZNIETY',
			'PIEPRZONY', 'PIERDEL', 'PIERDLU', 'PIERDOLĄ', 'PIERDOLA', 'PIERDOLĄCY',
			'PIERDOLACY', 'PIERDOLĄCA', 'PIERDOLACA', 'PIERDOL', 'PIERDOLE',
			'PIERDOLENIE', 'PIERDOLENIEM', 'PIERDOLENIU', 'PIERDOLĘ', 'PIERDOLEC',
			'PIERDOLA', 'PIERDOLĄ', 'PIERDOLIĆ', 'PIERDOLICIE', 'PIERDOLIC',
			'PIERDOLIŁ', 'PIERDOLIL', 'PIERDOLIŁA', 'PIERDOLILA', 'PIERDOLI',
			'PIERDOLNIĘTY', 'PIERDOLNIETY', 'PIERDOLISZ', 'PIERDOLNĄĆ',
			'PIERDOLNAC', 'PIERDOLNĄŁ', 'PIERDOLNAL', 'PIERDOLNĘŁA', 'PIERDOLNELA',
			'PIERDOLNIE', 'PIERDOLNIĘTY', 'PIERDOLNIJ', 'PIERDOLNIK', 'PIERDOLONA',
			'PIERDOLONE', 'PIERDOLONY', 'PIERDOŁKI', 'PIERDZĄCY', 'PIERDZIEĆ',
			'PIERDZIEC', 'PIZDA', 'PIZDĄ', 'PIZDE', 'PIZDĘ', 'PIŹDZIE', 'PIZDZIE',
			'PIZDNĄĆ', 'PIZDNAC', 'PIZDU', 'PODPIERDALAĆ', 'PODPIERDALAC',
			'PODPIERDALA', 'PODPIERDALAJĄCY', 'PODPIERDALAJACY', 'PODPIERDOLIĆ',
			'PODPIERDOLIC', 'PODPIERDOLI', 'POJEB', 'POJEBA', 'POJEBAMI',
			'POJEBANI', 'POJEBANEGO', 'POJEBANEMU', 'POJEBANI', 'POJEBANY',
			'POJEBANYCH', 'POJEBANYM', 'POJEBANYMI', 'POJEBEM', 'POJEBAĆ',
			'POJEBAC', 'POJEBALO', 'POPIERDALA', 'POPIERDALAC', 'POPIERDALAĆ',
			'POPIERDOLIĆ', 'POPIERDOLIC', 'POPIERDOLI', 'POPIERDOLONEGO',
			'POPIERDOLONEMU', 'POPIERDOLONYM', 'POPIERDOLONE', 'POPIERDOLENI',
			'POPIERDOLONY', 'POROZPIERDALAĆ', 'POROZPIERDALA', 'POROZPIERDALAC',
			'PORUCHAC', 'PORUCHAĆ', 'PRZEJEBAĆ', 'PRZEJEBANE', 'PRZEJEBAC',
			'PRZYJEBALI', 'PRZEPIERDALAĆ', 'PRZEPIERDALAC', 'PRZEPIERDALA',
			'PRZEPIERDALAJĄCY', 'PRZEPIERDALAJACY', 'PRZEPIERDALAJĄCA',
			'PRZEPIERDALAJACA', 'PRZEPIERDOLIĆ', 'PRZEPIERDOLIC', 'PRZYJEBAĆ',
			'PRZYJEBAC', 'PRZYJEBIE', 'PRZYJEBAŁA', 'PRZYJEBALA', 'PRZYJEBAŁ',
			'PRZYJEBAL', 'PRZYPIEPRZAĆ', 'PRZYPIEPRZAC', 'PRZYPIEPRZAJĄCY',
			'PRZYPIEPRZAJACY', 'PRZYPIEPRZAJĄCA', 'PRZYPIEPRZAJACA',
			'PRZYPIERDALAĆ', 'PRZYPIERDALAC', 'PRZYPIERDALA', 'PRZYPIERDOLI',
			'PRZYPIERDALAJĄCY', 'PRZYPIERDALAJACY', 'PRZYPIERDOLIĆ',
			'PRZYPIERDOLIC', 'QRWA', 'ROZJEBAĆ', 'ROZJEBAC', 'ROZJEBIE',
			'ROZJEBAŁA', 'ROZJEBIĄ', 'ROZPIERDALAĆ', 'ROZPIERDALAC', 'ROZPIERDALA',
			'ROZPIERDOLIĆ', 'ROZPIERDOLIC', 'ROZPIERDOLE', 'ROZPIERDOLI',
			'ROZPIERDUCHA', 'SKURWIĆ', 'SKURWIEL', 'SKURWIELA', 'SKURWIELEM',
			'SKURWIELU', 'SKURWYSYN', 'SKURWYSYNÓW', 'SKURWYSYNOW', 'SKURWYSYNA',
			'SKURWYSYNEM', 'SKURWYSYNU', 'SKURWYSYNY', 'SKURWYSYŃSKI',
			'SKURWYSYNSKI', 'SKURWYSYŃSTWO', 'SKURWYSYNSTWO', 'SPIEPRZAĆ',
			'SPIEPRZAC', 'SPIEPRZA', 'SPIEPRZAJ', 'SPIEPRZAJCIE', 'SPIEPRZAJĄ',
			'SPIEPRZAJA', 'SPIEPRZAJĄCY', 'SPIEPRZAJACY', 'SPIEPRZAJĄCA',
			'SPIEPRZAJACA', 'SPIERDALAĆ', 'SPIERDALAC', 'SPIERDALA', 'SPIERDALAŁ',
			'SPIERDALAŁA', 'SPIERDALAL', 'SPIERDALALCIE', 'SPIERDALALA',
			'SPIERDALAJĄCY', 'SPIERDALAJACY', 'SPIERDOLIĆ', 'SPIERDOLIC',
			'SPIERDOLI', 'SPIERDOLIŁA', 'SPIERDOLIŁO', 'SPIERDOLĄ', 'SPIERDOLA',
			'SRAĆ', 'SRAC', 'SRAJĄCY', 'SRAJACY', 'SRAJĄC', 'SRAJAC', 'SRAJ',
			'SUKINSYN', 'SUKINSYNY', 'SUKINSYNOM', 'SUKINSYNOWI', 'SUKINSYNÓW',
			'SUKINSYNOW', 'ŚMIERDZIEL', 'UDUPIĆ', 'UJEBAĆ', 'UJEBAC', 'UJEBAŁ',
			'UJEBAL', 'UJEBANA', 'UJEBANY', 'UJEBIE', 'UJEBAŁA', 'UJEBALA',
			'UPIERDALAĆ', 'UPIERDALAC', 'UPIERDALA', 'UPIERDOLI', 'UPIERDOLIĆ',
			'UPIERDOLIC', 'UPIERDOLI', 'UPIERDOLĄ', 'UPIERDOLA', 'UPIERDOLENI',
			'WJEBAĆ', 'WJEBAC', 'WJEBIE', 'WJEBIĄ', 'WJEBIA', 'WJEBIEMY',
			'WJEBIECIE', 'WKURWIAĆ', 'WKURWIAC', 'WKURWI', 'WKURWIA', 'WKURWIAŁ',
			'WKURWIAL', 'WKURWIAJĄCY', 'WKURWIAJACY', 'WKURWIAJĄCA', 'WKURWIAJACA',
			'WKURWIĆ', 'WKURWIC', 'WKURWI', 'WKURWIACIE', 'WKURWIAJĄ', 'WKURWIALI',
			'WKURWIĄ', 'WKURWIA', 'WKURWIMY', 'WKURWICIE', 'WKURWIACIE', 'WKURWIĆ',
			'WKURWIC', 'WKURWIA', 'WPIERDALAĆ', 'WPIERDALAC', 'WPIERDALAJĄCY',
			'WPIERDALAJACY', 'WPIERDOL', 'WPIERDOLIĆ', 'WPIERDOLIC', 'WPIZDU',
			'WYJEBAĆ', 'WYJEBAC', 'WYJEBALI', 'WYJEBAŁ', 'WYJEBAC', 'WYJEBAŁA',
			'WYJEBAŁY', 'WYJEBIE', 'WYJEBIĄ', 'WYJEBIA', 'WYJEBIESZ', 'WYJEBIE',
			'WYJEBIECIE', 'WYJEBIEMY', 'WYPIEPRZAĆ', 'WYPIEPRZAC', 'WYPIEPRZA',
			'WYPIEPRZAŁ', 'WYPIEPRZAL', 'WYPIEPRZAŁA', 'WYPIEPRZALA', 'WYPIEPRZY',
			'WYPIEPRZYŁA', 'WYPIEPRZYLA', 'WYPIEPRZYŁ', 'WYPIEPRZYL', 'WYPIERDAL',
			'WYPIERDALAĆ', 'WYPIERDALAC', 'WYPIERDALA', 'WYPIERDALAJ',
			'WYPIERDALAŁ', 'WYPIERDALAL', 'WYPIERDALAŁA', 'WYPIERDALALA',
			'WYPIERDALAĆ', 'WYPIERDOLIĆ', 'WYPIERDOLIC', 'WYPIERDOLI',
			'WYPIERDOLIMY', 'WYPIERDOLICIE', 'WYPIERDOLĄ', 'WYPIERDOLA',
			'WYPIERDOLILI', 'WYPIERDOLIŁ', 'WYPIERDOLIL', 'WYPIERDOLIŁA',
			'WYPIERDOLILA', 'ZAJEBAĆ', 'ZAJEBAC', 'ZAJEBIE', 'ZAJEBIĄ', 'ZAJEBIA',
			'ZAJEBIAŁ', 'ZAJEBIAL', 'ZAJEBAŁA', 'ZAJEBIALA', 'ZAJEBALI', 'ZAJEBANA',
			'ZAJEBANI', 'ZAJEBANE', 'ZAJEBANY', 'ZAJEBANYCH', 'ZAJEBANYM',
			'ZAJEBANYMI', 'ZAJEBISTE', 'ZAJEBISTY', 'ZAJEBISTYCH', 'ZAJEBISTA',
			'ZAJEBISTYM', 'ZAJEBISTYMI', 'ZAJEBIŚCIE', 'ZAJEBISCIE', 'ZAPIEPRZYĆ',
			'ZAPIEPRZYC', 'ZAPIEPRZY', 'ZAPIEPRZYŁ', 'ZAPIEPRZYL', 'ZAPIEPRZYŁA',
			'ZAPIEPRZYLA', 'ZAPIEPRZĄ', 'ZAPIEPRZA', 'ZAPIEPRZY', 'ZAPIEPRZYMY',
			'ZAPIEPRZYCIE', 'ZAPIEPRZYSZ', 'ZAPIERDALA', 'ZAPIERDALAĆ',
			'ZAPIERDALAC', 'ZAPIERDALAJA', 'ZAPIERDALAŁ', 'ZAPIERDALAJ',
			'ZAPIERDALAJCIE', 'ZAPIERDALAŁA', 'ZAPIERDALALA', 'ZAPIERDALALI',
			'ZAPIERDALAJĄCY', 'ZAPIERDALAJACY', 'ZAPIERDOLIĆ', 'ZAPIERDOLIC',
			'ZAPIERDOLI', 'ZAPIERDOLIŁ', 'ZAPIERDOLIL', 'ZAPIERDOLIŁA',
			'ZAPIERDOLILA', 'ZAPIERDOLĄ', 'ZAPIERDOLA', 'ZAPIERNICZAĆ',
			'ZAPIERNICZAJĄCY', 'ZASRAĆ', 'ZASRANYM', 'ZASRYWAĆ', 'ZASRYWAJĄCY',
			'ZESRYWAĆ', 'ZESRYWAJĄCY', 'ZJEBAĆ', 'ZJEBAC', 'ZJEBAŁ', 'ZJEBAL',
			'ZJEBAŁA', 'ZJEBALA', 'ZJEBANA', 'ZJEBIĄ', 'ZJEBALI', 'ZJEBY',

			'ChUj', 'ChUjA', 'cHuJeK', 'cHuJu', 'ChUjEm', 'ChUjNiA',
			'ChUjOwY', 'cHuJoWa', 'ChUjOwE', 'cIpA', 'cIpĘ', 'cIpE', 'cIpĄ',
			'CiPiE', 'dOjEbAć', 'DoJeBaC', 'dOjEbIe', 'DoJeBaŁ', 'dOjEbAl',
			'dOjEbAłA', 'dOjEbAlA', 'dOjEbAłEm', 'DoJeBaLeM', 'dOjEbAłAm',
			'dOjEbAlAm', 'DoJeBiĘ', 'dOjEbIe', 'DoPiEpRzAć', 'DoPiEpRzAc',
			'dOpIeRdAlAć', 'DoPiErDaLaC', 'dOpIeRdAlA', 'dOpIeRdAlAł',
			'dOpIeRdAlAl', 'DoPiErDaLaŁa', 'DoPiErDaLaLa', 'DoPiErDoLi',
			'dOpIeRdOlIł', 'DoPiErDoLiL', 'dOpIeRdOlĘ', 'dOpIeRdOlE', 'dOpIeRdOlI',
			'DoPiErDaLaJąCy', 'DoPiErDaLaJaCy', 'DoPiErDoLiĆ', 'dOpIeRdOlIc',
			'dUpA', 'dUpIe', 'DuPą', 'DuPcIa', 'DuPeCzKa', 'DuPy', 'DuPe', 'HuJ',
			'HuJeK', 'hUjNiA', 'hUjA', 'hUjE', 'hUjEm', 'HuJu', 'JeBaĆ', 'jEbAc',
			'jEbAł', 'JeBaL', 'jEbIe', 'JeBiĄ', 'jEbIa', 'JeBaK', 'jEbAkA', 'jEbAl',
			'jEbAł', 'JeBaNy', 'JeBaNe', 'JeBaNkA', 'jEbAnKo', 'JeBaNkIeM',
			'JeBaNyMi', 'JeBaNa', 'JeBaNyM', 'jEbAnEj', 'JeBaNą', 'JeBaNa',
			'jEbAnI', 'jEbAnYcH', 'jEbAnYmI', 'jEbCiE', 'jEbIąCy', 'JeBiAcY',
			'JeBiĄcA', 'jEbIaCa', 'JeBiĄcEgO', 'jEbIaCeGo', 'JeBiĄcEj', 'JeBiAcEj',
			'jEbIa', 'JeBiĄ', 'jEbIe', 'JeBiĘ', 'jEbLiWy', 'JeBnĄć', 'JeBnAc',
			'jEbNąC', 'jEbNaĆ', 'jEbNąŁ', 'jEbNaL', 'jEbNą', 'JeBnA', 'jEbNęŁa',
			'jEbNeLa', 'JeBnIe', 'JeBnIj', 'JeBuT', 'kOoRwA', 'kÓrWa', 'KuReStWo',
			'kUrEw', 'KuReWsKi', 'KuReWsKa', 'KuReWsKiEj', 'KuReWsKą', 'KuReWsKa',
			'kUrEwSkO', 'kUrEwStWo', 'KuRwA', 'kUrWaA', 'kUrWaMi', 'KuRwĄ', 'kUrWe',
			'kUrWę', 'KuRwIe', 'KuRwIsKa', 'KuRwO', 'kUrWy', 'KuRwAcH', 'kUrWaMi',
			'kUrEwSkI', 'kUrWiArZ', 'kUrWiĄcY', 'kUrWiCa', 'KuRwIć', 'KuRwIc',
			'kUrWiDoŁeK', 'kUrWiK', 'kUrWiKi', 'KuRwIsZcZe', 'KuRwIsZoN',
			'KuRwIsZoNa', 'KuRwIsZoNeM', 'kUrWiSzOnY', 'kUtAs', 'KuTaSa', 'KuTaSiE',
			'KuTaSeM', 'kUtAsY', 'kUtAsÓw', 'KuTaSoW', 'kUtAsAcH', 'kUtAsAmI',
			'MaTkOjEbCa', 'MaTkOjEbCy', 'MaTkOjEbCą', 'MaTkOjEbCa', 'MaTkOjEbCaMi',
			'mAtKoJeBcAcH', 'nAbArŁoŻyĆ', 'nAjEbAć', 'NaJeBaC', 'nAjEbAł',
			'nAjEbAl', 'NaJeBaŁa', 'NaJeBaLa', 'NaJeBaNe', 'NaJeBaNy', 'NaJeBaNą',
			'nAjEbAnA', 'nAjEbIe', 'NaJeBiĄ', 'nAjEbIa', 'NaOpIeRdAlAć',
			'nAoPiErDaLaC', 'nAoPiErDaLaŁ', 'nAoPiErDaLaL', 'nAoPiErDaLaŁa',
			'nAoPiErDaLaLa', 'NaOpIeRdAlAłA', 'nApIeRdAlAć', 'NaPiErDaLaC',
			'NaPiErDaLaJąCy', 'NaPiErDaLaJaCy', 'NaPiErDoLiĆ', 'nApIeRdOlIc',
			'nAwPiErDaLaĆ', 'nAwPiErDaLaC', 'nAwPiErDaLaŁ', 'nAwPiErDaLaL',
			'NaWpIeRdAlAłA', 'nAwPiErDaLaLa', 'ObSrYwAć', 'ObSrYwAc', 'ObSrYwAjĄcY',
			'ObSrYwAjAcY', 'oDpIePrZaĆ', 'oDpIePrZaC', 'oDpIePrZy', 'OdPiEpRzYł',
			'oDpIePrZyL', 'oDpIePrZyŁa', 'OdPiEpRzYlA', 'oDpIeRdAlAć',
			'oDpIeRdAlAc', 'OdPiErDoL', 'oDpIeRdOlIł', 'OdPiErDoLiL',
			'OdPiErDoLiŁa', 'OdPiErDoLiLa', 'OdPiErDoLi', 'OdPiErDaLaJąCy',
			'oDpIeRdAlAjAcY', 'oDpIeRdAlAjĄcA', 'oDpIeRdAlAjAcA', 'oDpIeRdOlIć',
			'oDpIeRdOlIc', 'OdPiErDoLi', 'OdPiErDoLiŁ', 'oPiEpRzAjĄcY',
			'OpIeRdAlAć', 'OpIeRdAlAc', 'OpIeRdAlA', 'oPiErDaLaJąCy',
			'oPiErDaLaJaCy', 'OpIeRdOl', 'OpIeRdOlIć', 'OpIeRdOlIc', 'OpIeRdOlI',
			'OpIeRdOlĄ', 'oPiErDoLa', 'PiCzKa', 'PiEpRzNiĘtY', 'pIePrZnIeTy',
			'pIePrZoNy', 'PiErDeL', 'pIeRdLu', 'PiErDoLą', 'PiErDoLa', 'PiErDoLąCy',
			'pIeRdOlAcY', 'pIeRdOlĄcA', 'pIeRdOlAcA', 'pIeRdOl', 'PiErDoLe',
			'pIeRdOlEnIe', 'PiErDoLeNiEm', 'PiErDoLeNiU', 'pIeRdOlĘ', 'pIeRdOlEc',
			'pIeRdOlA', 'pIeRdOlĄ', 'pIeRdOlIć', 'PiErDoLiCiE', 'pIeRdOlIc',
			'pIeRdOlIł', 'PiErDoLiL', 'pIeRdOlIłA', 'pIeRdOlIlA', 'pIeRdOlI',
			'PiErDoLnIęTy', 'PiErDoLnIeTy', 'PiErDoLiSz', 'PiErDoLnĄć',
			'pIeRdOlNaC', 'pIeRdOlNąŁ', 'pIeRdOlNaL', 'pIeRdOlNęŁa', 'PiErDoLnElA',
			'PiErDoLnIe', 'PiErDoLnIęTy', 'PiErDoLnIj', 'PiErDoLnIk', 'PiErDoLoNa',
			'pIeRdOlOnE', 'pIeRdOlOnY', 'pIeRdOłKi', 'PiErDzĄcY', 'pIeRdZiEć',
			'pIeRdZiEc', 'PiZdA', 'pIzDą', 'PiZdE', 'pIzDę', 'PiŹdZiE', 'pIzDzIe',
			'pIzDnĄć', 'PiZdNaC', 'pIzDu', 'PoDpIeRdAlAć', 'PoDpIeRdAlAc',
			'pOdPiErDaLa', 'PoDpIeRdAlAjĄcY', 'pOdPiErDaLaJaCy', 'PoDpIeRdOlIć',
			'pOdPiErDoLiC', 'pOdPiErDoLi', 'PoJeB', 'pOjEbA', 'pOjEbAmI',
			'PoJeBaNi', 'PoJeBaNeGo', 'PoJeBaNeMu', 'PoJeBaNi', 'PoJeBaNy',
			'pOjEbAnYcH', 'pOjEbAnYm', 'PoJeBaNyMi', 'PoJeBeM', 'pOjEbAć',
			'pOjEbAc', 'PoJeBaLo', 'PoPiErDaLa', 'PoPiErDaLaC', 'pOpIeRdAlAć',
			'pOpIeRdOlIć', 'PoPiErDoLiC', 'pOpIeRdOlI', 'pOpIeRdOlOnEgO',
			'PoPiErDoLoNeMu', 'PoPiErDoLoNyM', 'pOpIeRdOlOnE', 'pOpIeRdOlEnI',
			'PoPiErDoLoNy', 'PoRoZpIeRdAlAć', 'PoRoZpIeRdAlA', 'pOrOzPiErDaLaC',
			'PoRuChAc', 'PoRuChAć', 'PrZeJeBaĆ', 'pRzEjEbAnE', 'pRzEjEbAc',
			'pRzYjEbAlI', 'pRzEpIeRdAlAć', 'PrZePiErDaLaC', 'pRzEpIeRdAlA',
			'PrZePiErDaLaJąCy', 'PrZePiErDaLaJaCy', 'PrZePiErDaLaJąCa',
			'pRzEpIeRdAlAjAcA', 'pRzEpIeRdOlIć', 'PrZePiErDoLiC', 'pRzYjEbAć',
			'pRzYjEbAc', 'PrZyJeBiE', 'pRzYjEbAłA', 'pRzYjEbAlA', 'pRzYjEbAł',
			'pRzYjEbAl', 'PrZyPiEpRzAć', 'PrZyPiEpRzAc', 'PrZyPiEpRzAjĄcY',
			'PrZyPiEpRzAjAcY', 'pRzYpIePrZaJąCa', 'PrZyPiEpRzAjAcA',
			'PrZyPiErDaLaĆ', 'pRzYpIeRdAlAc', 'PrZyPiErDaLa', 'PrZyPiErDoLi',
			'pRzYpIeRdAlAjĄcY', 'pRzYpIeRdAlAjAcY', 'pRzYpIeRdOlIć',
			'pRzYpIeRdOlIc', 'QrWa', 'RoZjEbAć', 'RoZjEbAc', 'RoZjEbIe',
			'rOzJeBaŁa', 'RoZjEbIą', 'RoZpIeRdAlAć', 'RoZpIeRdAlAc', 'RoZpIeRdAlA',
			'RoZpIeRdOlIć', 'RoZpIeRdOlIc', 'RoZpIeRdOlE', 'rOzPiErDoLi',
			'rOzPiErDuChA', 'sKuRwIć', 'SkUrWiEl', 'SkUrWiElA', 'sKuRwIeLeM',
			'SkUrWiElU', 'sKuRwYsYn', 'SkUrWySyNóW', 'sKuRwYsYnOw', 'SkUrWySyNa',
			'sKuRwYsYnEm', 'SkUrWySyNu', 'SkUrWySyNy', 'SkUrWySyŃsKi',
			'sKuRwYsYnSkI', 'sKuRwYsYńStWo', 'SkUrWySyNsTwO', 'sPiEpRzAć',
			'sPiEpRzAc', 'SpIePrZa', 'SpIePrZaJ', 'sPiEpRzAjCiE', 'sPiEpRzAjĄ',
			'SpIePrZaJa', 'SpIePrZaJąCy', 'SpIePrZaJaCy', 'SpIePrZaJąCa',
			'sPiEpRzAjAcA', 'sPiErDaLaĆ', 'sPiErDaLaC', 'sPiErDaLa', 'SpIeRdAlAł',
			'sPiErDaLaŁa', 'SpIeRdAlAl', 'SpIeRdAlAlCiE', 'sPiErDaLaLa',
			'sPiErDaLaJąCy', 'SpIeRdAlAjAcY', 'sPiErDoLiĆ', 'sPiErDoLiC',
			'SpIeRdOlI', 'sPiErDoLiŁa', 'SpIeRdOlIłO', 'sPiErDoLą', 'SpIeRdOlA',
			'SrAć', 'SrAc', 'SrAjĄcY', 'sRaJaCy', 'SrAjĄc', 'SrAjAc', 'SrAj',
			'sUkInSyN', 'sUkInSyNy', 'SuKiNsYnOm', 'SuKiNsYnOwI', 'sUkInSyNóW',
			'SuKiNsYnOw', 'ŚmIeRdZiEl', 'UdUpIć', 'UjEbAć', 'UjEbAc', 'UjEbAł',
			'uJeBaL', 'uJeBaNa', 'UjEbAnY', 'uJeBiE', 'uJeBaŁa', 'UjEbAlA',
			'UpIeRdAlAć', 'UpIeRdAlAc', 'UpIeRdAlA', 'uPiErDoLi', 'UpIeRdOlIć',
			'uPiErDoLiC', 'uPiErDoLi', 'UpIeRdOlĄ', 'uPiErDoLa', 'UpIeRdOlEnI',
			'WjEbAć', 'WjEbAc', 'WjEbIe', 'WjEbIą', 'WjEbIa', 'WjEbIeMy',
			'wJeBiEcIe', 'WkUrWiAć', 'WkUrWiAc', 'WkUrWi', 'WkUrWiA', 'wKuRwIaŁ',
			'WkUrWiAl', 'WkUrWiAjĄcY', 'wKuRwIaJaCy', 'WkUrWiAjĄcA', 'wKuRwIaJaCa',
			'wKuRwIć', 'WkUrWiC', 'wKuRwI', 'wKuRwIaCiE', 'wKuRwIaJą', 'WkUrWiAlI',
			'WkUrWiĄ', 'wKuRwIa', 'WkUrWiMy', 'WkUrWiCiE', 'wKuRwIaCiE', 'wKuRwIć',
			'wKuRwIc', 'WkUrWiA', 'wPiErDaLaĆ', 'wPiErDaLaC', 'wPiErDaLaJąCy',
			'wPiErDaLaJaCy', 'WpIeRdOl', 'WpIeRdOlIć', 'WpIeRdOlIc', 'WpIzDu',
			'wYjEbAć', 'WyJeBaC', 'wYjEbAlI', 'wYjEbAł', 'WyJeBaC', 'wYjEbAłA',
			'WyJeBaŁy', 'WyJeBiE', 'wYjEbIą', 'WyJeBiA', 'wYjEbIeSz', 'WyJeBiE',
			'WyJeBiEcIe', 'WyJeBiEmY', 'wYpIePrZaĆ', 'wYpIePrZaC', 'wYpIePrZa',
			'wYpIePrZaŁ', 'wYpIePrZaL', 'wYpIePrZaŁa', 'WyPiEpRzAlA', 'wYpIePrZy',
			'wYpIePrZyŁa', 'WyPiEpRzYlA', 'wYpIePrZyŁ', 'wYpIePrZyL', 'wYpIeRdAl',
			'wYpIeRdAlAć', 'WyPiErDaLaC', 'wYpIeRdAlA', 'wYpIeRdAlAj',
			'wYpIeRdAlAł', 'WyPiErDaLaL', 'wYpIeRdAlAłA', 'wYpIeRdAlAlA',
			'WyPiErDaLaĆ', 'wYpIeRdOlIć', 'WyPiErDoLiC', 'wYpIeRdOlI',
			'WyPiErDoLiMy', 'WyPiErDoLiCiE', 'wYpIeRdOlĄ', 'wYpIeRdOlA',
			'WyPiErDoLiLi', 'WyPiErDoLiŁ', 'wYpIeRdOlIl', 'WyPiErDoLiŁa',
			'wYpIeRdOlIlA', 'zAjEbAć', 'ZaJeBaC', 'zAjEbIe', 'ZaJeBiĄ', 'zAjEbIa',
			'zAjEbIaŁ', 'zAjEbIaL', 'zAjEbAłA', 'zAjEbIaLa', 'ZaJeBaLi', 'ZaJeBaNa',
			'zAjEbAnI', 'zAjEbAnE', 'zAjEbAnY', 'zAjEbAnYcH', 'zAjEbAnYm',
			'zAjEbAnYmI', 'zAjEbIsTe', 'ZaJeBiStY', 'zAjEbIsTyCh', 'ZaJeBiStA',
			'ZaJeBiStYm', 'ZaJeBiStYmI', 'zAjEbIśCiE', 'zAjEbIsCiE', 'zApIePrZyĆ',
			'ZaPiEpRzYc', 'ZaPiEpRzY', 'zApIePrZyŁ', 'zApIePrZyL', 'zApIePrZyŁa',
			'zApIePrZyLa', 'ZaPiEpRzĄ', 'zApIePrZa', 'ZaPiEpRzY', 'zApIePrZyMy',
			'zApIePrZyCiE', 'zApIePrZySz', 'ZaPiErDaLa', 'ZaPiErDaLaĆ',
			'ZaPiErDaLaC', 'zApIeRdAlAjA', 'zApIeRdAlAł', 'ZaPiErDaLaJ',
			'ZaPiErDaLaJcIe', 'ZaPiErDaLaŁa', 'ZaPiErDaLaLa', 'ZaPiErDaLaLi',
			'zApIeRdAlAjĄcY', 'zApIeRdAlAjAcY', 'zApIeRdOlIć', 'ZaPiErDoLiC',
			'ZaPiErDoLi', 'ZaPiErDoLiŁ', 'zApIeRdOlIl', 'ZaPiErDoLiŁa',
			'zApIeRdOlIlA', 'zApIeRdOlĄ', 'zApIeRdOlA', 'zApIeRnIcZaĆ',
			'ZaPiErNiCzAjĄcY', 'zAsRaĆ', 'zAsRaNyM', 'zAsRyWaĆ', 'zAsRyWaJąCy',
			'zEsRyWaĆ', 'zEsRyWaJąCy', 'ZjEbAć', 'ZjEbAc', 'ZjEbAł', 'ZjEbAl',
			'zJeBaŁa', 'ZjEbAlA', 'zJeBaNa', 'ZjEbIą', 'ZjEbAlI', 'zJeBy'];

		if (swearwords.some(swearword => control.value.includes(swearword)))
			return { cannotContainSwearwords: true }
	}
}
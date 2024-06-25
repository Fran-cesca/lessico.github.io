// nav menu style
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
btn.click
btn.click(function (e) {

    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});


function getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear()

    $("#displayDate").html(currentYear);
}

getCurrentYear();



document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class 'read-more-link'
    const readMoreLinks = document.querySelectorAll('.read-more-link');

    // Iterate over each read-more-link
    readMoreLinks.forEach(function(readMoreLink) {
        // Find the corresponding project description for each button
        const projectDescription = readMoreLink.previousElementSibling; // Find the previous element

        // Add click event listener to each read-more-link
        readMoreLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Toggle the 'collapsed' class on the project description
            projectDescription.classList.toggle('collapsed');

            // Update the text content of the read-more-link based on current state
            if (projectDescription.classList.contains('collapsed')) {
                readMoreLink.textContent = 'Read More';
            } else {
                readMoreLink.textContent = 'Read Less';
            }
        });
    });
});





//siderbar//
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('domini_sidebar');

  sidebarToggle.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    sidebar.classList.toggle('opened');
  });
});

//Creatività

document.addEventListener('DOMContentLoaded', function() {
    // Get the 'creatività' list element
    const creativitàLink = document.getElementById('creatività');

    // Get the main section element
    const mainSection = document.querySelector('.main_section');

    // Create the 'domini' button element
    const dominiButton = document.createElement('button');
    dominiButton.textContent = 'Domini';
    dominiButton.id = 'dominiButton';

    // Create the 'parole' button element
    const paroleButton = document.createElement('button');
    paroleButton.textContent = 'Parole';
    paroleButton.id = 'paroleButton';

    // Create the scroll-to-top button
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Event listener for creatività list item click
    creativitàLink.addEventListener('click', function() {
    	// Append the 'domini' button to the body
    		document.body.appendChild(dominiButton);
    	// Append the 'parole' button to the body
        document.body.appendChild(paroleButton);
        // Update the content of the main section
        mainSection.innerHTML = `
           <div id= "definition-creatività">
                       <p><span class="lemma">Creatività</span></p>
                            <div class="square-border">
                                <p>
                                    <span id="etimo"><b>Etimologia</b></span>:<br>
                                    L’etimologia del termine deriva dal lat. creāre utilizzato in epoca classica per indicare principalmente la capacità produttiva e generativa della natura. In questa accezione, quando riferito 
                                    all’essere umano il verbo era principalmente connesso alla maternità e al suo potere di produrre nuova vita. In seguito, questa accezione si assesta in epoca cristiana fino all’alto medioevo come riferita alla capacità divina di creare ex nihilo. In una seconda accezione, il verbo latino creāre, indicava l’attività di eleggere o nominare una carica. Questo secondo uso, seppur presente nella lingua italiana (ne si trovano attestazioni in Boccaccio 1353) è ormai quasi scomparsa nell’italiano moderno, ne troviamo traccia soltanto in pochi lessemi come il sostantivo creanza.
                                </p>
                            </div>
                        <p class="generale">Nell’italiano contemporaneo, la parola “creatività” indica genericamente la capacità o la propensione (individuale o collettiva) di generare, produrre, ideare o progettare qualcosa di nuovo. Più raramente essa indica lo stesso processo o attività di produzione di novità. Il sostantivo, quindi, si discosta leggermente dal verbo italiano “creare” di cui costituisce una derivazione. Il verbo “creare” può essere infatti utilizzato per indicare un’attività o un processo di trasformazione della materia o di generazione di un qualcosa che non necessariamente indica qualcosa di nuovo, avvicinandosi ad altri verbi come ad esempio fabbricare, produrre, assemblare. Il sostantivo creatività si lega quindi più direttamente all’aggettivo creativo, a cui si lega a doppio filo. Da una parte creativo indica ciò che è dotato di creatività, dall’altro la creatività è l’abilità del creativo.
                        Spesso la parola indica una facoltà umana, ma può anche indicare il processo che sfrutta e impiega questa capacità. I suoi significati sono spesso divisi di tre sottogruppi parzialmente sovrapponibili: la capacità di creare, la capacità di inventare, la capacità di produrre nuove idee. In questa divisione è possibile rintracciare un movimento che va dal concreto verso l’astratto, dalla relazione con un oggetto materiale fino a una soggettivazione del pensiero. Dove la capacità di creare mantiene una dimensione pratica e materiale, l’invenzione ha a che fare con la progettazione di funzioni e di relazioni tra elementi che può sfociare in un’opera tecnico ingegneristica o in un prodotto artistico (allestimento finzionale di un mondo possibile, prodotto di fantasia), mentre la produzione di idee sembra essere legata a una capacità psichica. Inoltre, la creatività può precisarsi rispetto all’oggetto creato che può avere diversi statuti concessi dall’atto creativo stesso. Esso può costituirsi: a) come qualcosa di più reale di ciò che è abitualmente considerato realtà (disvelamento); b) un elemento che apre a nuove frontiere (innovazione); c) una realtà immaginaria (finzione); d) un’illusione per sopportare meglio la realtà (inganno). 
                        Si può dire che il concetto di creatività sia strettamente connessa alla generatività come capacità umana di produrre oggetti concreti o astratti, tangibili o intangibili, con caratteristiche di unicità, novità, originalità, anticonvenzionalità e imprevedibilità, opponendosi a concetti come ripetitività, banalità, convenzionalità, prevedibilità e mediocrità. Generalmente la facoltà, il processo e i prodotti creativi sono euforizzati tale per cui l’aggettivo “creativo” è generalmente considerato in termini positivi, sebbene il termine possa essere utilizzato in accezione negativa con tratti ironici, indicando qualcuno o qualcosa di fin troppo originale, che si discosta dal lecito e risulta bizzarro, strano, eccentrico. 
                        Al di là di questa generica idea di “generazione di novità” dove ciascuno dei termini non è chiaro e deve essere oggetto di ulteriore investigazione, non ci sono altri elementi distintivi che ci permettano di afferrare chiaramente cosa sia la creatività con conseguenti risultati e difficoltà all’interno dei domini come quello giuridico che hanno lo scopo di individuarla per proteggerne i prodotti da usi illeciti. I sinonimi elencati dai dizionari – inventiva, immaginazione, estro, genialità, ispirazione, fantasia – non ci aiutano e mostrano come il termine creatività un patchwork di tutte queste componenti, ma non possa essere sostituita in toto da questi termini essendo da essi sostituibili solo in contesti specifici.
                        A seconda quindi del dominio di riferimento, e anche a seconda delle posizioni teoriche interne o esterne al dominio stesso, la creatività può assumere differenti specificazioni. Nei diversi domini troviamo una concezione di creatività che si muove dall’idea di una competenza innata, un talento originario spesso associato al genio o di una tecnica acquisibile e educabile (le due opzioni possono anche essere compresenti). Così come è presente l’idea che essa si manifesti attraverso un’improvvisazione o intuizione spontanea “romantica” o un’obbedienza “tecnica” a regole (solitamente ci si colloca a metà tra i due estremi).</p>

                        <p class="artistico">Nel dominio <b>artistico</b>, in particolare, il concetto di creatività è stato profondamente influenzato dall’estetica neoplatonica, romantica, idealista e vitalista. Questi approcci intendono il gesto artistico come un gesto creatore simile a quello divino, inspiegabile e misterioso, in grado di trascendere ogni precedente determinazione; la creatività non è solo una questione di competenza tecnica o di talento artistico, ma piuttosto di visione (intuizione) e capacità di trasformare il comune in straordinario (arte dadaista, concettuale), a volte questo può verificarsi attraverso la sfida aperta alle norme e delle convinzioni sociali, oppure attraverso l’adesione a canoni e modelli prestabiliti presentandosi tuttavia come un avanzamento degli stessi. A questa idea di creatività è spesso accostata un'enfasi crescente sullo stato di flow o fluire, in cui il creativo si trova immerso nel suo lavoro in uno stato di creatività senza sforzo. Questo stato è spesso descritto come un'esperienza in cui l'artista si sente ispirato da una forza creativa esterna, che può essere interpretata come una moderna incarnazione del concetto di genio.
                        In questo senso la creatività si configura come una condizione necessaria della produzione, dell’opera o della fruizione estetica in ambito artistico-letterario almeno a partire dal romanticismo, la quale permette di passare dall’ordinario allo straordinario attraverso una competenza espressiva e operativa che può creare dal niente qualcosa che non è mai esistito prima (originalità) e che lo rivela nella sua forma più pura passando per uno stato di frenesia, impossessamento, stato di immersività nell’atto stesso di creare.
                        Ora, questo concetto di creatività, pur associandosi spesso a una competenza tecnica che ne permette l’attuazione e la messa in pratica, è da esso costitutivamente separato. La tecnica è al servizio della creatività e mantiene rispetto a essa una condizione ancillare. Questo fenomeno è più chiaro in altri domini dove il concetto di creatività è pressoché invariato ma è indirizzato a un maggior grado di funzionalità mirante a un risultato felice.</p>

                        <p class="architettura">Nel dominio dell’<b>architettura</b> e del <b>design</b>, ad esempio essa la creatività non può essere slegata dal supporto tecnico, essa si configura come una sorta di idea iniziale che deve essere poi supportata da diversi passaggi e verifiche, si parte dall’immaginazione per arrivare alla sua realizzazione.</p>

                        <p class="culinario">Nel dominio <b>culinario</b> dell’alta cucina, la creatività si presenta in un’accezione molto simile, come capacità di sperimentare e giocare con la tecnica per favorire la produzione di piatti sorprendenti oltre che buoni e gustosi al palato. Qui la creatività può insidiarsi in ogni aspetto della creazione dall’idea iniziale, alla tecnica di cottura, a quella di impiattamento, al gioco di consistenze, agli abbinamenti arditi che sfidano il senso comune e la tradizione o al contrario la rilanciano innovandola. Ciò che più conta è che anche in questo dominio profondamente legato alla manipolazione pratica della materia, il concetto di creatività è legato a una funzione cognitiva dello chef, al suo estro, in grado di ideare il piatto o trarre ispirazione dagli accadimenti a degli incidenti, con una sorta di serendipità forzata (es. Bottura “ops, mi è caduta la crostatina al limone!”).
                        In questi ultimi tre domini la creatività si fonda anche sull’idea di pensare fuori dagli schemi prestabiliti tuttavia tale capacità appare fondamentalmente slegata da una tecnica specifica e come una capacità individuale. Al contrario in altri domini la creatività diventa essa stessa una tecnica, una procedura acquisibile che permetterebbe appunto il superamento delle norme di un dato dominio.</p>

                        <p class="tecnico-ingegneristico">Nel dominio <b>tecnico-ingegneristico</b> e in quello economico-finanziario, la creatività perde i caratteri maggiormente legati all’artisticità e all’estetica e diventa una dimensione puramente funzionale e mirata alla produzione di prodotti utili più che nuovi e originali (functional creativity) che si allontana sempre più dalla concezione di un atto individuale e diventa processo collettivo anche guidato dalla scoperta casuale in funzione dell’invenzione tecnologica o strategica. Questa visione implica anche che la creatività/il processo inventivo sia un fenomeno che può essere studiato analiticamente, di cui è possibile individuare soggiacenti strutture e regolarità, che può essere trasformata in ‘metodo’, e che quindi si può a) trasmettere/insegnare/stimolare (riprodurre/replicare) tramite tecniche/strategie pedagogiche mirate e ben definite (creazione di un ambiente ad hoc, ideazione di esercizi specifici etc.) e b) sistematizzare e persino ottimizzare. La creatività diventa una τέχνη esercitabile per migliorare la progettazione (design thinking) e i prodotti che si configurano come innovazioni.</p>

                        <p class="pedagogico">Questa concezione è di fatto coadiuvata e assistita da una concezione di creatività che si muove tra il dominio psicologico e il dominio <b>pedagogico</b>. Nel primo dagli anni 40’ si è sviluppata l’idea che la creatività sia un fenomeno psicologico misurabile sulla base di indicatori (flessibilità, fluidità, originalità, elaborazione) che permetterebbero di calcolare il livello del pensiero divergente degli individui e allo stesso tempo di potenziarlo attraverso compiti. Questi indicatori presenti all’interno di un test per la creatività (Torrance Tests of Creative Thinking) non sono solo utilizzati per misurare il talento individuale, ma anche per migliorare programmi educativi, supportare la ricerca pedagogica, orientare le carriere degli individui con conseguenti ricadute nell’ambito pedagogico. In questo senso la creatività eletta a una delle competenze chiavi di cittadinanza nell’ambito educativo, non ha nulla a che vedere con il concetto di creatività ispirativa di matrice romantica, ma è un saper-fare tecnico che aiuta a trovare soluzioni efficaci a problemi nuovi (problem solving) che si adatta perfettamente alle richieste del mondo del lavoro che provengono, per la maggior parte, esattamente dai domini che pensano alla creatività come tecnica riproducibile. Il concetto assume una valenza rispetto alle competenze trasversali attinenti alla mobilità e alla flessibilità, esplicitamente riportate all’ambito del lavoro. La necessità in quest’ultimo campo di avere persone capaci di reinventare sé stessi a partire da condizioni e contesti in mutamento determina uno stereotipo della creatività di capacità di immaginare possibilità inedite di fronte un problema. Lo stereotipo della creatività in ambito didattico-pedagogico è quindi in definitiva basato su una riduzione di senso dovuta al legame istruzione-mercato del lavoro dove l’educazione, l’apprendimento, la didattica e la pedagogia (e con loro la ricerca empirica in ambito educativo) sono quindi funzionali ad analizzare e “spacchettare” la creatività al fine di creare strategie e studi di verificabilità, di riproducibilità e di trasmissibilità.</p>

                        <p class="marketing">Quest’ultimo senso di creatività esce fuori da questi domini applicandosi ovunque si necessiti di strategie creative facilmente riproducibili per finalità pratiche di mercato come ad esempio accade nel design, nella pubblicità, nel <b>marketing</b> e nell’ambito dei contenuti multimediali – dove il creativo è la figura che si occupa di tale aspetto nelle aziende.
                        In tali domini, tuttavia, l’idea di creatività può trasformarsi nel suo contrario ovvero in un’assoluta banalizzazione delle soluzioni, e non nella produzione di qualcosa di realmente nuovo ma nell’esibizione di qualcosa come se fosse nuovo. In altri termini, accanto alla produzione effettiva di novità questi domini producono effetti di novità in chi ne fruisce giacché il loro scopo è quello di manipolare il fruitore e catturare la sua attenzione. Non a caso la figura di spicco in questi domini è il creatore di contenuti dove con il termine creatore perde qualsiasi specificità rispetto alla reale innovatività del prodotto e si concentra sulla sola produttività di contenuti che rilevanti che incontrino gusti di pubblico. Potremmo dire che in questi domini più che il prodotto ad essere realmente creativa è l’operazione di intercettare il gusto del pubblico indovinando cosa potrebbe piacere. In nessun altro dominio la creatività si schiaccia su una procedura standard come in questi ultimi, dove il creativo è esattamente colui che è in grado di confermare e intercettare il gusto del pubblico, producendo prodotti che sembrano nuovi solo in quanto già visti e ascoltati. Da questo punto di vista la creatività nella pubblicità, salvo rare eccezioni, si manifesta come il contrario della creatività artistica, culinaria e architettonica, dove queste sfidano le norme e si fondano sull’originalità a volte disturbante, le altre confermano norme e usi e si fondano sull’efficacia. La creatività nel dominio del marketing è più fondata sull’imitatio cum variatione che sulla innovazione vera e propria.</p>

                        <p class="scientifico-matematico logico-linguistico">Tra l’idea di una rottura della norma tipica e dell’intuizione pura del dominio artistico e quella di una conferma della norma e del saper-fare del dominio pubblicitario si muovono altri domini come quello <b>scientifico-matematico</b> e quello <b>logico-linguistico</b>. In questi domini la norma e la tecnica giocano un ruolo fondamentale nella creatività pur non essendo essa riconducibile integralmente ad esse. In una prima accezione, infatti è creativo ciò che è in grado di produrre qualcosa di nuovo a partire da materiale già esistente attraverso procedure combinatorie inedite. Nella logica della scoperta scientifica o dell’invenzione matematica si può infatti derivare concetti nuovi a partire da una determinata assiomatica e da date regole, estendendole e sviluppandole. Altresì in linguistica la creatività è principalmente concepita come generatività, cioè con l’idea che partendo da un insieme finito di elementi è possibile combinarli in infiniti modi e dire comprensibili da chi possiede la sintassi e la grammatica della stessa lingua (rule governed creativity, Chomsky 1969: 69). Da questa creatività si distingue un secondo genere di creatività, che modifica le regole attraverso nuove regolarità. Questa creatività linguistica è la creatività che può mutare e di fatto muta le regole e non si limita semplicemente ad applicarle: stabilito un certo numero di regole linguistiche questo sarà sempre modificabile, violando quelle regole stesse e istituendone di diverse. Ciò non accadrà naturalmente ad arbitrio del singolo parlante, ma tuttavia accade ad un livello opportuno, sociale e non individuale che ha riflessi nei riguardi di una teoria linguistica.
                        In sostanza in linguistica la creatività si smarca dal concetto di originalità, appropriatezza e individualità tipiche del senso comune del termine, ma si definisce strutturalmente rispetto al suo contrario la regola, per cui abbiamo o una creatività che applica regole di generazione o al contrario una creatività che ne istituisce all’interno di un consesso sempre sociale e collettivo. 
                        Nel dominio scientifico tale creatività modificatrice delle regole è spesso prerogativa individuale del genio e alla sua capacità di essere aperto all’esperienza, di ibridare saperi e di immaginare, cioè di figurare nuove relazioni attraverso la violazione, sostituzione e integrazione di nuove regole. Queste capacità permettono fondare nuove assiomatiche e nuovi sistemi di relazione da cui derivano nuovi concetti.</p>

                        <p class="sport">In altri domini l’idea di rifondare nuove regole e schemi violando i vecchi è invece rilevante se legata al tempismo e all’improvvisazione. Nel dominio dello <b>sport</b>, ad esempio, il concetto di creatività tattica è esattamente la capacità di risolvere un problema imprevisto con una tattica innovativa e originale che permette di ricalibrare e riformulare la tattica adoperata fino a un dato momento. Creativo è aggettivo che può essere correlato sia al giocatore di uno sport, sia alla giocata sportiva: il giocatore è creativo quando è intelligente nella misura in cui è in grado di rispondere in maniera differente alla stessa situazione senza aver paura di sbagliare; la giocata creativa è quindi una soluzione inedita e utile allo stesso tempo (quando è solo inedita, allora diventa semplicemente “spettacolare” e può allora diventare un’arte che difatti si struttura nelle forme del “freestyle” di strada). In questo dominio, la creatività può essere sì una capacità allenabile dove l’operazione cognitiva deve essere coadiuvata da un’esposizione a un determinato tipo di ambiente e attraverso una serie di variazioni durante l’allenamento, ma è allo stesso tempo una prerogativa del giocatore di talento identificabile proprio nella sua capacità di intervento in una situazione nuova attraverso una forma di fantasia che è innanzitutto motoria.</p>


                        <p class="quotidiano">Sempre opera di fantasia, di invenzione e di improvvisazione è la capacità creativa per come concepita nella vita quotidiana in relazione a pratiche, oggetti, usi e costumi. In questo senso, la creatività diventa forma di exattamento e re-direzionamento dei programmi aperti dagli oggetti e dalle pratiche della vita quotidiana (De Certeau 1980). La creatività nella <b>vita quotidiana</b> è insubordinazione e riappropriazione che attraverso un’operazione cognitiva e operativa permette l’ingresso di una funzionalità nuova e alternativa volta alla risoluzione di problemi quotidiani ma anche a una estetizzazione e valorizzazione del materiale a disposizione. In questo senso la creatività non deve essere necessariamente originale, quanto più ingegnosa, volta a una inventiva spesso locale e determinata nel tempo.
                        Infine, se non riferita alla produzione ma al produttore, la persona creativa nel dominio della vita quotidiana è generalmente riferita a una persona che ricerca attività o hobby in qualche modo generativi e produttivi nel tempo libero, come dipingere, fare lavoretti, comporre, ecc.; in questo senso nelle scuole elementari l’ora di creatività prevede questo genere di compiti. Il creativo è la persona libera di esprimersi e di ricercare sé stesso attraverso le proprie attività e le proprie decisioni.</p>

                        <p class="politico-economico">Connesso a questo ultimo uso di creatività relativa all’uomo di tutti i giorni è l’uso del concetto di creatività sviluppato nel dominio <b>politico</b> ed <b>economico</b>, dove la democrazia e l’economia creativa indicano sistemi in cui la libertà individuale, la possibilità di parola, di intervento e di partecipazione si uniscono alla promozione dell’innovazione e del legame tra individui attraverso l’inclusione e l’equità.</p>

                        <p class="finanziario">Esattamente all’opposto si situa l’utilizzo del concetto all’interno del dominio della <b>finanza</b>, qui l’aggettivo creativo attribuito alla finanza, indica pratiche finanziarie innovative e complesse volte a massimizzare i profitti o a gestire i rischi in modi non tradizionali che possono comportare rischi significativi, compresa la complessità e l'opacità delle transazioni finanziarie, il possibile aumento della volatilità dei mercati e l'instabilità sistemica. Inoltre, alcune pratiche di finanza creativa possono essere oggetto di controversie etiche e regolamentari, soprattutto se comportano rischi eccessivi o comportamenti non trasparenti</p>

                        <p>Per quanto riguarda la nozione di ricreatività (che in realtà non esiste: esistono le parole “ricreativo” e “ricreazione”), il prefisso “ri-”, veicolante l’idea di ripetizione, fa sì che la parola si riferisca in primo luogo a una rigenerazione. La ripetizione può interessare 1) solo l’atto di creazione o 2) anche il prodotto: nel primo caso (in cui si ripete solo l’atto creativo) il prodotto diventa originale ricevendo nuove condizioni di origine, nel secondo caso, al contrario, torna allo stato originario, alle vecchie condizioni di origine. La ricreazione può 1) connotarsi euforicamente, perché si suppone che la rigenerazione elimini la degenerazione: perciò ricreativo vale come sinonimo di catartico, o almeno piacevole. Poiché il piacere, secondo l’opinione comune, è ritenuto dinamico il termine è anche sinonimo di ludico e divertente – in tale caso il riferimento alla creatività si perde e quello alla creazione rimane solo di sfondo. Ma può anche 2) connotarsi disforicamente, perché la rigenerazione ripristina uno status quo negativo come reazione o restaurazione. Ci sono anche casi in cui può j3) non avere connotazione forica, perché si vuole solo evidenziare la fedeltà di una data riproduzione di qualcosa o, ancora più in generale, che qualcosa è stato rielaborato.</p>

                        <p>In definitiva: si può considerare ogni evento come creativo, come interessato dalla proprietà della creatività, nella misura in cui con esso uno stato di cose è posto in essere. Gli attori coinvolti in tale evento (autori e pubblico) e i prodotti che ne sorgono compartecipano della creatività, sono altresì creativi. Creatività è in questa amplissima accezione una marca che funzionalizza il divenire nei termini dell’emersione di qualcosa. Ma in ciascun dominio di riferimento, sorta di lente attraverso cui si filtra l’enciclopedia in una particolare prospettiva, e alla luce del quadro che risulta dalla combinazione delle posizioni teoriche che si sposano allorché si svolge l’inchiesta, il perimetro della creatività può essere ristretto. Creatività è allora una proprietà che si rende apprezzabile allorché una regione funzionale di pratiche, discorsive e no, e uno sguardo che giudica si incrociano, in quanto definizione delle istruzioni con cui riconoscere come creative solo alcune caratteristiche al di sopra (o, più raramente, al di sotto) di gradi negozialmente parametrati tra quelle che concorrono a qualificare la creatività più in generale.</p>

    
                    </div>
                </div>`;
    });


// ParoleButton
paroleButton.addEventListener('click', function() {
// Redirect to lessico.html page
window.location.href = 'lessico.html';
});

// Add event listener for 'domini' button click (example function, adjust as needed)
dominiButton.addEventListener('click', function() {
const sidebar = document.getElementById('sidebar');
sidebar.classList.toggle('opened');
document.body.classList.toggle('opened');
});
  
// Function to hide buttons on scroll and show scroll-to-top button
    function handleScroll() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            dominiButton.classList.add('hidden');
            paroleButton.classList.add('hidden');
            scrollToTopButton.style.display = 'block';
        } else {
            dominiButton.classList.remove('hidden');
            paroleButton.classList.remove('hidden');
            scrollToTopButton.style.display = 'none';
        }
    }

    // Attach the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Scroll to top function
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll("#sidebar a");
    const sidebarHeader = document.querySelector("#sidebar .sidebar-header");

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetClass = this.getAttribute("href").substring(1); // Remove the '#' from href
            highlightAndScrollTo(targetClass);
        });
    });

    // Event listener for scrolling to top on sidebar header click
    sidebarHeader.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    function highlightAndScrollTo(targetClass) {
        // Remove highlight from all paragraphs
        const allParagraphs = document.querySelectorAll("p");
        allParagraphs.forEach(paragraph => {
            paragraph.classList.remove("highlighted");
        });

        // Highlight the targeted paragraph
        const targetParagraph = document.querySelector("." + targetClass);
        if (targetParagraph) {
            targetParagraph.classList.add("highlighted");

            // Scroll to the targeted paragraph
            targetParagraph.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
});


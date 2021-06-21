import {Octokit} from "@octokit/rest"
import {Image, Link} from "blitz"
import {useEffect, useState} from "react"

import {ButtonLink} from "@/components/ButtonLink"
import {Header} from "@/components/Header"
import {Feature} from "@/components/home/Feature"
import {FeatureIcon} from "@/components/home/FeatureIcon"
import {FeatureIconTitle} from "@/components/home/FeatureIconTitle"
import {Footer} from "@/components/home/Footer"
import {Hand} from "@/components/home/Hand"
import {HeroCode} from "@/components/home/HeroCode"
import {StyledLink} from "@/components/home/StyledLink"
import {VideoPlayer} from "@/components/home/VideoPlayer"
import Scrollbar from "@/components/Scrollbar"
import {SocialCards} from "@/components/SocialCards"
import {SponsorPack} from "@/components/SponsorPack"
import {getGitHubFile} from "@/utils/getGitHubFile"

const Home = ({randomContributors}) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navIsOpen ? "hidden" : "unset"
  }, [navIsOpen])

  return (
    <div>
      <SocialCards imageUrl="/social-homepage.png" />
      <div className="overflow-hidden">
        <div>
          <a name="top" aria-hidden>
            {null}
          </a>
          <div className="relative grid grid-cols-1 py-1 md:py-3 gap-y-24 xl:gap-y-44">
            <div className="z-30 text-white col-span-full">
              <Header
                className="px-6 mx-auto max-w-7xl"
                onNavToggle={(isOpen) => {
                  setNavIsOpen(isOpen)
                }}
              />
            </div>
            <div
              className={
                "absolute w-full h-full row-start-1 row-end-5 background-to-video rounded-bl-3xl xl:rounded-bl-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black " +
                (navIsOpen ? "z-20 fixed" : "-z-10")
              }
            ></div>
            <div className="relative -mt-6 text-white col-span-full">
              <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl lg:grid-cols-3 xl:grid-cols-2 md:gap-6 xl:-mt-10">
                <div className="z-10 space-y-10 lg:w-full">
                  <h2 className="-mt-8 font-medium text-5xl-squashed lg:-mt-0 font-secondary xl:text-6xl xl:font-medium dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue">
                    Il Framework React Fullstack
                  </h2>
                  <p className="text-lg xl:text-xl xl:font-medium text-off-white lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:w-4/5">
<<<<<<< HEAD
                    Blitz è un framework completo che si ispira a Ruby on Rails, è costruito su
                    Node.js, e presenta un'astrazione del data layer "Zero-API" che elimina la
                    necessità di utilizzare REST o GraphQL.
=======
                    Blitz is a batteries-included framework that&apos;s inspired by Ruby on Rails,
                    is built on Next.js, and features a &quot;Zero-API&quot; data layer abstraction
                    that eliminates the need for REST/GraphQL.
>>>>>>> 9a282371a929bae5732160068e4ff99fb796722c
                  </p>
                  <div className="flex space-x-4">
                    <ButtonLink className="w-2/3 lg:w-auto rounded-tl-xl" href="/docs/get-started">
                      Prova Blitz in Meno di 5 Minuti
                    </ButtonLink>
                    <ButtonLink
                      href="https://github.com/blitz-js/blitz"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-1/3 lg:w-auto rounded-r-xl"
                    >
                      GitHub
                    </ButtonLink>
                  </div>
                </div>
                <div className="relative lg:col-span-2 xl:col-span-1">
                  <Hand variant="hero-squiggle" className="lg:hidden -right-6 -top-36" />
                  <Hand variant="hero-rightarm" className="hidden lg:block -left-36 top-32" />
                  <Hand
                    variant="hero-righthand"
                    className="z-20 hidden lg:block -left-4"
                    style={{top: "15.2rem"}}
                  />
                  <Hand
                    variant="hero-leftarm"
                    className="hidden lg:block"
                    style={{top: "30rem", right: "-4.8rem"}}
                  />
                  <Hand
                    variant="hero-lefthand"
                    style={{top: "26.6rem", right: "-2.2em"}}
                    className="z-20 hidden lg:block"
                  />
                  <HeroCode className="z-10" />
                </div>
              </div>
            </div>
            <div className="z-10 px-6 mx-auto space-y-12 text-lg text-center text-white lg:space-y-0 lg:space-x-12 lg:flex lg:text-left max-w-7xl xl:font-mediumxl:text-xl">
              <FeatureIcon icon="layers">
                Il data layer "Zero-API" consente di{" "}
                <strong>importare il codice del server direttamente nei componenti</strong> invece
                di dover aggiungere manualmente gli endpoint delle API ed eseguire fetching e
                caching lato client.
              </FeatureIcon>
              <FeatureIcon icon="lighteningBolt">
                Una nuova applicazione Blitz è dotata di{" "}
                <strong>tutte quelle caratteristiche altrimenti noiose da implementare</strong> già
                configurate per te! Come ESLint, Prettier, Jest, registrazione e login utente e
                reimpostazione della password.
              </FeatureIcon>
              <FeatureIcon icon="graphUp">
                Pur restando estremamente flessibile, fornisce{" "}
                <strong>utili impostazioni predefinite e convenzioni</strong> per elementi come il
                routing, la struttura dei file e l'autenticazione. Fornisce utili impostazioni
                predefinite e convenzioni per cose come il routing, la struttura dei file e
                l'autenticazione, pur essendo estremamente flessibile.
              </FeatureIcon>
            </div>
            <div className="grid w-full gap-5 px-6 mx-auto text-white xl:gap-10 max-w-7xl lg:grid-cols-2">
              <Link href="/#" passHref>
                <StyledLink className="flex items-center justify-between pb-1 text-lg border-b border-opacity-50 border-blue-mid lg:col-span-2 font-secondary xl:text-xl">
                  <span>Top Video</span>

                  {/*
                  <span className="flex items-center">
                    <span className="hidden mr-2 lg:block">View News</span>{" "}
                    <BsArrowRight size="1.5rem" />
                  </span>
                    */}
                </StyledLink>
              </Link>
              <VideoPlayer url="https://www.youtube.com/watch?v=UHyx8MtCVVk" />
              <VideoPlayer url="https://www.youtube.com/watch?v=fIexr5UZfhU" />
            </div>

            <div className="relative w-full mx-auto space-y-10 lg:space-y-20 xl:space-y-36 max-w-7xl">
              <h2 className="px-6 text-3xl font-semibold xl:text-5xl xl:w-1/2">
                Tutto quello che ti occorre per realizzare un'App
              </h2>
              <div className="w-full">
                <Hand
                  variant="concepts-right"
                  className="hidden lg:block lg:-top-24 lg:-right-96 lg:w-8/12 xl:-top-14"
                />
                <Scrollbar className="lg:hidden" thumbHeight="4px">
                  <div className="grid pb-4 ml-6 features-grid lg:gap-y-14">
                    <Feature title="Fullstack e Monolitico">
                      <p>
                        Include tutto, dal database al frontend, tutto all'interno di una singola
                        applicazione. Un singola cosa da sviluppare. Una singola cosa da
                        distribuire.
                      </p>
                      <p>E si può distribuire sia su un server che serverless.</p>
                    </Feature>
                    <Feature title="API Non Richieste">
                      <p>
                        Invece di eseguire il fetching dei dati dal back-end, puoi importare il
                        codice del server direttamente nei componenti. In fase di compilazione,
                        questa importazione viene sostituita con un'API HTTP generata
                        automaticamente.
                      </p>
                      <p>
                        L'API generata può anche essere utilizzata da altre applicazioni o sistemi
                        di terze parti.
                      </p>
                    </Feature>
                    <Feature title="Libertà di Opinione">
                      <p>
                        L'esperienza immediata ti guida su un percorso perfetto per la maggior parte
                        delle applicazioni. Ma quando hai bisogno di uscire dallo schema
                        prestabilito, sei totalmente libero di farlo.
                      </p>
                      <p>
<<<<<<< HEAD
                        E quasi tutto è collegabile. Ad esempio, non stabiliamo quali librerie di
                        styling o form tu debba utilizzare.
=======
                        And nearly everything is pluggable. For example, we don&apos;t mandate which
                        styling or form libraries you use.
>>>>>>> 9a282371a929bae5732160068e4ff99fb796722c
                      </p>
                    </Feature>
                    <Feature title="Convenzione su Configurazione">
                      <p>
                        Blitz crea al posto tuo tutte le impostazioni e configurazioni più noiose.
                        La struttura comune del progetto e gli schemi dell'architettura rendono
                        facile passare da un'app Blitz all'altra senza difficoltà.
                      </p>
                    </Feature>
                    <Feature title="Facile da Iniziare, Facile da Scalare">
                      <p>
                        Facile sia per i principianti che per chi volesse migrare un'app
                        pre-esistente da Next.js a Blitz.
                      </p>
                      <p>
                        {" "}
                        Facile da scalare da tutti i punti di vista: linee di codice, numero di
                        persone che lavorano alla base del codice ed esecuzione del codice.
                      </p>
                    </Feature>
                    <Feature title="Stabilità">
                      <p>
<<<<<<< HEAD
                        Una volta rilasciata la versione 1.0, passeremo a un ciclo di rilascio
                        stabile e definibile con più canali come stable, LTS e beta.
=======
                        Once we reach version 1.0, we&apos;ll switch to a stable, predictable
                        release cycle with multiple channels like stable, LTS, and beta.
>>>>>>> 9a282371a929bae5732160068e4ff99fb796722c
                      </p>
                      <p>Stiamo prendendo molta ispirazione da Ember in questo senso.</p>
                    </Feature>
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="absolute w-full h-full row-start-6 lg:h-codesandbox lg:mt-80 row-end-10 rounded-bl-3xl rounded-tr-3xl lg:rounded-bl-4xl lg:rounded-tr-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-purple-off-black dark:to-black"></div>
            <div className="relative hidden w-full px-6 mx-auto space-y-10 max-w-7xl lg:block">
              <h3 className="pb-1 text-xs border-b border-opacity-50 font-secondary border-blue-mid">
                Esempi di CodeSandbox Blitz
              </h3>
              <div>
                <Hand variant="sandbox-right" style={{right: "-13.2rem", bottom: "-35rem"}} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/flamboyant-meninsky-j63yq?file=/app/projects/mutations/createProject.ts"
                  className="h-sandbox xl:h-xl-sandbox block relative"
                >
                  <Image
                    src="/img/sandbox-pic.png"
                    layout="fill"
                    className="object-cover"
                    alt="Codesandbox placeholder"
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white text-6xl font-bold">
                    Clicca per aprire in una nuova finestra
                  </div>
                </a>
              </div>
            </div>
            <div className="xl:hidden">{/*spacer div*/}</div>
            <div className="relative flex flex-col px-6 mx-auto text-white lg:flex-row max-w-7xl space-y-14 lg:space-x-24 lg:space-y-0 xl:space-x-40">
              <div className="space-y-14 lg:w-1/2">
                <h2 className="z-10 font-medium text-transparent text-5xl-squashed font-secondary bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue xl:text-6xl">
                  La Community Blitz - Il Nostro Elemento Più Importante
                </h2>
                <div className="z-10 grid grid-cols-5 gap-1 md:grid-cols-6 lg:grid-cols-5 grid-rows-8 overflow-clip">
                  {randomContributors.map((contributor, i) => (
                    <a
                      href={`https://github.com/${contributor.login}`}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        layout="intrinsic"
                        width="100%"
                        height="100%"
                        src={contributor.avatar_url}
                        alt={contributor.name}
                        title={contributor.name}
                        className="w-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 text-lg lg:relative gap-14 md:grid-cols-2 lg:row-span-2 lg:grid-cols-1 xl:text-xl lg:w-1/2">
                <Hand variant="community-squiggle" className="xl:hidden -right-18" />
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-end">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      La nostra community è calorosa, sicura, diversificata, inclusiva e divertente!
                      LGBTQ+, donne e minoranze sono particolarmente benvenute.
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Leggi il nostro{" "}
                      <Link href="/docs/code-of-conduct" passHref>
                        <StyledLink className="underline text-off-white hover:text-blue-light">
                          Codice di Comportamento
                        </StyledLink>
                      </Link>
                      .
                    </p>
                  </div>
                  <ButtonLink
                    href="https://discord.blitzjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-bl-none rounded-xl lg:w-max"
                  >
                    Unisciti alla Community su Discord
                  </ButtonLink>
                </div>
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-start">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Siamo tutti insieme in questa avventura, dal più giovane al più anziano. Siamo
                      tutti molto più simili rispetto a quanto siamo diversi. Ci piace lavorare
                      insieme.
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
<<<<<<< HEAD
                      Ti invitiamo a contribuire per rendere Blitz il miglior framework che abbiamo
                      mai avuto!
=======
                      We invite you to help make Blitz the best framework we&apos;ve ever had!
>>>>>>> 9a282371a929bae5732160068e4ff99fb796722c
                    </p>
                  </div>
                  <Link href="/docs/contributing" passHref>
                    <ButtonLink className="rounded-bl-none rounded-xl lg:w-max">
                      Scopri Come Contribuire
                    </ButtonLink>
                  </Link>
                </div>
              </div>
            </div>
            <div className="z-10 w-full mx-auto text-white space-y-7 max-w-7xl">
              <h2 className="px-6 text-2xl font-medium text-white font-secondary lg:text-3xl">
                Schema Architetturale
              </h2>
              <div className="w-full">
                <Scrollbar className="lg:hidden" thumbHeight="4px" thumbColor="white">
                  <div className="px-6 architecture-diagram" style={{paddingBottom: "2px"}}>
                    <img src="img/architecture.svg" alt="Architecture diagram" />
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="relative col-span-full">
              <Hand variant="features-squiggle" className="-right-6 -top-10 xl:hidden -z-10" />
            </div>
            <div className="absolute w-full h-full row-start-8 row-end-19 xl:row-end-19 -z-20 bg-purple-mid dark:bg-purple-off-black"></div>
            <div className="relative px-6 mx-auto my-6 space-y-12 text-white xl:my-0 max-w-7xl xl:space-y-36">
              <h2 className="text-3xl font-semibold lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                Tutto è End-to-End dal <br className="hidden xl:block" />
                Database al Frontend
              </h2>
              <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                <Hand
                  variant="features-right"
                  className="hidden xl:block xl:-top-40 xl:-right-52"
                />
                <FeatureIconTitle icon="thumbsUp" title="Autenticazione e Permessi">
                  L'autenticazione integrata è semplicissima e molto sicura. Funziona con qualsiasi
                  identity provider, inclusi nome utente e password self-hosted e sistemi di terze
                  parti come Auth0.
                </FeatureIconTitle>
                <FeatureIconTitle icon="database" title="Libertà sul Database">
                  Puoi usare qualsiasi database tu voglia. Prisma 2 è il client predefinito, ma puoi
                  rimuoverlo e utilizzarne altri, come Fauna o DynamoDB.
                </FeatureIconTitle>
                <FeatureIconTitle icon="fileCode" title="Recipe">
                  Un comando per installare codice e/o package all'interno dell'app Blitz. Ad
                  esempio: `blitz install tailwind` o `blitz install chakra-ui`. Una recipe può
                  essere creata da chiunque.
                </FeatureIconTitle>
                <FeatureIconTitle icon="plugin" title="Architettura Backend">
                  Blitz è impostato per attività intensive lato server come invio di e-mail, cron
                  job, elaborazione in background, generazione di PDF, ecc. Attualmente abbiamo
                  guide backend minime, ma stiamo lavorando allo sviluppo di più modelli e
                  all'aggiunta di più documenti.
                </FeatureIconTitle>
                <FeatureIconTitle icon="typescript" title="Eccellente Supporto per Typescript">
                  Blitz è realizzato con Typescript e il suo data layer è completamente sicuro
                  end-to-end. Tutti i type sono completamente statici senza bisogno di un processo
                  di generazione separato!
                </FeatureIconTitle>
                <FeatureIconTitle icon="scaffolding" title="Code Scaffolding">
                  Siamo agli inizi, ma lo scaffolding del codice Blitz si appresta ad essere
                  estremamente potente. Ottimo sia per la prototipazione che per la creazione di app
                  reali. Sarà in grado di sovrascrivere qualsiasi modello e personalizzazione per i
                  tuoi progetti.
                </FeatureIconTitle>
              </div>
            </div>
            <div className="absolute w-full h-full bg-white dark:bg-black row-start-11 row-end-13 rounded-tr-3xl xl:rounded-tr-4xl -z-10" />
            <div className="relative col-span-full">
              <Hand
                variant="sponsors-squiggle"
                className="-right-24 xl:hidden"
                style={{top: "-5.3rem"}}
              />
            </div>
            <div className="px-6 mx-auto text-center max-w-7xl ">
              <div className="space-y-7 xl:space-y-10">
                <h2 className="relative text-3xl font-semibold xl:text-5xl">
                  <Hand
                    variant="sponsors-left"
                    className="hidden xl:block -left-80 pointer-events-none"
                    style={{top: "-18.05rem"}}
                  />
                  I nostri Sponsors
                </h2>
                <p className="text-lg xl:text-xl">
                  I vostri contributi aiutano a garantire che Blitz continui a essere sviluppato e{" "}
                  <br className="hidden lg:block" />
                  mantenuto! Abbiamo opzioni di sponsorizzazione mensili a partire da $5/mese.
                </p>
                <div>
                  <ButtonLink
                    variant="solid-dark"
                    href="https://github.com/sponsors/blitz-js"
                    className="mx-auto rounded-bl-none rounded-xl lg:w-max md:w-1/3 lg:m-auto lg:mt-4 xl:mt-18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sostieni Blitz
                  </ButtonLink>
                </div>
              </div>

              <div className="xl:max-w-2xl mx-auto">
                <SponsorPack />
              </div>
            </div>

            <div className="w-full px-6 mx-auto space-y-12 text-white lg:space-x-4 lg:space-y-0 lg:flex lg:items-center max-w-7xl">
              <h2 className="pr-2 text-3xl font-semibold lg:w-full lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                Quindi cosa dovrei fare adesso?
              </h2>
              <div className="flex flex-col w-full space-y-4 md:flex-row md:space-y-0 md:space-x-2">
                <ButtonLink
                  href="/docs/get-started"
                  className="w-full text-lg py-18 rounded-t-2xl md:rounded-tr-none"
                >
                  Prova Blitz in Meno di 5 Minuti
                </ButtonLink>
                <ButtonLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.blitzjs.com"
                  className="w-full text-lg py-18 rounded-br-2xl md:rounded-tr-2xl"
                >
                  Entra su Discord
                </ButtonLink>
              </div>
            </div>
            <Footer className="dark:bg-purple-off-black bg-purple-mid text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const getStaticProps = async () => {
  const MAX_CONTRIBUTORS = 30

  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  })

  const {contributors} = await getGitHubFile({
    octokit,
    owner: "blitz-js",
    repo: "blitz",
    path: ".all-contributorsrc",
    json: true,
  })

  let randomIndexes = []
  while (randomIndexes.length < MAX_CONTRIBUTORS) {
    var r = Math.floor(Math.random() * contributors.length)
    if (randomIndexes.indexOf(r) === -1) randomIndexes.push(r)
  }

  let randomContributors = randomIndexes.map((i) => contributors[i])

  return {
    props: {randomContributors},
    revalidate: 60 * 30, // 30 minutes
  }
}

Home.meta = {
  title: "Blitz.js - Il Framework React Fullstack",
  description: `Blitz è un framework React fullstack super-completo, costruito su Next.js e dotato di un data layer "Zero-API".`,
}

export default Home
export {getStaticProps}

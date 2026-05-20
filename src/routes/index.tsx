import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail, Star, ScrollText, Home, Users, FileSignature, Landmark, Scale, ShieldCheck } from "lucide-react";
import heroOffice from "@/assets/hero-office.jpg";
import sealDetail from "@/assets/seal-detail.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: Home, title: "Obrót nieruchomościami", desc: "Umowy sprzedaży, darowizny i zamiany nieruchomości, ustanowienie hipoteki i służebności." },
  { icon: Users, title: "Sprawy spadkowe", desc: "Akty poświadczenia dziedziczenia, oświadczenia o przyjęciu lub odrzuceniu spadku, dział spadku." },
  { icon: FileSignature, title: "Pełnomocnictwa", desc: "Sporządzanie pełnomocnictw ogólnych i szczególnych w formie aktu notarialnego." },
  { icon: Landmark, title: "Spółki i działalność", desc: "Umowy spółek, protokoły zgromadzeń wspólników, zmiany aktów założycielskich." },
  { icon: Scale, title: "Umowy majątkowe", desc: "Intercyzy, podział majątku wspólnego, umowy o dożywocie i renty." },
  { icon: ShieldCheck, title: "Poświadczenia", desc: "Poświadczenia podpisów, zgodności kopii, daty pewnej oraz pozostawania osoby przy życiu." },
];

const reviews = [
  {
    name: "Adam Kowalski",
    text: "Świetna obsługa i pełen profesjonalizm. Wersja demonstracyjna opinii klienta.",
  },
  {
    name: "Anna Nowak",
    text: "Serdecznie polecam usługi tej kancelarii. Profesjonalizm, rzetelność i przyjazne podejście do klienta.",
  },
  {
    name: "Jan Kowalski",
    text: "Spisanie aktu przebiegło w bardzo miły i profesjonalny sposób. Wszystkie kwestie zostały wyjaśnione.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="container-prose flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-3 text-primary-foreground">
            <span className="grid h-10 w-10 place-items-center rounded-sm border border-gold/60 font-serif text-lg text-gold">N</span>
            <span className="hidden sm:block">
              <span className="block font-serif text-base leading-tight">Kancelaria Notarialna</span>
              <span className="block text-xs tracking-[0.2em] uppercase text-gold/90">Adam Kowalski</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/85">
            <a href="#o-kancelarii" className="hover:text-gold transition-colors">O kancelarii</a>
            <a href="#czynnosci" className="hover:text-gold transition-colors">Czynności</a>
            <a href="#opinie" className="hover:text-gold transition-colors">Opinie</a>
            <a href="#kontakt" className="hover:text-gold transition-colors">Kontakt</a>
          </nav>
          <a href="tel:+48000000000" className="inline-flex items-center gap-2 rounded-sm bg-gold px-4 py-2 text-sm font-medium text-primary hover:bg-gold-soft transition-colors">
            <Phone className="h-4 w-4" /> 000 000 000
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate min-h-[88vh] flex items-end overflow-hidden">
        <img
          src={heroOffice}
          alt="Wnętrze kancelarii notarialnej w Rzeszowie"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-transparent" />

        <div className="container-prose relative z-10 pb-20 pt-40 text-primary-foreground">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> Notariusz · Miasto
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
              Pewność i powaga<br />
              <span className="italic text-gold">aktu notarialnego.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              Kancelaria Notarialna Adama Kowalskiego to miejsce, w którym formalności prawne realizujemy z najwyższą starannością, dyskrecją i ludzkim podejściem.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#kontakt" className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium text-primary hover:bg-gold-soft transition-colors">
                Umów wizytę
              </a>
              <a href="#czynnosci" className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground hover:border-gold hover:text-gold transition-colors">
                Zakres czynności
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> ul. Przykładowa 1, Miasto</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Pn–Pt do 15:30</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 text-gold fill-gold" /> 4,5 · 11 opinii demonstracyjnych</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="o-kancelarii" className="py-28">
        <div className="container-prose grid gap-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <img
              src={sealDetail}
              alt="Pióro i pieczęć notarialna na dokumencie"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">O kancelarii</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Notariusz jako osoba zaufania&nbsp;publicznego.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Notariusz dokonuje czynności, którym strony pragną nadać formę notarialną, a także te, dla których ustawa wymaga tej formy. Naszą misją jest zapewnienie Państwu poczucia bezpieczeństwa prawnego — przy każdej transakcji, w każdej decyzji życiowej.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Przyjmujemy w przyjaznej atmosferze, z dbałością o szczegóły i klarowne wyjaśnienie każdej kwestii. Zapraszamy do kontaktu telefonicznego lub mailowego w celu uzyskania bezpłatnej informacji o czynności i wymaganych dokumentach.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-xs uppercase tracking-widest text-gold">Lat doświadczenia</dt>
                <dd className="mt-2 font-serif text-4xl text-primary">15+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-gold">Ocena klientów</dt>
                <dd className="mt-2 font-serif text-4xl text-primary">4,5 / 5</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="czynnosci" className="bg-secondary py-28">
        <div className="container-prose">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Zakres czynności</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Czynności notarialne</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Kompleksowa obsługa osób prywatnych, przedsiębiorców oraz instytucji. W razie potrzeby możliwa wizyta poza siedzibą kancelarii.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 border border-border">
            {services.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="group bg-background p-8 transition-colors hover:bg-card">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.25} />
                <h3 className="mt-6 font-serif text-2xl text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="opinie" className="py-28">
        <div className="container-prose">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Opinie klientów</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Zaufanie, które&nbsp;zobowiązuje.</h2>
            <div className="mt-6 flex items-center justify-center gap-1 text-gold">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-gold" />)}
              <span className="ml-3 text-sm text-muted-foreground">4,5 · 11 opinii w Google</span>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="flex flex-col rounded-sm border border-border bg-card p-8">
                <ScrollText className="h-6 w-6 text-gold" strokeWidth={1.25} />
                <blockquote className="mt-6 flex-1 font-serif text-lg italic leading-snug text-primary">
                  „{r.text}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <span className="font-medium text-foreground">{r.name}</span>
                  <span className="ml-2 text-muted-foreground">· Google</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="bg-primary text-primary-foreground py-28">
        <div className="container-prose grid gap-16 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Kontakt</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Zapraszamy do&nbsp;kancelarii.</h2>
            <p className="mt-6 max-w-md text-primary-foreground/75">
              Przed wizytą prosimy o kontakt telefoniczny w celu ustalenia terminu oraz omówienia zakresu dokumentów potrzebnych do dokonania czynności.
            </p>

            <ul className="mt-12 space-y-6 text-base">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-1 text-gold shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold/80">Adres</div>
                  <div className="mt-1">ul. Przykładowa 1<br />00-000 Miasto</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="h-5 w-5 mt-1 text-gold shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold/80">Telefon</div>
                  <a href="tel:+48000000000" className="mt-1 block hover:text-gold transition-colors">000 000 000</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-1 text-gold shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold/80">Strona</div>
                  <a href="https://example.com" className="mt-1 block hover:text-gold transition-colors">example.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="h-5 w-5 mt-1 text-gold shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold/80">Godziny otwarcia</div>
                  <div className="mt-1">Poniedziałek – Piątek · do 15:30<br /><span className="text-primary-foreground/60">Inne godziny po wcześniejszym uzgodnieniu</span></div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
              <iframe
              title="Mapa — Kancelaria Notarialna Demo"
              src="https://www.google.com/maps?q=ul.+Przykladowa+1,+Warszawa&output=embed"
              className="h-full min-h-[420px] w-full rounded-sm border border-gold/20 grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-primary-foreground/10 text-primary-foreground/70 py-10">
        <div className="container-prose flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm">
          <div>© {new Date().getFullYear()} Kancelaria Notarialna Demo</div>
          <div className="text-primary-foreground/50">ul. Przykładowa 1 · Miasto · 000 000 000</div>
        </div>
      </footer>
    </div>
  );
}

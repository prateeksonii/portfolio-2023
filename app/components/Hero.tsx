export default function HeroSection() {
  return (
    <section
      className="h-screen text-center flex flex-col items-center justify-center bg-cover font-head"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <h4 className="font-sans uppercase text-3xl tracking-widest">
        Prateek Soni
      </h4>
      <h1 className="text-9xl font-bold uppercase pt-8">
        building <br />
        web apps <br />
        since <br />
        <span className="text-orange-400">2016</span>
      </h1>
    </section>
  );
}

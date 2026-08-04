"use client";

import { useState } from "react";

type GalleryPhoto = {
  src: string;
  alt: string;
  label: string;
};

type ReleaseCover = {
  title: string;
  type: string;
  year: string;
  image: string;
  spotifyUrl: string;
};

const navItems = [
  ["About", "about"],
  ["Tour", "tour"],
  ["Merch", "merch"],
  ["Discography", "discography"],
  ["Gallery", "gallery"],
  ["Contact", "contact"],
] as const;

const videos = [
  {
    title: "Hollow Script",
    meta: "Official music video",
    image: "https://i.ytimg.com/vi/IwamzNWN2dw/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=IwamzNWN2dw",
  },
  {
    title: "Horizon",
    meta: "Official music video",
    image: "https://i.ytimg.com/vi/Z7M626HZ6I4/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=Z7M626HZ6I4",
  },
  {
    title: "Gold Stained Hands",
    meta: "Official music video",
    image: "https://i.ytimg.com/vi/ImKGG6ilqOo/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=ImKGG6ilqOo",
  },
  {
    title: "Forsaken",
    meta: "Official music video",
    image: "https://i.ytimg.com/vi/7ASn_8KeP3g/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=7ASn_8KeP3g",
  },
] as const;

const releases: ReleaseCover[] = [
  {
    title: "Hollow Script",
    type: "Single",
    year: "2026",
    image: "https://i.scdn.co/image/ab67616d0000e1a3e7f5705adac8c2fbb10be3a2",
    spotifyUrl: "https://open.spotify.com/album/3fS28HsieOdQEejNKcyUfr",
  },
  {
    title: "Gold Stained Hands",
    type: "Single",
    year: "2025",
    image: "https://i.scdn.co/image/ab67616d0000e1a365662d67cbf9f6b6d18e1da9",
    spotifyUrl: "https://open.spotify.com/album/6YhYFn20MKnPOnOIS56kpS",
  },
  {
    title: "Horizon",
    type: "Single",
    year: "2025",
    image: "https://i.scdn.co/image/ab67616d0000e1a3b031957cc8ba9fced16a7c4e",
    spotifyUrl: "https://open.spotify.com/album/6RisABuqrzyZxLYv7RIUgO",
  },
  {
    title: "Forsaken",
    type: "Single",
    year: "2024",
    image: "https://i.scdn.co/image/ab67616d0000e1a302e437e07afe777943d3bed5",
    spotifyUrl: "https://open.spotify.com/album/40nSuz47t2BkGbsX0ib5v1",
  },
  {
    title: "Waste",
    type: "Album",
    year: "2021",
    image: "https://i.scdn.co/image/ab67616d0000e1a3d9143de1122841cf51787ee8",
    spotifyUrl: "https://open.spotify.com/album/1m0Pv6214V4DZyUwkxGZx9",
  },
  {
    title: "Abandon All Hope",
    type: "Album",
    year: "2019",
    image: "https://i.scdn.co/image/ab67616d0000e1a3cf3e41d6d0b8b040b01211bc",
    spotifyUrl: "https://open.spotify.com/album/4auYQeVYpNyemNBEqU7lRb",
  },
];

const gallery: GalleryPhoto[] = [
  { src: "/images/norvi/live-stage-wide.jpg", alt: "NORVI performing in front of a full crowd", label: "Main stage" },
  { src: "/images/norvi/live-vocal-red.jpg", alt: "NORVI vocalist performing under red lights", label: "Vocals" },
  { src: "/images/norvi/live-guitar-blue.jpg", alt: "NORVI guitarist performing under blue lights", label: "Guitar" },
  { src: "/images/norvi/live-arena.jpg", alt: "NORVI playing an arena show", label: "Arena" },
  { src: "/images/norvi/live-crowd.jpg", alt: "NORVI seen from the crowd", label: "The crowd" },
  { src: "/images/norvi/live-stage-back.jpg", alt: "NORVI on stage with the audience behind them", label: "On stage" },
  { src: "/images/norvi/live-bass.jpg", alt: "NORVI bassist performing live", label: "Bass" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />

      <header className={`site-header ${menuOpen ? "site-header--open" : ""}`} id="top">
        <a className="wordmark" href="#top" aria-label="NORVI home" onClick={closeMenu}>
          <img src="/norvi-mark.svg" alt="" aria-hidden="true" />
          <span>NORVI</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Open navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav aria-label="Main navigation">
          {navItems.map(([label, target]) => (
            <a key={target} href={`#${target}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-mark-glow" aria-hidden="true" />
        <div className="hero-lockup">
          <p className="eyebrow hero-eyebrow">The power of metalcore from Central Asia</p>
          <h1 id="hero-title">NORVI</h1>
          <div className="hero-copy-row">
            <div className="hero-actions">
              <a className="button button-primary" href="#videos">Watch videos</a>
              <a className="button button-ghost" href="#contact">Book NORVI</a>
            </div>
          </div>
        </div>
        <div className="hero-side" aria-label="Band origin and genre">
          <span>01</span>
          <p>Almaty, Kazakhstan</p>
          <p>Modern metalcore</p>
        </div>
        <a className="scroll-cue" href="#videos"><span>Scroll to explore</span><i aria-hidden="true" /></a>
      </section>

      <section className="video-section video-section--opening" id="videos" aria-labelledby="videos-title">
        <div className="video-heading">
          <div>
            <p className="eyebrow">Music videos</p>
            <h2 id="videos-title">Watch NORVI.</h2>
          </div>
          <a className="button button-ghost" href="https://www.youtube.com/@nrvi3" target="_blank" rel="noreferrer">Open YouTube</a>
        </div>
        <div className="video-grid">
          {videos.map((video, index) => (
            <a className={`video-card video-card-${index + 1}`} href={video.url} target="_blank" rel="noreferrer" key={video.title}>
              <img src={video.image} alt={`${video.title} video still`} />
              <span className="video-card-overlay" />
              <span className="video-card-copy"><strong>{video.title}</strong><small>{video.meta}</small></span>
            </a>
          ))}
        </div>
      </section>

      <section className="tour-section" id="tour" aria-labelledby="tour-title">
        <div className="tour-inner">
          <div>
            <p className="eyebrow">Tours and performances</p>
            <h2 id="tour-title">The next<br />room is yours.</h2>
          </div>
          <div className="tour-copy">
            <p>
              NORVI are actively touring across Central Asia. In the current
              cycle, the band is preparing a run across 7-10 cities with the
              sound, raw energy and visuals to fill the room.
            </p>
            <a className="button button-dark" href="https://www.instagram.com/norv.i/" target="_blank" rel="noreferrer">See current dates</a>
          </div>
        </div>
      </section>

      <section className="section stores" id="merch" aria-labelledby="merch-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our stores</p>
            <h2 id="merch-title">Wear the noise.</h2>
          </div>
          <p>Merch links and the latest NORVI drops are coming next. For current orders, write to the band.</p>
        </div>
        <div className="store-grid">
          <a className="store-card store-card--red" href="mailto:eppinger13@gmail.com?subject=NORVI%20merch%20enquiry">
            <span>01</span>
            <strong>NORVI<br />standard issue</strong>
            <small>Ask the band -&gt;</small>
          </a>
          <a className="store-card store-card--photo" href="https://www.instagram.com/norv.i/" target="_blank" rel="noreferrer">
            <span>02</span>
            <strong>Live<br />archives</strong>
            <small>Follow Instagram -&gt;</small>
          </a>
          <a className="store-card store-card--dark" href="#contact">
            <span>03</span>
            <strong>Press<br />materials</strong>
            <small>Contact NORVI -&gt;</small>
          </a>
        </div>
      </section>

      <section className="live-gallery" id="gallery" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow">Our gallery</p>
            <h2 id="gallery-title">Live gallery.</h2>
          </div>
          <p>High-impact rooms, close contact and a set that scales from club stages to festival crowds.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((photo, index) => (
            <button
              className={`gallery-shot gallery-shot-${index + 1}`}
              type="button"
              key={photo.src}
              onClick={() => setActivePhoto(photo)}
              aria-label={`Open ${photo.label} photo`}
            >
              <img src={photo.src} alt={photo.alt} />
              <span>{photo.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section discography" id="discography" aria-labelledby="discography-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Discography</p>
            <h2 id="discography-title">Every release.</h2>
          </div>
          <p>The complete NORVI catalogue, from the first album to the latest single.</p>
        </div>
        <div className="release-covers">
          {releases.map((release, index) => (
            <a className="release-cover-card" href={release.spotifyUrl} target="_blank" rel="noreferrer" key={release.title}>
              <div className="release-cover-art">
                <img src={release.image} alt={`${release.title} cover`} />
                <span className="release-cover-no">0{index + 1}</span>
                <span className="release-cover-stamp">NORVI</span>
                <strong>{release.title}</strong>
              </div>
              <div className="release-cover-meta">
                <span>{release.type}</span>
                <span>{release.year}</span>
                <span aria-hidden="true">-&gt;</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-image"><img src="/images/norvi/live-arena.jpg" alt="NORVI performing live" /></div>
        <div className="about-copy-block">
          <p className="eyebrow">About the band</p>
          <h2 id="about-title">A new voice from a scene that refuses to stay quiet.</h2>
          <p>
            NORVI is a metalcore band from Almaty, Kazakhstan, formed in 2019.
            Known for intense live performances and an energetic stage presence,
            the band has established itself as one of the leading metalcore acts
            in Central Asia.
          </p>
          <p>
            The current lineup is Ilya on guitar, Maxim on drums, Yaroslav on bass
            and Pavel on vocals. NORVI have shared the stage with Skillet and
            Slaughter to Prevail, and are ready for the next stage.
          </p>
        </div>
      </section>

      <section className="booking" id="contact" aria-labelledby="contact-title">
        <div className="booking-label">
          <p className="eyebrow">Contact information</p>
          <span>02 / BOOKING</span>
        </div>
        <div className="booking-main">
          <h2 id="contact-title">Put NORVI<br />on your lineup.</h2>
          <p>For booking, festival availability, press images, technical rider or any additional materials, contact Ilya directly.</p>
          <a className="button button-primary" href="mailto:eppinger13@gmail.com?subject=NORVI%20booking%20enquiry">eppinger13@gmail.com</a>
        </div>
        <dl className="contact-list">
          <div><dt>Representative</dt><dd>Ilya / NORVI</dd></div>
          <div><dt>Phone</dt><dd><a href="tel:+77089417955">+7 708 941 7955</a></dd></div>
          <div><dt>Instagram</dt><dd><a href="https://www.instagram.com/norv.i/" target="_blank" rel="noreferrer">@norv.i</a></dd></div>
        </dl>
      </section>

      <footer className="site-footer">
        <span>NORVI / Almaty, Kazakhstan</span>
        <span>Modern metalcore / 2026</span>
        <a href="#top">Back to top -&gt;</a>
      </footer>

      {activePhoto ? (
        <div className="lightbox" role="presentation" onClick={() => setActivePhoto(null)}>
          <div className="lightbox-inner" role="dialog" aria-modal="true" aria-label={`${activePhoto.label} photo`} onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={() => setActivePhoto(null)} aria-label="Close photo">X</button>
            <img src={activePhoto.src} alt={activePhoto.alt} />
            <span>{activePhoto.label} / NORVI live</span>
          </div>
        </div>
      ) : null}
    </main>
  );
}

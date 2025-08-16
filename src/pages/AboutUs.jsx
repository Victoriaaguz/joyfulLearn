
import React from "react"

export default function AboutUs() {
    const gallery = [
    "/img/circleTime.jpg",
    "/img/dressUp.JPEG",
    "/img/glueingShapes.JPEG",
    "/img/reading.JPEG"
    
  ];
    return (
         <main id="AboutUs" className="about cc-wrap" role="main" aria-labelledby="our-story-heading">
      <header className="cc-hero">
        <h1 id="our-story-heading" className="cc-title">Our Story</h1>
      </header>

      <section className="cc-prose" aria-label="About Caterpillar Cottage">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi accusamus voluptas
          itaque sapiente minima earum ab quibusdam labore recusandae error corrupti autem
          molestias in aliquam placeat praesentium illum dolores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium libero vel
          placeat beatae, cum in distinctio, nisi provident doloribus sint commodi consequatur
          autem. Laboriosam sapiente possimus laborum.
        </p>
      </section>

      <figure className="cc-quote" aria-label="Parent testimonial">
        <blockquote>
          <p>
            “Such a gem of a preschool. This is a warm, nurturing and thoughtful preschool that
            promotes empathy, communication and child-led discovery.”
          </p>
        </blockquote>
        <figcaption>— Caterpillar Parent</figcaption>
      </figure>

      <section className="cc-gallery" aria-label="Photo gallery">
        {gallery.map((src, i) => (
          <div className="cc-thumb" key={src + i}>
            {/* important: object-fit to keep square crop similar to the reference */}
            <img loading="lazy" src={src} alt="Preschool life" />
          </div>
        ))}
      </section>
    </main>
  );
}

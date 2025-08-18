
import React from "react";

export default function Teach() {
  return (
    <main id="Teach" className="philosophy cc-wrap" role="main" aria-labelledby="philosophy-heading">
      <header className="cc-hero">
        <h1 id="philosophy-heading" className="cc-title">Our Philosophy</h1>
      </header>

      <section className="cc-prose">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium dicta,
          adipisci, consequatur eaque inventore saepe consequuntur recusandae omnis ipsum nemo
          vel molestiae est rem. Replace this with your real philosophy copy.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam velit optio
          maiores natus, obcaecati illo deleniti modi consequuntur necessitatibus adipisci.
        </p>
      </section>

      <section className="ph-section" aria-label="Core beliefs">
        <h2 className="ph-h2">Core Beliefs</h2>
        <ul className="ph-list">
          <li>Play-based, child-led exploration builds confidence and curiosity.</li>
          <li>Emergent curriculum follows children’s interests and questions.</li>
          <li>Social–emotional learning and communication are foundational.</li>
          <li>Nature, open-ended materials, and community enrich every day.</li>
        </ul>
      </section>

      <figure className="cc-quote" aria-label="Philosophy quote">
        <blockquote>
          <p>
            “Children learn best through joyful play, gentle guidance, and meaningful relationships.”
          </p>
        </blockquote>
        <figcaption>— School Philosophy</figcaption>
      </figure>

      <section className="ph-cards" aria-label="How this looks day-to-day">
        <article className="ph-card">
          <h3>Play-Based Learning</h3>
          <p>
            Invitations to play, open-ended art, and dramatic play create authentic opportunities
            for problem-solving and collaboration.
          </p>
        </article>
        <article className="ph-card">
          <h3>Emergent Curriculum</h3>
          <p>
            Teachers observe, document, and extend children’s interests into projects that weave
            in early literacy, math, and science.
          </p>
        </article>
        <article className="ph-card">
          <h3>Outdoor & Nature</h3>
          <p>
            Daily outdoor time, gardening, and nature materials nurture care for the environment
            and the whole child.
          </p>
        </article>
      </section>
      {/* === Add below, before </main> === */}

<section id="curriculum" className="ph-section" aria-label="Curriculum">
  <h2 className="ph-h2">Curriculum</h2>
  <ul className="ph-list">
    <li><strong>Daily rhythm:</strong> arrival & connection, free play (indoor/outdoor), small-group invitations, circle, snack, story, rest.</li>
    <li><strong>Centers:</strong> dramatic play, blocks/building, art & process media, sensory, early literacy, math, science & nature.</li>
    <li><strong>Teacher role:</strong> observe, document, scaffold, and extend interests into emergent projects.</li>
    <li><strong>SEL:</strong> emotion coaching, problem-solving, and community agreements.</li>
  </ul>
</section>

<section id="more" className="ph-section" aria-label="More to read">
  <h2 className="ph-h2">More to read</h2>
  <ul className="ph-list">
    <li><a href="#" rel="noreferrer">Empathy & Relationships (placeholder)</a></li>
    <li><a href="#" rel="noreferrer">Book Selection Philosophy (placeholder)</a></li>
    <li><a href="#" rel="noreferrer">Child-Led Play (placeholder)</a></li>
    <li><a href="#" rel="noreferrer">Kindergarten Readiness (placeholder)</a></li>
  </ul>
</section>

    </main>
  );
}

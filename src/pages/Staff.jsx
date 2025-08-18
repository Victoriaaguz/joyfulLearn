// src/Staff.jsx
import React from "react";

const TEAM = [
  {
    name: "Leora Riley",
    role: "Director & Lead Teacher",
    photo: "./img/In_class.JPEG",     // put an image in public/img/staff/
    bio: [
      "Leora is a play-based, child-centered educator who focuses on connection, curiosity, and emergent curriculum.",
      "She partners closely with families and coaches problem-solving and self-regulation through warm guidance."
    ],
    credentials: [
      "B.A. (Early Childhood/Education)",
      "CPR/First Aid Certified",
      "Mandated Reporter & Health/Safety Trainings",
      "Background/Fingerprint Cleared"
    ]
  },
  {
    name: "Assistant Teacher One",
    role: "Assistant Teacher",
    photo: "/img/staff/assistant-1.jpg",
    bio: [
      "Loves outdoor learning, nature walks, and sensory play.",
    ],
    credentials: ["ECE units in progress", "CPR/First Aid Certified"]
  },
  {
    name: "Assistant Teacher Two",
    role: "Assistant Teacher",
    photo: "/img/staff/assistant-2.jpg",
    bio: [
      "Focuses on language-rich play, storytelling, and music time.",
    ],
    credentials: ["12+ ECE units", "Mandated Reporter Training"]
  }
];

export default function Staff() {
  return (
    <main id="Staff" className="cc-wrap" role="main" aria-labelledby="staff-heading">
      <header className="cc-hero">
        <h1 id="staff-heading" className="cc-title">Meet the Staff</h1>
      </header>

      <section className="cc-prose">
        <p>
          Our teachers are warm, reflective caregivers who build strong relationships,
          observe children’s interests, and scaffold learning through play.
        </p>
      </section>

      <section className="ph-section" aria-label="Our Team">
        <h2 className="ph-h2">Our Team</h2>

        <div className="staff-grid">
          {TEAM.map((p) => (
            <article key={p.name} className="staff-card">
              <div className="staff-media">
                <img className="staff-photo" src={p.photo} alt={`${p.name}, ${p.role}`} />
              </div>

              <div className="staff-content">
                <h3 className="staff-name">{p.name}</h3>
                <p className="staff-role">{p.role}</p>

                {p.bio.map((para, i) => (
                  <p key={i} className="staff-bio">{para}</p>
                ))}

                <h4 className="staff-subhead">Credentials & Training</h4>
                <ul className="ph-list staff-cred">
                  {p.credentials.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

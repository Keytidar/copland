import React from 'react';
const Protocol = () => {
  return (
    <>
      <div className="blur-filter d-flex gap-5 flex-column">
        <div
          className="bg-lain d-flex text-center border-bottom border-info align-items-center"
          style={{ width: '100%', height: '20rem' }}
        >
          <div className="container-xl d-flex flex-column">
            <h1 className="text-info fw-bold">The Lain Phenomenon</h1>
            <h2 className="text-light">
              {' '}
              Philosophical Deconstruction of Consciousness, Reality, and the
              Digital Self in Serial Experiments Lain
            </h2>
          </div>
        </div>
        <div className="container-xl">
          <p className="fs-4 border-bottom mb-5">
            Serial Experiments Lain (1998) is not merely an anime but a profound
            philosophical treatise disguised as cyberpunk horror. Through its
            narrative, which centers on the unconscious "experiments" conducted
            on and by its protagonist, Lain Iwakura, the series interrogates
            foundational questions of identity, consciousness, and the nature of
            reality in an increasingly digital age. This analysis will
            deconstruct these experiments by framing them within the
            philosophies of Descartes, Heidegger, Baudrillard, and Nietzsche,
            arguing that Lain’s journey represents the ultimate postmodern
            crisis of the self: the disintegration of the Cartesian subject into
            a networked, distributed consciousness.
          </p>
          <div className="d-flex justify-content-between align-items-start gap-3">
            <div>
              <h2>The Digital Self's Dilemma</h2>
              <p className="fs-4">
                At its core, Serial Experiments Lain presents a terrifying and
                prescient paradox: the very technology that promises ultimate
                connection and the eradication of human loneliness
                simultaneously threatens to dissolve the individual self
                entirely. The Wired, a global network of consciousness and
                information, offers a godlike power to reshape reality and
                memory, but this power comes at the existential cost of
                authenticity, asking whether a connection that obliterates the
                boundaries of the individual is a transcendence or a form of
                annihilation. The series forces its protagonist—and by
                extension, the viewer—to confront the haunting question of what
                remains of "you" when your mind, memories, and very presence can
                be copied, edited, and distributed across a digital realm that
                is increasingly indistinguishable from the real world.
              </p>
            </div>
            <div className="card p-0" style={{ minWidth: '25rem' }}>
              <img
                src="/CopLandOS/assets/lain-room.png"
                className="card-img-top"
              />
              <div className="card-body">
                <p className="card-text fs-5">
                  Lain, isolated in her room, surrounded by a tangled web of
                  wires and the glow of multiple monitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Protocol;

import type { Project } from "@/types/project";

interface ContentProps {
  project: Project;
}

const Content = ({ project }: ContentProps) => {
  const content = project.content;

  if (!content) return null;

  const intro = content.intro;
  const highlights = content.highlights;
  const gallery = content.gallery;

  return (
    <main className="px-6 pb-28">
      <div className="mx-auto max-w-6xl">
        <section className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
          <div className="rounded-md bg-white p-8 shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-primary/40">
              Le projet
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-primary">
              {intro?.title}
            </h2>
          </div>

          <div className="rounded-md bg-white p-8 shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
            <p className="max-w-2xl text-lg leading-8 text-primary/65">
              {intro?.body?.[0]}
            </p>

            {project.links?.url && (
              <a
                href={project.links.url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#00F5A0] px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,245,160,0.35)]"
              >
                {project.links.name}
                <span>→</span>
              </a>
            )}
          </div>
        </section>

        {highlights?.list && (
          <section className="mt-6 grid gap-6 md:grid-cols-3">
            {highlights.list.slice(0, 3).map((item, index) => (
              <article
                key={item}
                className="group min-h-[220px] rounded-md bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition hover:-translate-y-1"
              >
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#00F5A0] text-lg font-semibold text-primary">
                  {index + 1}
                </div>

                <p className="text-xl font-semibold leading-7 text-primary">
                  {item}
                </p>
              </article>
            ))}
          </section>
        )}

        {project.stack && project.stack.length > 0 && (
          <section className="mt-6 rounded-md bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-primary/65"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {gallery?.gallery && gallery.gallery.length > 0 && (
          <section className="mt-20">
            <div className="mb-10">
              <span className="inline-flex rounded-full bg-[#00F5A0] px-6 py-2 text-sm font-semibold text-primary">
                Interface
              </span>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
                Quelques écrans du projet
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {gallery.gallery.map((img, index) => (
                <figure
                  key={img}
                  className={`overflow-hidden rounded-md bg-white p-4 shadow-[0_18px_45px_rgba(0,0,0,0.12)] ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full max-h-[700px] w-full rounded-sm object-cover"
                  />
                </figure>
              ))}
            </div>
          </section>
        )}

        {project.links?.url && (
          <section className="mt-20 rounded-md bg-white p-8 shadow-[0_18px_45px_rgba(0,0,0,0.12)] md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary/40">
                  Découvrir
                </p>

                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary md:text-4xl">
                  Voir le projet en ligne
                </h2>
              </div>

              <a
                href={project.links.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#00F5A0] px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,245,160,0.35)]"
              >
                {project.links.name}
                <span>→</span>
              </a>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Content;
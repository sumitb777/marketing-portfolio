export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Work</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Meta Ads Lead Campaign"
            desc="Lead generation campaign using interest targeting and creatives."
          />
          <ProjectCard
            title="SEO Optimization"
            desc="Improved website ranking through on-page SEO."
          />
          <ProjectCard
            title="Google Ads Lead Campaign"
            desc="Lead generation campaign using Google Search Page"
          />
              <ProjectCard
            title="Design Ad creative useing Canva "
            desc="Ad Creatives, Reels, YT Video editing"
          />     <ProjectCard
            title="Social Media Account Handling "
            desc="Facebook, Instagram , Youtube, linkden"
          />
             <ProjectCard
            title="Website Design Useing Wordpress "
            desc="creating Header , Content Editing , Footer Design"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-[#111827] border border-gray-700 hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

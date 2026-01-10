const skills = [
  "📱 Social Media Management",
  "🎯 Meta Ads (FB & Instagram)",
  "🔍 Google Ads",
  "📈 SEO (On-page & Basics)",
  "🎨 Canva Design",
  "📊 Website Design with Wordpress",
];

export default function Info() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">SKILLS</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[#111827] border border-gray-700 hover:-translate-y-1 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

                        
                   
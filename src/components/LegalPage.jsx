const LegalPage = ({ title, updated, intro, sections }) => (
  <section className="bg-gradient-to-br from-[#f4f9f9] to-[#e8f0f2] pt-32 pb-20 px-5 font-['Montserrat']">
    <title>{`${title} | RanCoTech`}</title>
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-[0_8px_40px_rgba(13,95,83,0.08)] border border-[#E8F4F1] p-8 sm:p-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#0D5F53] mb-2">{title}</h1>
      <p className="text-xs text-gray-400 uppercase tracking-wide mb-8">Last updated: {updated}</p>
      <p className="text-[#425E57] leading-relaxed mb-8">{intro}</p>

      <div className="space-y-8">
        {sections.map(({ heading, body }) => (
          <div key={heading}>
            <h2 className="text-lg font-bold text-[#0D5F53] mb-3">{heading}</h2>
            {Array.isArray(body) ? (
              <ul className="space-y-2">
                {body.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#425E57] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6F00] flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-[#425E57] leading-relaxed">{body}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LegalPage;

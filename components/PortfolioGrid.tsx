
import React from 'react';

const IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDSLyv2tXUKN3R4u4BJMO4lLIXzsiYK9-pyA2K_IgPIwYyTZRKaTusmmDvXH1LGLh4X1at_S7sNQFIcXjE_lqBoRsrbl2vJxtBG8xio0QUaGw8_vrq-kDYPG0VUvsxL2eU1efjvm652NgkygKt3FpyAst5ujWT1vy-3SIW7nTb_-s17i-klWukbegn22xnVELJOIukF3N0ltWT0wzTQp3QDAEkqX6Coz14iYjS4-Dgqj6tpKcMdvF5mzy-0hnt4v4hEyuCe2SdqyNw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBgUeYg1PUWJeynrdlnnC1jN3yNphf-I9mG456xCC8hfB1ZRxuLEcjgzmLtsGLlyKxzG_p0d923pTnllokJjtkBlBIeCtjToyh5pUgwIA3XIW21i7SJLT2ugWxgVeSxyujaQxuacT_-GmuFH9gMUw0XpH88kTzxPgviLb6Q6buEgc7IoylLgIH7uCubmLCpKWWGcIsvzjEhPPm_x-fH-fwISSHHSY6R7zNoea6abI4vR7QXmCbyqvFjMOMAzDqXjIu3lseY85yhQYI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDGoMpf0N3WMdeIJnhXtWforxDnwofaBSylMXJZP3-UrMkOym12TwnXZEOrqH3Zu0W4rUjlCeSs-1OCajv34moVx5YKXY0hE-ukRoEt0MxdGuPPjRiZWM-M77E1VRKU_9por3d83YY9EqmgJd7SNVF9FBFU2S-lC7PZi2FjlWvC08Bvq496fEUUS7wtkQxZEdW5WYYpGO7ormy9uK87Y2GoN98jWOlGPAAuzdQ4_kkV7VvvjidQIJGrAJADujgKoDiZWq0d1-PQdQs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDV-s_eWb98m1E9Xq4psdK0E6RI3_DxqNI4F_QiNwl7NcRyDkdMBX9hrVn_TzBKllZNn0-YZtkdgQ9D2mXfumijL_OjWBD8nTcGIyU7Wq2bTYxqjpBTBWtZmbAbOYHEh0zNeMPN4YaIlamDL7yKDgI1thbMt1tEQKfNIQFgH0RfmINnSvzncFPie0sIk_xzEJ8AKi6piQnhimlH6SfVSDxB3bQywj-akvCGAj1AWmwZM95KfyFrdrqUSj6ITNiwse8GM3Tt7xY9rEA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCX2zpPXjDM6B9cvtj7HRRWS0-K7Yd1CBiFp4p66WnD7pOAwZbA30jF8swcM4mjGDqylzUHNyGUWORqibrfPzQDcYtTtlSEPEVXFQm9-ULnSC5mu3oIWLAP56M-vcPndfB-VghmmxQedDuvL6gtguURlexBIo-ycLydrC3rJ3IkVwtpaiE3VkkDfpXmMWsqikaQnf1cvGktE6oCFWDiCKsja43_UYA5t6hpdjNAeyB4Nr4gRSYwmY3sbAFm6G0VDZ35nZs7FRZqg4M",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXbGGJkZW99N1f7n1jbVbCBu3gXfwPhKvxLhCAXJ6K5oFMY_92V2qM-agozQADFiAiZQUdIxFwQjjMSbQ0hF6siumX5pa79LEadqt7FL5noYYwhUu6KUOD-6bEdiC-8yZaKmb4ZcTRcQkxkFvvp1HRYT8cG42WPsOknHYfCHC2RiUwWuz_GAfwD7qOGK8jydhGFIMtxlzfCn1LdlC1rToHrc88YNdEgVHF6iikutAqBDKpmRkJ3DdzFEHA8Mu_TDJaqxPOuonN0wI"
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="columns-2 gap-3 space-y-3">
      {IMAGES.map((src, idx) => (
        <div 
          key={idx} 
          className="break-inside-avoid overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800"
        >
          <img 
            alt={`Portfolio work ${idx + 1}`} 
            className="w-full h-auto object-cover hover:scale-110 transition-transform duration-1000 cursor-pointer" 
            src={src} 
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;

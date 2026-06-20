// Industry options: SaaS, Finance, Healthcare, Education, E-commerce, Restaurant, Personal Brand
// Style options: Modern, Premium, Minimal, Playful, Bold

export const industries = ["SaaS", "Finance", "Healthcare", "Education", "E-commerce", "Restaurant", "Personal Brand"];
export const styles = ["Modern", "Premium", "Minimal", "Playful", "Bold"];

// Format:
// { "Industry": { "Style": [ { primary, secondary, accent, background, text } ] } }

export const palettes = {
  "SaaS": {
    "Modern": [
      { primary: "#2563EB", secondary: "#1E40AF", accent: "#00F0FF", background: "#FFFFFF", text: "#0F172A" },
      { primary: "#6366F1", secondary: "#4338CA", accent: "#F43F5E", background: "#F8FAFC", text: "#1E293B" },
      { primary: "#8B5CF6", secondary: "#6D28D9", accent: "#10B981", background: "#FFFFFF", text: "#111827" }
    ],
    "Premium": [
      { primary: "#0F172A", secondary: "#334155", accent: "#00F0FF", background: "#FFFFFF", text: "#020617" },
      { primary: "#1E293B", secondary: "#475569", accent: "#38BDF8", background: "#F8FAFC", text: "#0F172A" }
    ],
    "Minimal": [
      { primary: "#18181B", secondary: "#52525B", accent: "#00F0FF", background: "#FAFAFA", text: "#09090B" },
      { primary: "#3F3F46", secondary: "#A1A1AA", accent: "#14B8A6", background: "#FFFFFF", text: "#18181B" }
    ],
    "Playful": [
      { primary: "#F59E0B", secondary: "#D97706", accent: "#8B5CF6", background: "#FFFBEB", text: "#451A03" },
      { primary: "#EC4899", secondary: "#BE185D", accent: "#FCD34D", background: "#FDF2F8", text: "#831843" }
    ],
    "Bold": [
      { primary: "#E11D48", secondary: "#9F1239", accent: "#00F0FF", background: "#FFF1F2", text: "#4C0519" },
      { primary: "#EA580C", secondary: "#9A3412", accent: "#2563EB", background: "#FFEDD5", text: "#431407" }
    ]
  },
  "Finance": {
    "Modern": [
      { primary: "#059669", secondary: "#047857", accent: "#10B981", background: "#FFFFFF", text: "#064E3B" },
      { primary: "#2563EB", secondary: "#1D4ED8", accent: "#3B82F6", background: "#F8FAFC", text: "#1E3A8A" }
    ],
    "Premium": [
      { primary: "#111827", secondary: "#374151", accent: "#D4AF37", background: "#FFFFFF", text: "#000000" },
      { primary: "#0F172A", secondary: "#1E293B", accent: "#38BDF8", background: "#F8FAFC", text: "#020617" }
    ],
    "Minimal": [
      { primary: "#000000", secondary: "#4B5563", accent: "#10B981", background: "#FFFFFF", text: "#111827" }
    ],
    "Playful": [
      { primary: "#10B981", secondary: "#059669", accent: "#F59E0B", background: "#F0FDF4", text: "#064E3B" }
    ],
    "Bold": [
      { primary: "#1D4ED8", secondary: "#1E3A8A", accent: "#F59E0B", background: "#FFFFFF", text: "#172554" }
    ]
  },
  "Healthcare": {
    "Modern": [
      { primary: "#0EA5E9", secondary: "#0284C7", accent: "#10B981", background: "#FFFFFF", text: "#0C4A6E" }
    ],
    "Premium": [
      { primary: "#0369A1", secondary: "#075985", accent: "#38BDF8", background: "#F0F9FF", text: "#082F49" }
    ],
    "Minimal": [
      { primary: "#0284C7", secondary: "#38BDF8", accent: "#0EA5E9", background: "#FFFFFF", text: "#0C4A6E" }
    ],
    "Playful": [
      { primary: "#14B8A6", secondary: "#0D9488", accent: "#F43F5E", background: "#F0FDFA", text: "#134E4A" }
    ],
    "Bold": [
      { primary: "#0F766E", secondary: "#115E59", accent: "#00F0FF", background: "#FFFFFF", text: "#134E4A" }
    ]
  },
  "Education": {
    "Modern": [
      { primary: "#3B82F6", secondary: "#2563EB", accent: "#F59E0B", background: "#FFFFFF", text: "#1E3A8A" }
    ],
    "Premium": [
      { primary: "#4338CA", secondary: "#3730A3", accent: "#FCD34D", background: "#F8FAFC", text: "#312E81" }
    ],
    "Minimal": [
      { primary: "#1E293B", secondary: "#64748B", accent: "#3B82F6", background: "#FFFFFF", text: "#0F172A" }
    ],
    "Playful": [
      { primary: "#F43F5E", secondary: "#E11D48", accent: "#FBBF24", background: "#FFF1F2", text: "#881337" }
    ],
    "Bold": [
      { primary: "#6D28D9", secondary: "#5B21B6", accent: "#F97316", background: "#FFFFFF", text: "#4C1D95" }
    ]
  },
  "E-commerce": {
    "Modern": [
      { primary: "#000000", secondary: "#333333", accent: "#00F0FF", background: "#FFFFFF", text: "#111827" }
    ],
    "Premium": [
      { primary: "#18181B", secondary: "#27272A", accent: "#D4AF37", background: "#FAFAFA", text: "#09090B" }
    ],
    "Minimal": [
      { primary: "#09090B", secondary: "#71717A", accent: "#000000", background: "#FFFFFF", text: "#27272A" }
    ],
    "Playful": [
      { primary: "#EC4899", secondary: "#DB2777", accent: "#8B5CF6", background: "#FDF2F8", text: "#831843" }
    ],
    "Bold": [
      { primary: "#DC2626", secondary: "#B91C1C", accent: "#000000", background: "#FFFFFF", text: "#7F1D1D" }
    ]
  },
  "Restaurant": {
    "Modern": [
      { primary: "#EA580C", secondary: "#C2410C", accent: "#16A34A", background: "#FFF7ED", text: "#7C2D12" }
    ],
    "Premium": [
      { primary: "#7F1D1D", secondary: "#991B1B", accent: "#D4AF37", background: "#FEF2F2", text: "#450A0A" }
    ],
    "Minimal": [
      { primary: "#1F2937", secondary: "#4B5563", accent: "#EA580C", background: "#FFFFFF", text: "#111827" }
    ],
    "Playful": [
      { primary: "#F97316", secondary: "#EA580C", accent: "#FACC15", background: "#FFF7ED", text: "#7C2D12" }
    ],
    "Bold": [
      { primary: "#B91C1C", secondary: "#991B1B", accent: "#F59E0B", background: "#FFFFFF", text: "#450A0A" }
    ]
  },
  "Personal Brand": {
    "Modern": [
      { primary: "#2563EB", secondary: "#1D4ED8", accent: "#00F0FF", background: "#FFFFFF", text: "#1E293B" }
    ],
    "Premium": [
      { primary: "#111827", secondary: "#374151", accent: "#00F0FF", background: "#F3F4F6", text: "#000000" }
    ],
    "Minimal": [
      { primary: "#27272A", secondary: "#52525B", accent: "#000000", background: "#FFFFFF", text: "#18181B" }
    ],
    "Playful": [
      { primary: "#8B5CF6", secondary: "#7C3AED", accent: "#EC4899", background: "#F5F3FF", text: "#4C1D95" }
    ],
    "Bold": [
      { primary: "#000000", secondary: "#18181B", accent: "#00F0FF", background: "#FFFFFF", text: "#000000" }
    ]
  }
};

// Fill in missing with fallbacks if needed
Object.keys(palettes).forEach(ind => {
  styles.forEach(st => {
    if (!palettes[ind][st]) palettes[ind][st] = palettes["SaaS"]["Modern"];
    if (palettes[ind][st].length === 1) {
      // Duplicate and tweak slightly to provide at least 2 variations for shuffle
      const copy = { ...palettes[ind][st][0] };
      // Reverse primary and secondary
      const tweaked = { ...copy, primary: copy.secondary, secondary: copy.primary };
      palettes[ind][st].push(tweaked);
    }
  });
});

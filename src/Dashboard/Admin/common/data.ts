export const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "zh", label: "Chinese" },
  { code: "zh-CN", label: "Simplified Chinese" },
  { code: "ko", label: "Korean" },
  { code: "ja", label: "Japanese" },
];

export const languageItems = languages.map((lang) => ({
  label: `${lang.label} (${lang.code})`,
  onClick: () => {},
}));

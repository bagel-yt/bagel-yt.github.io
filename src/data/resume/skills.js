const skills = [
  {
    title: 'Chinese-Mandarin',
    competency: 5,
    category: ['Human Languages'],
  },
  {
    title: 'Chinese-长沙话',
    competency: 5,
    category: ['Human Languages'],
  },
  {
    title: 'Chinese-Cantonese',
    competency: 3,
    category: ['Human Languages'],
  },
  {
    title: 'French',
    competency: 2,
    category: ['Human Languages'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Scientific & Strategic Analysis'],
  },
  {
    title: 'Git',
    competency: 2,
    category: ['Scientific & Strategic Analysis'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Scientific & Strategic Analysis'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Scientific & Strategic Analysis'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Scientific & Strategic Analysis'],
  },
  {
    title: 'Stem Cell Tehcnology',
    competency: 5,
    category: ['Molecular and Cell Biology'],
  },
  {
    title: 'Organoids Technology',
    competency: 5,
    category: ['Molecular and Cell Biology'],
  },
  {
    title: 'Cell & Tissue Imaging',
    competency: 4,
    category: ['Molecular and Cell Biology'],
  },
  {
    title: 'Cell Engineering (CRISPR/Cas, transfection)',
    competency: 5,
    category: ['Molecular and Cell Biology'],
  },
  {
    title: 'DNA and RNA Sequencing Technologies',
    competency: 4,
    category: ['Molecular and Cell Biology'],
  },
  {
    title: 'Protein quantification (Western Blotting, ELISA, BCA)',
    competency: 4,
    category: ['Molecular and Cell Biology'],
  },
  {
    title: 'Cell Sorting (Flow Cytometry, MACS)',
    competency: 4,
    category: ['Molecular and Cell Biology'],
  },
  {
    title: 'Transcriptomics',
    competency: 3,
    category: ['Computational Biology'],
  },
  {
    title: 'Epigenomics',
    competency: 2,
    category: ['Computational Biology'],
  },
  {
    title: 'Cross-species study',
    competency: 2,
    category: ['Computational Biology'],
  },
  {
    title: 'Certificate of Physician Credentials and Certificate of Medical Licensure P. R. China',
    competency: 5,
    category: ['Clinical Practice'],
  },
  {
    title: 'Project Planning',
    competency: 5,
    category: ['Project Management'],
  },
  {
    title: 'Milestone Tracking',
    competency: 5,
    category: ['Project Management'],
  },
  {
    title: 'Interdisciplinary Coordination',
    competency: 5,
    category: ['Project Management'],
  },
  {
    title: 'Workflow Standardization and Automation',
    competency: 3,
    category: ['Scientific & Strategic Analysis'],
  },
  {
    title: 'Hypothesis-driven Analysis,',
    competency: 5,
    category: ['Scientific & Strategic Analysis'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#DC267F',
  '#648FFF',
  '#FE6100',
  '#785EF0',
  '#FFB000',
  '#767676',
];

// Define the custom order for the categories
const desiredOrder = [
  'Project Management',
  'Computational Biology',
  'Scientific & Strategic Analysis',
  'Molecular and Cell Biology',
  'Clinical Practice',
  'Human Languages',
];

// Generate categories based on the custom order
const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort((a, b) => {
    // Custom sorting based on desiredOrder array
    const indexA = desiredOrder.indexOf(a);
    const indexB = desiredOrder.indexOf(b);

    // Categories in desiredOrder come first, in the specified order
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    // Categories in desiredOrder come before those not listed
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    // Categories not in the desiredOrder array will be sorted alphabetically
    return a.localeCompare(b);
  })
  .map((category, index) => ({
    name: category,
    color: colors[index], // Apply colors in the custom order
  }));

export { categories, skills };

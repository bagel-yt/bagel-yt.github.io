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
    category: ['Data Science'],
  },
  {
    title: 'Git',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization (ggplot2, matplotlib)',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Stem Cell Tehcnology',
    competency: 5,
    category: ['Cell Biology'],
  },
  {
    title: 'Organoid Technology',
    competency: 5,
    category: ['Cell Biology'],
  },
  {
    title: 'Cell & Tissue Imaging',
    competency: 4,
    category: ['Cell Biology'],
  },
  {
    title: 'Cell Engineering (CRISPR/Cas, transfection)',
    competency: 5,
    category: ['Cell Biology'],
  },
  {
    title: 'DNA and RNA Sequencing Technologies',
    competency: 4,
    category: ['Molecular Biology'],
  },
  {
    title: 'Protein quantification (Western Blotting, ELISA, BCA)',
    competency: 4,
    category: ['Molecular Biology'],
  },
  {
    title: 'Cell Sorting (Flow Cytometry, MACS)',
    competency: 4,
    category: ['Molecular Biology'],
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
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#DC267F',
  '#648FFF',
  '#FE6100',
  '#785EF0',
  '#FFB000',
  '#424242',
  '#767676',
];

// Define the custom order for the categories
const desiredOrder = [
  'Data Science',
  'Computational Biology',
  'Languages',
  'Molecular Biology',
  'Cell Biology',
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

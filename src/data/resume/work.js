/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the organization
 * @property {string} position - Position title
 * @property {string} institute - host institute
 * @property {string} url - Organization website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    position: 'Visiting Researcher 🧑🏻‍⚕️',
    institutes: [
      { name: 'School of Biosciences, University of Surrey', url: 'https://www.surrey.ac.uk/school-biosciences' },
    ],
    startDate: '2017-09-01',
    endDate: '2020-06-30',
    summary: '',
    highlights: [
      'Curated analysis-ready cancer genomics datasets (Whole Genome Sequencing, Copy Number Variations).',
      'Benchmarked cancer phylogeny tools to inform method selection across datasets.',
      'Built reproducible command-line workflows for data processing and evaluation.',
      'Delivered concise analytical summaries and visual outputs for interpretation and comparison.',
    ],
  },
  {
    position: 'FRIA (Fund For Research Training in Industry AND Agriculture) Doctoral Fellow 🧑🏻‍🔬',
    institutes: [
      { name: 'Center for Diabetes Research, ULB', url: 'https://www.ucdr.be' },
      { name: 'F.R.S.-FNRS', url: 'https://www.frs-fnrs.be/en/' },
    ],
    startDate: '2020-10-01',
    endDate: '2025-09-30',
    summary: '',
    highlights: [
      'Leveraged 10+ clinical and omics resources in defining disease-driven genetic variants and cellular states.',
      'Coordinated the development and validation of 8 stem-cell and organoid disease models, integrating clinical data, cellular functional assays, and transcriptomics into reusable translational platforms.',
      'Spearheaded investigations on how defective insulin biosynthesis, ER-Golgi stress, and gluco-lipotoxicity contribute to diabetes.',
      'Assembled and coordinated multiple collaborative teams across laboratories and institutions, aligning data sharing, standardized protocols, and joint reporting into shared project deliverables.',
      'Delivered multiple completed research projects with defined timelines and documented outputs.',
      'Achieved 7 manuscripts elucidating physiological organ development and disease mechanisms in diabetes.',
    ],
  },
  {
    position: 'Graduate Research Fellow 🧑🏻‍⚕️',
    institutes: [
      { name: 'National Key Lab of Diabetes Immunology, CSU', url: 'https://dmkeylab.csu.edu.cn/' },
    ],
    startDate: '2017-09-01',
    endDate: '2020-06-30',
    summary: '',
    highlights: [
      'Delivered a curated longitudinal dataset from a 1,000-participant diabetes cohort for downstream analysis.',
      'Produced biomarker-based disease stratification results through integrated statistical analyses.',
      'Implemented standardized clinical and data-collection protocols to ensure data consistency and reliability.',
      'Achieved 3 publication highlighting the potential of biomarkers to improve disease classification and prediction.',
    ],
  },

  {
    position: 'Junior Clinical Fellow 🧑🏻‍⚕️',
    institutes: [
      { name: 'The 2nd Xiangya Hospital, CSU', url: 'https://www.xyeyy.com/' },
    ],
    startDate: '2017-09-01',
    endDate: '2020-06-30',
    summary: '',
    highlights: [
      'Supported >300 patients annually through personalized treatment plans integrating lifestyle interventions and pharmacological management.',
      'Partnered with multidisciplinary teams to optimize diabetes care pathways, reducing follow-up delays and improving clinical record systems.',
      'Certified with Physician Credentials and Medical Licensure in P. R. China, qualifying for national medical practice.',
    ],
  },

  {
    position: 'Junior Clinical Fellow 🧑🏻‍⚕️',
    institutes: [
      { name: 'Xiangya Hospital, CSU', url: 'https://xiangya.com.cn/en/' },
      { name: 'The 1st Hospital of Changsha', url: 'http://www.cssdyyy.com/' },
    ],
    startDate: '2015-09-01',
    endDate: '2017-06-30',
    summary: '',
    highlights: [
      'Completed training in Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, etc., as part of a rigorous medical curriculum.',
      'Developed a solid foundation in diagnostics, patient care, and multidisciplinary teamwork, while addressing diverse clinical challenges.',
    ],
  },
];

export default work;

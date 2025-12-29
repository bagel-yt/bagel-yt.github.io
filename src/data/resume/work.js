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
    position: 'Visiting Researcher — Cancer Evolution 🧑🏻‍⚕️',
    institutes: [
      { name: 'School of Biosciences, University of Surrey', url: 'https://www.surrey.ac.uk/school-biosciences' },
    ],
    startDate: '2025-11-01',
    endDate: 'Present',
    summary: 'I work on cancer evolution and copy-number-driven tumour phylogenetics, focusing on how genomic instability shapes tumour history and inference accuracy. My role centres on building reproducible analysis workflows, benchmarking phylogenetic methods across real datasets, and translating complex outputs into interpretable summaries that support methodological comparison and decision-making.',
    highlights: [
    ],
  },
  {
    position: 'FRIA Doctoral Fellow — Translational Diabetes Research 🧑🏻‍🔬',
    institutes: [
      { name: 'Center for Diabetes Research, ULB', url: 'https://www.ucdr.be' },
      { name: 'F.R.S.-FNRS', url: 'https://www.frs-fnrs.be/en/' },
    ],
    startDate: '2020-10-01',
    endDate: '2025-09-30',
    summary: 'My research integrated patient-derived genetics, iPSC-derived organoids, functional assays, and transcriptomics to investigate how disrupted insulin biosynthesis, ER–Golgi stress, and metabolic overload contribute to diabetes pathogenesis. Across projects, I coordinated collaborations spanning clinical, experimental, and analytical teams, delivering reusable translational platforms and peer-reviewed outputs.',
    highlights: [
    ],
  },
  {
    position: 'Graduate Research Fellow — Translational Medicine 🧑🏻‍⚕️',
    institutes: [
      { name: 'National Key Lab of Diabetes Immunology, CSU', url: 'https://dmkeylab.csu.edu.cn/' },
    ],
    startDate: '2017-09-01',
    endDate: '2020-06-30',
    summary: 'My research focused on large-scale diabetes cohorts, where I curated longitudinal clinical and biomarker datasets and applied integrated statistical analyses to support disease stratification and biomarker discovery. I also contributed to the standardisation of clinical and data-collection protocols, improving data consistency and downstream analytical reliability across studies.',
    highlights: [
    ],
  },

  {
    position: 'Junior Clinical Fellow — Precision Medicine 🧑🏻‍⚕️',
    institutes: [
      { name: 'The 2nd Xiangya Hospital, CSU', url: 'https://www.xyeyy.com/' },
      { name: 'Xiangya Hospital, CSU', url: 'https://xiangya.com.cn/en/' },
      { name: 'The 1st Hospital of Changsha', url: 'http://www.cssdyyy.com/' },
    ],
    startDate: '2017-09-01',
    endDate: '2020-06-30',
    summary: 'I gained hands-on clinical experience in diabetes and internal medicine, supporting personalised treatment planning for hundreds of patients annually. Working within multidisciplinary care teams, I developed a strong understanding of patient pathways, clinical decision-making, and the practical constraints that shape translational research and precision medicine in real-world healthcare settings.',
    highlights: [
    ],
  },
];

export default work;

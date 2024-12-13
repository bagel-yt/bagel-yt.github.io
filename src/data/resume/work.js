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
    position: 'Doctoral Fellow 🧑🏻‍🔬',
    institute: 'Center for Diabetes Research, ULB',
    url: 'https://www.ucdr.be',
    startDate: '2020-10-01',
    summary: '',
    highlights: [
      'Leveraged 10+ clinical and omics resources in defining disease-driven genetic variants.',
      'Developed and coordinated 6 disease-specific models using iPSC-derived islets.',
      'Spearheaded experimental design to investigate the diabetogenic mechanisms of ER-Golgi stress, autoimmunity, and gluco-lipotoxicity.',
      'Achieved 4 manuscript in preparation elucidating and clarifying the impact of genetic variants on disease pathogenesis.',
    ],
  },
  {
    position: 'Graduate Research Fellow 🧑🏻‍⚕️',
    institute: 'National Key Lab of Diabetes Immunology, CSU',
    url: 'https://dmkeylab.csu.edu.cn/',
    startDate: '2017-09-01',
    endDate: '2020-06-30',
    summary: '',
    highlights: [
      'Conceptualized studies to address gaps in biomarker-based disease classification through clinical observations and literature review.',
      'Oversaw the recruitment and followup of 1000+ participants in 3 clinical trials ensuring standardization of protocols.',
      'Processed comprehensive clinical and laboratory datasets to identify biomarker patterns and validate clinical relevance.',
      'Achieved 3 publication highlighting the potential of biomarkers to improve disease classification and prediction.',
    ],
  },

  {
    position: 'Junior Clinical Fellow 🧑🏻‍⚕️',
    institute: 'Xiangya Hospital, CSU',
    url: 'https://xiangya.com.cn/en/',
    startDate: '2012-09-01',
    endDate: '2017-06-30',
    summary: '',
    highlights: [
      'Completed clinical training in Internal Medicine, Surgery, Pediatrics, Obstetrics and Gynecology as part of a rigorous medical curriculum.',
      'Developed a solid foundation in diagnostics, patient care, and multidisciplinary teamwork, while addressing diverse clinical challenges.',
      'Demonstrated expertise in laboratory methods and diagnostic techniques, ensuring high standards in clinical practice.',
      'Obtained Certificate of Physician Credentials and Certificate of Medical Licensure in P. R. China, qualifying for national medical practice.',
    ],
  },
];

export default work;

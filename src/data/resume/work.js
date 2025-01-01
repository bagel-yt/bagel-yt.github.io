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
    position: 'FRIA Doctoral Fellow 🧑🏻‍🔬',
    institutes: [
      { name: 'Center for Diabetes Research, ULB', url: 'https://www.ucdr.be' },
      { name: 'F.R.S.-FNRS', url: 'https://www.frs-fnrs.be/en/' },
    ],
    startDate: '2020-10-01',
    summary: '',
    highlights: [
      'Leveraged 10+ clinical and omics resources in defining disease-driven genetic variants and cellular states.',
      'Developed and coordinated 6 disease-specific models using iPSC-derived islets.',
      'Spearheaded investigations on how ER-Golgi stress, autoimmunity, and gluco-lipotoxicity contribute to diabetes.',
      'Achieved 4 manuscript in preparation elucidating physiological organ development and disease mechanisms.',
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
      'Conceptualized studies in biomarker-based disease classification through clinical observations and literature review.',
      'Oversaw the recruitment and followup of 1000+ participants in 3 clinical trials ensuring standardization of protocols.',
      'Processed comprehensive clinical and laboratory datasets to identify biomarker patterns and validate clinical relevance.',
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
      'Delivered comprehensive diabetes management with a focus on treatment planning, early diagnosis, and lifestyle counseling.',
      'Demonstrated expertise in laboratory methods and diagnostic techniques, ensuring high standards in clinical practice.',
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

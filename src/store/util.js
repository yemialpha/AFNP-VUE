const state ={
    members: [
        {id: '1', type: 'Fellow Membership ', details: ' Fellow Membership is an expert in the field undertaking laboratory analysis and expert testimony in court for at least 7 years. In addition to research, training and author journal or book on forensics, he or she must have contributed immensely in the establishment of the Association and/or development of forensic enterprise in Nigeria.'},
        {id: '2', type: 'Active Membership', details: ' Active Membership is for an individual actively engaged as an examiner, analyst, practitioner, or supervisor in forensics. The individual may have had professional endeavour or an auxiliary enterprise comprising a significant amount of professional activity'},
        {id: '3', type: 'Associate Membership ', details: 'Associate Membership is for an individual wholly or partially engaged in the forensic sciences who is not qualified for Active Membership; researchers in related fields of forensics such as law, sciences and law enforcement. Associate members are subject to the same rules and are entitled to all rights and privileges of Active membership, with the exception that they are not entitled to hold the office of President or Vice President of the AFPN.'},
        {id: '4', type: 'Student Membership', details: 'Student Membership is for a full-time university or college student majoring in forensic science, law or paralegal studies. Applicants must include a letter or current transcript from their educational institution'},
        {id: '5', type: 'Corperate Membership ', details: ' loading..'},
        {id:'6', type: 'Benefit of Membership ', details: 'Loading...'},
     ],
      training: [
        {id: '1', type: 'Biometrics Information Services', details: ' Loading...Details'},
        {id: '2', type: 'Bloodstain Pattern Identification', details: '  Loading...Details'},
        {id: '3', type: 'Crime Scene Examination', details: '  Loading...Details'},
        {id: '4', type: 'Digital Forensics', details: '  Loading...Details'},
        {id: '5', type: 'Footwear and Tire Track Examination', details: '  Loading...Details'},
        {id:'6', type: 'Forensic Photography and Electronic Digital Imaging', details: '  Loading...Details'},
        {id:'7', type: 'General Forensic Disciplines',  details: '  Loading...Details'},
        {id: '8', type: 'Latent Prints', details: '  Loading...Details'},
        {id: '9', type: '	Latent Print Development', details: '  Loading...Details'},
        {id:'10', type: 'Tenprint Fingerprint ', details: '  Loading...Details'},
        {id:'11', type: 'General Forensic Disciplines',  details: '  Loading...Details'},
     
      ],
      awards:[
        {id: '1', type: 'Award of Excellence', details: '  Loading...Details'},
        {id: '2', type: 'Dedication of Service Award', details: '  Loading...Details'},
        {id: '3', type: 'Distinguished member Award', details: '  Loading...Details'},  
     ]
}

const mutations = {

}
const getters = {
    getmembershiptype() {
        return state.members
    },
    gettraning() {
        return state.training
    },
    getawards() {
        return state.awards
    }
}

const actions = {

}

export default {
    state,
    mutations,
    getters,
    actions
}
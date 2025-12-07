export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  { id: "admissions", label: "Admissions", icon: "📋" },
  { id: "fees", label: "Fees & Scholarships", icon: "💰" },
  { id: "academics", label: "Academics", icon: "📚" },
  { id: "hostel", label: "Hostel & Transport", icon: "🏠" },
  { id: "it", label: "IT Support", icon: "🖥️" },
  { id: "services", label: "Student Services", icon: "🏛️" },
];

export const faqData: FAQ[] = [
  // Admissions
  {
    question: "What programs are offered at University of Peshawar?",
    answer: "University of Peshawar offers Bachelor's, Master's, MPhil, and PhD programs in Arts, Science, Commerce, Law, Pharmacy, Islamic Studies, and more.",
    category: "admissions",
  },
  {
    question: "What are the eligibility criteria for admission?",
    answer: "Eligibility depends on the program: Bachelor's requires HSSC/FSc, Master's needs a Bachelor's degree in relevant field. Check the prospectus for specific department requirements.",
    category: "admissions",
  },
  {
    question: "When does the admission process begin?",
    answer: "Admissions typically open in August for fall and January for spring semester. Check the official website for exact dates and deadlines.",
    category: "admissions",
  },
  {
    question: "How do I apply for admission?",
    answer: "Apply online through the university's official admission portal. Fill the form, upload documents, pay the fee, and submit before the deadline.",
    category: "admissions",
  },
  {
    question: "Where can I find the admission form?",
    answer: "Visit the official website at uop.edu.pk. Forms are available online through the Admission Portal.",
    category: "admissions",
  },
  {
    question: "Can I take admission to more than one department?",
    answer: "No, you can only be enrolled in one regular program at a time. However, some departments offer diploma or certificate courses alongside regular programs.",
    category: "admissions",
  },
  {
    question: "Can foreign students apply for admission?",
    answer: "Yes, international students can apply. They must submit equivalence certificates from IBCC and follow the HEC foreign student admission guidelines.",
    category: "admissions",
  },
  {
    question: "What documents are required for admission?",
    answer: "Required documents include educational certificates (Matric, FSc/HSSC, Bachelor's), CNIC/Form-B, domicile, passport-size photos, and admission fee challan.",
    category: "admissions",
  },
  
  // Fees & Scholarships
  {
    question: "What is the fee structure for different programs?",
    answer: "Fee varies by department. BS programs range from PKR 15,000-30,000/semester. Master's and MPhil programs have different structures. Check the fee schedule on the university website.",
    category: "fees",
  },
  {
    question: "How can I pay my fee?",
    answer: "Fees can be paid through bank challan at designated banks (HBL, NBP) or through online banking. Keep the receipt for verification.",
    category: "fees",
  },
  {
    question: "Are there any scholarships available?",
    answer: "Yes, multiple scholarships are available including HEC Need-Based, Merit-Based, and departmental scholarships. Apply through the Financial Aid Office.",
    category: "fees",
  },
  {
    question: "How do I apply for a scholarship?",
    answer: "Submit scholarship applications to the Financial Aid Office with income certificates, academic transcripts, and CNIC. Deadlines are announced at semester start.",
    category: "fees",
  },
  {
    question: "Can I get a fee waiver or concession?",
    answer: "Fee waivers are available for deserving students. Submit an application with proof of financial need to the Dean or Director of your department.",
    category: "fees",
  },
  {
    question: "What is the fee refund policy?",
    answer: "Fee refunds are processed within 15 days of written request if submitted before the semester starts. Partial refunds apply after classes begin.",
    category: "fees",
  },
  
  // Academics
  {
    question: "What is the academic calendar?",
    answer: "Fall semester runs August-December, Spring runs January-May. Summer sessions are available for some programs. Check the official calendar for holidays.",
    category: "academics",
  },
  {
    question: "How is the grading system structured?",
    answer: "The university follows CGPA system (4.0 scale). A=4.0, B=3.0, C=2.0, D=1.0, F=0. Minimum CGPA of 2.0 is required to maintain good standing.",
    category: "academics",
  },
  {
    question: "Can I change my department after admission?",
    answer: "Department change is possible within the first semester. Submit an application to the Registrar's Office with valid reasons and approval from both departments.",
    category: "academics",
  },
  {
    question: "How many courses can I register per semester?",
    answer: "Regular students can register for 5-6 courses (15-18 credit hours) per semester. Additional courses require Dean's approval.",
    category: "academics",
  },
  {
    question: "What is the attendance policy?",
    answer: "Minimum 75% attendance is mandatory for each course. Students below 75% are not allowed to sit in final exams.",
    category: "academics",
  },
  {
    question: "How do I repeat a failed course?",
    answer: "Re-register for the course in the next offering. Submit the registration form with fee payment. Both grades appear on transcript but only the better one counts.",
    category: "academics",
  },
  {
    question: "What is the examination system?",
    answer: "Evaluation includes mid-term (30%), assignments/quizzes (20%), and final exam (50%). Some departments may have practical components.",
    category: "academics",
  },
  {
    question: "How do I apply for re-evaluation of my paper?",
    answer: "Submit re-evaluation form within 15 days of result announcement with required fee. Results are communicated within 30 days.",
    category: "academics",
  },
  
  // Hostel & Transport
  {
    question: "How do I apply for hostel accommodation?",
    answer: "Apply through the Provost Office at the beginning of each academic year. Priority is given to out-of-district students. Submit application with admission letter.",
    category: "hostel",
  },
  {
    question: "What are the hostel fee and facilities?",
    answer: "Hostel fee ranges from PKR 8,000-15,000/semester depending on room type. Facilities include mess, Wi-Fi, common room, and 24/7 security.",
    category: "hostel",
  },
  {
    question: "Are there separate hostels for boys and girls?",
    answer: "Yes, separate hostels are available. Girls' hostels are located inside campus with additional security measures and female wardens.",
    category: "hostel",
  },
  {
    question: "What are the hostel rules and regulations?",
    answer: "Rules include strict in-time (10 PM for girls, 11 PM for boys), no guests overnight, no unauthorized appliances, and maintaining discipline.",
    category: "hostel",
  },
  {
    question: "Is university transport available for students?",
    answer: "Yes, point-to-point bus service is available for day scholars. Routes cover major areas of Peshawar. Collect route schedule from Transport Office.",
    category: "hostel",
  },
  {
    question: "How much is the transport fee?",
    answer: "Transport fee is approximately PKR 3,000-5,000/semester depending on the route distance. Pay with semester fee or separately at Transport Office.",
    category: "hostel",
  },
  
  // IT Support
  {
    question: "How do I get my university email account?",
    answer: "University email (@uop.edu.pk) is created after enrollment confirmation. Collect credentials from IT Department with your enrollment slip.",
    category: "it",
  },
  {
    question: "How can I access the student portal?",
    answer: "Access the portal at portal.uop.edu.pk using your registration number as username. Default password is provided at enrollment; change it immediately.",
    category: "it",
  },
  {
    question: "What if I forget my portal password?",
    answer: "Click 'Forgot Password' on the portal login page or visit IT Department with your ID card for manual password reset.",
    category: "it",
  },
  {
    question: "Is Wi-Fi available on campus?",
    answer: "Yes, free Wi-Fi (UOP-WiFi) is available across campus. Connect using your portal credentials. Contact IT for connection issues.",
    category: "it",
  },
  {
    question: "How do I access online library resources?",
    answer: "Access digital library through library.uop.edu.pk using your portal credentials. HEC Digital Library is also accessible on campus network.",
    category: "it",
  },
  {
    question: "Where can I report technical issues?",
    answer: "Report issues to IT Department at IT Building, Ground Floor, or email it.support@uop.edu.pk. Include your registration number and issue details.",
    category: "it",
  },
  
  // Student Services
  {
    question: "Where is the Registrar's Office located?",
    answer: "Registrar's Office is in the Administration Block, near the main gate. Office hours are 8:00 AM - 4:00 PM, Monday to Friday.",
    category: "services",
  },
  {
    question: "How do I get my student ID card?",
    answer: "ID cards are issued from the Student Affairs Office after enrollment confirmation. Bring admission letter, 2 photos, and CNIC copy.",
    category: "services",
  },
  {
    question: "How do I request official transcripts?",
    answer: "Apply at Examination Department with fee challan. Processing takes 7-10 working days. Urgent processing available with additional fee.",
    category: "services",
  },
  {
    question: "How can I get an enrollment certificate?",
    answer: "Request enrollment certificate from Student Affairs Office with your ID. Processing takes 2-3 working days. Fee: PKR 100-200.",
    category: "services",
  },
  {
    question: "What counseling services are available?",
    answer: "Free counseling is available at the Student Counseling Center in the Student Affairs Building. Sessions are confidential. Walk-ins welcome.",
    category: "services",
  },
  {
    question: "How do I join student clubs and societies?",
    answer: "Register for clubs at Student Affairs Office or during Freshmen Week. Active societies include Debating, Drama, Sports, and Cultural clubs.",
    category: "services",
  },
  {
    question: "How do I request a character certificate?",
    answer: "Apply at Student Affairs with ID card copy and fee challan. Requires department head signature. Processing: 3-5 working days.",
    category: "services",
  },
  {
    question: "What healthcare services are available?",
    answer: "University Medical Center provides free basic healthcare. Located near main library. Emergency services and referrals are available.",
    category: "services",
  },
  {
    question: "How do I apply for a migration certificate?",
    answer: "Submit application to Registrar's Office with clearance from all departments, library, and hostels. Processing takes 15-20 working days.",
    category: "services",
  },
  {
    question: "What sports facilities are available?",
    answer: "Facilities include cricket ground, football field, basketball/volleyball courts, gymnasium, and indoor games. Register at Sports Complex for access.",
    category: "services",
  },
];

export const popularQuestions = [
  "How do I apply for admission?",
  "What scholarships are available?",
  "How do I access the student portal?",
  "What is the fee structure?",
  "How do I get my student ID card?",
];

export const welcomeMessage = `Assalam-o-Alaikum! 👋

Welcome to the University of Peshawar FAQ Assistant! I'm here to help you with any questions about:

📋 Admissions & Enrollment
💰 Fees & Scholarships  
📚 Academic Programs
🏠 Hostel & Transport
🖥️ IT Support
🏛️ Student Services

How can I assist you today?`;

import { Worker } from '../types/worker';

export const workers: Worker[] = [
  {
    id: 1,
    name: "สมชาย ใจดี",
    position: "วิศวกร",
    experience: 5,
    location: "กรุงเทพมหานคร",
    skills: ["JavaScript", "React", "Node.js"],
    salary: "50,000 - 70,000 บาท",
    available: true,
    email: "somchai@example.com",
    phone: "02-xxx-xxxx",
    description: "วิศวกรซอฟต์แวร์ที่มีประสบการณ์ในการพัฒนาเว็บแอปพลิเคชันมากกว่า 5 ปี เชี่ยวชาญในการใช้เทคโนโลยีทันสมัย",
    education: [
      "ปริญญาตรี วิศวกรรมคอมพิวเตอร์ จุฬาลงกรณ์มหาวิทยาลัย"
    ],
    certifications: [
      "AWS Certified Developer",
      "Professional Scrum Master I"
    ]
  },
  {
    id: 2,
    name: "สมหญิง รักงาน",
    position: "นักการตลาดดิจิทัล",
    experience: 3,
    location: "เชียงใหม่",
    skills: ["Digital Marketing", "SEO", "Content Strategy"],
    salary: "35,000 - 45,000 บาท",
    available: true,
    email: "somying@example.com",
    phone: "02-xxx-xxxx",
    description: "นักการตลาดดิจิทัลที่มีความเชี่ยวชาญในการวางแผนกลยุทธ์การตลาดออนไลน์และการทำ SEO",
    education: [
      "ปริญญาตรี การตลาด มหาวิทยาลัยเชียงใหม่"
    ],
    certifications: [
      "Google Digital Marketing Certificate",
      "Facebook Blueprint Certification"
    ]
  },
  {
    id: 3,
    name: "วิชัย เทคโนโลยี",
    position: "วิศวกรระบบ",
    experience: 7,
    location: "กรุงเทพมหานคร",
    skills: ["Linux", "AWS", "Docker", "Kubernetes"],
    salary: "80,000 - 100,000 บาท",
    available: false,
    email: "wichai@example.com",
    phone: "02-xxx-xxxx",
    description: "วิศวกรระบบที่มีความเชี่ยวชาญในการออกแบบและดูแลระบบคลาวด์ขนาดใหญ่",
    education: [
      "ปริญญาโท วิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์"
    ],
    certifications: [
      "AWS Solutions Architect Professional",
      "Certified Kubernetes Administrator"
    ]
  },
  {
    id: 4,
    name: "นภา ศิลปะ",
    position: "นักออกแบบ UI/UX",
    experience: 4,
    location: "ภูเก็ต",
    skills: ["Figma", "Adobe XD", "User Research"],
    salary: "45,000 - 60,000 บาท",
    available: true,
    email: "napa@example.com",
    phone: "02-xxx-xxxx",
    description: "นักออกแบบ UI/UX ที่มีความเชี่ยวชาญในการออกแบบประสบการณ์ผู้ใช้และการทำวิจัยผู้ใช้",
    education: [
      "ปริญญาตรี การออกแบบอินเตอร์แอคทีฟ มหาวิทยาลัยศิลปากร"
    ],
    certifications: [
      "Google UX Design Certificate",
      "Interaction Design Foundation UX Certificate"
    ]
  },
  {
    id: 5,
    name: "ธนา การเงิน",
    position: "นักวิเคราะห์การเงิน",
    experience: 6,
    location: "กรุงเทพมหานคร",
    skills: ["Financial Analysis", "Excel", "Power BI"],
    salary: "70,000 - 90,000 บาท",
    available: true,
    email: "thana@example.com",
    phone: "02-xxx-xxxx",
    description: "นักวิเคราะห์การเงินที่มีประสบการณ์ในการวิเคราะห์ข้อมูลทางการเงินและการทำรายงาน",
    education: [
      "ปริญญาโท บริหารธุรกิจ จุฬาลงกรณ์มหาวิทยาลัย"
    ],
    certifications: [
      "CFA Level 2",
      "Financial Risk Manager (FRM)"
    ]
  },
  {
    id: 6,
    name: "พิมพ์ใจ รักษา",
    position: "พยาบาลวิชาชีพ",
    experience: 8,
    location: "เชียงใหม่",
    skills: ["Patient Care", "Emergency Care", "Medical Records"],
    salary: "45,000 - 55,000 บาท",
    available: true,
    email: "pimjai@example.com",
    phone: "02-xxx-xxxx",
    description: "พยาบาลวิชาชีพที่มีประสบการณ์ในการดูแลผู้ป่วยฉุกเฉินและการจัดการเวชระเบียน",
    education: [
      "ปริญญาตรี พยาบาลศาสตร์ มหาวิทยาลัยมหิดล"
    ],
    certifications: [
      "Advanced Cardiac Life Support (ACLS)",
      "Emergency Nursing Certification"
    ]
  },
  {
    id: 7,
    name: "สมศักดิ์ ก่อสร้าง",
    position: "วิศวกรโยธา",
    experience: 10,
    location: "ภูเก็ต",
    skills: ["AutoCAD", "Construction Management", "Structural Design"],
    salary: "90,000 - 120,000 บาท",
    available: false,
    email: "somsak@example.com",
    phone: "02-xxx-xxxx",
    description: "วิศวกรโยธาที่มีประสบการณ์ในการออกแบบโครงสร้างและบริหารโครงการก่อสร้าง",
    education: [
      "ปริญญาโท วิศวกรรมโยธา สถาบันเทคโนโลยีแห่งเอเชีย"
    ],
    certifications: [
      "Professional Engineer (PE)",
      "Project Management Professional (PMP)"
    ]
  },
  {
    id: 8,
    name: "รัตนา การศึกษา",
    position: "ครูภาษาอังกฤษ",
    experience: 5,
    location: "กรุงเทพมหานคร",
    skills: ["TOEIC", "Teaching", "Curriculum Development"],
    salary: "35,000 - 45,000 บาท",
    available: true,
    email: "rattana@example.com",
    phone: "02-xxx-xxxx",
    description: "ครูสอนภาษาอังกฤษที่มีประสบการณ์ในการสอนและพัฒนาหลักสูตร",
    education: [
      "ปริญญาตรี การสอนภาษาอังกฤษ มหาวิทยาลัยธรรมศาสตร์"
    ],
    certifications: [
      "TEFL Certificate",
      "Cambridge English Teaching Knowledge Test"
    ]
  }
];
// src/data/facultyData.ts

export interface FacultyMember {
  id: number;
  name: string;
  subject: string;
  qualification: string;
  photo: string; // Path to photo, e.g., '/images/john-doe.jpg'
}

export const facultyMembers: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. John Doe",
    subject: "Mathematics",
    qualification: "Ph.D. in Applied Mathematics",
    photo: "/faculty/john-doe.jpg", // Placeholder path
  },
  {
    id: 2,
    name: "Prof. Jane Smith",
    subject: "Physics",
    qualification: "M.Sc. in Theoretical Physics",
    photo: "/faculty/jane-smith.jpg", // Placeholder path
  },
  {
    id: 3,
    name: "Ms. Emily White",
    subject: "Chemistry",
    qualification: "B.Sc. in Organic Chemistry, B.Ed.",
    photo: "/faculty/emily-white.jpg", // Placeholder path
  },
  {
    id: 4,
    name: "Mr. David Green",
    subject: "Biology",
    qualification: "M.Sc. in Biotechnology",
    photo: "/faculty/david-green.jpg", // Placeholder path
  },
  {
    id: 5,
    name: "Prof. Raju B Salunke",
    subject: "Mathematics",
    qualification: "M.Sc. Mathematics, B.Ed",
    photo: "/faculty/raju-salunke.png.jpg",
  },
  {
    id: 6,
    name: "Prof. Balaji T Sawant",
    subject: "Co-Founder & Director",
    qualification: "MSC Mathematics, B.ed | 18+ Years teaching experience",
    photo: "/faculty/balaji-sawant.png.jpg",
  },
];


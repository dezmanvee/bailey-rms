import 'dotenv/config'
import { PrismaClient, Role, Gender, Term, Grade } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { hash } from 'bcryptjs';

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// ============================================
// FILE: prisma/seed.ts
// Database Seeding Script for Prisma 7
// ============================================




async function main() {
  console.log('🌱 Starting seed...');

  // Clear existing data in development
  console.log('🗑️  Clearing existing data...');
  await prisma.auditLog.deleteMany();
  await prisma.subjectScore.deleteMany();
  await prisma.result.deleteMany();
  await prisma.student.deleteMany();
  await prisma.classroom.deleteMany();
  await prisma.user.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.gradeScale.deleteMany();
  await prisma.schoolSettings.deleteMany();

  // ============================================
  // SCHOOL SETTINGS
  // ============================================
  console.log('🏫 Creating school settings...');
  await prisma.schoolSettings.create({
    data: {
      schoolName: "Bailey's Bowen College",
      schoolAddress: "No 14 Davis Cole Crescent, Pineville Estate, Surulere, Lagos State",
      schoolPhone: "08115414915, 07034552256",
      schoolEmail: "baileysbowencollege@gmail.com",
      currentSession: "2024/2025",
      currentTerm: Term.FIRST,
      nextTermBegins: new Date('2025-01-20'),
      passmark: 50,
    },
  });

  // ============================================
  // GRADE SCALE
  // ============================================
  console.log('📊 Creating grade scales...');
  await prisma.gradeScale.createMany({
    data: [
      { grade: Grade.A, minScore: 70, maxScore: 100, remark: 'EXCELLENT' },
      { grade: Grade.B, minScore: 60, maxScore: 69.99, remark: 'VERY GOOD' },
      { grade: Grade.C, minScore: 50, maxScore: 59.99, remark: 'GOOD' },
      { grade: Grade.D, minScore: 45, maxScore: 49.99, remark: 'PASS' },
      { grade: Grade.E, minScore: 40, maxScore: 44.99, remark: 'WEAK' },
      { grade: Grade.F, minScore: 0, maxScore: 39.99, remark: 'FAIL' },
    ],
  });

  // ============================================
  // SUBJECTS
  // ============================================
  console.log('📚 Creating subjects...');
  await prisma.subject.createMany({
    data: [
      { name: 'ENGLISH LANGUAGE', code: 'ENG', caMaxScore: 40, examMaxScore: 60 },
      { name: 'MATHEMATICS', code: 'MTH', caMaxScore: 40, examMaxScore: 60 },
      { name: 'AGRICULTURAL SCIENCE', code: 'AGR', caMaxScore: 40, examMaxScore: 60 },
      { name: 'BIOLOGY', code: 'BIO', caMaxScore: 40, examMaxScore: 60 },
      { name: 'CATERING CRAFTS', code: 'CAT', caMaxScore: 40, examMaxScore: 60 },
      { name: 'CHEMISTRY', code: 'CHE', caMaxScore: 40, examMaxScore: 60 },
      { name: 'CIVIC EDUCATION', code: 'CIV', caMaxScore: 40, examMaxScore: 60 },
      { name: 'COMPUTER', code: 'COM', caMaxScore: 40, examMaxScore: 60 },
      { name: 'DATA PROCESSING', code: 'DTP', caMaxScore: 40, examMaxScore: 60 },
      { name: 'ECONOMICS', code: 'ECO', caMaxScore: 40, examMaxScore: 60 },
      { name: 'ELECTRICAL INSTALLATION & MAINTENANCE', code: 'ELM', caMaxScore: 40, examMaxScore: 60 },
      { name: 'FINANCIAL ACCOUNTING', code: 'ACC', caMaxScore: 40, examMaxScore: 60 },
      { name: 'FOOD & NUTRITION', code: 'FNU', caMaxScore: 40, examMaxScore: 60 },
      { name: 'FURTHER MATHEMATICS', code: 'FMT', caMaxScore: 40, examMaxScore: 60 },
      { name: 'GOVERNMENT', code: 'GOV', caMaxScore: 40, examMaxScore: 60 },
      { name: 'LITERATURE IN ENGLISH', code: 'LIT', caMaxScore: 40, examMaxScore: 60 },
      { name: 'PHYSICS', code: 'PHY', caMaxScore: 40, examMaxScore: 60 },
      { name: 'TECHNICAL DRAWING', code: 'TCD', caMaxScore: 40, examMaxScore: 60 },
      { name: 'YORUBA', code: 'YOR', caMaxScore: 40, examMaxScore: 60 },
    ],
  });

  // ============================================
  // USERS
  // ============================================
  console.log('👥 Creating users...');
  const passwordHash = await hash('password123', 10);

  const admin = await prisma.user.create({
    data: {
      email: 'admin@baileybowen.edu',
      name: 'MR OWOLABI BADMOS',
      password: passwordHash,
      role: Role.ADMIN,
      phoneNumber: '08115414915',
    },
  });

  const teacher1 = await prisma.user.create({
    data: {
      email: 'adigun@baileybowen.edu',
      name: 'MR ADIGUN TIMILEYIN',
      password: passwordHash,
      role: Role.TEACHER,
      phoneNumber: '08012345678',
    },
  });

  const teacher2 = await prisma.user.create({
    data: {
      email: 'jane.smith@baileybowen.edu',
      name: 'MRS JANE SMITH',
      password: passwordHash,
      role: Role.TEACHER,
      phoneNumber: '08098765432',
    },
  });

  // ============================================
  // CLASSROOMS
  // ============================================
  console.log('🏛️  Creating classrooms...');
  const classroom1 = await prisma.classroom.create({
    data: {
      name: 'S.S. 2',
      session: '2024/2025',
      currentTerm: Term.FIRST,
      teacherId: teacher1.id,
    },
  });

  const classroom2 = await prisma.classroom.create({
    data: {
      name: 'JSS 3',
      section: 'A',
      session: '2024/2025',
      currentTerm: Term.FIRST,
      teacherId: teacher2.id,
    },
  });

  // ============================================
  // STUDENTS
  // ============================================
  console.log('👨‍🎓 Creating students...');
  const students = await Promise.all([
    // S.S. 2 Students
    prisma.student.create({
      data: {
        admissionNo: 'GS1640',
        firstName: 'ADELINE',
        lastName: 'FOLAHALADE',
        otherNames: 'ESTHER',
        gender: Gender.FEMALE,
        dateOfBirth: new Date('2004-08-12'),
        classroomId: classroom1.id,
        guardianName: 'Mr. Folahalade',
        guardianPhone: '08123456789',
      },
    }),
    prisma.student.create({
      data: {
        admissionNo: 'GS1641',
        firstName: 'DANIEL',
        lastName: 'ADEYEMI',
        otherNames: 'OLUWASEUN',
        gender: Gender.MALE,
        dateOfBirth: new Date('2004-03-15'),
        classroomId: classroom1.id,
        guardianName: 'Mrs. Adeyemi',
        guardianPhone: '08098765432',
      },
    }),
    prisma.student.create({
      data: {
        admissionNo: 'GS1642',
        firstName: 'GRACE',
        lastName: 'OKONKWO',
        otherNames: 'CHIOMA',
        gender: Gender.FEMALE,
        dateOfBirth: new Date('2005-01-22'),
        classroomId: classroom1.id,
        guardianName: 'Mr. Okonkwo',
        guardianPhone: '08076543210',
      },
    }),
    prisma.student.create({
      data: {
        admissionNo: 'GS1643',
        firstName: 'SAMUEL',
        lastName: 'BALOGUN',
        otherNames: 'TEMITOPE',
        gender: Gender.MALE,
        dateOfBirth: new Date('2004-11-08'),
        classroomId: classroom1.id,
        guardianName: 'Mrs. Balogun',
        guardianPhone: '08154321098',
      },
    }),
    prisma.student.create({
      data: {
        admissionNo: 'GS1644',
        firstName: 'BLESSING',
        lastName: 'WILLIAMS',
        otherNames: 'FAVOUR',
        gender: Gender.FEMALE,
        dateOfBirth: new Date('2004-06-30'),
        classroomId: classroom1.id,
        guardianName: 'Rev. Williams',
        guardianPhone: '08123456780',
      },
    }),
    
    // JSS 3 Students
    prisma.student.create({
      data: {
        admissionNo: 'JS2001',
        firstName: 'MICHAEL',
        lastName: 'OKAFOR',
        otherNames: 'CHUKWUDI',
        gender: Gender.MALE,
        dateOfBirth: new Date('2006-09-12'),
        classroomId: classroom2.id,
        guardianName: 'Mr. Okafor',
        guardianPhone: '08134567890',
      },
    }),
    prisma.student.create({
      data: {
        admissionNo: 'JS2002',
        firstName: 'AISHA',
        lastName: 'MOHAMMED',
        otherNames: 'FATIMA',
        gender: Gender.FEMALE,
        dateOfBirth: new Date('2006-04-18'),
        classroomId: classroom2.id,
        guardianName: 'Alhaji Mohammed',
        guardianPhone: '08145678901',
      },
    }),
    prisma.student.create({
      data: {
        admissionNo: 'JS2003',
        firstName: 'JOHN',
        lastName: 'IGWE',
        otherNames: 'CHINEDU',
        gender: Gender.MALE,
        dateOfBirth: new Date('2006-12-05'),
        classroomId: classroom2.id,
        guardianName: 'Mrs. Igwe',
        guardianPhone: '08156789012',
      },
    }),
  ]);

  // ============================================
  // SAMPLE RESULT FOR ESTHER
  // ============================================
  console.log('📝 Creating sample result for Esther...');
  const esther = students[0]; // First student (Adeline Folahalade Esther)

  const estherResult = await prisma.result.create({
    data: {
      studentId: esther.id,
      term: Term.FIRST,
      session: '2024/2025',
      timesSchoolOpened: 110,
      timesPresent: 110,
      timesAbsent: 0,
      teacherComment: 'Esther is a bright, diligent and studious student. Always inquisitive and ready to learn.',
      principalComment: 'An outstanding result! You should keep it up',
      totalScore: 1065,
      averageScore: 76.07,
      classPosition: 1,
      totalStudents: 5,
      isPublished: true,
      publishedAt: new Date(),
      createdBy: teacher1.id,
      psychomotorRatings: {
        handWriting: 5,
        fluency: 5,
        games: 4,
        attentiveness: 5,
        punctuality: 5,
        neatness: 5,
        politeness: 5,
        honesty: 5,
        generalNeatness: 5,
        senseOfResponsibility: 5,
        relationshipWithOthers: 5,
      },
      affectiveDomain: {
        drawingPainting: 'tick',
        craftPractice: 'tick',
        musicalSkills: 'tick',
        sportGames: 'tick',
        speechFluency: 'tick',
        attentiveness: 'tick',
      },
      subjects: {
        create: [
          { subject: 'AGRICULTURAL SCIENCE', caScore: 40, examScore: 60, totalScore: 100, grade: Grade.A, remark: 'EXCELLENT' },
          { subject: 'BIOLOGY', caScore: 35, examScore: 58, totalScore: 93, grade: Grade.A, remark: 'EXCELLENT' },
          { subject: 'CATERING CRAFTS', caScore: 39, examScore: 38, totalScore: 77, grade: Grade.A, remark: 'EXCELLENT' },
          { subject: 'CHEMISTRY', caScore: 35, examScore: 38, totalScore: 73, grade: Grade.A, remark: 'EXCELLENT' },
          { subject: 'CIVIC EDUCATION', caScore: 22, examScore: 43, totalScore: 65, grade: Grade.B, remark: 'VERY GOOD' },
          { subject: 'COMPUTER', caScore: 35, examScore: 55, totalScore: 90, grade: Grade.A, remark: 'EXCELLENT' },
          { subject: 'DATA PROCESSING', caScore: 23, examScore: 43, totalScore: 66, grade: Grade.B, remark: 'VERY GOOD' },
          { subject: 'ECONOMICS', caScore: 32, examScore: 34, totalScore: 66, grade: Grade.B, remark: 'VERY GOOD' },
          { subject: 'ENGLISH LANGUAGE', caScore: 33, examScore: 43, totalScore: 76, grade: Grade.A, remark: 'EXCELLENT' },
          { subject: 'FINANCIAL ACCOUNTING', caScore: 33, examScore: 35, totalScore: 68, grade: Grade.B, remark: 'VERY GOOD' },
          { subject: 'FOOD & NUTRITION', caScore: 40, examScore: 53, totalScore: 93, grade: Grade.A, remark: 'EXCELLENT' },
          { subject: 'FURTHER MATHEMATICS', caScore: 31, examScore: 43, totalScore: 74, grade: Grade.A, remark: 'EXCELLENT' },
          { subject: 'GOVERNMENT', caScore: 32, examScore: 52, totalScore: 84, grade: Grade.A, remark: 'EXCELLENT' },
          { subject: 'LITERATURE IN ENGLISH', caScore: 40, examScore: 43, totalScore: 83, grade: Grade.A, remark: 'EXCELLENT' },
        ],
      },
    },
  });

  console.log('✅ Seed completed successfully!');
  console.log('\n📊 Summary:');
  console.log(`   - Users created: 3 (1 admin, 2 teachers)`);
  console.log(`   - Classrooms created: 2`);
  console.log(`   - Students created: ${students.length}`);
  console.log(`   - Results created: 1 (Esther's report)`);
  console.log(`   - Subjects configured: 19`);
  console.log(`   - Grade scales: 6`);
  
  console.log('\n🔑 Login Credentials:');
  console.log('   Admin:     admin@baileybowen.edu / password123');
  console.log('   Teacher 1: adigun@baileybowen.edu / password123');
  console.log('   Teacher 2: jane.smith@baileybowen.edu / password123');
  
  console.log('\n🚀 Next steps:');
  console.log('   1. Run: bun run dev');
  console.log('   2. Visit: http://localhost:3000');
  console.log('   3. Start building the UI!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

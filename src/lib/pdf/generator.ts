import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface SubjectScore {
  subject: string;
  caScore: number;
  examScore: number;
  totalScore: number;
  grade: string;
  remark: string;
}

interface StudentResult {
  student: {
    firstName: string;
    lastName: string;
    otherNames?: string | null;
    admissionNo: string;
    gender: string;
    image?: string | null;
  };
  classroom: {
    name: string;
    section?: string | null;
  };
  term: string;
  session: string;
  timesSchoolOpened: number;
  timesPresent: number;
  timesAbsent: number;
  subjects: SubjectScore[];
  teacherComment?: string | null;
  principalComment?: string | null;
  averageScore: number;
  classPosition?: number | null;
  totalStudents?: number | null;
  psychomotorRatings?: Record<string, number>;
  affectiveDomain?: Record<string, string>;
}

export async function generateReportCard(result: StudentResult): Promise<void> {
  const doc = new jsPDF('portrait', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Colors (Oxblood theme)
  const oxblood: [number, number, number] = [128, 0, 32];
  const darkOxblood: [number, number, number] = [92, 0, 21];
  const termLabelMap: Record<string, string> = {
    FIRST: 'First Term',
    SECOND: 'Second Term',
    THIRD: 'Third Term',
  };
  const termLabel = termLabelMap[result.term] ?? result.term;

  // Header - School Name
  doc.setFillColor(...oxblood);
  doc.rect(0, 0, pageWidth, 30, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text("BAILEY'S BOWEN COLLEGE", pageWidth / 2, 12, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('No 14 Davis Cole Crescent, Pineville Estate, Surulere, Lagos State', pageWidth / 2, 18, { align: 'center' });
  doc.text('TEL: 08115414915, 07034552256 • Email: baileysbowencollege@gmail.com', pageWidth / 2, 24, { align: 'center' });

  // Reset text color
  doc.setTextColor(0, 0, 0);

  // Student Info Section
  let yPos = 40;
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`${termLabel.toUpperCase()} STUDENT'S PERFORMANCE REPORT`, pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 10;
  
  // Student Details Box
  doc.setDrawColor(...oxblood);
  doc.setLineWidth(0.5);
  doc.rect(15, yPos, pageWidth - 30, 25);
  
  yPos += 6;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const studentName = `${result.student.firstName} ${result.student.lastName} ${result.student.otherNames ?? ''}`.trim();
  
  doc.text(`NAME: ${studentName}`, 20, yPos);
  doc.text(`GENDER: ${result.student.gender}`, 130, yPos);
  
  yPos += 6;
  doc.text(`CLASS: ${result.classroom.name} ${result.classroom.section ?? ''}`, 20, yPos);
  doc.text(`SESSION: ${result.session}`, 130, yPos);
  
  yPos += 6;
  doc.text(`ADMISSION NO: ${result.student.admissionNo}`, 20, yPos);
  doc.text(`TERM: ${termLabel}`, 130, yPos);

  yPos += 10;

  // Cognitive Domain - Subjects Table
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('COGNITIVE DOMAIN', 15, yPos);
  
  yPos += 2;

  const subjectTableData = result.subjects.map((subject) => [
    subject.subject,
    subject.caScore.toFixed(1),
    subject.examScore.toFixed(1),
    subject.totalScore.toFixed(1),
    subject.grade,
    subject.remark,
  ]);

  autoTable(doc, {
    startY: yPos,
    head: [['SUBJECTS', 'CA (40)', 'EXAM (60)', 'TOTAL (100)', 'GRADE', 'REMARK']],
    body: subjectTableData,
    theme: 'striped',
    headStyles: {
      fillColor: oxblood,
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 9,
    },
    bodyStyles: {
      fontSize: 8,
    },
    columnStyles: {
      0: { cellWidth: 60 },
      1: { cellWidth: 20, halign: 'center' },
      2: { cellWidth: 20, halign: 'center' },
      3: { cellWidth: 25, halign: 'center' },
      4: { cellWidth: 20, halign: 'center' },
      5: { cellWidth: 30, halign: 'center' },
    },
    margin: { left: 15, right: 15 },
  });

  yPos =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ??
      yPos) + 10;

  // Performance Summary
  doc.setFillColor(240, 240, 240);
  doc.rect(15, yPos, pageWidth - 30, 20, 'F');
  doc.setDrawColor(...oxblood);
  doc.rect(15, yPos, pageWidth - 30, 20);

  yPos += 7;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('PERFORMANCE SUMMARY', 20, yPos);
  
  yPos += 6;
  doc.setFont('helvetica', 'normal');
  doc.text(`Total Obtained: ${result.subjects.reduce((sum, s) => sum + s.totalScore, 0).toFixed(1)}`, 20, yPos);
  doc.text(`Total Obtainable: ${result.subjects.length * 100}`, 70, yPos);
  doc.text(`Average: ${result.averageScore.toFixed(1)}%`, 120, yPos);
  doc.text(`Position: ${result.classPosition ?? '--'}${result.totalStudents ? `/${result.totalStudents}` : ''}`, 160, yPos);

  yPos += 12;

  // Attendance
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('ATTENDANCE SUMMARY', 15, yPos);
  
  yPos += 2;
  autoTable(doc, {
    startY: yPos,
    head: [['No of Times School Opened', 'No of Times Present', 'No of Times Absent']],
    body: [[
      result.timesSchoolOpened.toString(),
      result.timesPresent.toString(),
      result.timesAbsent.toString(),
    ]],
    theme: 'grid',
    headStyles: {
      fillColor: oxblood,
      textColor: [255, 255, 255],
      fontSize: 9,
    },
    bodyStyles: {
      fontSize: 9,
      halign: 'center',
    },
    margin: { left: 15, right: 15 },
  });

  yPos =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ??
      yPos) + 8;

  // Psychomotor & Affective Domain (side by side)
  const psychomotorX = 15;
  const affectiveX = pageWidth / 2 + 5;
  const boxWidth = (pageWidth - 30) / 2 - 5;

  // Psychomotor
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('PSYCHOMOTOR DOMAIN', psychomotorX, yPos);
  
  yPos += 2;
  
  const psychomotorData = result.psychomotorRatings 
    ? Object.entries(result.psychomotorRatings).map(([key, value]) => [
        key.replace(/([A-Z])/g, ' $1').trim(),
        value.toString(),
      ])
    : [];

  if (psychomotorData.length > 0) {
    autoTable(doc, {
      startY: yPos,
      head: [['Skill', 'Rating (1-5)']],
      body: psychomotorData,
      theme: 'grid',
      headStyles: {
        fillColor: oxblood,
        textColor: [255, 255, 255],
        fontSize: 8,
      },
      bodyStyles: {
        fontSize: 7,
      },
      columnStyles: {
        0: { cellWidth: boxWidth - 20 },
        1: { cellWidth: 20, halign: 'center' },
      },
      margin: { left: psychomotorX, right: pageWidth - psychomotorX - boxWidth },
    });
  }

  // Affective Domain
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('AFFECTIVE DOMAIN', affectiveX, yPos);
  
  yPos += 2;
  
  const affectiveData = result.affectiveDomain
    ? Object.entries(result.affectiveDomain)
        .filter(([, value]) => value === 'tick')
        .map(([key]) => [key.replace(/([A-Z])/g, ' $1').trim(), '✓'])
    : [];

  if (affectiveData.length > 0) {
    autoTable(doc, {
      startY: yPos,
      head: [['Trait', 'Status']],
      body: affectiveData,
      theme: 'grid',
      headStyles: {
        fillColor: oxblood,
        textColor: [255, 255, 255],
        fontSize: 8,
      },
      bodyStyles: {
        fontSize: 7,
      },
      columnStyles: {
        0: { cellWidth: boxWidth - 20 },
        1: { cellWidth: 20, halign: 'center' },
      },
      margin: { left: affectiveX, right: 15 },
    });
  }

  // Move to bottom of page for comments
  yPos = pageHeight - 50;

  // Comments
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text("Teacher's Comment:", 15, yPos);
  
  yPos += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const teacherCommentLines = doc.splitTextToSize(
    result.teacherComment ?? 'No comment provided',
    pageWidth - 30
  );
  doc.text(teacherCommentLines, 15, yPos);

  yPos += teacherCommentLines.length * 5 + 5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text("Principal's Comment:", 15, yPos);
  
  yPos += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const principalCommentLines = doc.splitTextToSize(
    result.principalComment ?? 'No comment provided',
    pageWidth - 30
  );
  doc.text(principalCommentLines, 15, yPos);

  // Footer
  yPos = pageHeight - 15;
  doc.setDrawColor(...oxblood);
  doc.line(15, yPos, pageWidth - 15, yPos);
  
  yPos += 5;
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text('Next Term Begins: _________________', 15, yPos);
  doc.text('BAILEY\'S BOWEN MARK © 2019', pageWidth - 15, yPos, { align: 'right' });

  // Save PDF
  const fileName = `${result.student.admissionNo}_${result.student.lastName}_${result.term}_${result.session}.pdf`;
  doc.save(fileName);
}

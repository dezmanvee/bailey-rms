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
  affectiveDomain?: Record<string, number>;
}

export async function generateReportCard(result: StudentResult): Promise<void> {
  const doc = new jsPDF('portrait', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();


  const termLabelMap: Record<string, string> = {
    FIRST: 'First Term',
    SECOND: 'Second Term',
    THIRD: 'Third Term',
  };
  const termLabel = termLabelMap[result.term] ?? result.term;

  doc.setTextColor(0, 0, 0);

  const logoSize = 18;
  const logoX = 10;
  const logoY = 8;
  let logoDrawn = false;
  if (typeof window !== 'undefined') {
    try {
      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Logo load failed'));
        img.src = '/logo.jpg';
      });
      doc.addImage(img, 'JPEG', logoX, logoY, logoSize, logoSize);
      logoDrawn = true;
    } catch {
      logoDrawn = false;
    }
  }
  if (!logoDrawn) {
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.3);
    doc.rect(logoX, logoY, logoSize, logoSize);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('HPS', logoX + logoSize / 2, logoY + logoSize / 2 + 3, {
      align: 'center',
    });
  }

  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('HAMPTON PREPARATORY SCHOOL', pageWidth / 2, 12, {
    align: 'center',
  });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(
    '18 Chris Madueke Street, Lekki, Phase 1',
    pageWidth / 2,
    17,
    { align: 'center' },
  );
  doc.text(
    'TEL: 08115414915, 07034552256   Email: info@hamptonpreparatoryschool.com',
    pageWidth / 2,
    22,
    { align: 'center' },
  );
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.line(10, 26, pageWidth - 10, 26);

  let yPos = 33;
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`${termLabel.toUpperCase()} STUDENTS PERFORMANCE REPORT`, pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 10;
  const studentBoxTopY = yPos;
  const passportWidth = 20;
  const passportHeight = 18;
  const passportX = pageWidth - 15 - passportWidth - 2;
  const passportY = studentBoxTopY + 1;
  
  // Student Details Box
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.5);
  doc.rect(15, studentBoxTopY, pageWidth - 30, 20);
  doc.rect(passportX, passportY, passportWidth, passportHeight);
  const initials =
    `${result.student.firstName?.[0] ?? ''}${result.student.lastName?.[0] ?? ''}`.toUpperCase() ||
    result.student.admissionNo.slice(0, 2).toUpperCase();
  const drawPassportInitials = () => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(initials, passportX + passportWidth / 2, passportY + passportHeight / 2 + 3, {
      align: 'center',
    });
  };
  if (result.student.image) {
    try {
      doc.addImage(result.student.image, 'JPEG', passportX + 0.5, passportY + 0.5, passportWidth - 1, passportHeight - 1);
    } catch {
      drawPassportInitials();
    }
  } else {
    drawPassportInitials();
  }
  
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
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('COGNITIVE DOMAIN', 10, yPos);
  
  const rightStartY = yPos;
  yPos += 2;
  
  const marginLeft = 10;
  const marginRight = 10;
  const rightColumnWidth = 60;
  const columnGap = 4;
  const rightX = pageWidth - marginRight - rightColumnWidth;
  const leftColWidth = rightX - marginLeft - columnGap;
  let rightColumnBottomY = rightStartY;
  const subjectTableData = result.subjects.map((subject) => [
    subject.subject,
    subject.caScore.toFixed(0),
    subject.examScore.toFixed(0),
    subject.totalScore.toFixed(0),
    subject.grade,
    subject.remark,
  ]);

  autoTable(doc, {
    startY: yPos,
    head: [['SUBJECTS', 'CA', 'EXAM', 'TOTAL', 'GRADE', 'REMARKS']],
    body: subjectTableData,
    theme: 'grid',
    headStyles: {
      fillColor: [230, 230, 230],
      textColor: [0, 0, 0],
      fontStyle: 'bold',
      fontSize: 8,
    },
    bodyStyles: {
      fontSize: 7,
    },
    styles: { cellPadding: 1, lineWidth: 0.2 },
    columnStyles: {
      0: { cellWidth: leftColWidth - (12 + 14 + 16 + 14 + 24) },
      1: { cellWidth: 12, halign: 'center' },
      2: { cellWidth: 14, halign: 'center' },
      3: { cellWidth: 16, halign: 'center' },
      4: { cellWidth: 14, halign: 'center' },
      5: { cellWidth: 24, halign: 'center' },
    },
    margin: { left: marginLeft, right: marginRight + rightColumnWidth + columnGap },
  });

  yPos =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ??
      yPos) + 10;

  // Performance Summary (grid)
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('PERFORMANCE SUMMARY', marginLeft + 5, yPos);
  const perfStartY = yPos + 2;
  const totalObtained = result.subjects.reduce((sum, s) => sum + s.totalScore, 0).toFixed(1);
  const totalObtainable = (result.subjects.length * 100).toString();
  const averagePct = `${result.averageScore.toFixed(1)}%`;
  const positionTxt = `${result.classPosition ?? '--'}${result.totalStudents ? `/${result.totalStudents}` : ''}`;
  autoTable(doc, {
    startY: perfStartY,
    head: [['Total Obtained', 'Total Obtainable', 'Average', 'Position']],
    body: [[totalObtained, totalObtainable, averagePct, positionTxt]],
    theme: 'grid',
    headStyles: { fillColor: [240, 240, 240], textColor: [0, 0, 0], fontSize: 8 },
    bodyStyles: { fontSize: 8, halign: 'center' },
    styles: { cellPadding: 1, lineWidth: 0.2 },
    margin: { left: marginLeft, right: marginRight + rightColumnWidth + columnGap },
    tableWidth: leftColWidth,
    columnStyles: {
      0: { cellWidth: leftColWidth / 4 },
      1: { cellWidth: leftColWidth / 4 },
      2: { cellWidth: leftColWidth / 4 },
      3: { cellWidth: leftColWidth / 4 },
    },
  });
  yPos =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ??
      perfStartY) + 6;

  // Attendance
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('ATTENDANCE SUMMARY', rightX, rightStartY);
  
  let rightY = rightStartY + 2;
  autoTable(doc, {
    startY: rightY,
    head: [['No of Times School Opened', 'No of Times Present', 'No of Times Absent']],
    body: [[
      result.timesSchoolOpened.toString(),
      result.timesPresent.toString(),
      result.timesAbsent.toString(),
    ]],
    theme: 'grid',
    headStyles: {
      fillColor: [230, 230, 230],
      textColor: [0, 0, 0],
      fontSize: 8,
    },
    bodyStyles: {
      fontSize: 7,
      halign: 'center',
    },
    margin: { left: rightX, right: 10 },
    columnStyles: { 0: { cellWidth: 20 }, 1: { cellWidth: 20 }, 2: { cellWidth: 20 } },
  });

  rightY =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ??
      rightY) + 4;
  rightColumnBottomY = rightY;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('AFFECTIVE DOMAIN', rightX, rightY);
  rightY += 2;
  const affectiveData = result.affectiveDomain
    ? Object.entries(result.affectiveDomain).map(([key, value]) => [
        key.replace(/([A-Z])/g, ' $1').trim(),
        value.toString(),
      ])
    : [];
  autoTable(doc, {
    startY: rightY,
    head: [['Trait', 'Rating']],
    body: affectiveData,
    theme: 'grid',
    headStyles: { fillColor: [230, 230, 230], textColor: [0, 0, 0], fontSize: 8 },
    bodyStyles: { fontSize: 7, halign: 'center' },
    styles: { cellPadding: 1, lineWidth: 0.2 },
    margin: { left: rightX, right: 10 },
    columnStyles: { 0: { cellWidth: 45 }, 1: { cellWidth: 15 } },
  });
  rightY =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ?? rightY) + 4;
  rightColumnBottomY = rightY;
  doc.setFont('helvetica', 'bold');
  doc.text('PSYCHOMOTOR DOMAIN', rightX, rightY);
  rightY += 2;
  const psychomotorData = result.psychomotorRatings
    ? Object.entries(result.psychomotorRatings).map(([key, value]) => [
        key.replace(/([A-Z])/g, ' $1').trim(),
        value.toString(),
      ])
    : [];
  autoTable(doc, {
    startY: rightY,
    head: [['Skill', 'Rating']],
    body: psychomotorData,
    theme: 'grid',
    headStyles: { fillColor: [230, 230, 230], textColor: [0, 0, 0], fontSize: 8 },
    bodyStyles: { fontSize: 7, halign: 'center' },
    styles: { cellPadding: 1, lineWidth: 0.2 },
    margin: { left: rightX, right: 10 },
    columnStyles: { 0: { cellWidth: 45 }, 1: { cellWidth: 15 } },
  });
  rightY =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ??
      rightY) + 4;
  rightColumnBottomY = rightY;

  doc.setFont('helvetica', 'bold');
  doc.text('RATING INDICES', rightX, rightY);
  rightY += 2;
  const ratingIndicesData = [
    ['5', 'Excellent'],
    ['4', 'Very Good'],
    ['3', 'Good'],
    ['2', 'Fair'],
    ['1', 'Poor'],
  ];
  autoTable(doc, {
    startY: rightY,
    head: [['Index', 'Description']],
    body: ratingIndicesData,
    theme: 'grid',
    headStyles: { fillColor: [230, 230, 230], textColor: [0, 0, 0], fontSize: 8 },
    bodyStyles: { fontSize: 7 },
    styles: { cellPadding: 1, lineWidth: 0.2 },
    margin: { left: rightX, right: 10 },
    columnStyles: { 0: { cellWidth: 15 }, 1: { cellWidth: 45 } },
  });
  rightY =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ??
      rightY) + 4;
  rightColumnBottomY = rightY;

  const gradeScaleStartY = yPos + 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('GRADE SCALE', marginLeft + 5, gradeScaleStartY);
  autoTable(doc, {
    startY: gradeScaleStartY + 2,
    head: [['70-100% (EXCELLENT)', '60-69% (VERY GOOD)', '50-59% (GOOD)', '45-49% (FAIR)', '40-44% (WEAK)', '0-39% (POOR)']],
    body: [[]],
    theme: 'grid',
    headStyles: { fillColor: [245, 245, 245], textColor: [0, 0, 0], fontSize: 8 },
    bodyStyles: { fontSize: 7 },
    styles: { cellPadding: 1, lineWidth: 0.2 },
    margin: { left: marginLeft, right: marginRight + rightColumnWidth + columnGap },
    tableWidth: leftColWidth,
  });
  const gradeScaleFinalY =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ?? gradeScaleStartY) + 4;
  doc.setFont('helvetica', 'bold');
  doc.text('GRADE ANALYSIS', marginLeft + 5, gradeScaleFinalY);
  const gradeAnalysisHead = ['A', 'B', 'C', 'D', 'E', 'F'];
  const gradeAnalysisRow = ['Excellent', 'Very Good', 'Good', 'Fair', 'Weak', 'Poor'];
  autoTable(doc, {
    startY: gradeScaleFinalY + 2,
    head: [gradeAnalysisHead],
    body: [gradeAnalysisRow],
    theme: 'grid',
    headStyles: { fillColor: [230, 230, 230], textColor: [0, 0, 0], fontSize: 8 },
    bodyStyles: { fontSize: 7 },
    styles: { cellPadding: 1, lineWidth: 0.2 },
    margin: { left: marginLeft, right: marginRight + rightColumnWidth + columnGap },
    tableWidth: leftColWidth,
  });
  const gradeAnalysisFinalY =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ??
      gradeScaleFinalY) + 4;
  doc.setFont('helvetica', 'bold');
  doc.text('BADGE ANALYSIS', marginLeft + 5, gradeAnalysisFinalY);
  const gradeCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  result.subjects.forEach((s) => {
    const g = (s.grade || '').trim().charAt(0).toUpperCase();
    if (gradeCounts[g] !== undefined) gradeCounts[g]++;
  });
  autoTable(doc, {
    startY: gradeAnalysisFinalY + 2,
    head: [['A', 'B', 'C', 'D', 'E', 'F', 'TOTAL SUBJECTS OFFERED']],
    body: [[
      gradeCounts.A,
      gradeCounts.B,
      gradeCounts.C,
      gradeCounts.D,
      gradeCounts.E,
      gradeCounts.F,
      result.subjects.length
    ].map(v => v ?? 0)],
    theme: 'grid',
    headStyles: { fillColor: [230, 230, 230], textColor: [0, 0, 0], fontSize: 8 },
    bodyStyles: { fontSize: 7, halign: 'center' },
    styles: { cellPadding: 1, lineWidth: 0.2 },
    margin: { left: marginLeft, right: marginRight + rightColumnWidth + columnGap },
    tableWidth: leftColWidth,
  });
  yPos =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ??
      gradeAnalysisFinalY) + 6;

  // Comments (start after whichever column is longer)
  const commentsStartY = Math.max(yPos, rightColumnBottomY) + 6;
  yPos = commentsStartY;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text("Teacher's Remark:", 15, yPos);
  yPos += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const teacherCommentLines = doc.splitTextToSize(
    result.teacherComment ?? '',
    pageWidth - 30
  ) as string[];
  doc.text(teacherCommentLines, 15, yPos);

  yPos += teacherCommentLines.length * 5 + 5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text("Principal's Remark:", 15, yPos);
  
  yPos += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const principalCommentLines = doc.splitTextToSize(
    result.principalComment ?? '',
    pageWidth - 30
  ) as string[];
  doc.text(principalCommentLines, 15, yPos);

  // Footer
  yPos = pageHeight - 15;
  doc.setDrawColor(0, 0, 0);
  doc.line(15, yPos, pageWidth - 15, yPos);
  
  yPos += 5;
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text('Next Term Begins:', 15, yPos);
  doc.line(50, yPos, 110, yPos);
  doc.text('Date:', pageWidth - 45, yPos);
  doc.line(pageWidth - 35, yPos, pageWidth - 15, yPos);

  // Save PDF
  const fileName = `${result.student.admissionNo}_${result.student.lastName}_${result.term}_${result.session}.pdf`;
  doc.save(fileName);
}

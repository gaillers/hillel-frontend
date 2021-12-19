//console.log(studentsMock.getStudent());
//console.log(studentsMock.getStudentList(10));

(() => {
   let studentList = studentsMock.getStudentList(10);
   studentList = studentList.map(updateStudentCustom);

   function updateStudentCustom(student) {
      student['avg'] = Math.round(avgNumberArray(student.marks));
      student['median'] = medianNumberArray(student.marks);
      return student;
   }

   // avgHelper
   function avgNumberArray(numbers){
      return numbers.reduce((acc, e) => acc + e, 0) / numbers.length;
   }

   // leaveStudents
    function getLeaveStudents(students) {
      return students.filter((e =>  e.avg < 50));
   }

   // medianStudents
    function medianNumberArray(numbers) {
      numbers.sort(function(a, b){ return a - b; });
      var i = numbers.length / 2;
      return i % 1 == 0 ? (numbers[i - 1] + numbers[i]) / 2 : numbers[Math.floor(i)];
   }
  
  
   console.log(studentList);
   console.log(getLeaveStudents(studentList));

   // addStudents
   studentList.push(
      updateStudentCustom(
         studentsMock.getStudent()
         )
      );
   console.log(studentList);
   console.log(studentList.map(e => `${e.name} | avg:${e.avg} | marks:${e.marks} | median:${e.median}`).join('\n'));
   
   
})();


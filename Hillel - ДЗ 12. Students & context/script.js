function Student(name, faculty, marks) {
   this.name = name;
   this.faculty = faculty,
   this.marks = marks

   this.getAvgMark = () => {
      return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
    }
   this.getMaxMark = () => {
      return Math.max(...this.marks)
   }
   this.getMinMark = () => {
      return Math.min(...this.marks)
   }
   this.getTotal = () => {
      return this.marks.reduce((a, b) => a + b, 0)
   }
   this.getInfo = () => {
      return `
       Name: ${this.name}
       Faculty: ${this.faculty}
       AvgMark: ${this.getAvgMark()}
      `
   }
}

const student = new Student('Leha', 'Gamer', [10, 10, 8, 10, 9, 9, 10]);
console.log(student.getInfo());

// Методы
student.getAvgMark(); // средняя оценка студента
student.getMaxMark(); // максимальная оценка
student.getMinMark(); // минимальная оценка
student.getTotal(); // сумма оценок
student.getInfo(); // информация о студенте в виде name + faculty + total
const student = {
    name: "Valeriy",
    second_name: "Zaytsev",
    marks: [{subject: "Мат.анализ", mark: 3}, {subject: "Англ.язык", mark: 4}, {subject: "Информатика", mark: 5}, {subject: "ОБЖ", mark: 4}, {subject: "Электроника", mark: 5}]
};

function print_to_console(){
    console.log("Твоё имя:", student.name);
    console.log("Твоя фамилия:", student.second_name);
    console.log("Твои оценки:");
    for(let i = 0; i < student.marks.length; i++){
        console.log("   ", student.marks[i].subject, ":", student.marks[i].mark);
    }
}

print_to_console();

class Mark{
    constructor(subject, mark){
        this.subject = subject;
        this.mark = mark;
    }
}

class Student{
    constructor(name, second_name, marks){
        this.name = name;
        this.second_name = second_name;
        this.marks = marks;
    }

    print(){
        console.log("Твоё имя:", this.name);
        console.log("Твоя фамилия:", this.second_name);
        console.log("Твои оценки:");
        for(let i = 0; i < this.marks.length; i++){
            console.log("   ", this.marks[i].subject, ":", this.marks[i].mark);
        }
    }

    avg(){
        let sum = 0
        for(let i = 0; i < this.marks.length; i++){
            sum += this.marks[i].mark;
        }
        return sum / this.marks.length;
    }
    add_mark(subject, mark){
        this.marks.push(new Mark(subject, mark));
    }
    marks_by_subject(subject){
        let marks = [];

        for(let i = 0; i < this.marks.length; i++){
            if(this.marks[i].subject === subject){
                marks.push(this.marks[i].mark);    
            }
        }

        return marks;
    }
    delete_marks_by_subject(subject){
        let n = [];
        for(let i = 0; i < this.marks.length; i++){
            if(this.marks[i].subject !== subject){
                n.push(this.marks[i]);
            }
        }
        this.marks = n;
    }
}
console.log("!############################################!");
const student1 = new Student("Valeriy", "Zaytsev", [
    new Mark("Мат.анализ", 3),
    new Mark("Мат.анализ", 4),
    new Mark("Мат.анализ", 4),
    new Mark("Мат.анализ", 5),
    new Mark("Англ.язык", 4),
    new Mark("Англ.язык", 3),
    new Mark("Англ.язык", 4),
    new Mark("Англ.язык", 4),
    new Mark("Информатика", 5),
    new Mark("Информатика", 5),
    new Mark("Информатика", 5),
    new Mark("ОБЖ", 3),
    new Mark("ОБЖ", 3),
    new Mark("ОБЖ", 4),
    new Mark("Электроника", 5),
    new Mark("Электроника", 4),
    new Mark("Электроника", 5)
]);

student1.print();
console.log(student1.avg());
console.log("Оценки по матанализу:", student1.marks_by_subject("Мат.анализ"));
student1.add_mark("Электротехника", 3);
student1.add_mark("Электротехника", 4);
console.log("Оценки по электротехнике:", student1.marks_by_subject("Электротехника"));
student1.delete_marks_by_subject("Мат.анализ");
console.log("Оценки по матанализу:", student1.marks_by_subject("Мат.анализ"));

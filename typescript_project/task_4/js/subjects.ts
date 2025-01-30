export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
}

export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher) {
        this.teacher = teacher;
    }
}

export class Cpp extends Subject {
    getRequirements(): string {
        return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
        if (!this.teacher || this.teacher.experienceTeachingC === undefined) {
            return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
    }
}

export class Java extends Subject {
    getRequirements(): string {
        return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
        if (!this.teacher) {
            return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
    }
}

export class React extends Subject {
    getRequirements(): string {
        return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
        if (!this.teacher) {
            return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
    }
} 
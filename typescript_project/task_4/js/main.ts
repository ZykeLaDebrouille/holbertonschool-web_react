/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

const teacher: Subjects.Teacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 5 };

cpp.setTeacher(teacher);
java.setTeacher(teacher);
react.setTeacher(teacher);

console.log(cpp.getRequirements()); // "Here is the list of requirements for Cpp"
console.log(cpp.getAvailableTeacher()); // "Available Teacher: John"
console.log(react.getAvailableTeacher()); // "No available teacher"

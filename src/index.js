console.log("love");
import { currentProject } from "./logic/project-nav";
import { allProjects, projectFactory } from "./objects/project-object";
import { todoFactory } from "./objects/todo-object";

projectFactory("proyo", "Never ever", "Desc");
todoFactory("Todoy", "Idk man");
todoFactory("Another", "Someday I will");

console.log("\n--------------------------\n");

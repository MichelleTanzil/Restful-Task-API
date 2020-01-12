import { HttpService } from "./http.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "RESTful Tasks";
  tasks = [];
  oneTask = {};
  currentTask = {};
  updateTask: any;
  stringID: string = "";
  newTask: any;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    // console.log("in it");
    this.newTask = { title: "", description: "" };
    this._httpService.getTasks().subscribe((data: any) => {
      // this.tasks = data.tasks;
      // console.log(this.tasks);
      // this.getTasksFromService();
    });
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.tasks = data["tasks"];
      this.oneTask = data["tasks"][2];
    });
  }

  getTaskFromService(id: string) {
    console.log(`Click event is working with event: ${id}`);
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.currentTask = data;
    });
  }
  onSubmitNewTask() {
    // Code to send off the form data (this.newTask) to the Service
    // ...
    // Reset this.newTask to a new, clean object.
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(newTask => {
      console.log("Got our new task!", newTask);
    });
    this.newTask = { title: "", description: "" };
    this.getTasksFromService();
  }
  getTaskFromServiceUpdateTask(id: string) {
    console.log(`Click event is working with event: ${id}`);
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.updateTask = data;
    });
  }
  onSubmitUpdateTask() {
    console.log(
      `Click event is working with event: ${JSON.stringify(this.updateTask)}`
    );
    let observable = this._httpService.updateTask(
      this.updateTask._id,
      this.updateTask
    );
    observable.subscribe(updateTask => {
      console.log("Got our update task!", updateTask);
    });
    this.updateTask = null;
    this.getTasksFromService();
  }

  deleteTask(id: string) {
    console.log(`Click event is working with event: ${id}`);
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log("Got task to delete!", data);
    });
    this.getTasksFromService();
  }
  // onNewTaskKey(event: any) {
  //   console.log(`Click event is working with event param: ${event}`);
  //   console.log(event);
  //   this.stringID += event.key;
  //   let observable = this._httpService.getTask(this.stringID);
  //   observable.subscribe(data => {
  //     console.log("Got our data!", data);
  //     this.currentTask = data;
  //   });
  // }
}

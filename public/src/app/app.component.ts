import { HttpService } from "./http.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  tasks = [];
  oneTask = {};
  currentTask = {};
  stringID: string = "";

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    // console.log("in it");
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
  onNewTaskKey(event: any) {
    console.log(`Click event is working with event param: ${event}`);
    console.log(event);
    this.stringID += event.key;
    let observable = this._httpService.getTask(this.stringID);
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.currentTask = data;
    });
  }
}

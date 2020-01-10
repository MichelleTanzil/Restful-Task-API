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

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    // console.log("in it");
    this._httpService.getTasks().subscribe((data: any) => {
      // this.tasks = data.tasks;
      // console.log(this.tasks);
      this.getTasksFromService();
    });
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe( (data: object) => {
      console.log("Got our data!", data);
      this.tasks = data["tasks"];
      this.oneTask = data["tasks"][2];
    });
  }
}

import { Component } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  tasks = [];
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    console.log("in it")
    this._httpService.getTasks().subscribe((data: any) => {
      this.tasks = data.tasks;
      console.log(this.tasks);
    });
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
  }
  getTasks() {
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get("/tasks");
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get("/tasks");
  }
  getTask(task_id: string) {
    let tempObservable = this._http.get("/tasks/" + task_id);
    tempObservable.subscribe(data => console.log("Got our task!", data));

    return this._http.get("/tasks/" + task_id);
  }
  createTask(newTask: any) {
    let tempObservable = this._http.post("/tasks", newTask);
    tempObservable.subscribe(data => console.log("Created new task!", data));
    return this._http.post("/tasks", newTask);
  }

  updateTask(taskToUpdate: any) {
    let tempObservable = this._http.put(
      "/tasks" + taskToUpdate._id,
      taskToUpdate
    );
    tempObservable.subscribe(data => console.log("Updated task!", data));
    return this._http.put("/tasks/" + taskToUpdate._id, taskToUpdate);
  }

  deleteTask(taskToDelete_id: number) {
    let tempObservable = this._http.delete("/tasks" + taskToDelete_id);
    tempObservable.subscribe(data => console.log("Deleted task!", data));
    return this._http.delete("/tasks/" + taskToDelete_id);
  }
}

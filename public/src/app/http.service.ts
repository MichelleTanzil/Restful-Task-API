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
    return this._http.get("/tasks");
  }
  getTask(task_id: string) {
    return this._http.get("/tasks/" + task_id);
  }
  createTask(newTask: any) {
    return this._http.post("/tasks", newTask);
  }

  updateTask(taskToUpdateId: string, taskToUpdate: any) {
    console.log("Task to update: ", taskToUpdate)
    return this._http.put("/tasks/" + taskToUpdateId, taskToUpdate);
  }

  deleteTask(taskToDelete_id: string) {
    return this._http.delete("/tasks/" + taskToDelete_id);
  }
}

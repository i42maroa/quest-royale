import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './teamDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }

  getTeams():Observable<Team[]>{
    return this.http.get<Team[]>('http://localhost:3000/teams');
  }

  saveTeam(team:Team){
    return this.http.post<Team>('http://localhost:3000/teams', team);
  }

}

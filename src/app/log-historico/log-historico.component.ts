import { Component, OnInit } from '@angular/core';
import {HISTORICOS} from "../mock-histoico";
import {Historico} from "../historico";

@Component({
  selector: 'app-log-historico',
  templateUrl: './log-historico.component.html',
  styleUrls: ['./log-historico.component.scss']
})
export class LogHistoricoComponent {


  public historicos = HISTORICOS;

  public onHeroCreated(historico:Historico) {
    console.log(historico);

    this.historicos.push({...historico});
  }

}

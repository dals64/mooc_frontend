import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-from',
  templateUrl: './knowledge-from.component.html',
  styleUrls: ['./knowledge-from.component.css']
})
export class KnowledgeFromComponent implements OnInit {

  constructor() { }

  public connaissances = [
    'informatique', 'intélligence artificielle', 'commerce', 'finance', 'programmation', 'machine learning',
    'art', 'langues', 'géographie', 'developpement java', 'génie logiciel', 'dévéloppement PHP', 'programmation web',
    'algorithmes', 'mathématiques', 'chimie', 'IT management', 'réseaux informatiques', 'télécommunication'
  ]

  public chosen = [];

  ngOnInit(): void {
  }

  checked(value){

    if(this.chosen.includes(value)){
      const index = this.chosen.indexOf(value)
      this.chosen.splice(index,1)
    }else{
      this.chosen.push(value)
    }
  }

}

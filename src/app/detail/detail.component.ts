import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() contenance: number | undefined;
  @Input() description: string | undefined;

  affichage=false;
  contenu="Voir+";

  affich()
  {

    if(this.affichage == false)
    {
      this.affichage=true;
      this.contenu="Voir-";

    setTimeout(
      ()=>{
        this.affichage=false;
        this.contenu="Voir +";
      }, 5000
    );
    }else{
      this.affichage =false;
      this.contenu="Voir+";
    }


  }

  constructor() { }

  ngOnInit(): void {
  }

}

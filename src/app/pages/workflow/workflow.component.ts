import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $ : any;

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log('init');

    $.getJSON('http://workflow.valerianpolizzi.fr/assets/projects.json', function( data ) {

      console.log(data);

      data.projects.forEach(function(elem){
        var myvar = '<div class="col m4 s12 project">'+
          '                <div class="card ">'+
          '                    <div class="card-image waves-effect waves-block waves-light hoverable">'+
          '                        <img class="activator " src="'+ elem.image + '">'+
          '                    </div>'+
          '                    <div class="card-content project-content">'+
          '                        <span class="card-title activator grey-text text-darken-4">'+ elem.title + '<i class="material-icons right">more_vert</i></span>'+
          '                        <div class="chip blue white-text">'+ elem.theme + '</div>'+
          '                        <div class="chip white-text green">'+ elem.year + '</div>'+
          '                    </div>'+
          '                    <div class="card-reveal">'+
          '                        <span class="card-title grey-text text-darken-4">'+ elem.title + '<i class="material-icons right">close</i></span>'+
          '                        ' +
          '<a target="_blank" href="'+ elem.link + '" class="waves-effect waves-light btn red center-align"><i class="material-icons left">link</i>See in action</a><p>' +
          elem.desc + '</p>'+
          '                    </div>'+
          '                </div>'+
          '            </div>';
        $('.projects-container').append(myvar);

      });
    });

  }

}

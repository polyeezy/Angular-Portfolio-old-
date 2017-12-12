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

    function resizeCards(){
      var max = 0;

      $('.project-content').each(function(index){
        max = max < $(this).height() ? $(this).height() : max;
      });

      $('.project-content').each(function(index){
        $(this).height(max);
      });
    }

    $( document ).ready(function() {
      resizeCards();
    });
    $.getJSON("http://workflow.valerianpolizzi.fr/assets/projects.json", function( data ) {

      data.projects.forEach(function(elem){
        var myvar = '<div class="col m4 s8 offset-s2 project">'+
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

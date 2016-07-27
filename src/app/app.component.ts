import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    trigger('movementtrigger', [
      state('firstpos', style({transform: 'translateY(0)'})),
      state('secondpos', style({transform: 'translateY(25%)'})),
      transition('firstpos => secondpos', [
        animate('200ms ease-in')
      ]),
      transition('secondpos => firstpos', [
        animate('200ms ease-out')
      ])
    ]),
    trigger('showmsg', [
      state('show', style({opacity: '1', height: '*'})),
      state('hide', style({opacity: '0', height: '0px'})),
      transition('show <=> hide', [
        animate(1000)
      ])
    ])
  ]
})
export class AppComponent {
  state: string ='show';
  
  togglestates() {
    this.state = (this.state === 'show' ? 'hide' : 'show');
  }
}

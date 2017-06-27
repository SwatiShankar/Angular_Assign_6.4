import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation : ViewEncapsulation.None
})
export class AppComponent {
@Input() event;
@Output() submit = new EventEmitter();
ngOnInit(){
fname : string = 'Swati';
lname : string = 'Shankar';
}

onsubmit()
{
	this.submit.emit(this.event);
}
}

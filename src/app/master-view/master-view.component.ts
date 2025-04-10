import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent } from 'igniteui-angular';

@Component({
  selector: 'app-master-view',
  imports: [IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, RouterOutlet],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {}

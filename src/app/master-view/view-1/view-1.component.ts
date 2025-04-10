import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_BUTTON_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CategoriesType } from '../../models/northwind/categories-type';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-view-1',
  imports: [IGX_BUTTON_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxRippleDirective, IgxIconComponent],
  templateUrl: './view-1.component.html',
  styleUrls: ['./view-1.component.scss']
})
export class View1Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindCategories: CategoriesType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}


  ngOnInit() {
    this.northwindService.getCategories().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindCategories = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

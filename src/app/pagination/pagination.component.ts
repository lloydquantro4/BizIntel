import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: number;
  @Input() perPage: number;
  @Input() pages: number;
  @Input() loading: boolean;

  @Output() prevPage = new EventEmitter<boolean>();
  @Output() nextPage = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
   onPrevPage(): void {

    this.prevPage.emit(true);

   }

  onNextPage(): void {

    this.nextPage.emit(true);
  }

  onGoPage(n: number): void {
    this.goPage.emit(n);

  }


}

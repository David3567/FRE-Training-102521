import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  pageNo = '';
  snapshotPageNo = '';

  name = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.snapshotPageNo =
      this.activatedRoute.snapshot.queryParamMap.get('page') || '0';
    console.log('snapshotPageNo: ', this.snapshotPageNo);

    const name = this.activatedRoute.snapshot.queryParamMap.get('name');

    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.pageNo = params.get('page') || '0';
      this.name = params.get('name') || '';
      console.log('Query params ', this.pageNo, this.name);
    });
  }

  nextPage() {
    this.router.navigate(['product'], {
      queryParams: { page: +this.pageNo + 1, name: this.name + 'T' },
    });
  }
}

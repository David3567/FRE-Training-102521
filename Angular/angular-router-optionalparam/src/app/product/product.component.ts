import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  pageNo = '';
  snapshotPageNo = '';
  name = '';

  constructor(private Activatedroute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.snapshotPageNo =
      this.Activatedroute.snapshot.queryParamMap.get('pageNum') || '0';
    const name = this.Activatedroute.snapshot.queryParamMap.get('name');
    console.log('snapshotPageNo: ', this.snapshotPageNo);

    this.Activatedroute.queryParamMap.subscribe((params) => {
      this.pageNo = params.get('pageNum') || '0';
      this.name = params.get('name') || '';
      console.log('Query params ', this.pageNo, name);
    });
  }

  nextPage() {
    this.router.navigate(['product'], {
      queryParams: { pageNum: +this.pageNo + 1 },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  pageNo = '';
  snapshotPageNo = '';
  name = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.snapshotPageNo =
      this.route.snapshot.queryParamMap.get('pageNum') || '0';
    const name = this.route.snapshot.queryParamMap.get('name');
    console.log('snapshotPageNo: ', this.snapshotPageNo);

    this.route.queryParamMap.subscribe((params) => {
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

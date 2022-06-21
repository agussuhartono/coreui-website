import { Component } from '@angular/core';

@Component({
  selector: 'docs-loading-button03',
  templateUrl: './loading-button03.component.html'
})
export class LoadingButton03Component {

  public loading = new Array(4);

  onClick(idx: number) {

    if (!!this.loading[idx]) {
      clearTimeout(this.loading[idx]);
      this.loading[idx] = undefined;
    } else {
      this.loading[idx] = setTimeout(() => {
        this.loading[idx] = undefined;
      }, 3000);
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'docs-loading-button01',
  templateUrl: './loading-button01.component.html'
})
export class LoadingButton01Component {

  public loading = new Array(4);

  onClick(idx: number): void {

    if (!!this.loading[idx]) {
      clearTimeout(this.loading[idx]);
      this.loading[idx] = undefined;
    } else {
      this.loading[idx] = setTimeout(() => {
        this.loading[idx] = undefined;
      }, 3000);
    }
  }

  onChange(changeEvent: boolean, idx: number): void {
    console.log(changeEvent, idx)
  }
}

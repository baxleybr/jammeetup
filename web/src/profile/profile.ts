export class ProfileCustomElement {
  public viewState;
  constructor() {
    this.viewState = 'personal';
  }

  public setViewState(state) {
    this.viewState = state;
  }
}

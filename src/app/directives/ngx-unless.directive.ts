import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgxUnless]',
  standalone: true
})
export class NgxUnlessDirective {

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly vieContainerRef: ViewContainerRef
  ) { }

  @Input() set appNgxUnless(visible: boolean) {
    if (!visible) {
      this.vieContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.vieContainerRef.clear();
    }
  }

}

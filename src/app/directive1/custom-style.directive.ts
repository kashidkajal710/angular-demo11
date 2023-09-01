import { Directive, ElementRef ,HostListener,Input,Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el: ElementRef,private ren:Renderer2) {
    console.log("el", el)
    // this.el.nativeElement.innerHTML = "coustom directive example";
    // this.el.nativeElement.style.color = 'white';
    // this.el.nativeElement.style.backgroundColor = 'black';
    // this.el.nativeElement.style.border = "red";
    this.ren.setStyle(this.el.nativeElement,'color','white')
    this.ren.setStyle(this.el.nativeElement,'backgroundColor','red')
    this.ren.setStyle(this.el.nativeElement,'fontStyle','Bold')

  }
  @HostListener("keypress",['$event'])
  Run(el:any){
    if(el.which<48 || el.which>57){
      el.preventDefault();
    }
  }

}

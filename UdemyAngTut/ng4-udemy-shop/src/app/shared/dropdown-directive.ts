import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
    console.log('dropdown clicked !');
    this.isOpen = !this.isOpen;
    console.log('new val = ' + this.isOpen);
  }

}

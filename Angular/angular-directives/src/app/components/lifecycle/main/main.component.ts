import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnDestroy,
  VERSION,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'my-main',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './main.component.html',
})
export class MainComponent
  implements
    OnDestroy,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  name = 'Angular ' + VERSION.major;

  message = 'Hello';
  content = 'Hello';
  hideChild = false;

  constructor() {
    console.log('AppComponent:Contructed');
  }

  ngOnChanges(): void {
    console.log('AppComponent:ngOnChanges');
  }

  ngOnInit(): void {
    console.log('AppComponent:ngOnInit');
  }

  ngDoCheck(): void {
    console.log('AppComponent:DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('AppComponent:ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('AppComponent:AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('AppComponent:AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('AppComponent:AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('AppComponent:ngOnDestroy');
  }
}

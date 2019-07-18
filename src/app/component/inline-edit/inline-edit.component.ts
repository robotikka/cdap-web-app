import { Component, OnInit, ViewChild, Input, forwardRef, Renderer, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InlineEditComponent),
  multi: true
};

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
  styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent implements ControlValueAccessor, OnInit {
  @ViewChild('inlineEditControlInput') inlineEditControlInput;
  @ViewChild('inlineEditControlTextarea') inlineEditControlTextarea;
  // tslint:disable-next-line:no-inferrable-types
  @Input() label: string = '';
  // tslint:disable-next-line:no-inferrable-types
  @Input() type: string = 'text';
  // tslint:disable-next-line:no-inferrable-types
  @Input() required: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  @Input() disabled: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  @Input() isQuestion: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  private _value: string = '';
  // tslint:disable-next-line:no-inferrable-types
  private preValue: string = '';
  // tslint:disable-next-line:no-inferrable-types
  public editing: boolean = false;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  constructor(element: ElementRef, private _renderer: Renderer) { }

  ngOnInit() {
  }

  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  writeValue(value: any) {
    this._value = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: (_: any) => {}): void {
    this.onTouched = fn;
  }

  onBlur($event: Event) {
    this.editing = false;
  }

  edit(value) {
    if (this.disabled) {
      return;
    }

    this.preValue = value;
    this.editing = true;

    if (this.isQuestion) {
      setTimeout(_ => this._renderer.invokeElementMethod(this.inlineEditControlTextarea,
        'focus', []));
    } else if (!this.isQuestion) {
      setTimeout(_ => this._renderer.invokeElementMethod(this.inlineEditControlInput,
        'focus', []));
    }
    // setTimeout(_ => this._renderer.invokeElementMethod(controlInputVariable,
    //   'focus', []));
  }

}

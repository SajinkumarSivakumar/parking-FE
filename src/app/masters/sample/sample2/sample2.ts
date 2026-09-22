import {
  Component, ContentChild,
  contentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MasterService} from "../../master-service";


@Component({
  selector: 'app-sample2',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sample2.html',
  styleUrl: './sample2.css',
  standalone:true
})
export class Sample2 implements OnInit {


  constructor(private fb:FormBuilder,private ms:MasterService) {
  }

  ngOnInit() {



  }

}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Sample2} from "../sample2/sample2";
import {MasterService} from "../../master-service";
import {Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {concatMap, forkJoin, mergeMap} from "rxjs";
import {subscribe} from "node:diagnostics_channel";


@Component({
  selector: 'app-sample1',
  imports: [

  ],
  templateUrl: './sample1.html',
  styleUrl: './sample1.css',
  standalone:true
})
export class Sample1 implements OnInit{



  constructor(private fb:FormBuilder,private ms:MasterService,private route:Router) {
  }

  ngOnInit() {

   
  }

  submit() {
  }

}

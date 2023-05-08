import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeGeneratorRoutingModule } from './code-generator-routing.module';
import { CodeGeneratorComponent } from './code-generator.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { CodeGeneratorService } from './services/code-generator.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CodeGeneratorComponent
  ],
  imports: [
    CommonModule,
    CodeGeneratorRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [CodeGeneratorService]
})
export class CodeGeneratorModule { }

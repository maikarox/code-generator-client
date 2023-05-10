import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeGeneratorComponent } from './code-generator.component';

const routes: Routes = [{ path: '', component: CodeGeneratorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeGeneratorRoutingModule {}

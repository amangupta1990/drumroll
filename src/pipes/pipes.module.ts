import { NgModule } from '@angular/core';
import { StripTimePipe } from './strip-time/strip-time';
@NgModule({
	declarations: [StripTimePipe],
	imports: [],
	exports: [StripTimePipe]
})
export class PipesModule {}

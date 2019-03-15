import { NgModule } from '@angular/core';

import { GetHackedSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GetHackedSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GetHackedSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GetHackedSharedCommonModule {}

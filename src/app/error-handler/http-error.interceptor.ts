import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { MatDialog, MatDialogConfig } from "@angular/material";

import { ErrorBoxComponent } from "../component/error-box/error-box.component";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private dialog: MatDialog) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                //retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage: HttpErrorResponse;
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = error; //`Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = error; //`Error Code: ${error.status}\nMessage: ${error.message}`;
                    }
                    //window.alert(errorMessage);

                    this.openDialog(errorMessage);
                    return throwError(errorMessage);
                })
            )
    }

    openDialog(errorMessage) {
        console.log(errorMessage);
        //const dialog = new MatDialog();

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(ErrorBoxComponent, dialogConfig);

    }
}
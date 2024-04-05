import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {

  let loggedUserData : any;
  const localDataStorage = localStorage.getItem('userData'); // in order to convert to object from local storage
  if (localDataStorage!= null) {
    loggedUserData = JSON.parse(localDataStorage);
  }

  const cloneRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${loggedUserData.token}`  
    }
  })
  return next(cloneRequest);
};

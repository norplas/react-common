import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import useVersion from './useVersion';


const getNotifyOptions=(options:any)=>{
    
    let result = {
        persist:options.persists||true,
        preventDuplicate:options.preventDuplicate||true,
        variant:options.variant||'error',
        anchorOrigin:{
            vertical:options.vertical||'top',
            horizontal:options.center||'center'
        }
    };

  return result;
}
 

const Content = ({ name, children,...otherProps }: any) => {
    const { enqueueSnackbar } = useSnackbar();




    let options = getNotifyOptions(otherProps);

    console.log(options);
    const handleUpdate = (value: String) => {

        

        enqueueSnackbar(`There is a new version of ${value}, please refresh your browser`, options);
    }

    useVersion(handleUpdate, name);

    return (<React.Fragment>
        {children}
    </React.Fragment>)
}

const VersionNotifier = (props: any) => (
    <SnackbarProvider maxSnack={1}>
        <Content {...props} />
    </SnackbarProvider>
);

export default VersionNotifier;
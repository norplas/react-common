import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import useVersion from './useVersion';


const defaultOptions ={
    persist:true,
    anchorOrigin:{
        vertical:top,
        horizontal:'center'
    }
} 

const Content = ({ name, children,...otherProps }: any) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleUpdate = (value: String) => {

        const options = {
            ...defaultOptions,
            ...otherProps
        }
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
import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import useVersion from './useVersion';


const Content = ({ name, children }: any) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleUpdate = (value: String) => {
        enqueueSnackbar(`There is a new version of ${value}, please refresh your browser`, { persist: true });
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
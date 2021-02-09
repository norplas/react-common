import React from 'react';
import { SnackbarProvider, useSnackbar, OptionsObject } from 'notistack';
import useVersion from './useVersion';



export interface NotifyOptions extends OptionsObject {
    hideIconVariant?: Boolean | undefined,
    vertical?: "top" | 'bottom' | undefined,
    horizontal?: "left" | 'center' | 'right' | undefined
}

const getNotifyOptions = (options: NotifyOptions) => {

    let result = {
        persist: options.persist || true,

        preventDuplicate: options.preventDuplicate || true,
        variant: options.variant || 'error',
        hideIconVariant: options.hideIconVariant || true,
        anchorOrigin: {
            vertical: options.vertical || 'bottom',
            horizontal: options.horizontal || 'center'
        }
    };

    return result;
}


const defaultProps = {
    persist: true,
    preventDuplicate: true,
    variant: 'error',
    hideIconVariant: true,
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
    }
}

const Content = ({ name, children, options = defaultProps }: any) => {
    const { enqueueSnackbar } = useSnackbar();




    let optionProps = getNotifyOptions(options);

    console.log(options);
    const handleUpdate = (value: String) => {



        enqueueSnackbar(`There is a new version of ${value}, please refresh your browser`, optionProps);
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
import { useEffect, useRef } from 'react';
import socket from 'socket.io-client';


const useVersion = (callback: (value: String) => void, name: String) => {




    const savedCallback = useRef<(value: String) => void>();

    // Remember the latest callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Setup the listener;
    useEffect(() => {
        debugger;
        const io = socket('https://zncwafcnor1.azurewebsites.net/version');
        io.on('update', (value: String) => {
            debugger;
            if (name === value) {
                if (savedCallback.current != null) {
                    savedCallback.current(value);
                }
            }
        });
        io.connect();
        return () => {

        }

    }, [name])
}

export default useVersion;
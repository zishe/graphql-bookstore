import React, { useContext } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Settings from '@material-ui/icons/Settings';
import { rootContext } from '../../stores';

export const SettingsButton = () => {
    const rootStore = useContext(rootContext);

    return (
        <IconButton
            color="inherit"
            aria-label="Settings"
            onClick={() => {
                rootStore!.routerStore.goTo('settings');
            }}
        >
            <Settings />
        </IconButton>
    );
};

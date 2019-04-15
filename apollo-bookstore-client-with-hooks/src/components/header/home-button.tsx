import React, { useContext } from 'react';

import IconButton from '@material-ui/core/IconButton';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Apps from '@material-ui/icons/Apps';
import { rootContext } from '../../stores';

const styles = () =>
    createStyles({
        root: {
            marginLeft: -12
        }
    });

export interface HomeButtonProps extends WithStyles<typeof styles> {}

const HomeButtonBase = ({ classes }: HomeButtonProps) => {
    const rootStore = useContext(rootContext);

    return (
        <IconButton
            className={classes.root}
            color="inherit"
            aria-label="Home"
            onClick={() => {
                rootStore!.routerStore.goTo('home');
            }}
        >
            <Apps />
        </IconButton>
    );
};

export const HomeButton = withStyles(styles)(HomeButtonBase);

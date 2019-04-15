import React, { Suspense, useContext } from 'react';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { RouterView, ViewMap } from 'mobx-state-router';
import { Loading } from './components';
import { HomePage } from './pages/home-page';
import { NotFoundPage } from './pages/not-found-page';
import { SettingsPage } from './pages/settings-page';
import { rootContext } from './stores';

const styles = (theme: Theme) =>
    createStyles({
        '@global': {
            html: {
                height: '100%',
                boxSizing: 'border-box'
            },
            '*, *:before, *:after': {
                boxSizing: 'inherit'
            },
            body: {
                height: '100%',
                margin: 0,
                background: theme.palette.background.default,
                fontFamily: theme.typography.fontFamily,
                fontSize: theme.typography.fontSize,
                color: theme.palette.text.primary,

                // Helps fonts on OSX look more consistent with other systems
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',

                // Use momentum-based scrolling on iOS devices
                WebkitOverflowScrolling: 'touch'
            },
            '#root': {
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }
        },
        root: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
        }
    });

const viewMap: ViewMap = {
    home: <HomePage />,
    notFound: <NotFoundPage />,
    settings: <SettingsPage />
};

export interface ShellProps extends WithStyles<typeof styles> {}

export const Shell = withStyles(styles)(({ classes }: ShellProps) => {
    const rootStore = useContext(rootContext);

    return (
        <div className={classes.root}>
            <Suspense fallback={<Loading />}>
                <RouterView
                    routerStore={rootStore!.routerStore}
                    viewMap={viewMap}
                />
            </Suspense>
        </div>
    );
});

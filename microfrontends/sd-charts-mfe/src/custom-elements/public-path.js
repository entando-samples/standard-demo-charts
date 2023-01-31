if (process.env.NODE_ENV === 'production') {
    let publicpath = window.entando?.widgets['adminlte-simple-chart']?.basePath;
    if (publicpath && publicpath.slice(-1) !== '/') {
        publicpath = `${publicpath}/`;
    }
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = publicpath || './';
}

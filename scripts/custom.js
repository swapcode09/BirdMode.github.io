setTimeout(function() {
    var _0x490cx1 = document['getElementById']('preloader');
    if (_0x490cx1) {
        _0x490cx1['classList']['add']('preloader-hide')
    }
}, 150);
document['addEventListener']('DOMContentLoaded', () => {
    'use strict';
    let _0x490cx2 = true;
    let _0x490cx3 = true;
    var _0x490cx4 = 'Appeca';
    var _0x490cx5 = 1;
    var _0x490cx6 = false;
    var _0x490cx7 = 'https://www.enableds.com/products/appeca/v52/';
    var _0x490cx8 = 'https://www.enableds.com/products/appeca/v52/_service-worker.js';

    function _0x490cx9() {
        var _0x490cxa, _0x490cxb, _0x490cxc;
        var _0x490cxd = document['getElementsByClassName']('menu-hider');
        if (!_0x490cxd['length']) {
            document['body']['innerHTML'] += '<div class=\"menu-hider\"></div>'
        };
        if (_0x490cxd[0]['classList']['contains']('menu-active')) {
            _0x490cxd[0]['classList']['add']('disabled');
            _0x490cxd[0]['classList']['remove']('menu-active');
            _0x490cxd[0]['style']['transform'] = 'translateX(0px)';
            setTimeout(function() {
                _0x490cxd[0]['classList']['remove']('disabled')
            })
        };
        document['querySelectorAll']('.menu')['forEach']((_0x490cxc) => {
            _0x490cxc['style']['display'] = 'block'
        });
        document['querySelectorAll']('[data-menu-effect=\"menu-reveal\"]')['forEach']((_0x490cxc) => {
            _0x490cxc['style']['display'] = 'none'
        });
        var _0x490cxe = document['querySelectorAll']('input');
        if (_0x490cxe['length']) {
            var _0x490cxf = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            var _0x490cx10 = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            var _0x490cx11 = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
            var _0x490cx12 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
            var _0x490cx13 = /^(0|[1-9]\d*)$/;
            var _0x490cx14 = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
            var _0x490cx15 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;

            function _0x490cx16(_0x490cxc) {
                _0x490cxc['parentElement']['querySelectorAll']('.valid')[0]['classList']['remove']('disabled');
                _0x490cxc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['add']('disabled')
            }

            function _0x490cx17(_0x490cxc) {
                _0x490cxc['parentElement']['querySelectorAll']('.valid')[0]['classList']['add']('disabled');
                _0x490cxc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['remove']('disabled')
            }

            function _0x490cx18(_0x490cxc) {
                _0x490cxc['parentElement']['querySelectorAll']('em')[0]['classList']['remove']('disabled');
                _0x490cxc['parentElement']['querySelectorAll']('.valid')[0]['classList']['add']('disabled');
                _0x490cxc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['add']('disabled')
            }
            var _0x490cx19 = document['querySelectorAll']('.input-style input:not([type=\"date\"])');
            _0x490cx19['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('keyup', (_0x490cxb) => {
                    if (!_0x490cxc['value'] == '') {
                        _0x490cxc['parentElement']['classList']['add']('input-style-active');
                        _0x490cxc['parentElement']['querySelector']('em')['classList']['add']('disabled')
                    } else {
                        _0x490cxc['parentElement']['querySelectorAll']('.valid')[0]['classList']['add']('disabled');
                        _0x490cxc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['add']('disabled');
                        _0x490cxc['parentElement']['classList']['remove']('input-style-active');
                        _0x490cxc['parentElement']['querySelector']('em')['classList']['remove']('disabled')
                    }
                })
            });
            var _0x490cx1a = document['querySelectorAll']('.input-style textarea');
            _0x490cx1a['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('keyup', (_0x490cxb) => {
                    if (!_0x490cxc['value'] == '') {
                        _0x490cxc['parentElement']['classList']['add']('input-style-active');
                        _0x490cxc['parentElement']['querySelector']('em')['classList']['add']('disabled')
                    } else {
                        _0x490cxc['parentElement']['classList']['remove']('input-style-active');
                        _0x490cxc['parentElement']['querySelector']('em')['classList']['remove']('disabled')
                    }
                })
            });
            var _0x490cx1b = document['querySelectorAll']('.input-style select');
            _0x490cx1b['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('change', (_0x490cxb) => {
                    if (_0x490cxc['value'] !== 'default') {
                        _0x490cxc['parentElement']['classList']['add']('input-style-active');
                        _0x490cxc['parentElement']['querySelectorAll']('.valid')[0]['classList']['remove']('disabled');
                        _0x490cxc['parentElement']['querySelectorAll']('.invalid, em, span')[0]['classList']['add']('disabled')
                    };
                    if (_0x490cxc['value'] == 'default') {
                        _0x490cxc['parentElement']['querySelectorAll']('span, .valid, em')[0]['classList']['add']('disabled');
                        _0x490cxc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['remove']('disabled');
                        _0x490cxc['parentElement']['classList']['add']('input-style-active')
                    }
                })
            });
            var _0x490cx1c = document['querySelectorAll']('.input-style input[type=\"date\"]');
            _0x490cx1c['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('change', (_0x490cxb) => {
                    _0x490cxc['parentElement']['classList']['add']('input-style-active');
                    _0x490cxc['parentElement']['querySelectorAll']('.valid')[0]['classList']['remove']('disabled');
                    _0x490cxc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['add']('disabled')
                })
            });
            var _0x490cx1d = document['querySelectorAll']('.validate-field input, .validator-field textarea');
            if (_0x490cx1d['length']) {
                _0x490cx1d['forEach']((_0x490cxc) => {
                    return _0x490cxc['addEventListener']('keyup', (_0x490cxb) => {
                        var _0x490cx1e = _0x490cxc['getAttribute']('type');
                        switch (_0x490cx1e) {
                            case 'name':
                                _0x490cx11['test'](_0x490cxc['value']) ? _0x490cx16(_0x490cxc) : _0x490cx17(_0x490cxc);
                                break;
                            case 'number':
                                _0x490cx13['test'](_0x490cxc['value']) ? _0x490cx16(_0x490cxc) : _0x490cx17(_0x490cxc);
                                break;
                            case 'email':
                                _0x490cxf['test'](_0x490cxc['value']) ? _0x490cx16(_0x490cxc) : _0x490cx17(_0x490cxc);
                                break;
                            case 'text':
                                _0x490cx15['test'](_0x490cxc['value']) ? _0x490cx16(_0x490cxc) : _0x490cx17(_0x490cxc);
                                break;
                            case 'url':
                                _0x490cx14['test'](_0x490cxc['value']) ? _0x490cx16(_0x490cxc) : _0x490cx17(_0x490cxc);
                                break;
                            case 'tel':
                                _0x490cx10['test'](_0x490cxc['value']) ? _0x490cx16(_0x490cxc) : _0x490cx17(_0x490cxc);
                                break;
                            case 'password':
                                _0x490cx12['test'](_0x490cxc['value']) ? _0x490cx16(_0x490cxc) : _0x490cx17(_0x490cxc);
                                break
                        };
                        if (_0x490cxc['value'] === '') {
                            _0x490cx18(_0x490cxc)
                        }
                    })
                })
            }
        };
        var _0x490cx1f = document['getElementsByClassName']('splide');
        if (_0x490cx1f['length']) {
            var _0x490cx20 = document['querySelectorAll']('.single-slider');
            if (_0x490cx20['length']) {
                _0x490cx20['forEach'](function(_0x490cxb) {
                    var _0x490cx21 = new Splide('#' + _0x490cxb['id'], {
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        perPage: 1
                    })['mount']();
                    var _0x490cx22 = document['querySelectorAll']('.slider-next');
                    var _0x490cx23 = document['querySelectorAll']('.slider-prev');
                    _0x490cx22['forEach']((_0x490cxc) => {
                        return _0x490cxc['addEventListener']('click', (_0x490cxc) => {
                            _0x490cx21['go']('>')
                        })
                    });
                    _0x490cx23['forEach']((_0x490cxc) => {
                        return _0x490cxc['addEventListener']('click', (_0x490cxc) => {
                            _0x490cx21['go']('<')
                        })
                    })
                })
            };
            var _0x490cx24 = document['querySelectorAll']('.cover-slider');
            if (_0x490cx24['length']) {
                _0x490cx24['forEach'](function(_0x490cxb) {
                    var _0x490cx21 = new Splide('#' + _0x490cxb['id'], {
                        type: 'loop',
                        autoplay: false,
                        interval: 4000,
                        perPage: 1
                    })['mount']();
                    var _0x490cx22 = document['querySelectorAll']('.slider-next');
                    var _0x490cx23 = document['querySelectorAll']('.slider-prev');
                    _0x490cx22['forEach']((_0x490cxc) => {
                        return _0x490cxc['addEventListener']('click', (_0x490cxc) => {
                            _0x490cx21['go']('>')
                        })
                    });
                    _0x490cx23['forEach']((_0x490cxc) => {
                        return _0x490cxc['addEventListener']('click', (_0x490cxc) => {
                            _0x490cx21['go']('<')
                        })
                    })
                })
            };
            var _0x490cx25 = document['querySelectorAll']('.double-slider');
            if (_0x490cx25['length']) {
                _0x490cx25['forEach'](function(_0x490cxb) {
                    var _0x490cx26 = new Splide('#' + _0x490cxb['id'], {
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        arrows: false,
                        perPage: 2
                    })['mount']()
                })
            }
        };
        const _0x490cx27 = document['querySelectorAll']('a[href=\"#\"]');
        _0x490cx27['forEach']((_0x490cxc) => {
            return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                _0x490cxb['preventDefault']();
                return false
            })
        });
        var _0x490cx28 = document['querySelectorAll']('.map-full');
        if (_0x490cx28['length']) {
            var _0x490cx29 = document['querySelectorAll']('.show-map');
            var _0x490cx2a = document['querySelectorAll']('.hide-map');
            _0x490cx29[0]['addEventListener']('click', function(_0x490cxb) {
                document['getElementsByClassName']('card-overlay')[0]['classList']['add']('disabled');
                document['getElementsByClassName']('card-center')[0]['classList']['add']('disabled');
                document['getElementsByClassName']('hide-map')[0]['classList']['remove']('disabled')
            });
            _0x490cx2a[0]['addEventListener']('click', function(_0x490cxb) {
                document['getElementsByClassName']('card-overlay')[0]['classList']['remove']('disabled');
                document['getElementsByClassName']('card-center')[0]['classList']['remove']('disabled');
                document['getElementsByClassName']('hide-map')[0]['classList']['add']('disabled')
            })
        };
        var _0x490cx2b = document['querySelectorAll']('.menu');

        function _0x490cx2c() {
            if (_0x490cx2b['length']) {
                var _0x490cx2d = document['querySelectorAll']('.menu-box-left, .menu-box-right');
                _0x490cx2d['forEach'](function(_0x490cxb) {
                    if (_0x490cxb['getAttribute']('data-menu-width') === 'cover') {
                        _0x490cxb['style']['width'] = '100%'
                    } else {
                        _0x490cxb['style']['width'] = (_0x490cxb['getAttribute']('data-menu-width')) + 'px'
                    }
                });
                var _0x490cx2e = document['querySelectorAll']('.menu-box-bottom, .menu-box-top, .menu-box-modal');
                _0x490cx2e['forEach'](function(_0x490cxb) {
                    if (_0x490cxb['getAttribute']('data-menu-width') === 'cover') {
                        _0x490cxb['style']['width'] = '100%';
                        _0x490cxb['style']['height'] = '100%'
                    } else {
                        _0x490cxb['style']['width'] = (_0x490cxb['getAttribute']('data-menu-width')) + 'px';
                        _0x490cxb['style']['height'] = (_0x490cxb['getAttribute']('data-menu-height')) + 'px'
                    }
                });
                var _0x490cx2f = document['querySelectorAll']('[data-menu]');
                var _0x490cx30 = document['querySelectorAll']('.header, #footer-bar, .page-content');
                var _0x490cx31 = document['querySelectorAll']('.page-content');
                var _0x490cxd = document['querySelectorAll']('.menu-hider');
                _0x490cx2f['forEach']((_0x490cxc) => {
                    return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                        const _0x490cx32 = document['querySelectorAll']('.menu-active');
                        for (let _0x490cxa = 0; _0x490cxa < _0x490cx32['length']; _0x490cxa++) {
                            _0x490cx32[_0x490cxa]['classList']['remove']('menu-active')
                        };
                        var _0x490cx33 = _0x490cxc['getAttribute']('data-menu');
                        document['getElementById'](_0x490cx33)['classList']['add']('menu-active');
                        document['getElementsByClassName']('menu-hider')[0]['classList']['add']('menu-active');
                        var _0x490cx34 = document['getElementById'](_0x490cx33);
                        var _0x490cx35 = _0x490cx34['getAttribute']('data-menu-effect');
                        var _0x490cx36 = _0x490cx34['classList']['contains']('menu-box-left');
                        var _0x490cx37 = _0x490cx34['classList']['contains']('menu-box-right');
                        var _0x490cx38 = _0x490cx34['classList']['contains']('menu-box-top');
                        var _0x490cx39 = _0x490cx34['classList']['contains']('menu-box-bottom');
                        var _0x490cx3a = _0x490cx34['offsetWidth'];
                        var _0x490cx3b = _0x490cx34['offsetHeight'];
                        var _0x490cx3c = _0x490cx34['getAttribute']('data-menu-hide');
                        if (_0x490cx3c) {
                            setTimeout(function() {
                                document['getElementById'](_0x490cx33)['classList']['remove']('menu-active');
                                document['getElementsByClassName']('menu-hider')[0]['classList']['remove']('menu-active')
                            }, _0x490cx3c)
                        };
                        if (_0x490cx35 === 'menu-push') {
                            var _0x490cx3a = document['getElementById'](_0x490cx33)['getAttribute']('data-menu-width');
                            if (_0x490cx36) {
                                for (let _0x490cxa = 0; _0x490cxa < _0x490cx30['length']; _0x490cxa++) {
                                    _0x490cx30[_0x490cxa]['style']['transform'] = 'translateX(' + _0x490cx3a + 'px)'
                                }
                            };
                            if (_0x490cx37) {
                                for (let _0x490cxa = 0; _0x490cxa < _0x490cx30['length']; _0x490cxa++) {
                                    _0x490cx30[_0x490cxa]['style']['transform'] = 'translateX(-' + _0x490cx3a + 'px)'
                                }
                            };
                            if (_0x490cx39) {
                                for (let _0x490cxa = 0; _0x490cxa < _0x490cx30['length']; _0x490cxa++) {
                                    _0x490cx30[_0x490cxa]['style']['transform'] = 'translateY(-' + _0x490cx3b + 'px)'
                                }
                            };
                            if (_0x490cx38) {
                                for (let _0x490cxa = 0; _0x490cxa < _0x490cx30['length']; _0x490cxa++) {
                                    _0x490cx30[_0x490cxa]['style']['transform'] = 'translateY(' + _0x490cx3b + 'px)'
                                }
                            }
                        };
                        if (_0x490cx35 === 'menu-parallax') {
                            var _0x490cx3a = document['getElementById'](_0x490cx33)['getAttribute']('data-menu-width');
                            if (_0x490cx36) {
                                for (let _0x490cxa = 0; _0x490cxa < _0x490cx30['length']; _0x490cxa++) {
                                    _0x490cx30[_0x490cxa]['style']['transform'] = 'translateX(' + _0x490cx3a / 10 + 'px)'
                                }
                            };
                            if (_0x490cx37) {
                                for (let _0x490cxa = 0; _0x490cxa < _0x490cx30['length']; _0x490cxa++) {
                                    _0x490cx30[_0x490cxa]['style']['transform'] = 'translateX(-' + _0x490cx3a / 10 + 'px)'
                                }
                            };
                            if (_0x490cx39) {
                                for (let _0x490cxa = 0; _0x490cxa < _0x490cx30['length']; _0x490cxa++) {
                                    _0x490cx30[_0x490cxa]['style']['transform'] = 'translateY(-' + _0x490cx3b / 5 + 'px)'
                                }
                            };
                            if (_0x490cx38) {
                                for (let _0x490cxa = 0; _0x490cxa < _0x490cx30['length']; _0x490cxa++) {
                                    _0x490cx30[_0x490cxa]['style']['transform'] = 'translateY(' + _0x490cx3b / 5 + 'px)'
                                }
                            }
                        };
                        const _0x490cx3d = document['querySelectorAll']('[data-menu-active]')[0];
                        if (_0x490cx3d) {
                            var _0x490cx3e = _0x490cx3d['getAttribute']('data-menu-active');
                            document['querySelectorAll']('#' + _0x490cx3e)[0]['classList']['add']('nav-item-active')
                        }
                    })
                });
                const _0x490cx3f = document['querySelectorAll']('.close-menu, .menu-hider');
                _0x490cx3f['forEach']((_0x490cxc) => {
                    return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                        var _0x490cx40 = document['querySelectorAll']('[data-menu-effect=\"menu-reveal\"]');
                        setTimeout(function() {
                            for (let _0x490cxa = 0; _0x490cxa < _0x490cx40['length']; _0x490cxa++) {
                                _0x490cx40[_0x490cxa]['style']['display'] = 'none'
                            }
                        }, 270);
                        const _0x490cx32 = document['querySelectorAll']('.menu-active');
                        _0x490cxd[0]['style']['transform'] = 'translateX(0px)';
                        for (let _0x490cxa = 0; _0x490cxa < _0x490cx32['length']; _0x490cxa++) {
                            _0x490cx32[_0x490cxa]['classList']['remove']('menu-active')
                        };
                        for (let _0x490cxa = 0; _0x490cxa < _0x490cx30['length']; _0x490cxa++) {
                            _0x490cx30[_0x490cxa]['style']['transform'] = 'translateX(-' + 0 + 'px)'
                        }
                    })
                })
            }
        }
        _0x490cx2c();
        var _0x490cx41 = document['querySelectorAll']('#footer-bar')[0];
        if (_0x490cx41) {
            document['querySelectorAll']('.page-content')[0]['classList']['add']('has-footer')
        };
        const _0x490cx42 = document['querySelectorAll']('[data-back-button]');
        if (_0x490cx42['length']) {
            _0x490cx42['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                    _0x490cxb['stopPropagation'];
                    _0x490cxb['preventDefault'];
                    window['history']['go'](-1)
                })
            })
        };

        function _0x490cx43() {
            const _0x490cx44 = document['querySelectorAll']('.back-to-top-icon, .back-to-top-badge, .back-to-top');
            if (_0x490cx44) {
                _0x490cx44['forEach']((_0x490cxc) => {
                    return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                        window['scrollTo']({
                            top: 0,
                            behavior: `${'smooth'}`
                        })
                    })
                })
            }
        }

        function _0x490cx45() {
            let _0x490cx46, _0x490cx47;
            if (/iP(hone|od|ad)/ ['test'](navigator['platform'])) {
                _0x490cx47 = (navigator['appVersion'])['match'](/OS (\d+)_(\d+)_?(\d+)?/);
                _0x490cx46 = {
                    status: true,
                    version: parseInt(_0x490cx47[1], 10),
                    info: parseInt(_0x490cx47[1], 10) + '.' + parseInt(_0x490cx47[2], 10) + '.' + parseInt(_0x490cx47[3] || 0, 10)
                }
            } else {
                _0x490cx46 = {
                    status: false,
                    version: false,
                    info: ''
                }
            };
            return _0x490cx46
        }
        let _0x490cx48 = _0x490cx45();
        if (_0x490cx48['version'] > 14) {
            document['querySelectorAll']('#page')[0]['classList']['add']('min-ios15')
        };
        const _0x490cx49 = document['getElementsByClassName']('card');

        function _0x490cx4a() {
            var _0x490cx4b, _0x490cx4c, _0x490cx4d;
            var _0x490cx4d = document['querySelectorAll']('.header:not(.header-transparent)')[0];
            var _0x490cx4e = document['querySelectorAll']('#footer-bar')[0];
            _0x490cx4d ? _0x490cx4b = document['querySelectorAll']('.header')[0]['offsetHeight'] : _0x490cx4b = 0;
            _0x490cx4e ? _0x490cx4c = document['querySelectorAll']('#footer-bar')[0]['offsetHeight'] : _0x490cx4c = 0;
            for (let _0x490cxa = 0; _0x490cxa < _0x490cx49['length']; _0x490cxa++) {
                if (_0x490cx49[_0x490cxa]['getAttribute']('data-card-height') === 'cover') {
                    if (window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x490cx4f = window['outerHeight']
                    };
                    if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x490cx4f = window['innerHeight']
                    };
                    var _0x490cx50 = _0x490cx4f + 'px'
                };
                if (_0x490cx49[_0x490cxa]['getAttribute']('data-card-height') === 'cover-full') {
                    if (window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x490cx4f = window['outerHeight']
                    };
                    if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x490cx4f = window['innerHeight']
                    };
                    var _0x490cx50 = _0x490cx4f + 'px';
                    _0x490cx49[_0x490cxa]['style']['height'] = _0x490cx50
                };
                if (_0x490cx49[_0x490cxa]['hasAttribute']('data-card-height')) {
                    var _0x490cx51 = _0x490cx49[_0x490cxa]['getAttribute']('data-card-height');
                    _0x490cx49[_0x490cxa]['style']['height'] = _0x490cx51 + 'px';
                    if (_0x490cx51 === 'cover') {
                        var _0x490cx52 = _0x490cx51;
                        _0x490cx49[_0x490cxa]['style']['height'] = _0x490cx50
                    }
                }
            }
        }
        if (_0x490cx49['length']) {
            _0x490cx4a();
            window['addEventListener']('resize', _0x490cx4a)
        };

        function _0x490cx53() {
            const _0x490cx54 = document['querySelectorAll']('[data-toggle-theme]');

            function _0x490cx55() {
                document['body']['classList']['add']('theme-dark');
                document['body']['classList']['remove']('theme-light', 'detect-theme');
                for (let _0x490cxa = 0; _0x490cxa < _0x490cx54['length']; _0x490cxa++) {
                    _0x490cx54[_0x490cxa]['checked'] = 'checked'
                };
                localStorage['setItem'](_0x490cx4 + '-Theme', 'dark-mode')
            }

            function _0x490cx56() {
                document['body']['classList']['add']('theme-light');
                document['body']['classList']['remove']('theme-dark', 'detect-theme');
                for (let _0x490cxa = 0; _0x490cxa < _0x490cx54['length']; _0x490cxa++) {
                    _0x490cx54[_0x490cxa]['checked'] = false
                };
                localStorage['setItem'](_0x490cx4 + '-Theme', 'light-mode')
            }

            function _0x490cx57() {
                var _0x490cx58 = document['querySelectorAll']('.btn, .header, #footer-bar, .menu-box, .menu-hider, .menu-active, .page-content');
                for (let _0x490cxa = 0; _0x490cxa < _0x490cx58['length']; _0x490cxa++) {
                    _0x490cx58[_0x490cxa]['style']['transition'] = 'all 0s ease'
                }
            }

            function _0x490cx59() {
                var _0x490cx5a = document['querySelectorAll']('.btn, .header, #footer-bar, .menu-box, .menu-hider, .menu-active, .page-content');
                for (let _0x490cxa = 0; _0x490cxa < _0x490cx5a['length']; _0x490cxa++) {
                    _0x490cx5a[_0x490cxa]['style']['transition'] = ''
                }
            }

            function _0x490cx5b() {
                const _0x490cx5c = window['matchMedia']('(prefers-color-scheme: dark)')['matches'];
                const _0x490cx5d = window['matchMedia']('(prefers-color-scheme: light)')['matches'];
                const _0x490cx5e = window['matchMedia']('(prefers-color-scheme: no-preference)')['matches'];
                window['matchMedia']('(prefers-color-scheme: dark)')['addListener']((_0x490cxb) => {
                    return _0x490cxb['matches'] && _0x490cx55()
                });
                window['matchMedia']('(prefers-color-scheme: light)')['addListener']((_0x490cxb) => {
                    return _0x490cxb['matches'] && _0x490cx56()
                });
                if (_0x490cx5c) {
                    _0x490cx55()
                };
                if (_0x490cx5d) {
                    _0x490cx56()
                }
            }
            var _0x490cx5f = document['querySelectorAll']('[data-toggle-theme]');
            _0x490cx5f['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                    if (document['body']['className'] == 'theme-light') {
                        _0x490cx57();
                        _0x490cx55()
                    } else {
                        if (document['body']['className'] == 'theme-dark') {
                            _0x490cx57();
                            _0x490cx56()
                        }
                    };
                    setTimeout(function() {
                        _0x490cx59()
                    }, 350)
                })
            });
            if (localStorage['getItem'](_0x490cx4 + '-Theme') == 'dark-mode') {
                for (let _0x490cxa = 0; _0x490cxa < _0x490cx54['length']; _0x490cxa++) {
                    _0x490cx54[_0x490cxa]['checked'] = 'checked'
                };
                document['body']['className'] = 'theme-dark'
            };
            if (localStorage['getItem'](_0x490cx4 + '-Theme') == 'light-mode') {
                document['body']['className'] = 'theme-light'
            };
            if (document['body']['className'] == 'detect-theme') {
                _0x490cx5b()
            };
            const _0x490cx60 = document['querySelectorAll']('.detect-dark-mode');
            _0x490cx60['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                    document['body']['classList']['remove']('theme-light', 'theme-dark');
                    document['body']['classList']['add']('detect-theme');
                    setTimeout(function() {
                        _0x490cx5b()
                    }, 50)
                })
            })
        }
        if (localStorage['getItem'](_0x490cx4 + '-Theme') == 'dark-mode') {
            document['body']['className'] = 'theme-dark'
        };
        if (localStorage['getItem'](_0x490cx4 + '-Theme') == 'light-mode') {
            document['body']['className'] = 'theme-light'
        };
        const _0x490cx61 = document['querySelectorAll']('.accordion-btn');
        if (_0x490cx61['length']) {
            _0x490cx61['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cx62) => {
                    _0x490cxc['querySelector']('i:last-child')['classList']['toggle']('fa-rotate-180')
                })
            })
        };
        const _0x490cx63 = document['getElementsByClassName']('upload-file');
        if (_0x490cx63['length']) {
            _0x490cx63[0]['addEventListener']('change', _0x490cx64, false);

            function _0x490cx64(_0x490cx62) {
                if (this['files'] && this['files'][0]) {
                    var _0x490cx65 = document['getElementById']('image-data');
                    _0x490cx65['src'] = URL['createObjectURL'](this['files'][0])
                };
                const _0x490cx66 = _0x490cx62['target']['files'];
                const _0x490cx67 = _0x490cx66[0]['name'];
                document['getElementsByClassName']('file-data')[0]['classList']['add']('disabled');
                document['getElementsByClassName']('upload-file-data')[0]['classList']['remove']('disabled');
                document['getElementsByClassName']('upload-file-name')[0]['innerHTML'] = _0x490cx66[0]['name'];
                document['getElementsByClassName']('upload-file-modified')[0]['innerHTML'] = _0x490cx66[0]['lastModifiedDate'];
                document['getElementsByClassName']('upload-file-size')[0]['innerHTML'] = _0x490cx66[0]['size'] / 1000 + 'kb';
                document['getElementsByClassName']('upload-file-type')[0]['innerHTML'] = _0x490cx66[0]['type']
            }
        };
        var _0x490cx68 = document['querySelectorAll']('.get-location');
        if (_0x490cx68['length']) {
            var _0x490cx69 = document['getElementsByClassName']('location-support')[0];
            if (typeof(_0x490cx69) != 'undefined' && _0x490cx69 != null) {
                if ('geolocation' in navigator) {
                    _0x490cx69['innerHTML'] = 'Your browser and device <strong class=\"color-green2-dark\">support</strong> Geolocation.'
                } else {
                    _0x490cx69['innerHTML'] = 'Your browser and device <strong class=\"color-red2-dark\">support</strong> Geolocation.'
                }
            };

            function _0x490cx6a() {
                const _0x490cx6b = document['querySelector']('.location-coordinates');

                function _0x490cx6c(_0x490cx6d) {
                    const _0x490cx6e = _0x490cx6d['coords']['latitude'];
                    const _0x490cx6f = _0x490cx6d['coords']['longitude'];
                    _0x490cx6b['innerHTML'] = '<strong>Longitude:</strong> ' + _0x490cx6f + '<br><strong>Latitude:</strong> ' + _0x490cx6e;
                    var _0x490cx70 = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyAM3nxDVrkjyKwdIZp8QOplmBKLRVI5S_Y&center=';
                    var _0x490cx71 = _0x490cx6e + ',';
                    var _0x490cx72 = _0x490cx6f;
                    var _0x490cx73 = '&zoom=16&maptype=satellite';
                    var _0x490cx74 = '';
                    var _0x490cx75 = _0x490cx70 + _0x490cx71 + _0x490cx72 + _0x490cx73;
                    var _0x490cx76 = _0x490cx70 + _0x490cx71 + _0x490cx72 + _0x490cx74;
                    document['getElementsByClassName']('location-map')[0]['setAttribute']('src', _0x490cx75);
                    document['getElementsByClassName']('location-button')[0]['setAttribute']('href', _0x490cx76);
                    document['getElementsByClassName']('location-button')[0]['classList']['remove']('disabled')
                }

                function _0x490cx77() {
                    _0x490cx6b['textContent'] = 'Unable to retrieve your location'
                }
                if (!navigator['geolocation']) {
                    _0x490cx6b['textContent'] = 'Geolocation is not supported by your browser'
                } else {
                    _0x490cx6b['textContent'] = 'Locating';
                    navigator['geolocation']['getCurrentPosition'](_0x490cx6c, _0x490cx77)
                }
            }
            var _0x490cx78 = document['getElementsByClassName']('get-location')[0];
            if (typeof(_0x490cx78) != 'undefined' && _0x490cx78 != null) {
                _0x490cx78['addEventListener']('click', function() {
                    this['classList']['add']('disabled');
                    _0x490cx6a()
                })
            }
        };
        const _0x490cx79 = document['querySelectorAll']('.card-scale');
        if (_0x490cx79['length']) {
            _0x490cx79['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('mouseenter', (_0x490cx62) => {
                    _0x490cxc['querySelectorAll']('img')[0]['classList']['add']('card-scale-image')
                })
            });
            _0x490cx79['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('mouseleave', (_0x490cx62) => {
                    _0x490cxc['querySelectorAll']('img')[0]['classList']['remove']('card-scale-image')
                })
            })
        };
        const _0x490cx7a = document['querySelectorAll']('.card-hide');
        if (_0x490cx7a['length']) {
            _0x490cx7a['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('mouseenter', (_0x490cx62) => {
                    _0x490cxc['querySelectorAll']('.card-center, .card-bottom, .card-top, .card-overlay')[0]['classList']['add']('card-hide-image')
                })
            });
            _0x490cx7a['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('mouseleave', (_0x490cx62) => {
                    _0x490cxc['querySelectorAll']('.card-center, .card-bottom, .card-top, .card-overlay')[0]['classList']['remove']('card-hide-image')
                })
            })
        };
        const _0x490cx7b = document['querySelectorAll']('.card-rotate');
        if (_0x490cx7b['length']) {
            _0x490cx7b['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('mouseenter', (_0x490cx62) => {
                    _0x490cxc['querySelectorAll']('img')[0]['classList']['add']('card-rotate-image')
                })
            });
            _0x490cx7b['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('mouseleave', (_0x490cx62) => {
                    _0x490cxc['querySelectorAll']('img')[0]['classList']['remove']('card-rotate-image')
                })
            })
        };
        const _0x490cx7c = document['querySelectorAll']('.card-grayscale');
        if (_0x490cx7c['length']) {
            _0x490cx7c['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('mouseenter', (_0x490cx62) => {
                    _0x490cxc['querySelectorAll']('img')[0]['classList']['add']('card-grayscale-image')
                })
            });
            _0x490cx7c['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('mouseleave', (_0x490cx62) => {
                    _0x490cxc['querySelectorAll']('img')[0]['classList']['remove']('card-grayscale-image')
                })
            })
        };
        const _0x490cx7d = document['querySelectorAll']('.card-blur');
        if (_0x490cx7d['length']) {
            _0x490cx7d['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('mouseenter', (_0x490cx62) => {
                    _0x490cxc['querySelectorAll']('img')[0]['classList']['add']('card-blur-image')
                })
            });
            _0x490cx7d['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('mouseleave', (_0x490cx62) => {
                    _0x490cxc['querySelectorAll']('img')[0]['classList']['remove']('card-blur-image')
                })
            })
        };
        var _0x490cx7e = document['querySelectorAll']('.check-visited');
        if (_0x490cx7e['length']) {
            function _0x490cx7f() {
                var _0x490cx80 = JSON['parse'](localStorage['getItem'](_0x490cx4 + '_Visited_Links')) || [];
                var _0x490cx81 = document['querySelectorAll']('.check-visited a');
                for (let _0x490cxa = 0; _0x490cxa < _0x490cx81['length']; _0x490cxa++) {
                    var _0x490cx82 = _0x490cx81[_0x490cxa];
                    _0x490cx82['addEventListener']('click', function(_0x490cxb) {
                        var _0x490cx83 = this['href'];
                        if (_0x490cx80['indexOf'](_0x490cx83) == -1) {
                            _0x490cx80['push'](_0x490cx83);
                            localStorage['setItem'](_0x490cx4 + '_Visited_Links', JSON['stringify'](_0x490cx80))
                        }
                    });
                    if (_0x490cx80['indexOf'](_0x490cx82['href']) !== -1) {
                        _0x490cx82['className'] += ' visited-link'
                    }
                }
            }
            _0x490cx7f()
        };
        let _0x490cx84 = document['querySelectorAll']('.fixed-ad')[0];
        let _0x490cx85 = document['querySelectorAll']('.scroll-ad')[0];
        if (_0x490cx84 || _0x490cx85) {
            var _0x490cx86 = document['getElementById']('activate-scroll-ad');
            _0x490cx86['addEventListener']('click', function() {
                _0x490cx85['classList']['add']('scroll-ad-visible');
                _0x490cx85['classList']['remove']('disabled');
                _0x490cx84['classList']['add']('disabled')
            });
            var _0x490cx87 = document['getElementById']('activate-fixed-ad');
            _0x490cx87['addEventListener']('click', function() {
                _0x490cx85['classList']['add']('disabled');
                _0x490cx84['classList']['remove']('disabled')
            })
        };
        var _0x490cx88 = document['querySelectorAll']('.scroll-ad, .header-auto-show');
        if (_0x490cx88['length']) {
            var _0x490cx89 = document['querySelectorAll']('.scroll-ad');
            var _0x490cx8a = document['querySelectorAll']('.header-auto-show');
            window['addEventListener']('scroll', function() {
                if (document['querySelectorAll']('.scroll-ad, .header-auto-show')['length']) {
                    function _0x490cx8b() {
                        _0x490cx89[0]['classList']['add']('scroll-ad-visible')
                    }

                    function _0x490cx8c() {
                        _0x490cx89[0]['classList']['remove']('scroll-ad-visible')
                    }

                    function _0x490cx8d() {
                        _0x490cx8a[0]['classList']['add']('header-active')
                    }

                    function _0x490cx8e() {
                        _0x490cx8a[0]['classList']['remove']('header-active')
                    }
                    var _0x490cx8f = window['outerWidth'];
                    var _0x490cx90 = document['documentElement']['scrollTop'];
                    let _0x490cx91 = _0x490cx90 <= 80;
                    var _0x490cx92 = _0x490cx90 >= 80;
                    let _0x490cx93 = _0x490cx90 <= 40;
                    var _0x490cx94 = _0x490cx90 >= 40;
                    let _0x490cx95 = (_0x490cx8f - _0x490cx90 + 1000) <= 150;
                    if (_0x490cx89['length']) {
                        _0x490cx91 ? _0x490cx8c() : null;
                        _0x490cx92 ? _0x490cx8b() : null;
                        _0x490cx95 ? _0x490cx8c() : null
                    };
                    if (_0x490cx8a['length']) {
                        _0x490cx91 ? _0x490cx8e() : null;
                        _0x490cx92 ? _0x490cx8d() : null
                    }
                }
            })
        };
        var _0x490cx96 = document['querySelectorAll']('.stepper-add');
        var _0x490cx97 = document['querySelectorAll']('.stepper-sub');
        if (_0x490cx96['length']) {
            _0x490cx96['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cx62) => {
                    var _0x490cx98 = _0x490cxc['parentElement']['querySelector']('input')['value'];
                    _0x490cxc['parentElement']['querySelector']('input')['value'] = +_0x490cx98 + 1
                })
            });
            _0x490cx97['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cx62) => {
                    var _0x490cx98 = _0x490cxc['parentElement']['querySelector']('input')['value'];
                    _0x490cxc['parentElement']['querySelector']('input')['value'] = +_0x490cx98 - 1
                })
            })
        };
        var _0x490cx99 = document['querySelectorAll']('[data-trigger-switch]:not([data-toggle-theme])');
        if (_0x490cx99['length']) {
            _0x490cx99['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cx62) => {
                    var _0x490cx9a = _0x490cxc['getAttribute']('data-trigger-switch');
                    var _0x490cx9b = document['getElementById'](_0x490cx9a);
                    _0x490cx9b['checked'] ? _0x490cx9b['checked'] = false : _0x490cx9b['checked'] = true
                })
            })
        };
        var _0x490cx9c = document['querySelectorAll']('.classic-toggle');
        if (_0x490cx9c['length']) {
            _0x490cx9c['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cx62) => {
                    _0x490cxc['querySelector']('i:last-child')['classList']['toggle']('fa-rotate-180');
                    _0x490cxc['querySelector']('i:last-child')['style']['transition'] = 'all 250ms ease'
                })
            })
        };
        var _0x490cx9d = document['querySelectorAll']('[data-toast]');
        if (_0x490cx9d['length']) {
            _0x490cx9d['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cx62) => {
                    var _0x490cx9e = _0x490cxc['getAttribute']('data-toast');
                    var _0x490cx9f = document['getElementById'](_0x490cx9e);
                    var _0x490cx9f = new bootstrap.Toast(_0x490cx9f);
                    _0x490cx9f['show']()
                })
            })
        };
        var _0x490cxa0 = []['slice']['call'](document['querySelectorAll']('[data-bs-toggle=\"dropdown\"]'));
        if (_0x490cxa0['length']) {
            var _0x490cxa1 = _0x490cxa0['map'](function(_0x490cxa2) {
                return new bootstrap.Dropdown(_0x490cxa2)
            })
        };
        var _0x490cxa3 = document['querySelectorAll']('.show-business-opened, .show-business-closed, .working-hours');
        if (_0x490cxa3['length']) {
            var _0x490cx46 = new Date();
            var _0x490cxa4 = _0x490cx46['getDay']();
            var _0x490cxa5 = _0x490cx46['getHours']() + '.' + _0x490cx46['getMinutes']();
            var _0x490cxa6 = [
                ['Sunday'],
                ['Monday', 9.00, 17.00],
                ['Tuesday', 9.00, 17.00],
                ['Wednesday', 9.00, 17.00],
                ['Thursday', 9.00, 17.00],
                ['Friday', 9.00, 17.00],
                ['Saturday', 9.00, 13.00]
            ];
            var _0x490cxa7 = _0x490cxa6[_0x490cxa4];
            var _0x490cxa8 = document['querySelectorAll']('.show-business-opened');
            var _0x490cxa9 = document['querySelectorAll']('.show-business-closed');
            if (_0x490cxa5 > _0x490cxa7[1] && _0x490cxa5 < _0x490cxa7[2] || _0x490cxa5 > _0x490cxa7[3] && _0x490cxa5 < _0x490cxa7[4]) {
                _0x490cxa8['forEach'](function(_0x490cxb) {
                    _0x490cxb['classList']['remove']('disabled')
                });
                _0x490cxa9['forEach'](function(_0x490cxb) {
                    _0x490cxb['classList']['add']('disabled')
                })
            } else {
                _0x490cxa8['forEach'](function(_0x490cxb) {
                    _0x490cxb['classList']['add']('disabled')
                });
                _0x490cxa9['forEach'](function(_0x490cxb) {
                    _0x490cxb['classList']['remove']('disabled')
                })
            };
            var _0x490cxa3 = document['querySelectorAll']('.working-hours[data-day]');
            _0x490cxa3['forEach'](function(_0x490cxaa) {
                var _0x490cxab = _0x490cxaa['getAttribute']('data-day');
                if (_0x490cxab === _0x490cxa7[0]) {
                    var _0x490cxac = '[data-day=\"' + _0x490cxa7[0] + '\"]';
                    if (_0x490cxa5 > _0x490cxa7[1] && _0x490cxa5 < _0x490cxa7[2] || _0x490cxa5 > _0x490cxa7[3] && _0x490cxa5 < _0x490cxa7[4]) {
                        document['querySelectorAll'](_0x490cxac)[0]['classList']['add']('bg-green-dark');
                        document['querySelectorAll'](_0x490cxac + ' p')['forEach'](function(_0x490cxad) {
                            _0x490cxad['classList']['add']('color-white')
                        })
                    } else {
                        document['querySelectorAll'](_0x490cxac)[0]['classList']['add']('bg-red-dark');
                        document['querySelectorAll'](_0x490cxac + ' p')['forEach'](function(_0x490cxad) {
                            _0x490cxad['classList']['add']('color-white')
                        })
                    }
                }
            })
        };
        var _0x490cxae = document['querySelectorAll']('[data-vibrate]');
        if (_0x490cxae['length']) {
            var _0x490cxaf = document['getElementsByClassName']('start-vibrating')[0];
            var _0x490cxb0 = document['getElementsByClassName']('stop-vibrating')[0];
            _0x490cxaf['addEventListener']('click', function() {
                var _0x490cxb1 = document['getElementsByClassName']('vibrate-demo')[0]['value'];
                window['navigator']['vibrate'](_0x490cxb1)
            });
            _0x490cxb0['addEventListener']('click', function() {
                window['navigator']['vibrate'](0)
            });
            _0x490cxae['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                    var _0x490cxb1 = _0x490cxc['getAttribute']('data-vibrate');
                    window['navigator']['vibrate'](_0x490cxb1)
                })
            })
        };
        var _0x490cxb2 = document['querySelectorAll']('[data-timed-ad]');
        if (_0x490cxb2['length']) {
            _0x490cxb2['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                    var _0x490cxb3 = _0x490cxc['getAttribute']('data-timed-ad');
                    var _0x490cxb4 = _0x490cxc['getAttribute']('data-menu');
                    var _0x490cxb5 = _0x490cxb3;
                    var _0x490cxb6 = setInterval(function() {
                        if (_0x490cxb5 <= 1) {
                            clearInterval(_0x490cxb6);
                            document['getElementById'](_0x490cxb4)['querySelectorAll']('.fa-times')[0]['classList']['remove']('disabled');
                            document['getElementById'](_0x490cxb4)['querySelectorAll']('.close-menu')[0]['classList']['remove']('no-click');
                            document['getElementById'](_0x490cxb4)['querySelectorAll']('span')[0]['style']['display'] = 'none'
                        } else {};
                        document['getElementById'](_0x490cxb4)['querySelectorAll']('span')[0]['innerHTML'] = _0x490cxb5 -= 1
                    }, 1000)
                })
            })
        };
        var _0x490cxb7 = document['querySelectorAll']('[data-auto-show-ad]');
        if (_0x490cxb7['length']) {
            var _0x490cxb8 = _0x490cxb7[0]['getAttribute']('data-auto-show-ad');
            var _0x490cxb6 = setInterval(function() {
                if (_0x490cxb8 <= 1) {
                    clearInterval(_0x490cxb6);
                    var _0x490cxb9 = _0x490cxb7[0]['getAttribute']('data-menu');
                    document['getElementById'](_0x490cxb9)['classList']['add']('menu-active');
                    var _0x490cxba = _0x490cxb7[0]['getAttribute']('data-timed-ad');
                    var _0x490cxbb = setInterval(function() {
                        if (_0x490cxba <= 0) {
                            clearInterval(_0x490cxbb);
                            document['getElementById'](_0x490cxb9)['querySelectorAll']('.fa-times')[0]['classList']['remove']('disabled');
                            document['getElementById'](_0x490cxb9)['querySelectorAll']('.close-menu')[0]['classList']['remove']('no-click');
                            document['getElementById'](_0x490cxb9)['querySelectorAll']('span')[0]['style']['display'] = 'none'
                        };
                        document['getElementById'](_0x490cxb9)['querySelectorAll']('span')[0]['innerHTML'] = _0x490cxba -= 1
                    }, 1000)
                };
                _0x490cxb8 -= 1
            }, 1000)
        };
        var _0x490cxbc = document['querySelectorAll']('.reading-progress-text');
        if (_0x490cxbc['length']) {
            var _0x490cxbd = _0x490cxbc[0]['innerHTML']['split'](' ')['length'];
            var _0x490cxbe = Math['floor'](_0x490cxbd / 250);
            var _0x490cxbf = _0x490cxbd % 60;
            document['getElementsByClassName']('reading-progress-words')[0]['innerHTML'] = _0x490cxbd;
            document['getElementsByClassName']('reading-progress-time')[0]['innerHTML'] = _0x490cxbe + ':' + _0x490cxbf
        };
        var _0x490cxc0 = document['querySelectorAll']('.text-size-changer');
        if (_0x490cxc0['length']) {
            var _0x490cxc1 = document['querySelectorAll']('.text-size-increase');
            var _0x490cxc2 = document['querySelectorAll']('.text-size-decrease');
            var _0x490cxc3 = document['querySelectorAll']('.text-size-default');
            _0x490cxc1[0]['addEventListener']('click', function() {
                _0x490cxc0[0]['querySelectorAll']('*')['forEach'](function(_0x490cxc4) {
                    const _0x490cxc5 = window['getComputedStyle'](_0x490cxc4)['fontSize']['split']('px', 2)[0];
                    _0x490cxc4['style']['fontSize'] = (+_0x490cxc5 + 1) + 'px'
                })
            });
            _0x490cxc2[0]['addEventListener']('click', function() {
                _0x490cxc0[0]['querySelectorAll']('*')['forEach'](function(_0x490cxc4) {
                    const _0x490cxc5 = window['getComputedStyle'](_0x490cxc4)['fontSize']['split']('px', 2)[0];
                    _0x490cxc4['style']['fontSize'] = (+_0x490cxc5 - 1) + 'px'
                })
            });
            _0x490cxc3[0]['addEventListener']('click', function() {
                _0x490cxc0[0]['querySelectorAll']('*')['forEach'](function(_0x490cxc4) {
                    const _0x490cxc5 = window['getComputedStyle'](_0x490cxc4)['fontSize']['split']('px', 2)[0];
                    _0x490cxc4['style']['fontSize'] = ''
                })
            })
        };
        var _0x490cxc6 = document['querySelectorAll']('.qr-image');
        if (_0x490cxc6['length']) {
            var _0x490cxc7 = window['location']['href'];
            var _0x490cxc8 = document['getElementsByClassName']('generate-qr-auto')[0];
            var _0x490cxc9 = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
            if (_0x490cxc8) {
                _0x490cxc8['setAttribute']('src', _0x490cxc9 + _0x490cxc7)
            };
            var _0x490cxca = document['getElementsByClassName']('generate-qr-button')[0];
            if (_0x490cxca) {
                _0x490cxca['addEventListener']('click', function() {
                    var _0x490cxcb = document['getElementsByClassName']('qr-url')[0]['value'];
                    var _0x490cxc9 = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
                    var _0x490cxcc = '<img class=\"mx-auto polaroid-effect shadow-l mt-4 delete-qr\" width=\"200\" src=\"' + _0x490cxc9 + _0x490cxcb + '\" alt=\"img\"><p class=\"font-11 text-center mb-0\">' + _0x490cxcb + '</p>';
                    document['getElementsByClassName']('generate-qr-result')[0]['innerHTML'] = _0x490cxcc;
                    _0x490cxca['innerHTML'] = 'Generate New Button'
                })
            }
        };
        if (window['location']['protocol'] === 'file:') {
            var _0x490cxcd = document['querySelectorAll']('a');
            _0x490cxcd['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('mouseover', (_0x490cx62) => {})
            })
        };
        var _0x490cxce = document['querySelectorAll']('[data-search]');
        if (_0x490cxce['length']) {
            var _0x490cxcf = document['querySelectorAll']('.search-results');
            var _0x490cxd0 = document['querySelectorAll']('.search-no-results');
            var _0x490cxd1 = document['querySelectorAll']('.search-results div')[0]['childElementCount'];
            var _0x490cxd2 = document['querySelectorAll']('.search-trending');

            function _0x490cxd3() {
                var _0x490cxd4 = _0x490cxce[0]['value'];
                var _0x490cxd5 = _0x490cxd4['toLowerCase']();
                if (_0x490cxd5 != '') {
                    _0x490cxcf[0]['classList']['remove']('disabled-search-list');
                    var _0x490cxd6 = document['querySelectorAll']('[data-filter-item]');
                    for (let _0x490cxa = 0; _0x490cxa < _0x490cxd6['length']; _0x490cxa++) {
                        var _0x490cxd7 = _0x490cxd6[_0x490cxa]['getAttribute']('data-filter-name');
                        if (_0x490cxd7['includes'](_0x490cxd5)) {
                            _0x490cxd6[_0x490cxa]['classList']['remove']('disabled');
                            if (_0x490cxd2['length']) {
                                _0x490cxd2[0]['classList']['add']('disabled')
                            }
                        } else {
                            _0x490cxd6[_0x490cxa]['classList']['add']('disabled');
                            if (_0x490cxd2['length']) {
                                _0x490cxd2[0]['classList']['remove']('disabled')
                            }
                        };
                        var _0x490cxd8 = document['querySelectorAll']('.search-results div')[0]['getElementsByClassName']('disabled')['length'];
                        if (_0x490cxd8 === _0x490cxd1) {
                            _0x490cxd0[0]['classList']['remove']('disabled');
                            if (_0x490cxd2['length']) {
                                _0x490cxd2[0]['classList']['add']('disabled')
                            }
                        } else {
                            _0x490cxd0[0]['classList']['add']('disabled');
                            if (_0x490cxd2['length']) {
                                _0x490cxd2[0]['classList']['add']('disabled')
                            }
                        }
                    }
                };
                if (_0x490cxd5 === '') {
                    _0x490cxcf[0]['classList']['add']('disabled-search-list');
                    _0x490cxd0[0]['classList']['add']('disabled');
                    if (_0x490cxd2['length']) {
                        _0x490cxd2[0]['classList']['remove']('disabled')
                    }
                }
            }
            _0x490cxce[0]['addEventListener']('keyup', function() {
                _0x490cxd3()
            });
            _0x490cxce[0]['addEventListener']('click', function() {
                _0x490cxd3()
            });
            var _0x490cxd9 = document['querySelectorAll']('.search-trending a');
            _0x490cxd9['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cx62) => {
                    var _0x490cxda = _0x490cxc['querySelectorAll']('span')[0]['textContent']['toLowerCase']();
                    _0x490cxce[0]['value'] = _0x490cxda;
                    _0x490cxce[0]['click']()
                })
            })
        };

        function _0x490cxdb() {
            var _0x490cxdc = document['querySelectorAll']('.shareToFacebook, .shareToTwitter, .shareToLinkedIn');
            if (_0x490cxdc['length']) {
                var _0x490cxdd = window['location']['href'];
                var _0x490cxde = document['title'];
                document['querySelectorAll']('.shareToFacebook')['forEach']((_0x490cxdf) => {
                    return _0x490cxdf['setAttribute']('href', 'https://www.facebook.com/sharer/sharer.php?u=' + _0x490cxdd)
                });
                document['querySelectorAll']('.shareToTwitter')['forEach']((_0x490cxdf) => {
                    return _0x490cxdf['setAttribute']('href', 'https://twitter.com/share?text=' + _0x490cxdd)
                });
                document['querySelectorAll']('.shareToPinterest')['forEach']((_0x490cxdf) => {
                    return _0x490cxdf['setAttribute']('href', 'https://pinterest.com/pin/create/button/?url=' + _0x490cxdd)
                });
                document['querySelectorAll']('.shareToWhatsApp')['forEach']((_0x490cxdf) => {
                    return _0x490cxdf['setAttribute']('href', 'whatsapp://send?text=' + _0x490cxdd)
                });
                document['querySelectorAll']('.shareToMail')['forEach']((_0x490cxdf) => {
                    return _0x490cxdf['setAttribute']('href', 'mailto:?body=' + _0x490cxdd)
                });
                document['querySelectorAll']('.shareToLinkedIn')['forEach']((_0x490cxdf) => {
                    return _0x490cxdf['setAttribute']('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + _0x490cxdd + '&title=' + _0x490cxde + '&summary=&source=')
                })
            }
        }
        var _0x490cxe0 = document['querySelectorAll']('.contact-form');
        if (_0x490cxe0['length']) {
            var _0x490cxe1 = document['getElementById']('contactForm');
            _0x490cxe1['onsubmit'] = function(_0x490cxb) {
                _0x490cxb['preventDefault']();
                var _0x490cxe2 = document['getElementById']('contactNameField');
                var _0x490cxe3 = document['getElementById']('contactEmailField');
                var _0x490cxe4 = document['getElementById']('contactMessageTextarea');
                var _0x490cxe5 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (_0x490cxe2['value'] === '') {
                    _0x490cxe1['setAttribute']('data-form', 'invalid');
                    _0x490cxe2['classList']['add']('border-red-dark');
                    document['getElementById']('validator-name')['classList']['remove']('disabled')
                } else {
                    _0x490cxe1['setAttribute']('data-form', 'valid');
                    document['getElementById']('validator-name')['classList']['add']('disabled');
                    _0x490cxe2['classList']['remove']('border-red-dark')
                };
                if (_0x490cxe3['value'] === '') {
                    _0x490cxe1['setAttribute']('data-form', 'invalid');
                    _0x490cxe3['classList']['add']('border-red-dark');
                    document['getElementById']('validator-mail1')['classList']['remove']('disabled')
                } else {
                    document['getElementById']('validator-mail1')['classList']['add']('disabled');
                    if (!_0x490cxe5['test'](_0x490cxe3['value'])) {
                        _0x490cxe1['setAttribute']('data-form', 'invalid');
                        _0x490cxe3['classList']['add']('border-red-dark');
                        document['getElementById']('validator-mail2')['classList']['remove']('disabled')
                    } else {
                        _0x490cxe1['setAttribute']('data-form', 'valid');
                        document['getElementById']('validator-mail2')['classList']['add']('disabled');
                        _0x490cxe3['classList']['remove']('border-red-dark')
                    }
                };
                if (_0x490cxe4['value'] === '') {
                    _0x490cxe1['setAttribute']('data-form', 'invalid');
                    _0x490cxe4['classList']['add']('border-red-dark');
                    document['getElementById']('validator-text')['classList']['remove']('disabled')
                } else {
                    _0x490cxe1['setAttribute']('data-form', 'valid');
                    document['getElementById']('validator-text')['classList']['add']('disabled');
                    _0x490cxe4['classList']['remove']('border-red-dark')
                };
                if (_0x490cxe1['getAttribute']('data-form') === 'valid') {
                    document['querySelectorAll']('.form-sent')[0]['classList']['remove']('disabled');
                    document['querySelectorAll']('.contact-form')[0]['classList']['add']('disabled');
                    var _0x490cxe6 = {};
                    for (let _0x490cxa = 0, _0x490cxe7 = _0x490cxe1['length']; _0x490cxa < _0x490cxe7; ++_0x490cxa) {
                        let _0x490cxe8 = _0x490cxe1[_0x490cxa];
                        if (_0x490cxe8['name']) {
                            _0x490cxe6[_0x490cxe8['name']] = _0x490cxe8['value']
                        }
                    };
                    var _0x490cxe9 = new XMLHttpRequest();
                    _0x490cxe9['open'](_0x490cxe1['method'], _0x490cxe1['action'], true);
                    _0x490cxe9['setRequestHeader']('Accept', 'application/json; charset=utf-8');
                    _0x490cxe9['setRequestHeader']('Content-Type', 'application/json; charset=UTF-8');
                    _0x490cxe9['send'](JSON['stringify'](_0x490cxe6));
                    _0x490cxe9['onloadend'] = function(_0x490cxea) {
                        if (_0x490cxea['target']['status'] === 200) {
                            console['log']('Form Submitted')
                        }
                    }
                }
            }
        };
        var _0x490cxeb = document['querySelectorAll']('[data-bs-toggle=\"collapse\"]:not(.no-effect)');
        if (_0x490cxeb['length']) {
            _0x490cxeb['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                    if (_0x490cxc['querySelectorAll']('i')['length']) {
                        _0x490cxc['querySelector']('i')['classList']['toggle']('fa-rotate-180')
                    }
                })
            })
        };
        var _0x490cxec = document['querySelectorAll']('.tab-controls a');
        if (_0x490cxec['length']) {
            _0x490cxec['forEach'](function(_0x490cxb) {
                if (_0x490cxb['hasAttribute']('data-active')) {
                    var _0x490cxed = _0x490cxb['parentNode']['getAttribute']('data-highlight');
                    _0x490cxb['classList']['add'](_0x490cxed);
                    _0x490cxb['classList']['add']('no-click')
                }
            });
            _0x490cxec['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                    var _0x490cxed = _0x490cxc['parentNode']['getAttribute']('data-highlight');
                    var _0x490cxee = _0x490cxc['parentNode']['querySelectorAll']('a');
                    _0x490cxee['forEach'](function(_0x490cxb) {
                        _0x490cxb['classList']['remove'](_0x490cxed);
                        _0x490cxb['classList']['remove']('no-click')
                    });
                    _0x490cxc['classList']['add'](_0x490cxed);
                    _0x490cxc['classList']['add']('no-click')
                })
            })
        };
        var _0x490cxef = document['querySelectorAll']('.tab-borders a');
        if (_0x490cxef['length']) {
            _0x490cxef['forEach'](function(_0x490cxb) {
                if (_0x490cxb['hasAttribute']('data-active')) {
                    var _0x490cxed = _0x490cxb['parentNode']['getAttribute']('data-highlight');
                    _0x490cxb['classList']['add'](_0x490cxed);
                    _0x490cxb['classList']['add']('border');
                    _0x490cxb['classList']['add']('no-click')
                }
            });
            _0x490cxef['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                    var _0x490cxed = _0x490cxc['parentNode']['getAttribute']('data-highlight');
                    var _0x490cxee = _0x490cxc['parentNode']['querySelectorAll']('a');
                    _0x490cxee['forEach'](function(_0x490cxb) {
                        _0x490cxb['classList']['remove'](_0x490cxed);
                        _0x490cxb['classList']['remove']('border');
                        _0x490cxb['classList']['remove']('no-click')
                    });
                    _0x490cxc['classList']['add'](_0x490cxed);
                    _0x490cxc['classList']['add']('border');
                    _0x490cxc['classList']['add']('no-click')
                })
            })
        };

        function _0x490cx34(_0x490cxf0, _0x490cx2c, _0x490cx3c) {
            setTimeout(function() {
                if (_0x490cx2c === 'show') {
                    return document['getElementById'](_0x490cxf0)['classList']['add']('menu-active'), document['querySelectorAll']('.menu-hider')[0]['classList']['add']('menu-active')
                } else {
                    return document['getElementById'](_0x490cxf0)['classList']['remove']('menu-active'), document['querySelectorAll']('.menu-hider')[0]['classList']['remove']('menu-active')
                }
            }, _0x490cx3c)
        }
        var _0x490cxf1 = document['querySelectorAll']('[data-auto-activate]');
        if (_0x490cxf1['length']) {
            setTimeout(function() {
                _0x490cxf1[0]['classList']['add']('menu-active');
                _0x490cxd[0]['classList']['add']('menu-active')
            }, 0)
        };

        function _0x490cxf2() {
            var _0x490cxf2 = document['querySelectorAll']('.copyright-year');
            if (_0x490cxf2) {
                var _0x490cxf3 = new Date();
                const _0x490cxf4 = _0x490cxf3['getFullYear']();
                _0x490cxf2['forEach'](function(_0x490cxb) {
                    _0x490cxb['textContent'] = _0x490cxf4
                })
            }
        }
        
        var _0x490cxf5 = document['querySelectorAll']('[data-menu-load]');
        _0x490cxf5['forEach'](function(_0x490cxb) {
            var _0x490cxf6 = _0x490cxb['getAttribute']('data-menu-load');
            fetch(_0x490cxf6)['then']((_0x490cxe6) => {
                return _0x490cxe6['text']()
            })['then']((_0x490cxf7) => {
                return _0x490cxb['innerHTML'] = _0x490cxf7
            })['then']((_0x490cxe6) => {
                setTimeout(function() {
                    if (_0x490cxf5[_0x490cxf5['length'] - 1] === _0x490cxb) {
                        _0x490cx2c();
                        _0x490cx53();
                        _0x490cxdb();
                        _0x490cx4a();
                        _0x490cx43();
                        _0x490cxf2()
                    }
                }, 500)
            })
        }); 

        var _0x490cxf8 = document['querySelectorAll']('.offline-message');
        if (!_0x490cxf8['length']) {
            const _0x490cxf9 = document['createElement']('p');
            const _0x490cxfa = document['createElement']('p');
            _0x490cxf9['className'] = 'offline-message bg-red-dark color-white';
            _0x490cxf9['textContent'] = 'No internet connection detected';
            _0x490cxfa['className'] = 'online-message bg-green-dark color-white';
            _0x490cxfa['textContent'] = 'You are back online';
            document['getElementsByTagName']('body')[0]['appendChild'](_0x490cxf9);
            document['getElementsByTagName']('body')[0]['appendChild'](_0x490cxfa)
        };

        function _0x490cxfb() {
            var _0x490cxfc = document['querySelectorAll']('a');
            _0x490cxfc['forEach'](function(_0x490cxb) {
                var _0x490cxfd = _0x490cxb['getAttribute']('href');
                if (_0x490cxfd['match'](/.html/)) {
                    _0x490cxb['classList']['add']('show-offline');
                    _0x490cxb['setAttribute']('data-link', _0x490cxfd);
                    _0x490cxb['setAttribute']('href', '#')
                }
            });
            var _0x490cxfe = document['querySelectorAll']('.show-offline');
            _0x490cxfe['forEach']((_0x490cxc) => {
                return _0x490cxc['addEventListener']('click', (_0x490cx62) => {
                    document['getElementsByClassName']('offline-message')[0]['classList']['add']('offline-message-active');
                    setTimeout(function() {
                        document['getElementsByClassName']('offline-message')[0]['classList']['remove']('offline-message-active')
                    }, 1500)
                })
            })
        }

        function _0x490cxff() {
            var _0x490cx100 = document['querySelectorAll']('[data-link]');
            _0x490cx100['forEach'](function(_0x490cxb) {
                var _0x490cxfd = _0x490cxb['getAttribute']('data-link');
                if (_0x490cxfd['match'](/.html/)) {
                    _0x490cxb['setAttribute']('href', _0x490cxfd);
                    _0x490cxb['removeAttribute']('data-link', '')
                }
            })
        }
        var _0x490cx101 = document['getElementsByClassName']('offline-message')[0];
        var _0x490cx102 = document['getElementsByClassName']('online-message')[0];

        function _0x490cx103() {
            _0x490cxff();
            _0x490cx102['classList']['add']('online-message-active');
            setTimeout(function() {
                _0x490cx102['classList']['remove']('online-message-active')
            }, 2000);
            console['info']('Connection: Online')
        }

        function _0x490cx104() {
            _0x490cxfb();
            _0x490cx101['classList']['add']('offline-message-active');
            setTimeout(function() {
                _0x490cx101['classList']['remove']('offline-message-active')
            }, 2000);
            console['info']('Connection: Offline')
        }
        var _0x490cx105 = document['querySelectorAll']('.simulate-offline');
        var _0x490cx106 = document['querySelectorAll']('.simulate-online');
        if (_0x490cx105['length']) {
            _0x490cx105[0]['addEventListener']('click', function() {
                _0x490cx104()
            });
            _0x490cx106[0]['addEventListener']('click', function() {
                _0x490cx103()
            })
        };

        function _0x490cx107(_0x490cx62) {
            var _0x490cx108 = navigator['onLine'] ? 'online' : 'offline';
            _0x490cx103()
        }

        function _0x490cx109(_0x490cx62) {
            _0x490cx104()
        }
        window['addEventListener']('online', _0x490cx107);
        window['addEventListener']('offline', _0x490cx109);
        const _0x490cx10a = document['querySelectorAll']('.simulate-iphone-badge');
        _0x490cx10a['forEach']((_0x490cxc) => {
            return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                document['getElementsByClassName']('add-to-home')[0]['classList']['add']('add-to-home-visible', 'add-to-home-ios');
                document['getElementsByClassName']('add-to-home')[0]['classList']['remove']('add-to-home-android')
            })
        });
        const _0x490cx10b = document['querySelectorAll']('.simulate-android-badge');
        _0x490cx10b['forEach']((_0x490cxc) => {
            return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                document['getElementsByClassName']('add-to-home')[0]['classList']['add']('add-to-home-visible', 'add-to-home-android');
                document['getElementsByClassName']('add-to-home')[0]['classList']['remove']('add-to-home-ios')
            })
        });
        const _0x490cx10c = document['querySelectorAll']('.add-to-home');
        _0x490cx10c['forEach']((_0x490cxc) => {
            return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                document['getElementsByClassName']('add-to-home')[0]['classList']['remove']('add-to-home-visible')
            })
        });
        let _0x490cx10d = {
            Android: function() {
                return navigator['userAgent']['match'](/Android/i)
            },
            iOS: function() {
                return navigator['userAgent']['match'](/iPhone|iPad|iPod/i)
            },
            any: function() {
                return (_0x490cx10d.Android() || _0x490cx10d['iOS']())
            }
        };
        const _0x490cx10e = document['getElementsByClassName']('show-android');
        const _0x490cx10f = document['getElementsByClassName']('show-ios');
        const _0x490cx110 = document['getElementsByClassName']('show-no-device');
        if (!_0x490cx10d['any']()) {
            for (let _0x490cxa = 0; _0x490cxa < _0x490cx10f['length']; _0x490cxa++) {
                _0x490cx10f[_0x490cxa]['classList']['add']('disabled')
            };
            for (let _0x490cxa = 0; _0x490cxa < _0x490cx10e['length']; _0x490cxa++) {
                _0x490cx10e[_0x490cxa]['classList']['add']('disabled')
            }
        };
        if (_0x490cx10d['iOS']()) {
            document['querySelectorAll']('#page')[0]['classList']['add']('device-is-ios');
            for (let _0x490cxa = 0; _0x490cxa < _0x490cx110['length']; _0x490cxa++) {
                _0x490cx110[_0x490cxa]['classList']['add']('disabled')
            };
            for (let _0x490cxa = 0; _0x490cxa < _0x490cx10e['length']; _0x490cxa++) {
                _0x490cx10e[_0x490cxa]['classList']['add']('disabled')
            }
        };
        if (_0x490cx10d.Android()) {
            document['querySelectorAll']('#page')[0]['classList']['add']('device-is-android');
            for (let _0x490cxa = 0; _0x490cxa < _0x490cx10f['length']; _0x490cxa++) {
                _0x490cx10f[_0x490cxa]['classList']['add']('disabled')
            };
            for (let _0x490cxa = 0; _0x490cxa < _0x490cx110['length']; _0x490cxa++) {
                _0x490cx110[_0x490cxa]['classList']['add']('disabled')
            }
        };
        if (_0x490cx2 === true) {
            var _0x490cx111 = document['getElementsByTagName']('html')[0];
            if (!_0x490cx111['classList']['contains']('isPWA')) {
                if ('serviceWorker' in navigator) {
                    window['addEventListener']('load', function() {
                        navigator['serviceWorker']['register'](_0x490cx8, {
                            scope: _0x490cx7
                        })
                    })
                };
                var _0x490cx112 = _0x490cx5 * 24;
                var _0x490cxa5 = Date['now']();
                var _0x490cx113 = localStorage['getItem'](_0x490cx4 + '-PWA-Timeout-Value');
                if (_0x490cx113 == null) {
                    localStorage['setItem'](_0x490cx4 + '-PWA-Timeout-Value', _0x490cxa5)
                } else {
                    if (_0x490cxa5 - _0x490cx113 > _0x490cx112 * 60 * 60 * 1000) {
                        localStorage['removeItem'](_0x490cx4 + '-PWA-Prompt');
                        localStorage['setItem'](_0x490cx4 + '-PWA-Timeout-Value', _0x490cxa5)
                    }
                };
                const _0x490cx114 = document['querySelectorAll']('.pwa-dismiss');
                _0x490cx114['forEach']((_0x490cxc) => {
                    return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                        const _0x490cx115 = document['querySelectorAll']('#menu-install-pwa-android, #menu-install-pwa-ios');
                        for (let _0x490cxa = 0; _0x490cxa < _0x490cx115['length']; _0x490cxa++) {
                            _0x490cx115[_0x490cxa]['classList']['remove']('menu-active')
                        };
                        localStorage['setItem'](_0x490cx4 + '-PWA-Timeout-Value', _0x490cxa5);
                        localStorage['setItem'](_0x490cx4 + '-PWA-Prompt', 'install-rejected');
                        console['log']('PWA Install Rejected. Will Show Again in ' + (_0x490cx5) + ' Days')
                    })
                });
                const _0x490cx115 = document['querySelectorAll']('#menu-install-pwa-android, #menu-install-pwa-ios');
                if (_0x490cx115['length']) {
                    if (_0x490cx10d.Android()) {
                        if (localStorage['getItem'](_0x490cx4 + '-PWA-Prompt') != 'install-rejected') {
                            function _0x490cx116() {
                                setTimeout(function() {
                                    if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                                        console['log']('Triggering PWA Window for Android');
                                        document['getElementById']('menu-install-pwa-android')['classList']['add']('menu-active');
                                        document['querySelectorAll']('.menu-hider')[0]['classList']['add']('menu-active')
                                    }
                                }, 3500)
                            }
                            var _0x490cx117;
                            window['addEventListener']('beforeinstallprompt', (_0x490cxb) => {
                                _0x490cxb['preventDefault']();
                                _0x490cx117 = _0x490cxb;
                                _0x490cx116()
                            })
                        };
                        const _0x490cx118 = document['querySelectorAll']('.pwa-install');
                        _0x490cx118['forEach']((_0x490cxc) => {
                            return _0x490cxc['addEventListener']('click', (_0x490cxb) => {
                                _0x490cx117['prompt']();
                                _0x490cx117['userChoice']['then']((_0x490cx119) => {
                                    if (_0x490cx119['outcome'] === 'accepted') {
                                        console['log']('Added')
                                    } else {
                                        localStorage['setItem'](_0x490cx4 + '-PWA-Timeout-Value', _0x490cxa5);
                                        localStorage['setItem'](_0x490cx4 + '-PWA-Prompt', 'install-rejected');
                                        setTimeout(function() {
                                            if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                                                document['getElementById']('menu-install-pwa-android')['classList']['remove']('menu-active');
                                                document['querySelectorAll']('.menu-hider')[0]['classList']['remove']('menu-active')
                                            }
                                        }, 50)
                                    };
                                    _0x490cx117 = null
                                })
                            })
                        });
                        window['addEventListener']('appinstalled', (_0x490cx11a) => {
                            document['getElementById']('menu-install-pwa-android')['classList']['remove']('menu-active');
                            document['querySelectorAll']('.menu-hider')[0]['classList']['remove']('menu-active')
                        })
                    };
                    if (_0x490cx10d['iOS']()) {
                        if (localStorage['getItem'](_0x490cx4 + '-PWA-Prompt') != 'install-rejected') {
                            setTimeout(function() {
                                if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                                    console['log']('Triggering PWA Window for iOS');
                                    document['getElementById']('menu-install-pwa-ios')['classList']['add']('menu-active');
                                    document['querySelectorAll']('.menu-hider')[0]['classList']['add']('menu-active')
                                }
                            }, 3500)
                        }
                    }
                }
            };
            _0x490cx111['setAttribute']('class', 'isPWA')
        };
        if (_0x490cx6 === true) {
            caches['delete']('workbox-runtime')['then'](function() {});
            sessionStorage['clear']();
            caches['keys']()['then']((_0x490cx11b) => {
                _0x490cx11b['forEach']((_0x490cx11c) => {
                    caches['delete'](_0x490cx11c)
                })
            })
        };
        var _0x490cx11d = new LazyLoad();
        var _0x490cx11e, _0x490cx11f, _0x490cx120, _0x490cx121;
        var _0x490cx122 = 'plugins/';
        let _0x490cx123 = [{
            id: 'uniqueID',
            plug: 'pluginName/plugin.js',
            call: 'pluginName/pluginName-call.js',
            style: 'pluginName/pluginName-style.css',
            trigger: '.pluginTriggerClass'
        }, {
            id: 'chart',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-charts.js',
            trigger: '.chart'
        }, {
            id: 'chart',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-wallet.js',
            trigger: '.wallet-chart'
        }, {
            id: 'graph',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-graphs.js',
            trigger: '.graph'
        }, {
            id: 'count',
            plug: 'countdown/countdown.js',
            trigger: '.countdown'
        }, {
            id: 'gallery',
            plug: 'glightbox/glightbox.js',
            call: 'glightbox/glightbox-call.js',
            style: 'glightbox/glightbox.css',
            trigger: '[data-gallery]'
        }, {
            id: 'gallery-views',
            plug: 'galleryViews/gallery-views.js',
            trigger: '.gallery-view-controls'
        }, {
            id: 'filter',
            plug: 'filterizr/filterizr.js',
            call: 'filterizr/filterizr-call.js',
            style: 'filterizr/filterizr.css',
            trigger: '.gallery-filter'
        }];
        for (let _0x490cxa = 0; _0x490cxa < _0x490cx123['length']; _0x490cxa++) {
            if (document['querySelectorAll']('.' + _0x490cx123[_0x490cxa]['id'] + '-c')['length']) {
                document['querySelectorAll']('.' + _0x490cx123[_0x490cxa]['id'] + '-c')[0]['remove']()
            };
            var _0x490cx124 = document['querySelectorAll'](_0x490cx123[_0x490cxa]['trigger']);
            if (_0x490cx124['length']) {
                var _0x490cx125 = document['getElementsByTagName']('script')[1],
                    _0x490cx126 = document['createElement']('script');
                _0x490cx126['type'] = 'text/javascript';
                _0x490cx126['className'] = _0x490cx123[_0x490cxa]['id'] + '-p';
                _0x490cx126['src'] = _0x490cx122 + _0x490cx123[_0x490cxa]['plug'];
                _0x490cx126['addEventListener']('load', function() {
                    if (_0x490cx123[_0x490cxa]['call'] !== undefined) {
                        var _0x490cx127 = document['getElementsByTagName']('script')[2],
                            _0x490cx128 = document['createElement']('script');
                        _0x490cx128['type'] = 'text/javascript';
                        _0x490cx128['className'] = _0x490cx123[_0x490cxa]['id'] + '-c';
                        _0x490cx128['src'] = _0x490cx122 + _0x490cx123[_0x490cxa]['call'];
                        _0x490cx127['parentNode']['insertBefore'](_0x490cx128, _0x490cx127)
                    }
                });
                if (!document['querySelectorAll']('.' + _0x490cx123[_0x490cxa]['id'] + '-p')['length']) {
                    _0x490cx125['parentNode']['insertBefore'](_0x490cx126, _0x490cx125)
                } else {
                    setTimeout(function() {
                        var _0x490cx125 = document['getElementsByTagName']('script')[1],
                            _0x490cx126 = document['createElement']('script');
                        _0x490cx126['type'] = 'text/javascript';
                        _0x490cx126['className'] = _0x490cx123[_0x490cxa]['id'] + '-c';
                        _0x490cx126['src'] = _0x490cx122 + _0x490cx123[_0x490cxa]['call'];
                        _0x490cx125['parentNode']['insertBefore'](_0x490cx126, _0x490cx125)
                    }, 50)
                };
                if (_0x490cx123[_0x490cxa]['style'] !== undefined) {
                    if (!document['querySelectorAll']('.' + _0x490cx123[_0x490cxa]['id'] + '-s')['length']) {
                        var _0x490cx129 = document['createElement']('link');
                        _0x490cx129['className'] = _0x490cx123[_0x490cxa]['id'] + '-s';
                        _0x490cx129['rel'] = 'stylesheet';
                        _0x490cx129['type'] = 'text/css';
                        _0x490cx129['href'] = _0x490cx122 + _0x490cx123[_0x490cxa]['style'];
                        document['getElementsByTagName']('head')[0]['appendChild'](_0x490cx129)
                    }
                }
            }
        }
    }
    if ('scrollRestoration' in window['history']) {
        window['history']['scrollRestoration'] = 'manual'
    };
    if (_0x490cx3 === true) {
        if (window['location']['protocol'] !== 'file:') {
            const _0x490cx12a = {
                containers: ['#page'],
                cache: false,
                animateHistoryBrowsing: false,
                plugins: [new SwupPreloadPlugin()],
                linkSelector: 'a:not(.external-link):not(.default-link):not([href^=\"https\"]):not([href^=\"http\"]):not([data-gallery])'
            };
            const _0x490cx12b = new Swup(_0x490cx12a);
            document['addEventListener']('swup:pageView', (_0x490cxb) => {
                _0x490cx9()
            })
        }
    };
    _0x490cx9()
})
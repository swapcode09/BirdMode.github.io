setTimeout(function() {
    var _0x7231x0 = document["getElementById"]('preloader');
    if (_0x7231x0) {
        _0x7231x0["classList"]["add"]('preloader-hide')
    }
}, 150);
document["addEventListener"]('DOMContentLoaded', ()=>{
    'use strict';
    let _0x7231x1 = true;
    let _0x7231x2 = true;
    var _0x7231x3 = "Azures";
    var _0x7231x4 = 1;
    var _0x7231x5 = false;
    var _0x7231x6 = "https://www.enableds.com/products/azures/v35/";
    var _0x7231x7 = "https://www.enableds.com/products/azures/v35/_service-worker.js";
    function _0x7231x8() {
        var _0x7231x9, _0x7231xa, _0x7231xb;
        var _0x7231xc = document["querySelectorAll"]('.page-title-large, .page-title-small, .menu-header a');

        if (_0x7231xc) {
            var _0x7231xd = new Date()["getHours"]();
            var _0x7231xe;
            var _0x7231xf = document["querySelectorAll"]('.greeting-text')[0];
            if (_0x7231xf) {
                var _0x7231x10 = document["querySelectorAll"]('.greeting-text')[0]["getAttribute"]('data-username');
                var _0x7231x11 = ('Hello');

                var _0x7231x12 = ('Good afternoon');
                var _0x7231x13 = ('Good evening');
                if (_0x7231xd >= 0 && _0x7231xd < 12) {
                    _0x7231xe = _0x7231x11
                } else {
                    if (_0x7231xd >= 12 && _0x7231xd < 17) {
                        _0x7231xe = _0x7231x12
                    } else {
                        if (_0x7231xd >= 17 && _0x7231xd < 24) {
                            _0x7231xe = _0x7231x13
                        }
                    }
                }
                ;
                document["querySelectorAll"]('.greeting-text')[0]["insertAdjacentHTML"]('beforeend', _0x7231xe + '<br>' + 'Birdiers')
            }
        }
        ;
        var _0x7231x14 = document["getElementsByClassName"]('menu-hider');
        if (!_0x7231x14["length"]) {
            var _0x7231x15 = document["createElement"]('div');
            _0x7231x15["setAttribute"]("class", "menu-hider");
            document["body"]["insertAdjacentElement"]('beforebegin', _0x7231x15)
        }
        ;if (_0x7231x14[0]["classList"]["contains"]('menu-active')) {
            _0x7231x14[0]["classList"]["remove"]('menu-active')
        }
        ;document["querySelectorAll"]('.menu')["forEach"]((_0x7231xb)=>{
            _0x7231xb["style"]["display"] = 'block'
        }
        );
        var _0x7231x16 = document["querySelectorAll"]('input');
        if (_0x7231x16["length"]) {
            var _0x7231x17 = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            var _0x7231x18 = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            var _0x7231x19 = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
            var _0x7231x1a = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
            var _0x7231x1b = /^(0|[1-9]\d*)$/;
            var _0x7231x1c = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
            var _0x7231x1d = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
            function _0x7231x1e(_0x7231xb) {
                _0x7231xb["parentElement"]["querySelectorAll"]('.valid')[0]["classList"]["remove"]('disabled');
                _0x7231xb["parentElement"]["querySelectorAll"]('.invalid')[0]["classList"]["add"]('disabled')
            }
            function _0x7231x1f(_0x7231xb) {
                _0x7231xb["parentElement"]["querySelectorAll"]('.valid')[0]["classList"]["add"]('disabled');
                _0x7231xb["parentElement"]["querySelectorAll"]('.invalid')[0]["classList"]["remove"]('disabled')
            }
            function _0x7231x20(_0x7231xb) {
                _0x7231xb["parentElement"]["querySelectorAll"]('em')[0]["classList"]["remove"]('disabled');
                _0x7231xb["parentElement"]["querySelectorAll"]('.valid')[0]["classList"]["add"]('disabled');
                _0x7231xb["parentElement"]["querySelectorAll"]('.invalid')[0]["classList"]["add"]('disabled')
            }
            var _0x7231x21 = document["querySelectorAll"]('.input-style input:not([type=\"date\"])');
            _0x7231x21["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('keyup', (_0x7231xa)=>{
                    if (!_0x7231xb["value"] == "") {
                        _0x7231xb["parentElement"]["classList"]["add"]('input-style-active');
                        _0x7231xb["parentElement"]["querySelector"]('em')["classList"]["add"]('disabled')
                    } else {
                        _0x7231xb["parentElement"]["querySelectorAll"]('.valid')[0]["classList"]["add"]('disabled');
                        _0x7231xb["parentElement"]["querySelectorAll"]('.invalid')[0]["classList"]["add"]('disabled');
                        _0x7231xb["parentElement"]["classList"]["remove"]('input-style-active');
                        _0x7231xb["parentElement"]["querySelector"]('em')["classList"]["remove"]('disabled')
                    }
                }
                )
            }
            );
            var _0x7231x22 = document["querySelectorAll"]('.input-style textarea');
            _0x7231x22["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('keyup', (_0x7231xa)=>{
                    if (!_0x7231xb["value"] == "") {
                        _0x7231xb["parentElement"]["classList"]["add"]('input-style-active');
                        _0x7231xb["parentElement"]["querySelector"]('em')["classList"]["add"]('disabled')
                    } else {
                        _0x7231xb["parentElement"]["classList"]["remove"]('input-style-active');
                        _0x7231xb["parentElement"]["querySelector"]('em')["classList"]["remove"]('disabled')
                    }
                }
                )
            }
            );
            var _0x7231x23 = document["querySelectorAll"]('.input-style select');
            _0x7231x23["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('change', (_0x7231xa)=>{
                    if (_0x7231xb["value"] !== "default") {
                        _0x7231xb["parentElement"]["classList"]["add"]('input-style-active');
                        _0x7231xb["parentElement"]["querySelectorAll"]('.valid')[0]["classList"]["remove"]('disabled');
                        _0x7231xb["parentElement"]["querySelectorAll"]('.invalid, em, span')[0]["classList"]["add"]('disabled')
                    }
                    ;if (_0x7231xb["value"] == "default") {
                        _0x7231xb["parentElement"]["querySelectorAll"]('span, .valid, em')[0]["classList"]["add"]('disabled');
                        _0x7231xb["parentElement"]["querySelectorAll"]('.invalid')[0]["classList"]["remove"]('disabled');
                        _0x7231xb["parentElement"]["classList"]["add"]('input-style-active')
                    }
                }
                )
            }
            );
            var _0x7231x24 = document["querySelectorAll"]('.input-style input[type=\"date\"]');
            _0x7231x24["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('change', (_0x7231xa)=>{
                    _0x7231xb["parentElement"]["classList"]["add"]('input-style-active');
                    _0x7231xb["parentElement"]["querySelectorAll"]('.valid')[0]["classList"]["remove"]('disabled');
                    _0x7231xb["parentElement"]["querySelectorAll"]('.invalid')[0]["classList"]["add"]('disabled')
                }
                )
            }
            );
            var _0x7231x25 = document["querySelectorAll"]('.validate-field input, .validator-field textarea');
            if (_0x7231x25["length"]) {
                _0x7231x25["forEach"]((_0x7231xb)=>{
                    return _0x7231xb["addEventListener"]('keyup', (_0x7231xa)=>{
                        var _0x7231x26 = _0x7231xb["getAttribute"]('type');
                        switch (_0x7231x26) {
                        case 'name':
                            _0x7231x19["test"](_0x7231xb["value"]) ? _0x7231x1e(_0x7231xb) : _0x7231x1f(_0x7231xb);
                            break;
                        case 'number':
                            _0x7231x1b["test"](_0x7231xb["value"]) ? _0x7231x1e(_0x7231xb) : _0x7231x1f(_0x7231xb);
                            break;
                        case 'email':
                            _0x7231x17["test"](_0x7231xb["value"]) ? _0x7231x1e(_0x7231xb) : _0x7231x1f(_0x7231xb);
                            break;
                        case 'text':
                            _0x7231x1d["test"](_0x7231xb["value"]) ? _0x7231x1e(_0x7231xb) : _0x7231x1f(_0x7231xb);
                            break;
                        case 'url':
                            _0x7231x1c["test"](_0x7231xb["value"]) ? _0x7231x1e(_0x7231xb) : _0x7231x1f(_0x7231xb);
                            break;
                        case 'tel':
                            _0x7231x18["test"](_0x7231xb["value"]) ? _0x7231x1e(_0x7231xb) : _0x7231x1f(_0x7231xb);
                            break;
                        case 'password':
                            _0x7231x1a["test"](_0x7231xb["value"]) ? _0x7231x1e(_0x7231xb) : _0x7231x1f(_0x7231xb);
                            break
                        }
                        ;if (_0x7231xb["value"] === "") {
                            _0x7231x20(_0x7231xb)
                        }
                    }
                    )
                }
                )
            }
        }
        ;var _0x7231x27 = document["querySelectorAll"]('.otp');
        if (_0x7231x27[0]) {
            _0x7231x27["forEach"]((_0x7231xb)=>{
                _0x7231xb["addEventListener"]('focus', (_0x7231xa)=>{
                    _0x7231xb["value"] = ""
                }
                );
                _0x7231xb["addEventListener"]('input', (_0x7231xa)=>{
                    _0x7231xb["nextElementSibling"] ? _0x7231xb["nextElementSibling"]["focus"]() : _0x7231xb["blur"]()
                }
                )
            }
            )
        }
        ;var _0x7231x28 = document["getElementsByClassName"]('splide');
        if (_0x7231x28["length"]) {
            var _0x7231x29 = document["querySelectorAll"]('.single-slider');
            if (_0x7231x29["length"]) {
                _0x7231x29["forEach"](function(_0x7231xa) {
                    var _0x7231x2a = new Splide('#' + _0x7231xa["id"],{
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        perPage: 1
                    })["mount"]();
                    var _0x7231x2b = document["querySelectorAll"]('.slider-next');
                    var _0x7231x2c = document["querySelectorAll"]('.slider-prev');
                    _0x7231x2b["forEach"]((_0x7231xb)=>{
                        return _0x7231xb["addEventListener"]('click', (_0x7231xb)=>{
                            _0x7231x2a["go"]('>')
                        }
                        )
                    }
                    );
                    _0x7231x2c["forEach"]((_0x7231xb)=>{
                        return _0x7231xb["addEventListener"]('click', (_0x7231xb)=>{
                            _0x7231x2a["go"]('<')
                        }
                        )
                    }
                    )
                })
            }
            ;var _0x7231x2d = document["querySelectorAll"]('.double-slider');
            if (_0x7231x2d["length"]) {
                _0x7231x2d["forEach"](function(_0x7231xa) {
                    var _0x7231x2e = new Splide('#' + _0x7231xa["id"],{
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        arrows: false,
                        perPage: 2
                    })["mount"]()
                })
            }
            ;var _0x7231x2f = document["querySelectorAll"]('.tripple-slider');
            if (_0x7231x2f["length"]) {
                _0x7231x2f["forEach"](function(_0x7231xa) {
                    var _0x7231x30 = new Splide('#' + _0x7231xa["id"],{
                        type: 'loop',
                        autoplay: true,
                        padding: {
                            left: '0px',
                            right: '80px'
                        },
                        interval: 4000,
                        arrows: false,
                        perPage: 2,
                        perMove: 1
                    })["mount"]()
                })
            }
        }
        ;var _0x7231x31 = document["querySelectorAll"]('.topic-slider');
        if (_0x7231x31["length"]) {
            var _0x7231x32 = new Splide('.topic-slider',{
                type: 'loop',
                autoplay: false,
                padding: {
                    left: '15px',
                    right: '40px'
                },
                arrows: false,
                perPage: 3,
                perMove: 1
            })["mount"]()
        }
        ;var _0x7231x33 = document["querySelectorAll"]('.user-slider');
        if (_0x7231x33["length"]) {
            var _0x7231x32 = new Splide('.user-slider',{
                type: 'loop',
                autoplay: false,
                padding: {
                    left: '0px',
                    right: '40px'
                },
                arrows: false,
                perPage: 4,
                perMove: 1
            })["mount"]()
        }
        ;const _0x7231x34 = document["querySelectorAll"]('a[href=\"#\"]');
        _0x7231x34["forEach"]((_0x7231xb)=>{
            return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                _0x7231xa["preventDefault"]();
                return false
            }
            )
        }
        );
        var _0x7231x35 = document["querySelectorAll"]('.hide-map');
        if (_0x7231x35["length"]) {
            var _0x7231x36 = document["querySelectorAll"]('.show-map');
            var _0x7231x37 = document["querySelectorAll"]('.hide-map');
            _0x7231x36[0]["addEventListener"]('click', function(_0x7231xa) {
                document["getElementsByClassName"]('map-overlay')[0]["classList"]["add"]('disabled');
                document["getElementsByClassName"]('card-center')[0]["classList"]["add"]('disabled');
                document["getElementsByClassName"]('hide-map')[0]["classList"]["remove"]('disabled')
            });
            _0x7231x37[0]["addEventListener"]('click', function(_0x7231xa) {
                document["getElementsByClassName"]('map-overlay')[0]["classList"]["remove"]('disabled');
                document["getElementsByClassName"]('card-center')[0]["classList"]["remove"]('disabled');
                document["getElementsByClassName"]('hide-map')[0]["classList"]["add"]('disabled')
            })
        }
        ;var _0x7231x38 = document["querySelectorAll"]('.check-card');
        _0x7231x38["forEach"]((_0x7231xb)=>{
            return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                if (_0x7231xb["querySelector"]('input')["getAttribute"]('checked') == "checked") {
                    _0x7231xb["querySelector"]('input')["removeAttribute"]('checked')
                } else {
                    _0x7231xb["querySelector"]('input')["setAttribute"]('checked', 'checked')
                }
            }
            )
        }
        );
        var _0x7231x39 = document["querySelectorAll"]('.todo-list a');
        _0x7231x39["forEach"]((_0x7231xb)=>{
            return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                _0x7231xb["classList"]["toggle"]('opacity-80');
                if (_0x7231xb["querySelector"]('input')["getAttribute"]('checked') == "checked") {
                    _0x7231xb["querySelector"]('input')["removeAttribute"]('checked')
                } else {
                    _0x7231xb["querySelector"]('input')["setAttribute"]('checked', 'checked')
                }
            }
            )
        }
        );
        var _0x7231x3a = document["querySelectorAll"]('.menu');
        function _0x7231x3b() {
            if (_0x7231x3a["length"]) {
                var _0x7231x3c = document["querySelectorAll"]('.menu-box-left, .menu-box-right');
                _0x7231x3c["forEach"](function(_0x7231xa) {
                    if (_0x7231xa["getAttribute"]('data-menu-width') === "cover") {
                        _0x7231xa["style"]["width"] = '100%'
                    } else {
                        _0x7231xa["style"]["width"] = (_0x7231xa["getAttribute"]('data-menu-width')) + 'px'
                    }
                });
                var _0x7231x3d = document["querySelectorAll"]('.menu-box-bottom, .menu-box-top, .menu-box-modal');
                _0x7231x3d["forEach"](function(_0x7231xa) {
                    if (_0x7231xa["getAttribute"]('data-menu-width') === "cover") {
                        _0x7231xa["style"]["width"] = '100%';
                        _0x7231xa["style"]["height"] = '100%'
                    } else {
                        _0x7231xa["style"]["width"] = (_0x7231xa["getAttribute"]('data-menu-width')) + 'px';
                        _0x7231xa["style"]["height"] = (_0x7231xa["getAttribute"]('data-menu-height')) + 'px'
                    }
                });
                var _0x7231x3e = document["querySelectorAll"]('[data-menu]');
                var _0x7231x3f = document["querySelectorAll"]('.header, #footer-bar, .page-content');
                _0x7231x3e["forEach"]((_0x7231xb)=>{
                    return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                        const _0x7231x40 = document["querySelectorAll"]('.menu-active');
                        for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x40["length"]; _0x7231x9++) {
                            _0x7231x40[_0x7231x9]["classList"]["remove"]('menu-active')
                        }
                        ;var _0x7231x41 = _0x7231xb["getAttribute"]('data-menu');
                        document["getElementById"](_0x7231x41)["classList"]["add"]('menu-active');
                        document["getElementsByClassName"]('menu-hider')[0]["classList"]["add"]('menu-active');
                        var _0x7231x42 = document["getElementById"](_0x7231x41);
                        var _0x7231x43 = _0x7231x42["getAttribute"]('data-menu-effect');
                        var _0x7231x44 = _0x7231x42["classList"]["contains"]('menu-box-left');
                        var _0x7231x45 = _0x7231x42["classList"]["contains"]('menu-box-right');
                        var _0x7231x46 = _0x7231x42["classList"]["contains"]('menu-box-top');
                        var _0x7231x47 = _0x7231x42["classList"]["contains"]('menu-box-bottom');
                        var _0x7231x48 = _0x7231x42["offsetWidth"];
                        var _0x7231x49 = _0x7231x42["offsetHeight"];
                        var _0x7231x4a = _0x7231x42["getAttribute"]('data-menu-hide');
                        if (_0x7231x4a) {
                            setTimeout(function() {
                                document["getElementById"](_0x7231x41)["classList"]["remove"]('menu-active');
                                document["getElementsByClassName"]('menu-hider')[0]["classList"]["remove"]('menu-active')
                            }, _0x7231x4a)
                        }
                        ;if (_0x7231x43 === "menu-push") {
                            var _0x7231x48 = document["getElementById"](_0x7231x41)["getAttribute"]('data-menu-width');
                            if (_0x7231x44) {
                                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x3f["length"]; _0x7231x9++) {
                                    _0x7231x3f[_0x7231x9]["style"]["transform"] = "translateX(" + _0x7231x48 + "px)"
                                }
                            }
                            ;if (_0x7231x45) {
                                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x3f["length"]; _0x7231x9++) {
                                    _0x7231x3f[_0x7231x9]["style"]["transform"] = "translateX(-" + _0x7231x48 + "px)"
                                }
                            }
                            ;if (_0x7231x47) {
                                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x3f["length"]; _0x7231x9++) {
                                    _0x7231x3f[_0x7231x9]["style"]["transform"] = "translateY(-" + _0x7231x49 + "px)"
                                }
                            }
                            ;if (_0x7231x46) {
                                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x3f["length"]; _0x7231x9++) {
                                    _0x7231x3f[_0x7231x9]["style"]["transform"] = "translateY(" + _0x7231x49 + "px)"
                                }
                            }
                        }
                        ;if (_0x7231x43 === "menu-parallax") {
                            var _0x7231x48 = document["getElementById"](_0x7231x41)["getAttribute"]('data-menu-width');
                            if (_0x7231x44) {
                                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x3f["length"]; _0x7231x9++) {
                                    _0x7231x3f[_0x7231x9]["style"]["transform"] = "translateX(" + _0x7231x48 / 10 + "px)"
                                }
                            }
                            ;if (_0x7231x45) {
                                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x3f["length"]; _0x7231x9++) {
                                    _0x7231x3f[_0x7231x9]["style"]["transform"] = "translateX(-" + _0x7231x48 / 10 + "px)"
                                }
                            }
                            ;if (_0x7231x47) {
                                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x3f["length"]; _0x7231x9++) {
                                    _0x7231x3f[_0x7231x9]["style"]["transform"] = "translateY(-" + _0x7231x49 / 5 + "px)"
                                }
                            }
                            ;if (_0x7231x46) {
                                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x3f["length"]; _0x7231x9++) {
                                    _0x7231x3f[_0x7231x9]["style"]["transform"] = "translateY(" + _0x7231x49 / 5 + "px)"
                                }
                            }
                        }
                    }
                    )
                }
                );
                const _0x7231x4b = document["querySelectorAll"]('.close-menu, .menu-hider');
                _0x7231x4b["forEach"]((_0x7231xb)=>{
                    return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                        const _0x7231x40 = document["querySelectorAll"]('.menu-active');
                        for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x40["length"]; _0x7231x9++) {
                            _0x7231x40[_0x7231x9]["classList"]["remove"]('menu-active')
                        }
                        ;for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x3f["length"]; _0x7231x9++) {
                            _0x7231x3f[_0x7231x9]["style"]["transform"] = "translateX(-" + 0 + "px)"
                        }
                    }
                    )
                }
                )
            }
        }
        _0x7231x3b();
        function _0x7231x4c() {
            const _0x7231x4d = document["querySelectorAll"]('[data-menu-active]')[0];
            if (_0x7231x4d) {
                var _0x7231x4e = _0x7231x4d["getAttribute"]('data-menu-active');
                document["querySelectorAll"]('#' + _0x7231x4e)[0]["classList"]["add"]('nav-item-active');
                if (document["querySelectorAll"]('#' + _0x7231x4e)[0]["parentNode"]["getAttribute"]('class') === "submenu") {
                    var _0x7231x4f = '#' + document["querySelectorAll"]('#' + _0x7231x4e)[0]["parentNode"]["getAttribute"]('id');
                    var _0x7231x50 = document["querySelectorAll"]('#' + _0x7231x4e)[0]["parentNode"]["getAttribute"]('id');
                    var _0x7231x51 = document["querySelectorAll"](_0x7231x4f)[0]["children"]["length"];
                    var _0x7231x52 = document["querySelectorAll"](_0x7231x4f)[0]["offsetHeight"];
                    document["querySelectorAll"](_0x7231x4f)[0]["style"]["transition"] = "all 250ms";
                    document["querySelectorAll"](_0x7231x4f)[0]["style"]["height"] = (_0x7231x51 * 50) + 26 + 'px';
                    document["querySelectorAll"]('[data-submenu=\"' + _0x7231x50 + '\"]')[0]["classList"]["add"]('nav-item-active')
                }
            }
            ;document["querySelectorAll"]('[data-submenu]')["forEach"](function(_0x7231xa) {
                var _0x7231x53 = _0x7231xa["getAttribute"]('data-submenu');
                var _0x7231x54 = document["getElementById"](_0x7231x53)["children"]["length"];
                var _0x7231x55 = _0x7231xa["querySelectorAll"]('strong')[0];
                _0x7231x55["insertAdjacentHTML"]('beforeend', _0x7231x54)
            });
            var _0x7231x56 = document["querySelectorAll"]('[data-submenu]');
            _0x7231x56["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                    _0x7231xb["classList"]["toggle"]('nav-item-active');
                    var _0x7231x50 = _0x7231xb["getAttribute"]('data-submenu');
                    var _0x7231x4f = '#' + _0x7231x50;
                    var _0x7231x51 = document["querySelectorAll"](_0x7231x4f)[0]["children"]["length"];
                    var _0x7231x52 = document["querySelectorAll"](_0x7231x4f)[0]["offsetHeight"];
                    if (_0x7231x52 === 0) {
                        console["log"]('true');
                        document["querySelectorAll"](_0x7231x4f)[0]["style"]["transition"] = "all 250ms";
                        document["querySelectorAll"](_0x7231x4f)[0]["style"]["height"] = (_0x7231x51 * 50) + 26 + 'px'
                    } else {
                        console["log"]('false');
                        document["querySelectorAll"](_0x7231x4f)[0]["style"]["transition"] = "all 250ms";
                        document["querySelectorAll"](_0x7231x4f)[0]["style"]["height"] = "0px"
                    }
                }
                )
            }
            )
        }
        const _0x7231x57 = document["querySelectorAll"]('[data-back-button]');
        if (_0x7231x57["length"]) {
            _0x7231x57["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                    _0x7231xa["stopPropagation"];
                    _0x7231xa["preventDefault"];
                    window["history"]["go"](-1)
                }
                )
            }
            )
        }
        ;function _0x7231x58() {
            const _0x7231x59 = document["querySelectorAll"]('.back-to-top-icon, .back-to-top-badge, .back-to-top');
            if (_0x7231x59) {
                _0x7231x59["forEach"]((_0x7231xb)=>{
                    return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                        window["scrollTo"]({
                            top: 0,
                            behavior: `smooth`
                        })
                    }
                    )
                }
                )
            }
        }
        function _0x7231x5a() {
            let _0x7231x5b, _0x7231x5c;
            if (/iP(hone|od|ad)/["test"](navigator["platform"])) {
                _0x7231x5c = (navigator["appVersion"])["match"](/OS (\d+)_(\d+)_?(\d+)?/);
                _0x7231x5b = {
                    status: true,
                    version: parseInt(_0x7231x5c[1], 10),
                    info: parseInt(_0x7231x5c[1], 10) + '.' + parseInt(_0x7231x5c[2], 10) + '.' + parseInt(_0x7231x5c[3] || 0, 10)
                }
            } else {
                _0x7231x5b = {
                    status: false,
                    version: false,
                    info: ''
                }
            }
            ;return _0x7231x5b
        }
        let _0x7231x5d = _0x7231x5a();
        if (_0x7231x5d["version"] > 14) {
            document["querySelectorAll"]('#page')[0]["classList"]["add"]('min-ios15')
        }
        ;const _0x7231x5e = document["getElementsByClassName"]('card');
        function _0x7231x5f() {
            var _0x7231x60, _0x7231x61, _0x7231x62;
            var _0x7231x62 = document["querySelectorAll"]('.header:not(.header-transparent)')[0];
            var _0x7231x63 = document["querySelectorAll"]('#footer-bar')[0];
            _0x7231x62 ? _0x7231x60 = document["querySelectorAll"]('.header')[0]["offsetHeight"] : _0x7231x60 = 0;
            _0x7231x63 ? _0x7231x61 = document["querySelectorAll"]('#footer-bar')[0]["offsetHeight"] : _0x7231x61 = 0;
            for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x5e["length"]; _0x7231x9++) {
                if (_0x7231x5e[_0x7231x9]["getAttribute"]('data-card-height') === "cover") {
                    if (window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                        var _0x7231x64 = window["outerHeight"]
                    }
                    ;if (!window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                        var _0x7231x64 = window["innerHeight"]
                    }
                    ;var _0x7231x65 = _0x7231x64 + 'px'
                }
                ;if (_0x7231x5e[_0x7231x9]["getAttribute"]('data-card-height') === "cover-card") {
                    var _0x7231x64 = window["innerHeight"];
                    var _0x7231x65 = _0x7231x64 - 173 + 'px';
                    _0x7231x5e[_0x7231x9]["style"]["height"] = _0x7231x65
                }
                ;if (_0x7231x5e[_0x7231x9]["getAttribute"]('data-card-height') === "cover-full") {
                    if (window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                        var _0x7231x64 = window["outerHeight"]
                    }
                    ;if (!window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                        var _0x7231x64 = window["innerHeight"]
                    }
                    ;var _0x7231x65 = _0x7231x64 + 'px';
                    _0x7231x5e[_0x7231x9]["style"]["height"] = _0x7231x65
                }
                ;if (_0x7231x5e[_0x7231x9]["hasAttribute"]('data-card-height')) {
                    var _0x7231x66 = _0x7231x5e[_0x7231x9]["getAttribute"]('data-card-height');
                    _0x7231x5e[_0x7231x9]["style"]["height"] = _0x7231x66 + 'px';
                    if (_0x7231x66 === "cover") {
                        var _0x7231x67 = _0x7231x66;
                        _0x7231x5e[_0x7231x9]["style"]["height"] = _0x7231x65
                    }
                }
            }
        }
        if (_0x7231x5e["length"]) {
            _0x7231x5f();
            window["addEventListener"]("resize", _0x7231x5f)
        }
        ;function _0x7231x68() {
            var _0x7231x69 = localStorage["getItem"](_0x7231x3 + '-Highlight');
            if (_0x7231x69) {
                document["querySelectorAll"]('[data-change-highlight=\"' + _0x7231x69 + '\"]')[0]["classList"]["add"]('highlight-active');
                document["body"]["setAttribute"]('data-highlight', _0x7231x69)
            }
        }
        function _0x7231x6a() {
            var _0x7231x6b = document["querySelectorAll"]('[data-change-highlight]');
            _0x7231x6b["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                    const _0x7231x6c = document["querySelectorAll"]('.highlight-active');
                    for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x6c["length"]; _0x7231x9++) {
                        _0x7231x6c[_0x7231x9]["classList"]["remove"]('highlight-active')
                    }
                    ;_0x7231xb["classList"]["add"]('highlight-active');
                    var _0x7231x6d = _0x7231xb["getAttribute"]('data-change-highlight');
                    var _0x7231x6e = document["querySelectorAll"]('.page-highlight');
                    if (_0x7231x6e["length"]) {
                        _0x7231x6e["forEach"](function(_0x7231xa) {
                            _0x7231xa["remove"]()
                        })
                    }
                    ;var _0x7231x6f = document["createElement"]("link");
                    _0x7231x6f["rel"] = "stylesheet";
                    _0x7231x6f["className"] = "page-highlight";
                    _0x7231x6f["type"] = "text/css";
                    _0x7231x6f["href"] = 'styles/highlights/highlight_' + _0x7231x6d + '.css';
                    document["getElementsByTagName"]("head")[0]["appendChild"](_0x7231x6f);
                    document["body"]["setAttribute"]('data-highlight', 'highlight-' + _0x7231x6d);
                    localStorage["setItem"](_0x7231x3 + '-Highlight', _0x7231x6d)
                }
                )
            }
            );
            var _0x7231x69 = localStorage["getItem"](_0x7231x3 + '-Highlight');
            if (_0x7231x69) {
                var _0x7231x6f = document["createElement"]("link");
                _0x7231x6f["rel"] = "stylesheet";
                _0x7231x6f["className"] = "page-highlight";
                _0x7231x6f["type"] = "text/css";
                _0x7231x6f["href"] = 'styles/highlights/highlight_' + _0x7231x69 + '.css';
                if (!document["querySelectorAll"]('.page-highlight')["length"]) {
                    document["getElementsByTagName"]("head")[0]["appendChild"](_0x7231x6f);
                    document["body"]["setAttribute"]('data-highlight', 'highlight-' + _0x7231x69)
                }
            }
        }
        _0x7231x6a();
        var _0x7231x70 = document["querySelectorAll"]('[data-change-background]');
        _0x7231x70["forEach"]((_0x7231xb)=>{
            return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                var _0x7231x71 = _0x7231xb["getAttribute"]('data-change-background');
                document["body"]["setAttribute"]('data-gradient', 'body-' + _0x7231x71 + '');
                localStorage["setItem"](_0x7231x3 + '-Gradient', _0x7231x71)
            }
            )
        }
        );
        var _0x7231x72 = localStorage["getItem"](_0x7231x3 + '-Gradient');
        if (_0x7231x72) {
            document["body"]["setAttribute"]('data-gradient', 'body-' + _0x7231x72 + '')
        }
        ;function _0x7231x73() {
            const _0x7231x74 = document["querySelectorAll"]('[data-toggle-theme]');
            function _0x7231x75() {
                document["body"]["classList"]["add"]('theme-dark');
                document["body"]["classList"]["remove"]('theme-light', 'detect-theme');
                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x74["length"]; _0x7231x9++) {
                    _0x7231x74[_0x7231x9]["checked"] = "checked"
                }
                ;localStorage["setItem"](_0x7231x3 + '-Theme', 'dark-mode')
            }
            function _0x7231x76() {
                document["body"]["classList"]["add"]('theme-light');
                document["body"]["classList"]["remove"]('theme-dark', 'detect-theme');
                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x74["length"]; _0x7231x9++) {
                    _0x7231x74[_0x7231x9]["checked"] = false
                }
                ;localStorage["setItem"](_0x7231x3 + '-Theme', 'light-mode')
            }
            function _0x7231x77() {
                var _0x7231x78 = document["querySelectorAll"]('.btn, .header, #footer-bar, .menu-box, .menu-active');
                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x78["length"]; _0x7231x9++) {
                    _0x7231x78[_0x7231x9]["style"]["transition"] = "all 0s ease"
                }
            }
            function _0x7231x79() {
                var _0x7231x7a = document["querySelectorAll"]('.btn, .header, #footer-bar, .menu-box, .menu-active');
                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x7a["length"]; _0x7231x9++) {
                    _0x7231x7a[_0x7231x9]["style"]["transition"] = ""
                }
            }
            function _0x7231x7b() {
                const _0x7231x7c = window["matchMedia"]("(prefers-color-scheme: dark)")["matches"];
                const _0x7231x7d = window["matchMedia"]("(prefers-color-scheme: light)")["matches"];
                const _0x7231x7e = window["matchMedia"]("(prefers-color-scheme: no-preference)")["matches"];
                window["matchMedia"]("(prefers-color-scheme: dark)")["addListener"]((_0x7231xa)=>{
                    return _0x7231xa["matches"] && _0x7231x75()
                }
                );
                window["matchMedia"]("(prefers-color-scheme: light)")["addListener"]((_0x7231xa)=>{
                    return _0x7231xa["matches"] && _0x7231x76()
                }
                );
                if (_0x7231x7c) {
                    _0x7231x75()
                }
                ;if (_0x7231x7d) {
                    _0x7231x76()
                }
            }
            var _0x7231x7f = document["querySelectorAll"]('[data-toggle-theme]');
            _0x7231x7f["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                    if (document["body"]["className"] == "theme-light") {
                        _0x7231x77();
                        _0x7231x75()
                    } else {
                        if (document["body"]["className"] == "theme-dark") {
                            _0x7231x77();
                            _0x7231x76()
                        }
                    }
                    ;setTimeout(function() {
                        _0x7231x79()
                    }, 350)
                }
                )
            }
            );
            if (localStorage["getItem"](_0x7231x3 + '-Theme') == "dark-mode") {
                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x74["length"]; _0x7231x9++) {
                    _0x7231x74[_0x7231x9]["checked"] = "checked"
                }
                ;document["body"]["className"] = 'theme-dark'
            }
            ;if (localStorage["getItem"](_0x7231x3 + '-Theme') == "light-mode") {
                document["body"]["className"] = 'theme-light'
            }
            ;if (document["body"]["className"] == "detect-theme") {
                _0x7231x7b()
            }
            ;const _0x7231x80 = document["querySelectorAll"]('.detect-dark-mode');
            _0x7231x80["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                    document["body"]["classList"]["remove"]('theme-light', 'theme-dark');
                    document["body"]["classList"]["add"]('detect-theme');
                    setTimeout(function() {
                        _0x7231x7b()
                    }, 50)
                }
                )
            }
            )
        }
        if (localStorage["getItem"](_0x7231x3 + '-Theme') == "dark-mode") {
            document["body"]["className"] = 'theme-dark'
        }
        ;if (localStorage["getItem"](_0x7231x3 + '-Theme') == "light-mode") {
            document["body"]["className"] = 'theme-light'
        }
        ;const _0x7231x81 = document["querySelectorAll"]('.accordion-btn');
        if (_0x7231x81["length"]) {
            _0x7231x81["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231x82)=>{
                    _0x7231xb["querySelector"]('i:last-child')["classList"]["toggle"]('fa-rotate-180')
                }
                )
            }
            )
        }
        ;const _0x7231x83 = document["getElementsByClassName"]('upload-file');
        if (_0x7231x83["length"]) {
            _0x7231x83[0]["addEventListener"]('change', _0x7231x84, false);
            function _0x7231x84(_0x7231x82) {
                if (this["files"] && this["files"][0]) {
                    var _0x7231x85 = document["getElementById"]('image-data');
                    _0x7231x85["src"] = URL["createObjectURL"](this["files"][0])
                }
                ;const _0x7231x86 = _0x7231x82["target"]["files"];
                const _0x7231x87 = _0x7231x86[0]["name"];
                document["getElementsByClassName"]('file-data')[0]["classList"]["add"]('disabled');
                document["getElementsByClassName"]('upload-file-data')[0]["classList"]["remove"]('disabled');
                document["getElementsByClassName"]('upload-file-name')[0]["innerHTML"] = _0x7231x86[0]["name"];
                document["getElementsByClassName"]('upload-file-modified')[0]["innerHTML"] = _0x7231x86[0]["lastModifiedDate"];
                document["getElementsByClassName"]('upload-file-size')[0]["innerHTML"] = _0x7231x86[0]["size"] / 1000 + 'kb';
                document["getElementsByClassName"]('upload-file-type')[0]["innerHTML"] = _0x7231x86[0]["type"]
            }
        }
        ;var _0x7231x88 = document["querySelectorAll"]('.get-location');
        if (_0x7231x88["length"]) {
            var _0x7231x89 = document["getElementsByClassName"]('location-support')[0];
            if (typeof (_0x7231x89) != 'undefined' && _0x7231x89 != null) {
                if ("geolocation"in navigator) {
                    _0x7231x89["innerHTML"] = 'Your browser and device <strong class=\"color-green2-dark\">support</strong> Geolocation.'
                } else {
                    _0x7231x89["innerHTML"] = 'Your browser and device <strong class=\"color-red2-dark\">support</strong> Geolocation.'
                }
            }
            ;function _0x7231x8a() {
                const _0x7231x8b = document["querySelector"]('.location-coordinates');
                function _0x7231x8c(_0x7231x8d) {
                    const _0x7231x8e = _0x7231x8d["coords"]["latitude"];
                    const _0x7231x8f = _0x7231x8d["coords"]["longitude"];
                    _0x7231x8b["innerHTML"] = '<strong>Longitude:</strong> ' + _0x7231x8f + '<br><strong>Latitude:</strong> ' + _0x7231x8e;
                    var _0x7231x90 = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyAM3nxDVrkjyKwdIZp8QOplmBKLRVI5S_Y&center=';
                    var _0x7231x91 = _0x7231x8e + ',';
                    var _0x7231x92 = _0x7231x8f;
                    var _0x7231x93 = '&zoom=16&maptype=satellite';
                    var _0x7231x94 = '';
                    document["getElementsByClassName"]('location-map')[0]["setAttribute"]('src', mapLinkEmbed);
                    document["getElementsByClassName"]('location-button')[0]["setAttribute"]('href', mapLinkAddress);
                    document["getElementsByClassName"]('location-button')[0]["classList"]["remove"]('disabled')
                }
                function _0x7231x95() {
                    _0x7231x8b["textContent"] = 'Unable to retrieve your location'
                }
                if (!navigator["geolocation"]) {
                    _0x7231x8b["textContent"] = 'Geolocation is not supported by your browser'
                } else {
                    _0x7231x8b["textContent"] = 'Locating';
                    navigator["geolocation"]["getCurrentPosition"](_0x7231x8c, _0x7231x95)
                }
            }
            var _0x7231x96 = document["getElementsByClassName"]('get-location')[0];
            if (typeof (_0x7231x96) != 'undefined' && _0x7231x96 != null) {
                _0x7231x96["addEventListener"]('click', function() {
                    this["classList"]["add"]('disabled');
                    _0x7231x8a()
                })
            }
        }
        ;const _0x7231x97 = document["querySelectorAll"]('.card-scale');
        if (_0x7231x97["length"]) {
            _0x7231x97["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('mouseenter', (_0x7231x82)=>{
                    _0x7231xb["querySelectorAll"]('img')[0]["classList"]["add"]('card-scale-image')
                }
                )
            }
            );
            _0x7231x97["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('mouseleave', (_0x7231x82)=>{
                    _0x7231xb["querySelectorAll"]('img')[0]["classList"]["remove"]('card-scale-image')
                }
                )
            }
            )
        }
        ;const _0x7231x98 = document["querySelectorAll"]('.card-hide');
        if (_0x7231x98["length"]) {
            _0x7231x98["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('mouseenter', (_0x7231x82)=>{
                    _0x7231xb["querySelectorAll"]('.card-center, .card-bottom, .card-top, .card-overlay')[0]["classList"]["add"]('card-hide-image')
                }
                )
            }
            );
            _0x7231x98["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('mouseleave', (_0x7231x82)=>{
                    _0x7231xb["querySelectorAll"]('.card-center, .card-bottom, .card-top, .card-overlay')[0]["classList"]["remove"]('card-hide-image')
                }
                )
            }
            )
        }
        ;const _0x7231x99 = document["querySelectorAll"]('.card-rotate');
        if (_0x7231x99["length"]) {
            _0x7231x99["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('mouseenter', (_0x7231x82)=>{
                    _0x7231xb["querySelectorAll"]('img')[0]["classList"]["add"]('card-rotate-image')
                }
                )
            }
            );
            _0x7231x99["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('mouseleave', (_0x7231x82)=>{
                    _0x7231xb["querySelectorAll"]('img')[0]["classList"]["remove"]('card-rotate-image')
                }
                )
            }
            )
        }
        ;const _0x7231x9a = document["querySelectorAll"]('.card-grayscale');
        if (_0x7231x9a["length"]) {
            _0x7231x9a["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('mouseenter', (_0x7231x82)=>{
                    _0x7231xb["querySelectorAll"]('img')[0]["classList"]["add"]('card-grayscale-image')
                }
                )
            }
            );
            _0x7231x9a["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('mouseleave', (_0x7231x82)=>{
                    _0x7231xb["querySelectorAll"]('img')[0]["classList"]["remove"]('card-grayscale-image')
                }
                )
            }
            )
        }
        ;const _0x7231x9b = document["querySelectorAll"]('.card-blur');
        if (_0x7231x9b["length"]) {
            _0x7231x9b["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('mouseenter', (_0x7231x82)=>{
                    _0x7231xb["querySelectorAll"]('img')[0]["classList"]["add"]('card-blur-image')
                }
                )
            }
            );
            _0x7231x9b["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('mouseleave', (_0x7231x82)=>{
                    _0x7231xb["querySelectorAll"]('img')[0]["classList"]["remove"]('card-blur-image')
                }
                )
            }
            )
        }
        ;var _0x7231x9c = document["querySelectorAll"]('.check-visited');
        if (_0x7231x9c["length"]) {
            function _0x7231x9d() {
                var _0x7231x9e = JSON["parse"](localStorage["getItem"](_0x7231x3 + '_Visited_Links')) || [];
                var _0x7231x9f = document["querySelectorAll"]('.check-visited a');
                for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x9f["length"]; _0x7231x9++) {
                    var _0x7231xa0 = _0x7231x9f[_0x7231x9];
                    _0x7231xa0["addEventListener"]('click', function(_0x7231xa) {
                        var _0x7231xa1 = this["href"];
                        if (_0x7231x9e["indexOf"](_0x7231xa1) == -1) {
                            _0x7231x9e["push"](_0x7231xa1);
                            localStorage["setItem"](_0x7231x3 + '_Visited_Links', JSON["stringify"](_0x7231x9e))
                        }
                    });
                    if (_0x7231x9e["indexOf"](_0x7231xa0["href"]) !== -1) {
                        _0x7231xa0["className"] += ' visited-link'
                    }
                }
            }
            _0x7231x9d()
        }
        ;var _0x7231xa2 = document["querySelectorAll"]('.footer-bar-5')[0];
        if (_0x7231xa2) {
            var _0x7231xa3 = document["querySelectorAll"]('#footer-bar .active-nav')[0];
            _0x7231xa3["insertAdjacentHTML"]('beforeend', '<strong></strong>')
        }
        ;var _0x7231xa4 = document["getElementById"]('adblock-message');
        if (_0x7231xa4) {
            var _0x7231xa5 = false;
            document["body"]["innerHTML"] += '<div class=\"adsbygoogle\" id=\"ad-detector\"></div>';
            var _0x7231xa6 = document["getElementById"]('ad-detector');
            var _0x7231xa7 = getComputedStyle(_0x7231xa6, null);
            if (_0x7231xa7["display"] === 'none') {
                document["getElementById"]('adblock-message')["classList"]["remove"]('disabled')
            }
        }
        ;var _0x7231xa8 = document["querySelectorAll"]('.scroll-ad, .header-auto-show');
        if (_0x7231xa8["length"]) {
            var _0x7231xa9 = document["querySelectorAll"]('.scroll-ad');
            var _0x7231xaa = document["querySelectorAll"]('.header-auto-show');
            var _0x7231xc = document["querySelectorAll"]('.page-title');
            window["addEventListener"]('scroll', function() {
                if (document["querySelectorAll"]('.scroll-ad, .header-auto-show')["length"]) {
                    function _0x7231xab() {
                        _0x7231xa9[0]["classList"]["add"]('scroll-ad-visible')
                    }
                    function _0x7231xac() {
                        _0x7231xa9[0]["classList"]["remove"]('scroll-ad-visible')
                    }
                    function _0x7231xad() {
                        _0x7231xaa[0]["classList"]["add"]('header-active')
                    }
                    function _0x7231xae() {
                        _0x7231xaa[0]["classList"]["remove"]('header-active')
                    }
                    var _0x7231xaf = window["outerWidth"];
                    var _0x7231xb0 = document["documentElement"]["scrollTop"];
                    let _0x7231xb1 = _0x7231xb0 <= 80;
                    var _0x7231xb2 = _0x7231xb0 >= 80;
                    let _0x7231xb3 = (_0x7231xaf - _0x7231xb0 + 500) <= 150;
                    if (_0x7231xa9["length"]) {
                        _0x7231xb1 ? _0x7231xac() : null;
                        _0x7231xb2 ? _0x7231xab() : null;
                        _0x7231xb3 ? _0x7231xac() : null
                    }
                    ;if (_0x7231xaa["length"]) {
                        _0x7231xb1 ? _0x7231xae() : null;
                        _0x7231xb2 ? _0x7231xad() : null
                    }
                }
            })
        }
        ;var _0x7231xb4 = document["querySelectorAll"]('.stepper-add');
        var _0x7231xb5 = document["querySelectorAll"]('.stepper-sub');
        if (_0x7231xb4["length"]) {
            _0x7231xb4["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231x82)=>{
                    var _0x7231xb6 = _0x7231xb["parentElement"]["querySelector"]('input')["value"];
                    _0x7231xb["parentElement"]["querySelector"]('input')["value"] = +_0x7231xb6 + 1
                }
                )
            }
            );
            _0x7231xb5["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231x82)=>{
                    var _0x7231xb6 = _0x7231xb["parentElement"]["querySelector"]('input')["value"];
                    _0x7231xb["parentElement"]["querySelector"]('input')["value"] = +_0x7231xb6 - 1
                }
                )
            }
            )
        }
        ;var _0x7231xb7 = document["querySelectorAll"]('[data-trigger-switch]:not([data-toggle-theme])');
        if (_0x7231xb7["length"]) {
            _0x7231xb7["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231x82)=>{
                    var _0x7231xb8 = _0x7231xb["getAttribute"]('data-trigger-switch');
                    var _0x7231xb9 = document["getElementById"](_0x7231xb8);
                    _0x7231xb9["checked"] ? _0x7231xb9["checked"] = false : _0x7231xb9["checked"] = true
                }
                )
            }
            )
        }
        ;var _0x7231xba = document["querySelectorAll"]('.classic-toggle');
        if (_0x7231xba["length"]) {
            _0x7231xba["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231x82)=>{
                    _0x7231xb["querySelector"]('i:last-child')["classList"]["toggle"]('fa-rotate-180');
                    _0x7231xb["querySelector"]('i:last-child')["style"]["transition"] = "all 250ms ease"
                }
                )
            }
            )
        }
        ;var _0x7231xbb = document["querySelectorAll"]('[data-toast]');
        if (_0x7231xbb["length"]) {
            _0x7231xbb["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231x82)=>{
                    var _0x7231xbc = _0x7231xb["getAttribute"]('data-toast');
                    var _0x7231xbd = document["getElementById"](_0x7231xbc);
                    var _0x7231xbd = new bootstrap.Toast(_0x7231xbd);
                    _0x7231xbd["show"]()
                }
                )
            }
            )
        }
        ;var _0x7231xbe = []["slice"]["call"](document["querySelectorAll"]('[data-bs-toggle=\"dropdown\"]'));
        if (_0x7231xbe["length"]) {
            var _0x7231xbf = _0x7231xbe["map"](function(_0x7231xc0) {
                return new bootstrap.Dropdown(_0x7231xc0)
            })
        }
        ;var _0x7231xc1 = document["querySelectorAll"]('.show-business-opened, .show-business-closed, .working-hours');
        if (_0x7231xc1["length"]) {
            var _0x7231x5b = new Date();
            var _0x7231xc2 = _0x7231x5b["getDay"]();
            var _0x7231xc3 = _0x7231x5b["getHours"]() + "." + _0x7231x5b["getMinutes"]();
            var _0x7231xc4 = [["Sunday"], ["Monday", 9.00, 17.00], ["Tuesday", 9.00, 17.00], ["Wednesday", 9.00, 17.00], ["Thursday", 9.00, 17.00], ["Friday", 9.00, 17.00], ["Saturday", 9.00, 13.00]];
            var _0x7231xc5 = _0x7231xc4[_0x7231xc2];
            var _0x7231xc6 = document["querySelectorAll"]('.show-business-opened');
            var _0x7231xc7 = document["querySelectorAll"]('.show-business-closed');
            if (_0x7231xc3 > _0x7231xc5[1] && _0x7231xc3 < _0x7231xc5[2] || _0x7231xc3 > _0x7231xc5[3] && _0x7231xc3 < _0x7231xc5[4]) {
                _0x7231xc6["forEach"](function(_0x7231xa) {
                    _0x7231xa["classList"]["remove"]('disabled')
                });
                _0x7231xc7["forEach"](function(_0x7231xa) {
                    _0x7231xa["classList"]["add"]('disabled')
                })
            } else {
                _0x7231xc6["forEach"](function(_0x7231xa) {
                    _0x7231xa["classList"]["add"]('disabled')
                });
                _0x7231xc7["forEach"](function(_0x7231xa) {
                    _0x7231xa["classList"]["remove"]('disabled')
                })
            }
            ;var _0x7231xc1 = document["querySelectorAll"]('.working-hours[data-day]');
            _0x7231xc1["forEach"](function(_0x7231xc8) {
                var _0x7231xc9 = _0x7231xc8["getAttribute"]('data-day');
                if (_0x7231xc9 === _0x7231xc5[0]) {
                    var _0x7231xca = '[data-day=\"' + _0x7231xc5[0] + '\"]';
                    if (_0x7231xc3 > _0x7231xc5[1] && _0x7231xc3 < _0x7231xc5[2] || _0x7231xc3 > _0x7231xc5[3] && _0x7231xc3 < _0x7231xc5[4]) {
                        document["querySelectorAll"](_0x7231xca)[0]["classList"]["add"]('bg-green-dark');
                        document["querySelectorAll"](_0x7231xca + ' p')["forEach"](function(_0x7231xcb) {
                            _0x7231xcb["classList"]["add"]('color-white')
                        })
                    } else {
                        document["querySelectorAll"](_0x7231xca)[0]["classList"]["add"]('bg-red-dark');
                        document["querySelectorAll"](_0x7231xca + ' p')["forEach"](function(_0x7231xcb) {
                            _0x7231xcb["classList"]["add"]('color-white')
                        })
                    }
                }
            })
        }
        ;var _0x7231xcc = document["querySelectorAll"]('[data-vibrate]');
        if (_0x7231xcc["length"]) {
            var _0x7231xcd = document["getElementsByClassName"]('start-vibrating')[0];
            var _0x7231xce = document["getElementsByClassName"]('stop-vibrating')[0];
            _0x7231xcd["addEventListener"]('click', function() {
                var _0x7231xcf = document["getElementsByClassName"]('vibrate-demo')[0]["value"];
                window["navigator"]["vibrate"](_0x7231xcf)
            });
            _0x7231xce["addEventListener"]('click', function() {
                window["navigator"]["vibrate"](0)
            });
            _0x7231xcc["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                    var _0x7231xcf = _0x7231xb["getAttribute"]('data-vibrate');
                    window["navigator"]["vibrate"](_0x7231xcf)
                }
                )
            }
            )
        }
        ;var _0x7231xd0 = document["querySelectorAll"]('[data-timed-ad]');
        if (_0x7231xd0["length"]) {
            _0x7231xd0["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                    var _0x7231xd1 = _0x7231xb["getAttribute"]('data-timed-ad');
                    var _0x7231xd2 = _0x7231xb["getAttribute"]('data-menu');
                    var _0x7231xd3 = _0x7231xd1;
                    var _0x7231xd4 = setInterval(function() {
                        if (_0x7231xd3 <= 1) {
                            clearInterval(_0x7231xd4);
                            document["getElementById"](_0x7231xd2)["querySelectorAll"]('.fa-times')[0]["classList"]["remove"]('disabled');
                            document["getElementById"](_0x7231xd2)["querySelectorAll"]('.close-menu')[0]["classList"]["remove"]('no-click');
                            document["getElementById"](_0x7231xd2)["querySelectorAll"]('span')[0]["style"]["display"] = "none"
                        } else {}
                        ;document["getElementById"](_0x7231xd2)["querySelectorAll"]('span')[0]["innerHTML"] = _0x7231xd3 -= 1
                    }, 1000)
                }
                )
            }
            )
        }
        ;var _0x7231xd5 = document["querySelectorAll"]('[data-auto-show-ad]');
        if (_0x7231xd5["length"]) {
            var _0x7231xd6 = _0x7231xd5[0]["getAttribute"]('data-auto-show-ad');
            var _0x7231xd4 = setInterval(function() {
                if (_0x7231xd6 <= 1) {
                    clearInterval(_0x7231xd4);
                    var _0x7231xd7 = _0x7231xd5[0]["getAttribute"]('data-menu');
                    document["getElementById"](_0x7231xd7)["classList"]["add"]('menu-active');
                    var _0x7231xd8 = _0x7231xd5[0]["getAttribute"]('data-timed-ad');
                    var _0x7231xd9 = setInterval(function() {
                        if (_0x7231xd8 <= 0) {
                            clearInterval(_0x7231xd9);
                            document["getElementById"](_0x7231xd7)["querySelectorAll"]('.fa-times')[0]["classList"]["remove"]('disabled');
                            document["getElementById"](_0x7231xd7)["querySelectorAll"]('.close-menu')[0]["classList"]["remove"]('no-click');
                            document["getElementById"](_0x7231xd7)["querySelectorAll"]('span')[0]["style"]["display"] = "none"
                        }
                        ;document["getElementById"](_0x7231xd7)["querySelectorAll"]('span')[0]["innerHTML"] = _0x7231xd8 -= 1
                    }, 1000)
                }
                ;_0x7231xd6 -= 1
            }, 1000)
        }
        ;var _0x7231xda = document["querySelectorAll"]('.visit-detection')[0];
        if (_0x7231xda) {
            var _0x7231xdb = document["querySelectorAll"]('.never-visited')[0];
            var _0x7231xdc = document["querySelectorAll"]('.before-visited')[0];
            var _0x7231xdd = document["querySelectorAll"]('.visit-before-time')[0];
            var _0x7231xde = localStorage["getItem"](_0x7231x3 + '-Last-Visited');
            var _0x7231x5b = new Date();
            var _0x7231xdf = _0x7231x5b["getFullYear"]() + "/" + (_0x7231x5b["getMonth"]() + 1) + "/" + _0x7231x5b["getDate"]();
            var _0x7231xe0 = _0x7231x5b["getHours"]() + ":" + _0x7231x5b["getMinutes"]() + ":" + _0x7231x5b["getSeconds"]();
            if (!_0x7231xde) {
                _0x7231xdb["style"]["display"] = "block";
                _0x7231xdc["style"]["display"] = "none";
                localStorage["setItem"](_0x7231x3 + '-Last-Visited', 'Your last visit was ' + _0x7231xdf + ' at ' + _0x7231xe0)
            } else {
                _0x7231xdb["style"]["display"] = "none";
                _0x7231xdc["style"]["display"] = "block";
                _0x7231xdd["append"](_0x7231xde);
                localStorage["setItem"](_0x7231x3 + '-Last-Visited', 'Your last visit was ' + _0x7231xdf + ' at ' + _0x7231xe0)
            }
        }
        ;var _0x7231xe1 = document["querySelectorAll"]('#reading-progress-text');
        if (_0x7231xe1["length"]) {
            var _0x7231xe2 = _0x7231xe1[0]["innerHTML"]["split"](' ')["length"];
            var _0x7231xe3 = Math["floor"](_0x7231xe2 / 250);
            var _0x7231xe4 = _0x7231xe2 % 60;
            document["getElementsByClassName"]('reading-progress-words')[0]["innerHTML"] = _0x7231xe2;
            document["getElementsByClassName"]('reading-progress-time')[0]["innerHTML"] = _0x7231xe3 + ':' + _0x7231xe4
        }
        ;var _0x7231xe5 = document["querySelectorAll"]('.text-size-changer');
        if (_0x7231xe5["length"]) {
            var _0x7231xe6 = document["querySelectorAll"]('.text-size-increase');
            var _0x7231xe7 = document["querySelectorAll"]('.text-size-decrease');
            var _0x7231xe8 = document["querySelectorAll"]('.text-size-default');
            _0x7231xe6[0]["addEventListener"]('click', function() {
                _0x7231xe5[0]["querySelectorAll"]('*')["forEach"](function(_0x7231xe9) {
                    const _0x7231xea = window["getComputedStyle"](_0x7231xe9)["fontSize"]["split"]("px", 2)[0];
                    _0x7231xe9["style"]["fontSize"] = (+_0x7231xea + 1) + 'px'
                })
            });
            _0x7231xe7[0]["addEventListener"]('click', function() {
                _0x7231xe5[0]["querySelectorAll"]('*')["forEach"](function(_0x7231xe9) {
                    const _0x7231xea = window["getComputedStyle"](_0x7231xe9)["fontSize"]["split"]("px", 2)[0];
                    _0x7231xe9["style"]["fontSize"] = (+_0x7231xea - 1) + 'px'
                })
            });
            _0x7231xe8[0]["addEventListener"]('click', function() {
                _0x7231xe5[0]["querySelectorAll"]('*')["forEach"](function(_0x7231xe9) {
                    const _0x7231xea = window["getComputedStyle"](_0x7231xe9)["fontSize"]["split"]("px", 2)[0];
                    _0x7231xe9["style"]["fontSize"] = ""
                })
            })
        }
        ;var _0x7231xeb = document["querySelectorAll"]('.qr-image');
        if (_0x7231xeb["length"]) {
            var _0x7231xec = window["location"]["href"];
            var _0x7231xed = document["getElementsByClassName"]('generate-qr-auto')[0];
            var _0x7231xee = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
            if (_0x7231xed) {
                _0x7231xed["setAttribute"]('src', _0x7231xee + _0x7231xec)
            }
            ;var _0x7231xef = document["getElementsByClassName"]('generate-qr-button')[0];
            if (_0x7231xef) {
                _0x7231xef["addEventListener"]('click', function() {
                    var _0x7231xf0 = document["getElementsByClassName"]('qr-url')[0]["value"];
                    var _0x7231xee = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
                    var _0x7231xf1 = '<img class=\"mx-auto polaroid-effect shadow-l mt-4 delete-qr\" width=\"200\" src=\"' + _0x7231xee + _0x7231xf0 + '\" alt=\"img\"><p class=\"font-11 text-center mb-0\">' + _0x7231xf0 + '</p>';
                    document["getElementsByClassName"]('generate-qr-result')[0]["innerHTML"] = _0x7231xf1;
                    _0x7231xef["innerHTML"] = "Generate New Button"
                })
            }
        }
        ;if (window["location"]["protocol"] === "file:") {
            var _0x7231xf2 = document["querySelectorAll"]('a');
            _0x7231xf2["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('mouseover', (_0x7231x82)=>{}
                )
            }
            )
        }
        ;var _0x7231xf3 = document["querySelectorAll"]('[data-search]');
        if (_0x7231xf3["length"]) {
            var _0x7231xf4 = document["querySelectorAll"]('.search-results');
            var _0x7231xf5 = document["querySelectorAll"]('.search-no-results');
            var _0x7231xf6 = document["querySelectorAll"](".search-results div")[0]["childElementCount"];
            var _0x7231xf7 = document["querySelectorAll"]('.search-trending');
            function _0x7231xf8() {
                var _0x7231xf9 = _0x7231xf3[0]["value"];
                var _0x7231xfa = _0x7231xf9["toLowerCase"]();
                if (_0x7231xfa != '') {
                    _0x7231xf4[0]["classList"]["remove"]('disabled-search-list');
                    var _0x7231xfb = document["querySelectorAll"]('[data-filter-item]');
                    for (let _0x7231x9 = 0; _0x7231x9 < _0x7231xfb["length"]; _0x7231x9++) {
                        var _0x7231xfc = _0x7231xfb[_0x7231x9]["getAttribute"]('data-filter-name');
                        if (_0x7231xfc["includes"](_0x7231xfa)) {
                            _0x7231xfb[_0x7231x9]["classList"]["remove"]('disabled');
                            if (_0x7231xf7["length"]) {
                                _0x7231xf7[0]["classList"]["add"]('disabled')
                            }
                        } else {
                            _0x7231xfb[_0x7231x9]["classList"]["add"]('disabled');
                            if (_0x7231xf7["length"]) {
                                _0x7231xf7[0]["classList"]["remove"]('disabled')
                            }
                        }
                        ;var _0x7231xfd = document["querySelectorAll"](".search-results div")[0]["getElementsByClassName"]("disabled")["length"];
                        if (_0x7231xfd === _0x7231xf6) {
                            _0x7231xf5[0]["classList"]["remove"]('disabled');
                            if (_0x7231xf7["length"]) {
                                _0x7231xf7[0]["classList"]["add"]('disabled')
                            }
                        } else {
                            _0x7231xf5[0]["classList"]["add"]('disabled');
                            if (_0x7231xf7["length"]) {
                                _0x7231xf7[0]["classList"]["add"]('disabled')
                            }
                        }
                    }
                }
                ;if (_0x7231xfa === '') {
                    _0x7231xf4[0]["classList"]["add"]('disabled-search-list');
                    _0x7231xf5[0]["classList"]["add"]('disabled');
                    if (_0x7231xf7["length"]) {
                        _0x7231xf7[0]["classList"]["remove"]('disabled')
                    }
                }
            }
            _0x7231xf3[0]["addEventListener"]('keyup', function() {
                _0x7231xf8()
            });
            _0x7231xf3[0]["addEventListener"]('click', function() {
                _0x7231xf8()
            });
            var _0x7231xfe = document["querySelectorAll"]('.search-trending a');
            _0x7231xfe["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231x82)=>{
                    var _0x7231xff = _0x7231xb["querySelectorAll"]('span')[0]["textContent"]["toLowerCase"]();
                    _0x7231xf3[0]["value"] = _0x7231xff;
                    _0x7231xf3[0]["click"]()
                }
                )
            }
            )
        }
        ;function _0x7231x100() {
            var _0x7231x101 = document["title"];
            var _0x7231x102 = document["title"];
            var _0x7231x103 = window["location"]["href"];
            if (document["querySelectorAll"]('.shareToFacebook, .shareToTwitter, .shareToLinkedIn')[0]) {
                document["querySelectorAll"]('.shareToFacebook, .shareToTwitter, .shareToLinkedIn, .shareToWhatsApp, .shareToMail')["forEach"]((_0x7231x104)=>{
                    _0x7231x104["setAttribute"]('target', '_blank')
                }
                );
                document["querySelectorAll"]('.shareToFacebook')["forEach"]((_0x7231x104)=>{
                    return _0x7231x104["setAttribute"]("href", "https://www.facebook.com/sharer/sharer.php?u=" + _0x7231x103)
                }
                );
                document["querySelectorAll"]('.shareToTwitter')["forEach"]((_0x7231x104)=>{
                    return _0x7231x104["setAttribute"]("href", "http://twitter.com/share?text=" + _0x7231x101 + "%20" + _0x7231x103)
                }
                );
                document["querySelectorAll"]('.shareToPinterest')["forEach"]((_0x7231x104)=>{
                    return _0x7231x104["setAttribute"]("href", "https://pinterest.com/pin/create/button/?url=" + _0x7231x103)
                }
                );
                document["querySelectorAll"]('.shareToWhatsApp')["forEach"]((_0x7231x104)=>{
                    return _0x7231x104["setAttribute"]("href", "whatsapp://send?text=" + _0x7231x103)
                }
                );
                document["querySelectorAll"]('.shareToMail')["forEach"]((_0x7231x104)=>{
                    return _0x7231x104["setAttribute"]("href", "mailto:?body=" + _0x7231x103)
                }
                );
                document["querySelectorAll"]('.shareToLinkedIn')["forEach"]((_0x7231x104)=>{
                    return _0x7231x104["setAttribute"]("href", "https://www.linkedin.com/shareArticle?mini=true&url=" + _0x7231x103 + "&title=" + _0x7231x101 + "&summary=&source=")
                }
                );
                if (navigator["canShare"]) {
                    const _0x7231x105 = {
                        title: _0x7231x101,
                        text: _0x7231x102,
                        url: _0x7231x103
                    };
                    var _0x7231x106 = document["querySelectorAll"]('[data-menu=\"menu-share\"], [data-show-share]');
                    if (_0x7231x106) {
                        _0x7231x106["forEach"]((_0x7231xb)=>{
                            _0x7231xb["addEventListener"]('click', async()=>{
                                _0x7231x42('menu-share', 'hide', 0);
                                try {
                                    await navigator["share"](_0x7231x105)
                                } catch (err) {}
                            }
                            )
                        }
                        )
                    }
                }
                ;var _0x7231x107 = document["querySelectorAll"]('.shareToCopyLink')[0];
                _0x7231x107["addEventListener"]('click', function(_0x7231xa) {
                    navigator["clipboard"]["writeText"](_0x7231x103);
                    _0x7231x107["querySelector"]('.not-copied')["classList"]["add"]('disabled');
                    _0x7231x107["querySelector"]('.copied')["classList"]["remove"]('disabled');
                    setTimeout(function() {
                        _0x7231x107["querySelector"]('.not-copied')["classList"]["remove"]('disabled');
                        _0x7231x107["querySelector"]('.copied')["classList"]["add"]('disabled')
                    }, 1000)
                })
            }
        }
        var _0x7231x108 = document["querySelectorAll"]('.contact-form');
        if (_0x7231x108["length"]) {
            var _0x7231x109 = document["getElementById"]('contactForm');
            _0x7231x109["onsubmit"] = function(_0x7231xa) {
                _0x7231xa["preventDefault"]();
                var _0x7231x10a = document["getElementById"]('contactNameField');
                var _0x7231x10b = document["getElementById"]('contactEmailField');
                var _0x7231x10c = document["getElementById"]('contactMessageTextarea');
                var _0x7231x10d = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (_0x7231x10a["value"] === '') {
                    _0x7231x109["setAttribute"]('data-form', 'invalid');
                    _0x7231x10a["classList"]["add"]('border-red-dark');
                    document["getElementById"]('validator-name')["classList"]["remove"]('disabled')
                } else {
                    _0x7231x109["setAttribute"]('data-form', 'valid');
                    document["getElementById"]('validator-name')["classList"]["add"]('disabled');
                    _0x7231x10a["classList"]["remove"]('border-red-dark')
                }
                ;if (_0x7231x10b["value"] === '') {
                    _0x7231x109["setAttribute"]('data-form', 'invalid');
                    _0x7231x10b["classList"]["add"]('border-red-dark');
                    document["getElementById"]('validator-mail1')["classList"]["remove"]('disabled')
                } else {
                    document["getElementById"]('validator-mail1')["classList"]["add"]('disabled');
                    if (!_0x7231x10d["test"](_0x7231x10b["value"])) {
                        _0x7231x109["setAttribute"]('data-form', 'invalid');
                        _0x7231x10b["classList"]["add"]('border-red-dark');
                        document["getElementById"]('validator-mail2')["classList"]["remove"]('disabled')
                    } else {
                        _0x7231x109["setAttribute"]('data-form', 'valid');
                        document["getElementById"]('validator-mail2')["classList"]["add"]('disabled');
                        _0x7231x10b["classList"]["remove"]('border-red-dark')
                    }
                }
                ;if (_0x7231x10c["value"] === '') {
                    _0x7231x109["setAttribute"]('data-form', 'invalid');
                    _0x7231x10c["classList"]["add"]('border-red-dark');
                    document["getElementById"]('validator-text')["classList"]["remove"]('disabled')
                } else {
                    _0x7231x109["setAttribute"]('data-form', 'valid');
                    document["getElementById"]('validator-text')["classList"]["add"]('disabled');
                    _0x7231x10c["classList"]["remove"]('border-red-dark')
                }
                ;if (_0x7231x109["getAttribute"]('data-form') === 'valid') {
                    document["querySelectorAll"]('.form-sent')[0]["classList"]["remove"]('disabled');
                    document["querySelectorAll"]('.contact-form')[0]["classList"]["add"]('disabled');
                    var _0x7231x10e = {};
                    for (let _0x7231x9 = 0, _0x7231x10f = _0x7231x109["length"]; _0x7231x9 < _0x7231x10f; ++_0x7231x9) {
                        let _0x7231x110 = _0x7231x109[_0x7231x9];
                        if (_0x7231x110["name"]) {
                            _0x7231x10e[_0x7231x110["name"]] = _0x7231x110["value"]
                        }
                    }
                    ;var _0x7231x111 = new XMLHttpRequest();
                    _0x7231x111["open"](_0x7231x109["method"], _0x7231x109["action"], true);
                    _0x7231x111["setRequestHeader"]('Accept', 'application/json; charset=utf-8');
                    _0x7231x111["setRequestHeader"]('Content-Type', 'application/json; charset=UTF-8');
                    _0x7231x111["send"](JSON["stringify"](_0x7231x10e));
                    _0x7231x111["onloadend"] = function(_0x7231x112) {
                        if (_0x7231x112["target"]["status"] === 200) {
                            console["log"]('Form Submitted')
                        }
                    }
                }
            }
        }
        ;var _0x7231x113 = document["querySelectorAll"]('[data-bs-toggle=\"collapse\"]:not(.no-effect)');
        if (_0x7231x113["length"]) {
            _0x7231x113["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                    if (_0x7231xb["querySelectorAll"]('i')["length"]) {
                        _0x7231xb["querySelector"]('i')["classList"]["toggle"]('fa-rotate-180')
                    }
                }
                )
            }
            )
        }
        ;var _0x7231x114 = document["querySelectorAll"]('.tab-controls a');
        if (_0x7231x114["length"]) {
            _0x7231x114["forEach"](function(_0x7231xa) {
                if (_0x7231xa["hasAttribute"]('data-active')) {
                    var _0x7231x115 = _0x7231xa["parentNode"]["getAttribute"]('data-highlight');
                    _0x7231xa["classList"]["add"](_0x7231x115);
                    _0x7231xa["classList"]["add"]('no-click')
                }
            });
            _0x7231x114["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                    var _0x7231x115 = _0x7231xb["parentNode"]["getAttribute"]('data-highlight');
                    var _0x7231x116 = _0x7231xb["parentNode"]["querySelectorAll"]('a');
                    _0x7231x116["forEach"](function(_0x7231xa) {
                        _0x7231xa["classList"]["remove"](_0x7231x115);
                        _0x7231xa["classList"]["remove"]('no-click')
                    });
                    _0x7231xb["classList"]["add"](_0x7231x115);
                    _0x7231xb["classList"]["add"]('no-click')
                }
                )
            }
            )
        }
        ;function _0x7231x42(_0x7231x117, _0x7231x3b, _0x7231x4a) {
            setTimeout(function() {
                if (_0x7231x3b === "show") {
                    return document["getElementById"](_0x7231x117)["classList"]["add"]('menu-active'),
                    document["querySelectorAll"]('.menu-hider')[0]["classList"]["add"]('menu-active')
                } else {
                    return document["getElementById"](_0x7231x117)["classList"]["remove"]('menu-active'),
                    document["querySelectorAll"]('.menu-hider')[0]["classList"]["remove"]('menu-active')
                }
            }, _0x7231x4a)
        }
        var _0x7231x118 = document["querySelectorAll"]('[data-auto-activate]');
        if (_0x7231x118["length"]) {
            var _0x7231x119 = _0x7231x118[0]["getAttribute"]('data-auto-activate');
            var _0x7231x11a = _0x7231x119 * 1000;
            setTimeout(function() {
                _0x7231x118[0]["classList"]["add"]('menu-active');
                _0x7231x14[0]["classList"]["add"]('menu-active')
            }, _0x7231x11a)
        }
        ;function _0x7231x11b() {
            var _0x7231x11c = document["getElementById"]('copyright-year');
            if (_0x7231x11c) {
                var _0x7231x11d = new Date();
                const _0x7231x11e = _0x7231x11d["getFullYear"]();
                _0x7231x11c["textContent"] = _0x7231x11e
            }
        }
        var _0x7231x11f = document["querySelectorAll"]('.check-age');
        if (_0x7231x11f["length"]) {
            _0x7231x11f[0]["addEventListener"]('click', function() {
                var _0x7231x120 = document["querySelectorAll"]("#date-birth-day")[0]["value"];
                var _0x7231x121 = document["querySelectorAll"]("#date-birth-month")[0]["value"];
                var _0x7231x122 = document["querySelectorAll"]("#date-birth-year")[0]["value"];
                var _0x7231x123 = 18;
                var _0x7231x124 = new Date();
                _0x7231x124["setFullYear"](_0x7231x122, _0x7231x121 - 1, _0x7231x120);
                var _0x7231x125 = new Date();
                var _0x7231x126 = new Date();
                _0x7231x126["setFullYear"](_0x7231x124["getFullYear"]() + _0x7231x123, _0x7231x121 - 1, _0x7231x120);
                var _0x7231x127 = document["querySelectorAll"]('#menu-age');
                var _0x7231x128 = document["querySelectorAll"]('#menu-age-fail');
                var _0x7231x129 = document["querySelectorAll"]('#menu-age-okay');
                console["log"](_0x7231x125);
                console["log"](_0x7231x126);
                console["log"](_0x7231x121);
                if ((_0x7231x125 - _0x7231x126) > 0) {
                    console["log"]("above 18");
                    _0x7231x127[0]["classList"]["remove"]('menu-active');
                    _0x7231x129[0]["classList"]["add"]('menu-active')
                } else {
                    _0x7231x127[0]["classList"]["remove"]('menu-active');
                    _0x7231x128[0]["classList"]["add"]('menu-active')
                }
                ;return true
            })
        }
        ;feather["replace"]();
        function _0x7231x12a() {
            var _0x7231x12b = document["querySelectorAll"]('.feather');
            _0x7231x12b["forEach"]((_0x7231xb)=>{
                var _0x7231x12c = _0x7231xb["getAttribute"]('data-feather-line');
                var _0x7231x12d = _0x7231xb["getAttribute"]('data-feather-size');
                _0x7231xb["style"]["strokeWidth"] = _0x7231x12c;
                _0x7231xb["style"]["width"] = _0x7231x12d;
                _0x7231xb["style"]["height"] = _0x7231x12d
            }
            )
        }
        _0x7231x12a();
        function _0x7231x12e() {
            var _0x7231x12f = document["getElementById"]('shape-cut-left');
            var _0x7231x130 = document["querySelectorAll"]('#shape-cut-right')[0];
            var _0x7231x131 = document["querySelectorAll"]('#shape-rounded')[0];
            var _0x7231x132 = document["querySelectorAll"]('.header-card')[0];
            var _0x7231x133 = document["querySelectorAll"]('.color-card')[0];
            var _0x7231x134 = document["querySelectorAll"]('.footer-card')[0];
            if (_0x7231x12f) {
                _0x7231x12f["addEventListener"]('click', function(_0x7231xa) {
                    _0x7231x132["classList"]["remove"]('shape-rounded', 'shape-cut-right');
                    _0x7231x132["classList"]["add"]('shape-cut-left');
                    _0x7231x134["classList"]["remove"]('shape-rounded', 'shape-cut-right');
                    _0x7231x134["classList"]["add"]('shape-cut-left');
                    _0x7231x133["classList"]["remove"]('shape-rounded', 'shape-cut-right');
                    _0x7231x133["classList"]["add"]('shape-cut-left')
                });
                _0x7231x130["addEventListener"]('click', function() {
                    _0x7231x132["classList"]["remove"]('shape-rounded', 'shape-cut-left');
                    _0x7231x132["classList"]["add"]('shape-cut-right');
                    _0x7231x134["classList"]["remove"]('shape-rounded', 'shape-cut-left');
                    _0x7231x134["classList"]["add"]('shape-cut-right');
                    _0x7231x133["classList"]["remove"]('shape-rounded', 'shape-cut-left');
                    _0x7231x133["classList"]["add"]('shape-cut-right')
                });
                _0x7231x131["addEventListener"]('click', function() {
                    _0x7231x132["classList"]["remove"]('shape-cut-left', 'shape-cut-right');
                    _0x7231x132["classList"]["add"]('shape-rounded');
                    _0x7231x134["classList"]["remove"]('shape-cut-left', 'shape-cut-right');
                    _0x7231x134["classList"]["add"]('shape-rounded');
                    _0x7231x133["classList"]["remove"]('shape-cut-left', 'shape-cut-right');
                    _0x7231x133["classList"]["add"]('shape-rounded')
                })
            }
        }
        var _0x7231x135 = document["querySelectorAll"]('[data-menu-load]');
        _0x7231x135["forEach"](function(_0x7231xa) {
            var _0x7231x136 = _0x7231xa["getAttribute"]('data-menu-load');
            fetch(_0x7231x136)["then"]((_0x7231x10e)=>{
                return _0x7231x10e["text"]()
            }
            )["then"]((_0x7231x137)=>{
                return _0x7231xa["innerHTML"] = _0x7231x137
            }
            )["then"]((_0x7231x10e)=>{
                setTimeout(function() {
                    if (_0x7231x135[_0x7231x135["length"] - 1] === _0x7231xa) {
                        _0x7231x3b();
                        _0x7231x73();
                        _0x7231x4c();
                        _0x7231x100();
                        _0x7231x6a();
                        _0x7231x68();
                        _0x7231x5f();
                        _0x7231x58();
                        _0x7231x12e();
                        _0x7231x11b();
                        feather["replace"]();
                        _0x7231x12a()
                    }
                }, 500)
            }
            )
        });
        let _0x7231x138 = {
            Android: function() {
                return navigator["userAgent"]["match"](/Android/i)
            },
            iOS: function() {
                return navigator["userAgent"]["match"](/iPhone|iPad|iPod/i)
            },
            any: function() {
                return (_0x7231x138.Android() || _0x7231x138["iOS"]())
            }
        };
        const _0x7231x139 = document["getElementsByClassName"]('show-android');
        const _0x7231x13a = document["getElementsByClassName"]('show-ios');
        const _0x7231x13b = document["getElementsByClassName"]('show-no-device');
        if (!_0x7231x138["any"]()) {
            for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x13a["length"]; _0x7231x9++) {
                _0x7231x13a[_0x7231x9]["classList"]["add"]('disabled')
            }
            ;for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x139["length"]; _0x7231x9++) {
                _0x7231x139[_0x7231x9]["classList"]["add"]('disabled')
            }
        }
        ;if (_0x7231x138["iOS"]()) {
            document["querySelectorAll"]('#page')[0]["classList"]["add"]('device-is-ios');
            for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x13b["length"]; _0x7231x9++) {
                _0x7231x13b[_0x7231x9]["classList"]["add"]('disabled')
            }
            ;for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x139["length"]; _0x7231x9++) {
                _0x7231x139[_0x7231x9]["classList"]["add"]('disabled')
            }
        }
        ;if (_0x7231x138.Android()) {
            document["querySelectorAll"]('#page')[0]["classList"]["add"]('device-is-android');
            for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x13a["length"]; _0x7231x9++) {
                _0x7231x13a[_0x7231x9]["classList"]["add"]('disabled')
            }
            ;for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x13b["length"]; _0x7231x9++) {
                _0x7231x13b[_0x7231x9]["classList"]["add"]('disabled')
            }
        }
        ;var _0x7231x13c = document["querySelectorAll"]('.offline-message');
        if (!_0x7231x13c["length"]) {
            const _0x7231x13d = document["createElement"]('p');
            const _0x7231x13e = document["createElement"]('p');
            _0x7231x13d["className"] = 'offline-message bg-red-dark color-white';
            _0x7231x13d["textContent"] = 'No internet connection detected';
            _0x7231x13e["className"] = 'online-message bg-green-dark color-white';
            _0x7231x13e["textContent"] = 'You are back online';
            document["getElementsByTagName"]('body')[0]["appendChild"](_0x7231x13d);
            document["getElementsByTagName"]('body')[0]["appendChild"](_0x7231x13e)
        }
        ;function _0x7231x13f() {
            var _0x7231x140 = document["querySelectorAll"]('.show-offline');
            _0x7231x140["forEach"]((_0x7231xb)=>{
                return _0x7231xb["addEventListener"]('click', (_0x7231x82)=>{
                    document["getElementsByClassName"]('offline-message')[0]["classList"]["add"]('offline-message-active');
                    setTimeout(function() {
                        document["getElementsByClassName"]('offline-message')[0]["classList"]["remove"]('offline-message-active')
                    }, 1500)
                }
                )
            }
            )
        }
        function _0x7231x141() {
            var _0x7231x142 = document["querySelectorAll"]('[data-link]');
            _0x7231x142["forEach"](function(_0x7231xa) {
                var _0x7231x143 = _0x7231xa["getAttribute"]('data-link');
                if (_0x7231x143["match"](/.html/)) {
                    _0x7231xa["setAttribute"]('href', _0x7231x143);
                    _0x7231xa["removeAttribute"]('data-link', '')
                }
            })
        }
        var _0x7231x144 = document["getElementsByClassName"]('offline-message')[0];
        var _0x7231x145 = document["getElementsByClassName"]('online-message')[0];
        function _0x7231x146() {
            _0x7231x141();
            _0x7231x145["classList"]["add"]('online-message-active');
            setTimeout(function() {
                _0x7231x145["classList"]["remove"]('online-message-active')
            }, 2000);
            console["info"]('Connection: Online')
        }
        function _0x7231x147() {
            _0x7231x13f();
            _0x7231x144["classList"]["add"]('offline-message-active');
            setTimeout(function() {
                _0x7231x144["classList"]["remove"]('offline-message-active')
            }, 2000);
            console["info"]('Connection: Offline')
        }
        var _0x7231x148 = document["querySelectorAll"]('.simulate-offline');
        var _0x7231x149 = document["querySelectorAll"]('.simulate-online');
        if (_0x7231x148["length"]) {
            _0x7231x148[0]["addEventListener"]('click', function() {
                _0x7231x147()
            });
            _0x7231x149[0]["addEventListener"]('click', function() {
                _0x7231x146()
            })
        }
        ;function _0x7231x14a(_0x7231x82) {
            var _0x7231x14b = navigator["onLine"] ? "online" : "offline";
            _0x7231x146()
        }
        function _0x7231x14c(_0x7231x82) {
            _0x7231x147()
        }
        window["addEventListener"]('online', _0x7231x14a);
        window["addEventListener"]('offline', _0x7231x14c);
        const _0x7231x14d = document["querySelectorAll"]('.simulate-iphone-badge');
        _0x7231x14d["forEach"]((_0x7231xb)=>{
            return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                document["getElementsByClassName"]('add-to-home')[0]["classList"]["add"]('add-to-home-visible', 'add-to-home-ios');
                document["getElementsByClassName"]('add-to-home')[0]["classList"]["remove"]('add-to-home-android')
            }
            )
        }
        );
        const _0x7231x14e = document["querySelectorAll"]('.simulate-android-badge');
        _0x7231x14e["forEach"]((_0x7231xb)=>{
            return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                document["getElementsByClassName"]('add-to-home')[0]["classList"]["add"]('add-to-home-visible', 'add-to-home-android');
                document["getElementsByClassName"]('add-to-home')[0]["classList"]["remove"]('add-to-home-ios')
            }
            )
        }
        );
        const _0x7231x14f = document["querySelectorAll"]('.add-to-home');
        _0x7231x14f["forEach"]((_0x7231xb)=>{
            return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                document["getElementsByClassName"]('add-to-home')[0]["classList"]["remove"]('add-to-home-visible')
            }
            )
        }
        );
        if (_0x7231x1 === true) {
            var _0x7231x150 = document["getElementsByTagName"]('html')[0];
            if (!_0x7231x150["classList"]["contains"]('isPWA')) {
                if ('serviceWorker'in navigator) {
                    window["addEventListener"]('load', function() {
                        navigator["serviceWorker"]["register"](_0x7231x7, {
                            scope: _0x7231x6
                        })["then"](function(_0x7231x151) {
                            _0x7231x151["update"]()
                        })
                    })
                }
                ;var _0x7231x152 = _0x7231x4 * 24;
                var _0x7231xc3 = Date["now"]();
                var _0x7231x153 = localStorage["getItem"](_0x7231x3 + '-PWA-Timeout-Value');
                if (_0x7231x153 == null) {
                    localStorage["setItem"](_0x7231x3 + '-PWA-Timeout-Value', _0x7231xc3)
                } else {
                    if (_0x7231xc3 - _0x7231x153 > _0x7231x152 * 60 * 60 * 1000) {
                        localStorage["removeItem"](_0x7231x3 + '-PWA-Prompt');
                        localStorage["setItem"](_0x7231x3 + '-PWA-Timeout-Value', _0x7231xc3)
                    }
                }
                ;const _0x7231x154 = document["querySelectorAll"]('.pwa-dismiss');
                _0x7231x154["forEach"]((_0x7231xb)=>{
                    return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                        const _0x7231x155 = document["querySelectorAll"]('#menu-install-pwa-android, #menu-install-pwa-ios');
                        for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x155["length"]; _0x7231x9++) {
                            _0x7231x155[_0x7231x9]["classList"]["remove"]('menu-active')
                        }
                        ;localStorage["setItem"](_0x7231x3 + '-PWA-Timeout-Value', _0x7231xc3);
                        localStorage["setItem"](_0x7231x3 + '-PWA-Prompt', 'install-rejected');
                        console["log"]('PWA Install Rejected. Will Show Again in ' + (_0x7231x4) + ' Days')
                    }
                    )
                }
                );
                const _0x7231x155 = document["querySelectorAll"]('#menu-install-pwa-android, #menu-install-pwa-ios');
                if (_0x7231x155["length"]) {
                    if (_0x7231x138.Android()) {
                        if (localStorage["getItem"](_0x7231x3 + '-PWA-Prompt') != "install-rejected") {
                            function _0x7231x156() {
                                setTimeout(function() {
                                    if (!window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                                        console["log"]('Triggering PWA Window for Android');
                                        document["getElementById"]('menu-install-pwa-android')["classList"]["add"]('menu-active');
                                        document["querySelectorAll"]('.menu-hider')[0]["classList"]["add"]('menu-active')
                                    }
                                }, 3500)
                            }
                            var _0x7231x157;
                            window["addEventListener"]('beforeinstallprompt', (_0x7231xa)=>{
                                _0x7231xa["preventDefault"]();
                                _0x7231x157 = _0x7231xa;
                                _0x7231x156()
                            }
                            )
                        }
                        ;const _0x7231x158 = document["querySelectorAll"]('.pwa-install');
                        _0x7231x158["forEach"]((_0x7231xb)=>{
                            return _0x7231xb["addEventListener"]('click', (_0x7231xa)=>{
                                _0x7231x157["prompt"]();
                                _0x7231x157["userChoice"]["then"]((_0x7231x159)=>{
                                    if (_0x7231x159["outcome"] === 'accepted') {
                                        console["log"]('Added')
                                    } else {
                                        localStorage["setItem"](_0x7231x3 + '-PWA-Timeout-Value', _0x7231xc3);
                                        localStorage["setItem"](_0x7231x3 + '-PWA-Prompt', 'install-rejected');
                                        setTimeout(function() {
                                            if (!window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                                                document["getElementById"]('menu-install-pwa-android')["classList"]["remove"]('menu-active');
                                                document["querySelectorAll"]('.menu-hider')[0]["classList"]["remove"]('menu-active')
                                            }
                                        }, 50)
                                    }
                                    ;_0x7231x157 = null
                                }
                                )
                            }
                            )
                        }
                        );
                        window["addEventListener"]('appinstalled', (_0x7231x15a)=>{
                            document["getElementById"]('menu-install-pwa-android')["classList"]["remove"]('menu-active');
                            document["querySelectorAll"]('.menu-hider')[0]["classList"]["remove"]('menu-active')
                        }
                        )
                    }
                    ;if (_0x7231x138["iOS"]()) {
                        if (localStorage["getItem"](_0x7231x3 + '-PWA-Prompt') != "install-rejected") {
                            setTimeout(function() {
                                if (!window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                                    console["log"]('Triggering PWA Window for iOS');
                                    document["getElementById"]('menu-install-pwa-ios')["classList"]["add"]('menu-active');
                                    document["querySelectorAll"]('.menu-hider')[0]["classList"]["add"]('menu-active')
                                }
                            }, 3500)
                        }
                    }
                }
            }
            ;_0x7231x150["setAttribute"]('class', 'isPWA')
        }
        ;if (_0x7231x5 === true) {
            caches["delete"]('workbox-runtime')["then"](function() {});
            sessionStorage["clear"]();
            caches["keys"]()["then"]((_0x7231x15b)=>{
                _0x7231x15b["forEach"]((_0x7231x15c)=>{
                    caches["delete"](_0x7231x15c)
                }
                )
            }
            )
        }
        ;var _0x7231x15d = new LazyLoad();
        var _0x7231x15e, _0x7231x15f, _0x7231x160, _0x7231x161;
        var _0x7231x162 = "plugins/";
        let _0x7231x163 = [{
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
            id: 'chart',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-dashboard.js',
            trigger: '.dashboard-chart'
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
        }, {
            id: 'embedly',
            plug: 'embedly/embedly.js',
            trigger: '.embedly-card'
        }];
        for (let _0x7231x9 = 0; _0x7231x9 < _0x7231x163["length"]; _0x7231x9++) {
            if (document["querySelectorAll"]('.' + _0x7231x163[_0x7231x9]["id"] + '-c')["length"]) {
                document["querySelectorAll"]('.' + _0x7231x163[_0x7231x9]["id"] + '-c')[0]["remove"]()
            }
            ;var _0x7231x164 = document["querySelectorAll"](_0x7231x163[_0x7231x9]["trigger"]);
            if (_0x7231x164["length"]) {
                var _0x7231x165 = document["getElementsByTagName"]('script')[1]
                  , _0x7231x166 = document["createElement"]('script');
                _0x7231x166["type"] = 'text/javascript';
                _0x7231x166["className"] = _0x7231x163[_0x7231x9]["id"] + '-p';
                _0x7231x166["src"] = _0x7231x162 + _0x7231x163[_0x7231x9]["plug"];
                _0x7231x166["addEventListener"]('load', function() {
                    if (_0x7231x163[_0x7231x9]["call"] !== undefined) {
                        var _0x7231x167 = document["getElementsByTagName"]('script')[2]
                          , _0x7231x168 = document["createElement"]('script');
                        _0x7231x168["type"] = 'text/javascript';
                        _0x7231x168["className"] = _0x7231x163[_0x7231x9]["id"] + '-c';
                        _0x7231x168["src"] = _0x7231x162 + _0x7231x163[_0x7231x9]["call"];
                        _0x7231x167["parentNode"]["insertBefore"](_0x7231x168, _0x7231x167)
                    }
                });
                if (!document["querySelectorAll"]('.' + _0x7231x163[_0x7231x9]["id"] + '-p')["length"]) {
                    _0x7231x165["parentNode"]["insertBefore"](_0x7231x166, _0x7231x165)
                } else {
                    setTimeout(function() {
                        var _0x7231x165 = document["getElementsByTagName"]('script')[1]
                          , _0x7231x166 = document["createElement"]('script');
                        _0x7231x166["type"] = 'text/javascript';
                        _0x7231x166["className"] = _0x7231x163[_0x7231x9]["id"] + '-c';
                        _0x7231x166["src"] = _0x7231x162 + _0x7231x163[_0x7231x9]["call"];
                        _0x7231x165["parentNode"]["insertBefore"](_0x7231x166, _0x7231x165)
                    }, 50)
                }
                ;if (_0x7231x163[_0x7231x9]["style"] !== undefined) {
                    if (!document["querySelectorAll"]('.' + _0x7231x163[_0x7231x9]["id"] + '-s')["length"]) {
                        var _0x7231x169 = document["createElement"]("link");
                        _0x7231x169["className"] = _0x7231x163[_0x7231x9]["id"] + '-s';
                        _0x7231x169["rel"] = "stylesheet";
                        _0x7231x169["type"] = "text/css";
                        _0x7231x169["href"] = _0x7231x162 + _0x7231x163[_0x7231x9]["style"];
                        document["getElementsByTagName"]("head")[0]["appendChild"](_0x7231x169)
                    }
                }
            }
        }
    }
    if ('scrollRestoration'in window["history"]) {
        window["history"]["scrollRestoration"] = 'manual'
    }
    ;if (_0x7231x2 === true) {
        if (window["location"]["protocol"] !== "file:") {
            const _0x7231x16a = {
                containers: ["#page"],
                cache: false,
                animateHistoryBrowsing: false,
                plugins: [new SwupPreloadPlugin()],
                linkSelector: 'a:not(.external-link):not(.default-link):not([href^=\"https\"]):not([href^=\"http\"]):not([data-gallery])'
            };
            const _0x7231x16b = new Swup(_0x7231x16a);
            document["addEventListener"]('swup:pageView', (_0x7231xa)=>{
                _0x7231x8()
            }
            )
        }
    }
    ;_0x7231x8()
}
)

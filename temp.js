/*!
 * Exaactly Widget - Creative v1.0.0-beta (http://exaactly.com)
 * Copyright 2017-2017 Pawel Olejniczak & Alan Hutcheson
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
! function() {
    if (void 0 == document.getElementById("exaactly--widget-button")) return !1;
    // debugger
    var e, t, a = function() {
            var e = {};
            return e.FIRST_PART_OF_EXAACTLY_ADDRESS = 0, e.SECOND_PART_OF_EXAACTLY_ADDRESS = 1, e.EMAIL = 2, e.MIDDLE_ZOOM = 17, e.CLOSE_ZOOM = 19, e.THREE_PART_ADDRESS = 3, e.FOUR_PART_ADDRESS = 4, e
        },
        n = function() {
            var e = {
                getEmailField: function() {
                    return document.querySelector("[name=your-email")
                },
                getAddressField: function() {
                    return document.querySelector("[name=your-address")
                },
                getPostcodeField: function() {
                    return document.querySelector("[name=your-postcode")
                }
            };
            return e.populateFields = function() {
                if (1 == s) n().getAddressField().value = o().getFormElement("firstline").value, n().getPostcodeField().value = o().getFormElement("postcode").value.toUpperCase();
                else {
                    var e = o().getFormElement("manual-firstline").value,
                        t = o().getFormElement("manual-secondline").value,
                        a = o().getFormElement("manual-city").value,
                        l = o().getFormElement("manual-county").value;
                    e && (e += ", "), t && (t += ", "), a && (a += ", "), n().getAddressField().value = e + t + a + l, n().getPostcodeField().value = o().getFormElement("manual-postcode").value.toUpperCase()
                }
            }, e
        },
        l = function(e, t) {
            var a = this;
            a.files = e, console.log("hi1"), a.js = [], a.head = document.getElementsByTagName("head")[0], a.after = t || function() {}, a.loadStyle = function(e) {
                console.log("hi2");
                var t = document.createElement("link");
                t.rel = "stylesheet", t.type = "text/css", t.href = e, a.head.appendChild(t)
            }, a.loadScript = function(e) {
                var t = document.createElement("script");
                t.type = "text/javascript", t.src = a.js[e];
                var n = function() {
                    ++e < a.js.length ? a.loadScript(e) : a.after()
                };
                t.onload = function() {
                    n()
                }, a.head.appendChild(t)
            };
            for (var n = 0; n < a.files.length; n++) /\.js$|\.js\?/.test(a.files[n]) && a.js.push(a.files[n]), /\.css$|\.css\?/.test(a.files[n]) && a.loadStyle(a.files[n]);
            a.js.length > 0 ? a.loadScript(0) : a.after()
        },
        o = function() {
            var e = {};
            return e.getAlert = function(e) {
                return document.getElementById("exaactly--alert-" + e)
            }, e.getFormElement = function(e) {
                return document.getElementById("exaactly--form-" + e)
            }, e.getWidgetButton = function() {
                return document.getElementById("exaactly--widget-button")
            }, e.getWidgetPopup = function() {
                return document.getElementById("exaactly--widget-popup")
            }, e.getButtonManualMapSearch = function() {
                return document.getElementById("exaactly--manual-search-action")
            }, e.getButtonCloseWithoutSave = function() {
                return document.getElementById("exaactly--shut-action")
            }, e.getWidgetConfirmationPopup = function() {
                return document.getElementById("exaactly--confirm-popup")
            }, e.getConfirmationPopupButtonClose = function() {
                return document.getElementById("exaactly--shut-action-confirm")
            }, e.getWidgetContentPopup = function() {
                return document.getElementById("exaactly--content-popup")
            }, e.getButtonSaveAddress = function() {
                return document.getElementById("exaactly--save-action")
            }, e.getButtonShowPopup = function() {
                return document.getElementById("exaactly--button-action")
            }, e.getGoogleMapContainer = function() {
                return document.getElementById("exaactly--google-map")
            }, e.getEmailContainer = function() {
                return document.getElementById("exaactly--email-box")
            }, e.getFirstlineContainer = function() {
                return document.getElementById("exaactly--firstline-container")
            }, e.getDigitalAddressConfirmationInput = function() {
                return document.getElementById("exaactly--confirmed-address")
            }, e.getAddressAPIKey = function() {
                return "6HWFUF1CMUKvbxIm4HpVRg8062"
            }, e.googleMapsAPIKEY = function() {
                return "AIzaSyC8n4Pbn28B5N63trsMwyqM0bwYRfXKCjk"
            }, e.toggleFormView = function() {
                1 == s ? (s = !1, o().getFormElement("manual").style.display = "block", o().getFormElement("auto").style.display = "none") : (s = !0, o().getFormElement("manual").style.display = "none", o().getFormElement("auto").style.display = "block")
            }, e
        },
        i = function() {
            var l = {};
            return l.appendHtml = function(e, t) {
                var a = document.createElement("div");
                for (a.innerHTML = t; a.children.length > 0;) e.appendChild(a.children[0])
            }, l.validEmailField = function(e) {
                if ("undefined" != typeof e) return "" != e.value && null != e.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
            }, l.verifyRequiredFields = function() {
                var e = ["exaactly-first-part", "exaactly-second-part", "email"],
                    t = [],
                    n = !0;
                e.forEach(function(e) {
                    o().getFormElement(e).value ? t.push(!0) : (t.push(!1), n = !1)
                });
                var l = o();
                return t.forEach(function(e, t) {
                    if (1 == e) switch (t) {
                        case a().FIRST_PART_OF_EXAACTLY_ADDRESS:
                            l.getFormElement("exaactly-first-part").style.boxShadow = "none";
                            break;
                        case a().SECOND_PART_OF_EXAACTLY_ADDRESS:
                            l.getFormElement("exaactly-second-part").style.boxShadow = "none";
                            break;
                        case a().EMAIL:
                            l.getFormElement("email").style.boxShadow = "none"
                    } else switch (t) {
                        case a().FIRST_PART_OF_EXAACTLY_ADDRESS:
                            l.getFormElement("exaactly-first-part").style.boxShadow = "inset 0px 0px 8px #d12129";
                            break;
                        case a().SECOND_PART_OF_EXAACTLY_ADDRESS:
                            l.getFormElement("exaactly-second-part").style.boxShadow = "inset 0px 0px 8px #d12129";
                            break;
                        case a().EMAIL:
                            l.getFormElement("email").style.boxShadow = "inset 0px 0px 8px #d12129"
                    }
                }), n
            }, l.getAddresses = function(e) {
                if (e = e.replace(/\W/g, ""), e.length > 5) {
                    var t = new XMLHttpRequest;
                    t.onreadystatechange = function() {
                        if (t.readyState == XMLHttpRequest.DONE)
                            if (200 == t.status) {
                                o().getAlert("postcode").style.display = "none";
                                var e = "",
                                    a = JSON.parse(t.responseText.replace(new RegExp("( , , , ,)|( , , ,)|( , ,)", "g"), ""));
                                a.Addresses.forEach(function(t, a) {
                                    0 == a ? (l.googleMapSearch(t), e += '<option value="' + t + '" selected>' + t + "</option>") : e += '<option value="' + t + '">' + t + "</option>"
                                }), o().getFormElement("firstline").innerHTML = "", i().appendHtml(o().getFormElement("firstline"), e), o().getFirstlineContainer().style.display = "block"
                            } else 400 == t.status && (o().getFirstlineContainer().style.display = "none", o().getFormElement("firstline").innerHTML = "", o().getAlert("postcode").style.display = "block")
                    }, t.open("GET", "https://api.getAddress.io/v2/uk/" + e + "?api-key=" + c, !0), t.send()
                }
            }, l.loadGoogleMapAPI = function() {
                var e = document.createElement("script");
                e.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8n4Pbn28B5N63trsMwyqM0bwYRfXKCjk", e.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(e)
            }, l.checkGoogleMapAPILoaded = function() {
                "object" == typeof google && "object" == typeof google.maps || i().loadGoogleMapAPI()
            }, l.initializeGoogleMap = function() {
                var a = {
                    center: new google.maps.LatLng(0, 0),
                    zoom: 2,
                    mapTypeId: google.maps.MapTypeId.HYBRID
                };
                e = new google.maps.Map(o().getGoogleMapContainer(), a), t = new google.maps.Marker
            }, l.googleMapSearch = function(n) {
                var l;
                if (1 == s) {
                    l = void 0 != n ? n : o().getFormElement("firstline").value;
                    var i = o().getFormElement("postcode").value,
                        c = l + " " + i
                } else var r = o().getFormElement("manual-firstline").value,
                    d = o().getFormElement("manual-secondline").value,
                    u = o().getFormElement("manual-county").value,
                    p = o().getFormElement("manual-postcode").value,
                    c = r + " " + d + " " + u + " " + p;
                var m = new google.maps.Geocoder;
                m.geocode({
                    address: c
                }, function(n, l) {
                    if (l == google.maps.GeocoderStatus.OK) {
                        var i = n[0].geometry.location;
                        o().getFormElement("latitude").value = i.lat(), o().getFormElement("longitude").value = i.lng(), e.setCenter(i), e.setZoom(a().CLOSE_ZOOM), t.setOptions({
                            map: e,
                            icon: "http://my.exaactly.com/assets/img/map-marker.png",
                            draggable: !0,
                            animation: google.maps.Animation.DROP,
                            position: i
                        }), google.maps.event.addListener(t, "dragend", function(e) {
                            o().getFormElement("latitude").value = e.latLng.lat(), o().getFormElement("longitude").value = e.latLng.lng()
                        })
                    } else e.setZoom(a().CLOSE_ZOOM)
                })
            }, l.prepareDataForPost = function() {
                var e = {
                    email: o().getFormElement("email").value,
                    beacon_domain: o().getFormElement("exaactly-second-part").value,
                    beacon_name: o().getFormElement("exaactly-first-part").value,
                    attributes: {
                        latitude: o().getFormElement("latitude").value,
                        longitude: o().getFormElement("longitude").value,
                        first_line: "",
                        second_line: "",
                        city: "",
                        county: "",
                        postcode: "",
                        country: "UK",
                        extra_info: ""
                    }
                };
                if (1 == s) {
                    var t = o().getFormElement("firstline").value,
                        n = [];
                    switch (t = t.split(","), t.forEach(function(e) {
                        n.push(e.trim())
                    }), e.attributes.first_line = n[0], e.attributes.postcode = o().getFormElement("postcode").value.toUpperCase(), n.length) {
                        case a().THREE_PART_ADDRESS:
                            e.attributes.city = n[1], e.attributes.county = n[2];
                            break;
                        case a().FOUR_PART_ADDRESS:
                            e.attributes.second_line = n[1], e.attributes.city = n[2], e.attributes.county = n[3]
                    }
                } else e.attributes.first_line = o().getFormElement("manual-firstline").value, e.attributes.second_line = o().getFormElement("manual-secondline").value, e.attributes.city = o().getFormElement("manual-city").value, e.attributes.county = o().getFormElement("manual-county").value, e.attributes.postcode = o().getFormElement("manual-postcode").value.toUpperCase();
                return e
            }, l.sendDatatoExaactlyAPI = function(e) {
                var t = new XMLHttpRequest;
                t.onreadystatechange = function() {
                    if (t.readyState == XMLHttpRequest.DONE) {
                        var e = o();
                        if (200 == t.status || 201 == t.status) {
                            n().populateFields(), e.getAlert("failed-account").style.display = "none";
                            var a = e.getFormElement("exaactly-first-part").value,
                                l = e.getFormElement("exaactly-second-part").value;
                            e.getDigitalAddressConfirmationInput().value = a + "@@" + l, e.getWidgetConfirmationPopup().style.display = "block", e.getWidgetContentPopup().style.display = "none"
                        } else if (400 == t.status) {
                            var i = JSON.parse(t.responseText);
                            e.getAlert("failed-account").innerHTML = i.user_message, e.getAlert("failed-account").style.display = "block"
                        } else console.log(t.responseText), alert("Oops! Something unexpected has happened. Please try again. (If this keeps happening, just close the popup and carry on with your day, sorry.)")
                    }
                }, t.open("POST", "http://exaactlybox.dev/api/v1/widget/beacon/create", !0), t.setRequestHeader("Authorization", "Bearer zgjvUiZvrCk5dvoluJCvjHgmUlCVVw7COOsMM3OQ"), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(e))
            }, l.resetPopupContent = function() {
                var e = o(),
                    t = ["firstline", "postcode", "latitude", "longitude", "manual-firstline", "manual-secondline", "manual-city", "manual-county", "manual-postcode", "exaactly-first-part", "exaactly-second-part", "email"];
                t.forEach(function(t) {
                    e.getFormElement(t).value = ""
                }), e.getFormElement("firstline").innerHTML = "", o().getAlert("failed-account").style.display = "none", o().getFirstlineContainer().style.display = "none", s = !1, o().toggleFormView()
            }, l.resetPopupView = function() {
                o().getWidgetConfirmationPopup().style.display = "none", o().getAlert("failed-account").style.display = "none", o().getWidgetContentPopup().style.display = "block", o().getWidgetPopup().style.display = "none"
            }, l.checkDomainAvailability = function() {
                var e = {
                        beacon_domain: o().getFormElement("exaactly-second-part").value
                    },
                    t = new XMLHttpRequest;
                t.onreadystatechange = function() {
                    t.readyState == XMLHttpRequest.DONE && (o().getAlert("domain").style.display = "block", 200 == t.status ? o().getAlert("domain").innerHTML = "Domain available" : 400 == t.status ? o().getAlert("domain").innerHTML = "Domain not available" : o().getAlert("domain").innerHTML = "")
                }, t.open("POST", "http://exaactlybox.dev/api/v1/widget/domain/check", !0), t.setRequestHeader("Authorization", "Bearer zgjvUiZvrCk5dvoluJCvjHgmUlCVVw7COOsMM3OQ"), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(e))
            }, l
        },
        c = "fIjQZTYWZ0C78Xy46zUBaA8108",
        s = !0;
    l(["http://exaactly-widget.entymon.eu/main.min.css"]), i().loadGoogleMapAPI(), i().appendHtml(o().getWidgetButton(), '<button id="exaactly--button-action"><img src="http://exaactly-images.entymon.eu/exaactly-logo-white.png" width="100%"></button>'), i().appendHtml(o().getWidgetPopup(), '<div id="exaactly--content-popup" class="exaactly-content-popup"><div name="exaactly-new-address-form" id="exaactly--widget-form"><div class="exaactly-block-logo"><div class="exaactly-logo"><img src="http://exaactly-images.entymon.eu//exaactly-logo.png" class="widget-brand-logos"></div><div class="exaactly-partner-logo"></div></div><div class="exaactly-hr"></div><div id="exaactly--alert-failed-account" class="exaactly-block exaactly-red-alert">There was a problem creating your address, please check the form for any errors and try again.</div><div class="exaactly-block-address"><div class="exaactly-block-auto-search" id="exaactly--form-auto"><div class="exaactly-block"><p>Search by postcode<span class="exaactly-manual-link" id="exaactly--alert-manual">Enter address manually?</span></p><input id="exaactly--form-postcode" class="exaactly-input" name="exaactly[postcode]" type="text" placeholder="enter your postcode" maxlength="8"><span id="exaactly--alert-postcode" class="exaactly-alert">Your postcode is not recognised</span></div><div id="exaactly--firstline-container" class="exaactly-block"><p>Select your address</p><select id="exaactly--form-firstline" class="exaactly-select" name="exaactly[address]"></select></div></div><div class="exaactly-block-manual exaactly-block" id="exaactly--form-manual"><p>Fill in your new address<span class="exaactly-manual-link" id="exaactly--alert-auto">Use validated postcode search?</span></p><input id="exaactly--form-manual-firstline" class="exaactly-input" name="exaactly[manual-firstline]" type="text" placeholder="first line"> <input id="exaactly--form-manual-secondline" class="exaactly-input" name="exaactly[manual-secondline]" type="text" placeholder="second line"> <input id="exaactly--form-manual-city" class="exaactly-input" name="exaactly[manual-city]" type="text" placeholder="town / city"> <input id="exaactly--form-manual-county" class="exaactly-input" name="exaactly[manual-county]" type="text" placeholder="county"> <input id="exaactly--form-manual-postcode" class="exaactly-input exaactly-short-input" name="exaactly[manual-postcode]" type="text" placeholder="postcode" maxlength="8"> <button id="exaactly--manual-search-action" class="exaactly-btn exaactly-search-btn">Search Map</button><div class="exaactly-clear-float"></div></div><div class="exaactly-block"><p>Adjust the pin position for increased accuracy</p><div id="exaactly--google-map" class="exaactly-google-map"></div><input id="exaactly--form-latitude" class="exaactly-latlng" name="exaactly[lat]" title="lat"> <input id="exaactly--form-longitude" class="exaactly-latlng" name="exaactly[lng]" title="lng"></div></div><div class="exaactly-hr"></div><div class="exaactly-block"><p>Create an exaactly address</p><div class="exaactly-triple-box"><input id="exaactly--form-exaactly-first-part" class="exaactly-adr-part exaactly-adr-part-one" name="exaactly[ex-first-part]" placeholder="home" maxlength="32" value="home"> <input class="exaactly-adr-part exaactly-adr-part-fixed" disabled="disabled" value="@@" title="separator"> <input id="exaactly--form-exaactly-second-part" class="exaactly-adr-part exaactly-adr-part-two" name="exaactly[ex-second-part]" placeholder="john84" maxlength="32"></div><span id="exaactly--alert-domain" class="exaactly-alert exaactly-alert-domain"></span></div><div id="exaactly--email-box" class="exaactly-block"><p>Enter your email address</p><input id="exaactly--form-email" class="exaactly-input" name="exaactly[email]" type="email" placeholder="example@example.com"></div><div id="exaactly--term-and-cond--box" class="exaactly-block"><button id="exaactly--save-action" class="exaactly-btn">Save</button> <span class="exaactly-terms-and-cond">By clicking save, you accept exaactly\'s <a href="https://exaactly.com/terms-conditions/">terms & conditions</a></span></div><div id="exaactly--shut-action" class="exaactly-exit"><p>close</p></div></div></div><div id="exaactly--confirm-popup" class="exaactly-content-popup exaactly-confirm-popup"><div class="exaactly-block-logo"><div class="exaactly-logo"><img src="http://exaactly-images.entymon.eu//exaactly-logo.png" class="widget-brand-logos"></div></div><div class="exaactly-hr"></div><h2>Success!</h2><div class="exaactly-block"><p>Your digital address has been created!</p><div class="exaactly-block exaactly-confirm-address-container"><input id="exaactly--confirmed-address" class="exaactly-input exaactly-confirm-address" type="text" value="home@@alan" disabled="disabled"></div><p>We have sent you an e-mail to finish your account.</p><div class="exaactly-hr"></div><div id="exaactly--shut-action-confirm" class="exaactly-exit"><p>close</p></div></div></div>'), setTimeout(function() {
        "undefined" != typeof o().getFormElement("postcode").addEventListener ? o().getFormElement("postcode").addEventListener("keyup", function(e) {
            i().getAddresses(e.srcElement.value)
        }, !1) : "undefined" != typeof o().getFormElement("postcode").attachEvent && o().getFormElement("postcode").attachEvent("onkeyup", function(e) {
            i().getAddresses(e.srcElement.value)
        }), "undefined" != typeof o().getFormElement("exaactly-second-part").addEventListener ? o().getFormElement("exaactly-second-part").addEventListener("keyup", function(e) {
            i().checkDomainAvailability()
        }, !1) : "undefined" != typeof o().getFormElement("exaactly-second-part").attachEvent && o().getFormElement("exaactly-second-part").attachEvent("onkeyup", function(e) {
            i().checkDomainAvailability()
        }), "undefined" != typeof o().getAlert("manual").addEventListener ? o().getAlert("manual").addEventListener("click", function() {
            o().toggleFormView()
        }, !1) : "undefined" != typeof o().getAlert("manual").attachEvent && o().getAlert("manual").attachEvent("click", function() {
            o().toggleFormView()
        }), "undefined" != typeof o().getAlert("auto").addEventListener ? o().getAlert("auto").addEventListener("click", function() {
            o().toggleFormView()
        }, !1) : "undefined" != typeof o().getAlert("auto").attachEvent && o().getAlert("auto").attachEvent("click", function() {
            o().toggleFormView()
        }), "undefined" != typeof o().getFormElement("firstline").addEventListener ? o().getFormElement("firstline").addEventListener("change", function() {
            i().googleMapSearch()
        }, !1) : "undefined" != typeof o().getFormElement("firstline").attachEvent && o().getFormElement("firstline").attachEvent("change", function() {
            i().googleMapSearch()
        }), "undefined" != typeof o().getConfirmationPopupButtonClose().addEventListener ? o().getConfirmationPopupButtonClose().addEventListener("click", function() {
            i().resetPopupView(), i().resetPopupContent()
        }, !1) : "undefined" != typeof o().getConfirmationPopupButtonClose().attachEvent && o().getConfirmationPopupButtonClose().attachEvent("click", function() {
            i().resetPopupView(), i().resetPopupContent()
        }), "undefined" != typeof o().getButtonManualMapSearch().addEventListener ? o().getButtonManualMapSearch().addEventListener("click", function() {
            i().googleMapSearch()
        }, !1) : "undefined" != typeof o().getButtonManualMapSearch().attachEvent && o().getButtonManualMapSearch().attachEvent("click", function() {
            i().googleMapSearch()
        }), o().getButtonShowPopup().addEventListener("click", function() {
            o().getWidgetPopup().style.display = "block", i().initializeGoogleMap();
            var e = n().getEmailField();
            i().validEmailField(e) ? (o().getFormElement("email").value = e.value, o().getEmailContainer().style.display = "none") : o().getEmailContainer().style.display = "block"
        }), o().getButtonSaveAddress().addEventListener("click", function() {
            if (1 == i().verifyRequiredFields()) {
                var e = o().getFormElement("email");
                if (1 == i().validEmailField(e)) {
                    var t = i().prepareDataForPost();
                    i().sendDatatoExaactlyAPI(t)
                } else o().getAlert("failed-account").innerHTML = "Your e-mail is not a valid e-mail address, please check and try again", o().getAlert("failed-account").style.display = "block"
            } else o().getAlert("failed-account").innerHTML = "Please fill in all required fields (highlighted in red).", o().getAlert("failed-account").style.display = "block"
        }), o().getButtonCloseWithoutSave().addEventListener("click", function() {
            n().populateFields(), i().resetPopupContent(), i().resetPopupView()
        })
    }, 0)
}();
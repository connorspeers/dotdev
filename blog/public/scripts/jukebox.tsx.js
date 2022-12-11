var P, d, V, C, O, N = {}, z = [], te = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k(e, t) {
    for(var _ in t)e[_] = t[_];
    return e;
}
function G(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
}
function _e(e, t, _) {
    var r, l, o, s = {};
    for(o in t)o == "key" ? r = t[o] : o == "ref" ? l = t[o] : s[o] = t[o];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? P.call(arguments, 2) : _), typeof e == "function" && e.defaultProps != null) for(o in e.defaultProps)s[o] === void 0 && (s[o] = e.defaultProps[o]);
    return S(e, s, r, l, null);
}
function S(e, t, _, r, l) {
    var o = {
        type: e,
        props: t,
        key: _,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: l ?? ++V
    };
    return l == null && d.vnode != null && d.vnode(o), o;
}
function W(e) {
    return e.children;
}
function D(e, t) {
    this.props = e, this.context = t;
}
function w(e, t) {
    if (t == null) return e.__ ? w(e.__, e.__.__k.indexOf(e) + 1) : null;
    for(var _; t < e.__k.length; t++)if ((_ = e.__k[t]) != null && _.__e != null) return _.__e;
    return typeof e.type == "function" ? w(e) : null;
}
function q(e) {
    var t, _;
    if ((e = e.__) != null && e.__c != null) {
        for(e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)if ((_ = e.__k[t]) != null && _.__e != null) {
            e.__e = e.__c.base = _.__e;
            break;
        }
        return q(e);
    }
}
function H(e) {
    (!e.__d && (e.__d = !0) && C.push(e) && !L.__r++ || O !== d.debounceRendering) && ((O = d.debounceRendering) || setTimeout)(L);
}
function L() {
    for(var e; L.__r = C.length;)e = C.sort(function(t, _) {
        return t.__v.__b - _.__v.__b;
    }), C = [], e.some(function(t) {
        var _, r, l, o, s, f;
        t.__d && (s = (o = (_ = t).__v).__e, (f = _.__P) && (r = [], (l = k({}, o)).__v = o.__v + 1, F(f, o, l, _.__n, f.ownerSVGElement !== void 0, o.__h != null ? [
            s
        ] : null, r, s ?? w(o), o.__h), X(r, o), o.__e != s && q(o)));
    });
}
function J(e, t, _, r, l, o, s, f, p, a) {
    var n, h, u, i, c, b, v, y = r && r.__k || z, g = y.length;
    for(_.__k = [], n = 0; n < t.length; n++)if ((i = _.__k[n] = (i = t[n]) == null || typeof i == "boolean" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" ? S(null, i, null, null, i) : Array.isArray(i) ? S(W, {
        children: i
    }, null, null, null) : i.__b > 0 ? S(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null) {
        if (i.__ = _, i.__b = _.__b + 1, (u = y[n]) === null || u && i.key == u.key && i.type === u.type) y[n] = void 0;
        else for(h = 0; h < g; h++){
            if ((u = y[h]) && i.key == u.key && i.type === u.type) {
                y[h] = void 0;
                break;
            }
            u = null;
        }
        F(e, i, u = u || N, l, o, s, f, p, a), c = i.__e, (h = i.ref) && u.ref != h && (v || (v = []), u.ref && v.push(u.ref, null, i), v.push(h, i.__c || c, i)), c != null ? (b == null && (b = c), typeof i.type == "function" && i.__k === u.__k ? i.__d = p = K(i, p, e) : p = Q(e, i, u, y, c, p), typeof _.type == "function" && (_.__d = p)) : p && u.__e == p && p.parentNode != e && (p = w(u));
    }
    for(_.__e = b, n = g; n--;)y[n] != null && Z(y[n], y[n]);
    if (v) for(n = 0; n < v.length; n++)Y(v[n], v[++n], v[++n]);
}
function K(e, t, _) {
    for(var r, l = e.__k, o = 0; l && o < l.length; o++)(r = l[o]) && (r.__ = e, t = typeof r.type == "function" ? K(r, t, _) : Q(_, r, r, l, r.__e, t));
    return t;
}
function Q(e, t, _, r, l, o) {
    var s, f, p;
    if (t.__d !== void 0) s = t.__d, t.__d = void 0;
    else if (_ == null || l != o || l.parentNode == null) e: if (o == null || o.parentNode !== e) e.appendChild(l), s = null;
    else {
        for(f = o, p = 0; (f = f.nextSibling) && p < r.length; p += 1)if (f == l) break e;
        e.insertBefore(l, o), s = o;
    }
    return s !== void 0 ? s : l.nextSibling;
}
function oe(e, t, _, r, l) {
    var o;
    for(o in _)o === "children" || o === "key" || o in t || M(e, o, null, _[o], r);
    for(o in t)l && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || _[o] === t[o] || M(e, o, t[o], _[o], r);
}
function R(e, t, _) {
    t[0] === "-" ? e.setProperty(t, _) : e[t] = _ == null ? "" : typeof _ != "number" || te.test(t) ? _ : _ + "px";
}
function M(e, t, _, r, l) {
    var o;
    e: if (t === "style") if (typeof _ == "string") e.style.cssText = _;
    else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r) for(t in r)_ && t in _ || R(e.style, t, "");
        if (_) for(t in _)r && _[t] === r[t] || R(e.style, t, _[t]);
    }
    else if (t[0] === "o" && t[1] === "n") o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = _, _ ? r || e.addEventListener(t, o ? B : $, o) : e.removeEventListener(t, o ? B : $, o);
    else if (t !== "dangerouslySetInnerHTML") {
        if (l) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e) try {
            e[t] = _ ?? "";
            break e;
        } catch  {}
        typeof _ == "function" || (_ == null || _ === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, _));
    }
}
function $(e) {
    this.l[e.type + !1](d.event ? d.event(e) : e);
}
function B(e) {
    this.l[e.type + !0](d.event ? d.event(e) : e);
}
function F(e, t, _, r, l, o, s, f, p) {
    var a, n, h, u, i, c, b, v, y, g, E, x, I, A, T, m = t.type;
    if (t.constructor !== void 0) return null;
    _.__h != null && (p = _.__h, f = t.__e = _.__e, t.__h = null, o = [
        f
    ]), (a = d.__b) && a(t);
    try {
        e: if (typeof m == "function") {
            if (v = t.props, y = (a = m.contextType) && r[a.__c], g = a ? y ? y.props.value : a.__ : r, _.__c ? b = (n = t.__c = _.__c).__ = n.__E : ("prototype" in m && m.prototype.render ? t.__c = n = new m(v, g) : (t.__c = n = new D(v, g), n.constructor = m, n.render = le), y && y.sub(n), n.props = v, n.state || (n.state = {}), n.context = g, n.__n = r, h = n.__d = !0, n.__h = [], n._sb = []), n.__s == null && (n.__s = n.state), m.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = k({}, n.__s)), k(n.__s, m.getDerivedStateFromProps(v, n.__s))), u = n.props, i = n.state, h) m.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), n.componentDidMount != null && n.__h.push(n.componentDidMount);
            else {
                if (m.getDerivedStateFromProps == null && v !== u && n.componentWillReceiveProps != null && n.componentWillReceiveProps(v, g), !n.__e && n.shouldComponentUpdate != null && n.shouldComponentUpdate(v, n.__s, g) === !1 || t.__v === _.__v) {
                    for(n.props = v, n.state = n.__s, t.__v !== _.__v && (n.__d = !1), n.__v = t, t.__e = _.__e, t.__k = _.__k, t.__k.forEach(function(U) {
                        U && (U.__ = t);
                    }), E = 0; E < n._sb.length; E++)n.__h.push(n._sb[E]);
                    n._sb = [], n.__h.length && s.push(n);
                    break e;
                }
                n.componentWillUpdate != null && n.componentWillUpdate(v, n.__s, g), n.componentDidUpdate != null && n.__h.push(function() {
                    n.componentDidUpdate(u, i, c);
                });
            }
            if (n.context = g, n.props = v, n.__v = t, n.__P = e, x = d.__r, I = 0, "prototype" in m && m.prototype.render) {
                for(n.state = n.__s, n.__d = !1, x && x(t), a = n.render(n.props, n.state, n.context), A = 0; A < n._sb.length; A++)n.__h.push(n._sb[A]);
                n._sb = [];
            } else do n.__d = !1, x && x(t), a = n.render(n.props, n.state, n.context), n.state = n.__s;
            while (n.__d && ++I < 25)
            n.state = n.__s, n.getChildContext != null && (r = k(k({}, r), n.getChildContext())), h || n.getSnapshotBeforeUpdate == null || (c = n.getSnapshotBeforeUpdate(u, i)), T = a != null && a.type === W && a.key == null ? a.props.children : a, J(e, Array.isArray(T) ? T : [
                T
            ], t, _, r, l, o, s, f, p), n.base = t.__e, t.__h = null, n.__h.length && s.push(n), b && (n.__E = n.__ = null), n.__e = !1;
        } else o == null && t.__v === _.__v ? (t.__k = _.__k, t.__e = _.__e) : t.__e = re(_.__e, t, _, r, l, o, s, p);
        (a = d.diffed) && a(t);
    } catch (U) {
        t.__v = null, (p || o != null) && (t.__e = f, t.__h = !!p, o[o.indexOf(f)] = null), d.__e(U, t, _);
    }
}
function X(e, t) {
    d.__c && d.__c(t, e), e.some(function(_) {
        try {
            e = _.__h, _.__h = [], e.some(function(r) {
                r.call(_);
            });
        } catch (r) {
            d.__e(r, _.__v);
        }
    });
}
function re(e, t, _, r, l, o, s, f) {
    var p, a, n, h = _.props, u = t.props, i = t.type, c = 0;
    if (i === "svg" && (l = !0), o != null) {
        for(; c < o.length; c++)if ((p = o[c]) && "setAttribute" in p == !!i && (i ? p.localName === i : p.nodeType === 3)) {
            e = p, o[c] = null;
            break;
        }
    }
    if (e == null) {
        if (i === null) return document.createTextNode(u);
        e = l ? document.createElementNS("http://www.w3.org/2000/svg", i) : document.createElement(i, u.is && u), o = null, f = !1;
    }
    if (i === null) h === u || f && e.data === u || (e.data = u);
    else {
        if (o = o && P.call(e.childNodes), a = (h = _.props || N).dangerouslySetInnerHTML, n = u.dangerouslySetInnerHTML, !f) {
            if (o != null) for(h = {}, c = 0; c < e.attributes.length; c++)h[e.attributes[c].name] = e.attributes[c].value;
            (n || a) && (n && (a && n.__html == a.__html || n.__html === e.innerHTML) || (e.innerHTML = n && n.__html || ""));
        }
        if (oe(e, u, h, l, f), n) t.__k = [];
        else if (c = t.props.children, J(e, Array.isArray(c) ? c : [
            c
        ], t, _, r, l && i !== "foreignObject", o, s, o ? o[0] : _.__k && w(_, 0), f), o != null) for(c = o.length; c--;)o[c] != null && G(o[c]);
        f || ("value" in u && (c = u.value) !== void 0 && (c !== e.value || i === "progress" && !c || i === "option" && c !== h.value) && M(e, "value", c, h.value, !1), "checked" in u && (c = u.checked) !== void 0 && c !== e.checked && M(e, "checked", c, h.checked, !1));
    }
    return e;
}
function Y(e, t, _) {
    try {
        typeof e == "function" ? e(t) : e.current = t;
    } catch (r) {
        d.__e(r, _);
    }
}
function Z(e, t, _) {
    var r, l;
    if (d.unmount && d.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Y(r, null, t)), (r = e.__c) != null) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount();
        } catch (o) {
            d.__e(o, t);
        }
        r.base = r.__P = null, e.__c = void 0;
    }
    if (r = e.__k) for(l = 0; l < r.length; l++)r[l] && Z(r[l], t, _ || typeof e.type != "function");
    _ || e.__e == null || G(e.__e), e.__ = e.__e = e.__d = void 0;
}
function le(e, t, _) {
    return this.constructor(e, _);
}
function ie(e, t, _) {
    var r, l, o;
    d.__ && d.__(e, t), l = (r = typeof _ == "function") ? null : _ && _.__k || t.__k, o = [], F(t, e = (!r && _ || t).__k = _e(W, null, [
        e
    ]), l || N, N, t.ownerSVGElement !== void 0, !r && _ ? [
        _
    ] : l ? null : t.firstChild ? P.call(t.childNodes) : null, o, !r && _ ? _ : l ? l.__e : t.firstChild, r), X(o, e);
}
P = z.slice, d = {
    __e: function(e, t, _, r) {
        for(var l, o, s; t = t.__;)if ((l = t.__c) && !l.__) try {
            if ((o = l.constructor) && o.getDerivedStateFromError != null && (l.setState(o.getDerivedStateFromError(e)), s = l.__d), l.componentDidCatch != null && (l.componentDidCatch(e, r || {}), s = l.__d), s) return l.__E = l;
        } catch (f) {
            e = f;
        }
        throw e;
    }
}, V = 0, D.prototype.setState = function(e, t) {
    var _;
    _ = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e == "function" && (e = e(k({}, _), this.props)), e && k(_, e), e != null && this.__v && (t && this._sb.push(t), H(this));
}, D.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), H(this));
}, D.prototype.render = W, C = [], L.__r = 0, 0;
var a = 0;
function p(n, s, t, f, u) {
    var r, o, _ = {};
    for(o in s)o == "ref" ? r = s[o] : _[o] = s[o];
    var e = {
        type: n,
        props: _,
        key: t,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --a,
        __source: u,
        __self: f
    };
    if (typeof n == "function" && (r = n.defaultProps)) for(o in r)_[o] === void 0 && (_[o] = r[o]);
    return d.vnode && d.vnode(e), e;
}
function cx(...classes) {
    return classes.filter((c)=>c && typeof c === "string").join(" ");
}
var i, o, d1, N1, f = 0, q1 = [], l = [], V1 = d.__b, b = d.__r, g = d.diffed, A = d.__c, C1 = d.unmount;
function a1(_, n) {
    d.__h && d.__h(o, _, f || n), f = 0;
    var u = o.__H || (o.__H = {
        __: [],
        __h: []
    });
    return _ >= u.__.length && u.__.push({
        __V: l
    }), u.__[_];
}
function P1(_) {
    return f = 1, k1(x, _);
}
function k1(_, n, u) {
    var t = a1(i++, 2);
    if (t.t = _, !t.__c && (t.__ = [
        u ? u(n) : x(void 0, n),
        function(s) {
            var h = t.__N ? t.__N[0] : t.__[0], v = t.t(h, s);
            h !== v && (t.__N = [
                v,
                t.__[1]
            ], t.__c.setState({}));
        }
    ], t.__c = o, !o.u)) {
        o.u = !0;
        var e = o.shouldComponentUpdate;
        o.shouldComponentUpdate = function(s, h, v) {
            if (!t.__c.__H) return !0;
            var E = t.__c.__H.__.filter(function(c) {
                return c.__c;
            });
            if (E.every(function(c) {
                return !c.__N;
            })) return !e || e.call(this, s, h, v);
            var y = !1;
            return E.forEach(function(c) {
                if (c.__N) {
                    var T = c.__[0];
                    c.__ = c.__N, c.__N = void 0, T !== c.__[0] && (y = !0);
                }
            }), !(!y && t.__c.props === s) && (!e || e.call(this, s, h, v));
        };
    }
    return t.__N || t.__;
}
function I() {
    for(var _; _ = q1.shift();)if (_.__P && _.__H) try {
        _.__H.__h.forEach(m), _.__H.__h.forEach(p1), _.__H.__h = [];
    } catch (n) {
        _.__H.__h = [], d.__e(n, _.__v);
    }
}
d.__b = function(_) {
    o = null, V1 && V1(_);
}, d.__r = function(_) {
    b && b(_), i = 0;
    var n = (o = _.__c).__H;
    n && (d1 === o ? (n.__h = [], o.__h = [], n.__.forEach(function(u) {
        u.__N && (u.__ = u.__N), u.__V = l, u.__N = u.i = void 0;
    })) : (n.__h.forEach(m), n.__h.forEach(p1), n.__h = [])), d1 = o;
}, d.diffed = function(_) {
    g && g(_);
    var n = _.__c;
    n && n.__H && (n.__H.__h.length && (q1.push(n) !== 1 && N1 === d.requestAnimationFrame || ((N1 = d.requestAnimationFrame) || R1)(I)), n.__H.__.forEach(function(u) {
        u.i && (u.__H = u.i), u.__V !== l && (u.__ = u.__V), u.i = void 0, u.__V = l;
    })), d1 = o = null;
}, d.__c = function(_, n) {
    n.some(function(u) {
        try {
            u.__h.forEach(m), u.__h = u.__h.filter(function(t) {
                return !t.__ || p1(t);
            });
        } catch (t) {
            n.some(function(e) {
                e.__h && (e.__h = []);
            }), n = [], d.__e(t, u.__v);
        }
    }), A && A(_, n);
}, d.unmount = function(_) {
    C1 && C1(_);
    var n, u = _.__c;
    u && u.__H && (u.__H.__.forEach(function(t) {
        try {
            m(t);
        } catch (e) {
            n = e;
        }
    }), u.__H = void 0, n && d.__e(n, u.__v));
};
var F1 = typeof requestAnimationFrame == "function";
function R1(_) {
    var n, u = function() {
        clearTimeout(t), F1 && cancelAnimationFrame(n), setTimeout(_);
    }, t = setTimeout(u, 100);
    F1 && (n = requestAnimationFrame(u));
}
function m(_) {
    var n = o, u = _.__c;
    typeof u == "function" && (_.__c = void 0, u()), o = n;
}
function p1(_) {
    var n = o;
    _.__c = _.__(), o = n;
}
function x(_, n) {
    return typeof n == "function" ? n(_) : n;
}
function jukebox(root) {
    const tracks = [];
    const sources = document.querySelectorAll(".sources");
    for (const dt of Array.from(sources)){
        const time = dt.querySelector("time");
        const date = time.innerText;
        const datetime = time.getAttribute("datetime");
        for (const li of Array.from(dt.querySelectorAll("li"))){
            const id = li.querySelector("a").href.split("/track/")[1];
            tracks.push({
                id,
                date,
                datetime,
                state: null
            });
        }
    }
    document.querySelector(".app").innerHTML = "";
    ie(p(App, {
        tracks: tracks
    }), root);
}
function App({ tracks: _tracks  }) {
    const [tracks, setTracks] = P1(_tracks);
    const newTracks = tracks.filter((t)=>!t.state);
    return p(W, {
        children: !!newTracks.length && p(NewTracks, {
            top: newTracks[0],
            next: newTracks[1],
            swipe: (state)=>{
                const update = {
                    ...newTracks[0],
                    state
                };
                setTracks(tracks.map((t)=>t.id === newTracks[0].id ? update : t));
            }
        })
    });
}
function NewTracks({ top , next , swipe  }) {
    const [state, setState] = P1(null);
    const _swipe = (newState)=>{
        if (state) {
            return;
        }
        setState(newState);
        setTimeout(()=>{
            setState(null);
            swipe(newState);
        }, 300);
    };
    return p(W, {
        children: [
            next && p(Spotify, {
                id: next.id,
                class: cx("new-track", !state && "next"),
                hidden: true
            }, next.id),
            p(Spotify, {
                id: top.id,
                class: cx("new-track", state)
            }, top.id),
            p("div", {
                style: "height:352px",
                children: "\xa0"
            }),
            " ",
            p("nav", {
                class: cx("new-buttons", !next && state && "fade"),
                children: [
                    p("button", {
                        style: "color:#aaa",
                        onClick: ()=>_swipe("meh"),
                        children: "meh."
                    }),
                    p("button", {
                        style: "background:var(--green)",
                        onClick: ()=>_swipe("ooh"),
                        children: "ooh!"
                    })
                ]
            })
        ]
    });
}
function Spotify({ id , class: cls , hidden  }) {
    return p("iframe", {
        class: cls,
        style: "border-radius:12px",
        src: `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`,
        width: "100%",
        height: "352",
        frameBorder: "0",
        allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
        loading: "lazy",
        "aria-hidden": hidden,
        allowFullScreen: true
    });
}
export { jukebox as jukebox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZXNtLnNoL3N0YWJsZS9wcmVhY3RAMTAuMTEuMy9kZW5vL3ByZWFjdC5qcyIsImh0dHBzOi8vZXNtLnNoL3N0YWJsZS9wcmVhY3RAMTAuMTEuMy9kZW5vL2pzeC1ydW50aW1lLmpzIiwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Nvbm5vcnNwZWVycy90aW4vZjhiYzJhN2FhYmI0N2Y4MjRiMWJlMDYxN2E2Yjk4YTMyZmE1YTQxOS9pc28udHMiLCJodHRwczovL2VzbS5zaC9zdGFibGUvcHJlYWN0QDEwLjExLjMvZGVuby9ob29rcy5qcyIsImZpbGU6Ly8vYXBwL3B1YmxpYy9zY3JpcHRzL2p1a2Vib3gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbS5zaCAtIGVzYnVpbGQgYnVuZGxlKHByZWFjdEAxMC4xMS4zKSBkZW5vIHByb2R1Y3Rpb24gKi9cbnZhciBQLGQsVixlZSxDLE8saixOPXt9LHo9W10sdGU9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBrKGUsdCl7Zm9yKHZhciBfIGluIHQpZVtfXT10W19dO3JldHVybiBlfWZ1bmN0aW9uIEcoZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3QmJnQucmVtb3ZlQ2hpbGQoZSl9ZnVuY3Rpb24gX2UoZSx0LF8pe3ZhciByLGwsbyxzPXt9O2ZvcihvIGluIHQpbz09XCJrZXlcIj9yPXRbb106bz09XCJyZWZcIj9sPXRbb106c1tvXT10W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKHMuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP1AuY2FsbChhcmd1bWVudHMsMik6XyksdHlwZW9mIGU9PVwiZnVuY3Rpb25cIiYmZS5kZWZhdWx0UHJvcHMhPW51bGwpZm9yKG8gaW4gZS5kZWZhdWx0UHJvcHMpc1tvXT09PXZvaWQgMCYmKHNbb109ZS5kZWZhdWx0UHJvcHNbb10pO3JldHVybiBTKGUscyxyLGwsbnVsbCl9ZnVuY3Rpb24gUyhlLHQsXyxyLGwpe3ZhciBvPXt0eXBlOmUscHJvcHM6dCxrZXk6XyxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpsPz8rK1Z9O3JldHVybiBsPT1udWxsJiZkLnZub2RlIT1udWxsJiZkLnZub2RlKG8pLG99ZnVuY3Rpb24gdWUoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBXKGUpe3JldHVybiBlLmNoaWxkcmVufWZ1bmN0aW9uIEQoZSx0KXt0aGlzLnByb3BzPWUsdGhpcy5jb250ZXh0PXR9ZnVuY3Rpb24gdyhlLHQpe2lmKHQ9PW51bGwpcmV0dXJuIGUuX18/dyhlLl9fLGUuX18uX19rLmluZGV4T2YoZSkrMSk6bnVsbDtmb3IodmFyIF87dDxlLl9fay5sZW5ndGg7dCsrKWlmKChfPWUuX19rW3RdKSE9bnVsbCYmXy5fX2UhPW51bGwpcmV0dXJuIF8uX19lO3JldHVybiB0eXBlb2YgZS50eXBlPT1cImZ1bmN0aW9uXCI/dyhlKTpudWxsfWZ1bmN0aW9uIHEoZSl7dmFyIHQsXztpZigoZT1lLl9fKSE9bnVsbCYmZS5fX2MhPW51bGwpe2ZvcihlLl9fZT1lLl9fYy5iYXNlPW51bGwsdD0wO3Q8ZS5fX2subGVuZ3RoO3QrKylpZigoXz1lLl9fa1t0XSkhPW51bGwmJl8uX19lIT1udWxsKXtlLl9fZT1lLl9fYy5iYXNlPV8uX19lO2JyZWFrfXJldHVybiBxKGUpfX1mdW5jdGlvbiBIKGUpeyghZS5fX2QmJihlLl9fZD0hMCkmJkMucHVzaChlKSYmIUwuX19yKyt8fE8hPT1kLmRlYm91bmNlUmVuZGVyaW5nKSYmKChPPWQuZGVib3VuY2VSZW5kZXJpbmcpfHxzZXRUaW1lb3V0KShMKX1mdW5jdGlvbiBMKCl7Zm9yKHZhciBlO0wuX19yPUMubGVuZ3RoOyllPUMuc29ydChmdW5jdGlvbih0LF8pe3JldHVybiB0Ll9fdi5fX2ItXy5fX3YuX19ifSksQz1bXSxlLnNvbWUoZnVuY3Rpb24odCl7dmFyIF8scixsLG8scyxmO3QuX19kJiYocz0obz0oXz10KS5fX3YpLl9fZSwoZj1fLl9fUCkmJihyPVtdLChsPWsoe30sbykpLl9fdj1vLl9fdisxLEYoZixvLGwsXy5fX24sZi5vd25lclNWR0VsZW1lbnQhPT12b2lkIDAsby5fX2ghPW51bGw/W3NdOm51bGwscixzPz93KG8pLG8uX19oKSxYKHIsbyksby5fX2UhPXMmJnEobykpKX0pfWZ1bmN0aW9uIEooZSx0LF8scixsLG8scyxmLHAsYSl7dmFyIG4saCx1LGksYyxiLHYseT1yJiZyLl9fa3x8eixnPXkubGVuZ3RoO2ZvcihfLl9faz1bXSxuPTA7bjx0Lmxlbmd0aDtuKyspaWYoKGk9Xy5fX2tbbl09KGk9dFtuXSk9PW51bGx8fHR5cGVvZiBpPT1cImJvb2xlYW5cIj9udWxsOnR5cGVvZiBpPT1cInN0cmluZ1wifHx0eXBlb2YgaT09XCJudW1iZXJcInx8dHlwZW9mIGk9PVwiYmlnaW50XCI/UyhudWxsLGksbnVsbCxudWxsLGkpOkFycmF5LmlzQXJyYXkoaSk/UyhXLHtjaGlsZHJlbjppfSxudWxsLG51bGwsbnVsbCk6aS5fX2I+MD9TKGkudHlwZSxpLnByb3BzLGkua2V5LGkucmVmP2kucmVmOm51bGwsaS5fX3YpOmkpIT1udWxsKXtpZihpLl9fPV8saS5fX2I9Xy5fX2IrMSwodT15W25dKT09PW51bGx8fHUmJmkua2V5PT11LmtleSYmaS50eXBlPT09dS50eXBlKXlbbl09dm9pZCAwO2Vsc2UgZm9yKGg9MDtoPGc7aCsrKXtpZigodT15W2hdKSYmaS5rZXk9PXUua2V5JiZpLnR5cGU9PT11LnR5cGUpe3lbaF09dm9pZCAwO2JyZWFrfXU9bnVsbH1GKGUsaSx1PXV8fE4sbCxvLHMsZixwLGEpLGM9aS5fX2UsKGg9aS5yZWYpJiZ1LnJlZiE9aCYmKHZ8fCh2PVtdKSx1LnJlZiYmdi5wdXNoKHUucmVmLG51bGwsaSksdi5wdXNoKGgsaS5fX2N8fGMsaSkpLGMhPW51bGw/KGI9PW51bGwmJihiPWMpLHR5cGVvZiBpLnR5cGU9PVwiZnVuY3Rpb25cIiYmaS5fX2s9PT11Ll9faz9pLl9fZD1wPUsoaSxwLGUpOnA9UShlLGksdSx5LGMscCksdHlwZW9mIF8udHlwZT09XCJmdW5jdGlvblwiJiYoXy5fX2Q9cCkpOnAmJnUuX19lPT1wJiZwLnBhcmVudE5vZGUhPWUmJihwPXcodSkpfWZvcihfLl9fZT1iLG49ZztuLS07KXlbbl0hPW51bGwmJlooeVtuXSx5W25dKTtpZih2KWZvcihuPTA7bjx2Lmxlbmd0aDtuKyspWSh2W25dLHZbKytuXSx2Wysrbl0pfWZ1bmN0aW9uIEsoZSx0LF8pe2Zvcih2YXIgcixsPWUuX19rLG89MDtsJiZvPGwubGVuZ3RoO28rKykocj1sW29dKSYmKHIuX189ZSx0PXR5cGVvZiByLnR5cGU9PVwiZnVuY3Rpb25cIj9LKHIsdCxfKTpRKF8scixyLGwsci5fX2UsdCkpO3JldHVybiB0fWZ1bmN0aW9uIG5lKGUsdCl7cmV0dXJuIHQ9dHx8W10sZT09bnVsbHx8dHlwZW9mIGU9PVwiYm9vbGVhblwifHwoQXJyYXkuaXNBcnJheShlKT9lLnNvbWUoZnVuY3Rpb24oXyl7bmUoXyx0KX0pOnQucHVzaChlKSksdH1mdW5jdGlvbiBRKGUsdCxfLHIsbCxvKXt2YXIgcyxmLHA7aWYodC5fX2QhPT12b2lkIDApcz10Ll9fZCx0Ll9fZD12b2lkIDA7ZWxzZSBpZihfPT1udWxsfHxsIT1vfHxsLnBhcmVudE5vZGU9PW51bGwpZTppZihvPT1udWxsfHxvLnBhcmVudE5vZGUhPT1lKWUuYXBwZW5kQ2hpbGQobCkscz1udWxsO2Vsc2V7Zm9yKGY9byxwPTA7KGY9Zi5uZXh0U2libGluZykmJnA8ci5sZW5ndGg7cCs9MSlpZihmPT1sKWJyZWFrIGU7ZS5pbnNlcnRCZWZvcmUobCxvKSxzPW99cmV0dXJuIHMhPT12b2lkIDA/czpsLm5leHRTaWJsaW5nfWZ1bmN0aW9uIG9lKGUsdCxfLHIsbCl7dmFyIG87Zm9yKG8gaW4gXylvPT09XCJjaGlsZHJlblwifHxvPT09XCJrZXlcInx8byBpbiB0fHxNKGUsbyxudWxsLF9bb10scik7Zm9yKG8gaW4gdClsJiZ0eXBlb2YgdFtvXSE9XCJmdW5jdGlvblwifHxvPT09XCJjaGlsZHJlblwifHxvPT09XCJrZXlcInx8bz09PVwidmFsdWVcInx8bz09PVwiY2hlY2tlZFwifHxfW29dPT09dFtvXXx8TShlLG8sdFtvXSxfW29dLHIpfWZ1bmN0aW9uIFIoZSx0LF8pe3RbMF09PT1cIi1cIj9lLnNldFByb3BlcnR5KHQsXyk6ZVt0XT1fPT1udWxsP1wiXCI6dHlwZW9mIF8hPVwibnVtYmVyXCJ8fHRlLnRlc3QodCk/XzpfK1wicHhcIn1mdW5jdGlvbiBNKGUsdCxfLHIsbCl7dmFyIG87ZTppZih0PT09XCJzdHlsZVwiKWlmKHR5cGVvZiBfPT1cInN0cmluZ1wiKWUuc3R5bGUuY3NzVGV4dD1fO2Vsc2V7aWYodHlwZW9mIHI9PVwic3RyaW5nXCImJihlLnN0eWxlLmNzc1RleHQ9cj1cIlwiKSxyKWZvcih0IGluIHIpXyYmdCBpbiBffHxSKGUuc3R5bGUsdCxcIlwiKTtpZihfKWZvcih0IGluIF8pciYmX1t0XT09PXJbdF18fFIoZS5zdHlsZSx0LF9bdF0pfWVsc2UgaWYodFswXT09PVwib1wiJiZ0WzFdPT09XCJuXCIpbz10IT09KHQ9dC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLHQ9dC50b0xvd2VyQ2FzZSgpaW4gZT90LnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6dC5zbGljZSgyKSxlLmx8fChlLmw9e30pLGUubFt0K29dPV8sXz9yfHxlLmFkZEV2ZW50TGlzdGVuZXIodCxvP0I6JCxvKTplLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxvP0I6JCxvKTtlbHNlIGlmKHQhPT1cImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIpe2lmKGwpdD10LnJlcGxhY2UoL3hsaW5rKEh8OmgpLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZih0IT09XCJocmVmXCImJnQhPT1cImxpc3RcIiYmdCE9PVwiZm9ybVwiJiZ0IT09XCJ0YWJJbmRleFwiJiZ0IT09XCJkb3dubG9hZFwiJiZ0IGluIGUpdHJ5e2VbdF09Xz8/XCJcIjticmVhayBlfWNhdGNoe310eXBlb2YgXz09XCJmdW5jdGlvblwifHwoXz09bnVsbHx8Xz09PSExJiZ0LmluZGV4T2YoXCItXCIpPT0tMT9lLnJlbW92ZUF0dHJpYnV0ZSh0KTplLnNldEF0dHJpYnV0ZSh0LF8pKX19ZnVuY3Rpb24gJChlKXt0aGlzLmxbZS50eXBlKyExXShkLmV2ZW50P2QuZXZlbnQoZSk6ZSl9ZnVuY3Rpb24gQihlKXt0aGlzLmxbZS50eXBlKyEwXShkLmV2ZW50P2QuZXZlbnQoZSk6ZSl9ZnVuY3Rpb24gRihlLHQsXyxyLGwsbyxzLGYscCl7dmFyIGEsbixoLHUsaSxjLGIsdix5LGcsRSx4LEksQSxULG09dC50eXBlO2lmKHQuY29uc3RydWN0b3IhPT12b2lkIDApcmV0dXJuIG51bGw7Xy5fX2ghPW51bGwmJihwPV8uX19oLGY9dC5fX2U9Xy5fX2UsdC5fX2g9bnVsbCxvPVtmXSksKGE9ZC5fX2IpJiZhKHQpO3RyeXtlOmlmKHR5cGVvZiBtPT1cImZ1bmN0aW9uXCIpe2lmKHY9dC5wcm9wcyx5PShhPW0uY29udGV4dFR5cGUpJiZyW2EuX19jXSxnPWE/eT95LnByb3BzLnZhbHVlOmEuX186cixfLl9fYz9iPShuPXQuX19jPV8uX19jKS5fXz1uLl9fRTooXCJwcm90b3R5cGVcImluIG0mJm0ucHJvdG90eXBlLnJlbmRlcj90Ll9fYz1uPW5ldyBtKHYsZyk6KHQuX19jPW49bmV3IEQodixnKSxuLmNvbnN0cnVjdG9yPW0sbi5yZW5kZXI9bGUpLHkmJnkuc3ViKG4pLG4ucHJvcHM9dixuLnN0YXRlfHwobi5zdGF0ZT17fSksbi5jb250ZXh0PWcsbi5fX249cixoPW4uX19kPSEwLG4uX19oPVtdLG4uX3NiPVtdKSxuLl9fcz09bnVsbCYmKG4uX19zPW4uc3RhdGUpLG0uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIT1udWxsJiYobi5fX3M9PW4uc3RhdGUmJihuLl9fcz1rKHt9LG4uX19zKSksayhuLl9fcyxtLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh2LG4uX19zKSkpLHU9bi5wcm9wcyxpPW4uc3RhdGUsaCltLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcz09bnVsbCYmbi5jb21wb25lbnRXaWxsTW91bnQhPW51bGwmJm4uY29tcG9uZW50V2lsbE1vdW50KCksbi5jb21wb25lbnREaWRNb3VudCE9bnVsbCYmbi5fX2gucHVzaChuLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG0uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzPT1udWxsJiZ2IT09dSYmbi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIT1udWxsJiZuLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHModixnKSwhbi5fX2UmJm4uc2hvdWxkQ29tcG9uZW50VXBkYXRlIT1udWxsJiZuLnNob3VsZENvbXBvbmVudFVwZGF0ZSh2LG4uX19zLGcpPT09ITF8fHQuX192PT09Xy5fX3Ype2ZvcihuLnByb3BzPXYsbi5zdGF0ZT1uLl9fcyx0Ll9fdiE9PV8uX192JiYobi5fX2Q9ITEpLG4uX192PXQsdC5fX2U9Xy5fX2UsdC5fX2s9Xy5fX2ssdC5fX2suZm9yRWFjaChmdW5jdGlvbihVKXtVJiYoVS5fXz10KX0pLEU9MDtFPG4uX3NiLmxlbmd0aDtFKyspbi5fX2gucHVzaChuLl9zYltFXSk7bi5fc2I9W10sbi5fX2gubGVuZ3RoJiZzLnB1c2gobik7YnJlYWsgZX1uLmNvbXBvbmVudFdpbGxVcGRhdGUhPW51bGwmJm4uY29tcG9uZW50V2lsbFVwZGF0ZSh2LG4uX19zLGcpLG4uY29tcG9uZW50RGlkVXBkYXRlIT1udWxsJiZuLl9faC5wdXNoKGZ1bmN0aW9uKCl7bi5jb21wb25lbnREaWRVcGRhdGUodSxpLGMpfSl9aWYobi5jb250ZXh0PWcsbi5wcm9wcz12LG4uX192PXQsbi5fX1A9ZSx4PWQuX19yLEk9MCxcInByb3RvdHlwZVwiaW4gbSYmbS5wcm90b3R5cGUucmVuZGVyKXtmb3Iobi5zdGF0ZT1uLl9fcyxuLl9fZD0hMSx4JiZ4KHQpLGE9bi5yZW5kZXIobi5wcm9wcyxuLnN0YXRlLG4uY29udGV4dCksQT0wO0E8bi5fc2IubGVuZ3RoO0ErKyluLl9faC5wdXNoKG4uX3NiW0FdKTtuLl9zYj1bXX1lbHNlIGRvIG4uX19kPSExLHgmJngodCksYT1uLnJlbmRlcihuLnByb3BzLG4uc3RhdGUsbi5jb250ZXh0KSxuLnN0YXRlPW4uX19zO3doaWxlKG4uX19kJiYrK0k8MjUpO24uc3RhdGU9bi5fX3Msbi5nZXRDaGlsZENvbnRleHQhPW51bGwmJihyPWsoayh7fSxyKSxuLmdldENoaWxkQ29udGV4dCgpKSksaHx8bi5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZT09bnVsbHx8KGM9bi5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh1LGkpKSxUPWEhPW51bGwmJmEudHlwZT09PVcmJmEua2V5PT1udWxsP2EucHJvcHMuY2hpbGRyZW46YSxKKGUsQXJyYXkuaXNBcnJheShUKT9UOltUXSx0LF8scixsLG8scyxmLHApLG4uYmFzZT10Ll9fZSx0Ll9faD1udWxsLG4uX19oLmxlbmd0aCYmcy5wdXNoKG4pLGImJihuLl9fRT1uLl9fPW51bGwpLG4uX19lPSExfWVsc2Ugbz09bnVsbCYmdC5fX3Y9PT1fLl9fdj8odC5fX2s9Xy5fX2ssdC5fX2U9Xy5fX2UpOnQuX19lPXJlKF8uX19lLHQsXyxyLGwsbyxzLHApOyhhPWQuZGlmZmVkKSYmYSh0KX1jYXRjaChVKXt0Ll9fdj1udWxsLChwfHxvIT1udWxsKSYmKHQuX19lPWYsdC5fX2g9ISFwLG9bby5pbmRleE9mKGYpXT1udWxsKSxkLl9fZShVLHQsXyl9fWZ1bmN0aW9uIFgoZSx0KXtkLl9fYyYmZC5fX2ModCxlKSxlLnNvbWUoZnVuY3Rpb24oXyl7dHJ5e2U9Xy5fX2gsXy5fX2g9W10sZS5zb21lKGZ1bmN0aW9uKHIpe3IuY2FsbChfKX0pfWNhdGNoKHIpe2QuX19lKHIsXy5fX3YpfX0pfWZ1bmN0aW9uIHJlKGUsdCxfLHIsbCxvLHMsZil7dmFyIHAsYSxuLGg9Xy5wcm9wcyx1PXQucHJvcHMsaT10LnR5cGUsYz0wO2lmKGk9PT1cInN2Z1wiJiYobD0hMCksbyE9bnVsbCl7Zm9yKDtjPG8ubGVuZ3RoO2MrKylpZigocD1vW2NdKSYmXCJzZXRBdHRyaWJ1dGVcImluIHA9PSEhaSYmKGk/cC5sb2NhbE5hbWU9PT1pOnAubm9kZVR5cGU9PT0zKSl7ZT1wLG9bY109bnVsbDticmVha319aWYoZT09bnVsbCl7aWYoaT09PW51bGwpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHUpO2U9bD9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGkpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaSx1LmlzJiZ1KSxvPW51bGwsZj0hMX1pZihpPT09bnVsbCloPT09dXx8ZiYmZS5kYXRhPT09dXx8KGUuZGF0YT11KTtlbHNle2lmKG89byYmUC5jYWxsKGUuY2hpbGROb2RlcyksYT0oaD1fLnByb3BzfHxOKS5kYW5nZXJvdXNseVNldElubmVySFRNTCxuPXUuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWYpe2lmKG8hPW51bGwpZm9yKGg9e30sYz0wO2M8ZS5hdHRyaWJ1dGVzLmxlbmd0aDtjKyspaFtlLmF0dHJpYnV0ZXNbY10ubmFtZV09ZS5hdHRyaWJ1dGVzW2NdLnZhbHVlOyhufHxhKSYmKG4mJihhJiZuLl9faHRtbD09YS5fX2h0bWx8fG4uX19odG1sPT09ZS5pbm5lckhUTUwpfHwoZS5pbm5lckhUTUw9biYmbi5fX2h0bWx8fFwiXCIpKX1pZihvZShlLHUsaCxsLGYpLG4pdC5fX2s9W107ZWxzZSBpZihjPXQucHJvcHMuY2hpbGRyZW4sSihlLEFycmF5LmlzQXJyYXkoYyk/YzpbY10sdCxfLHIsbCYmaSE9PVwiZm9yZWlnbk9iamVjdFwiLG8scyxvP29bMF06Xy5fX2smJncoXywwKSxmKSxvIT1udWxsKWZvcihjPW8ubGVuZ3RoO2MtLTspb1tjXSE9bnVsbCYmRyhvW2NdKTtmfHwoXCJ2YWx1ZVwiaW4gdSYmKGM9dS52YWx1ZSkhPT12b2lkIDAmJihjIT09ZS52YWx1ZXx8aT09PVwicHJvZ3Jlc3NcIiYmIWN8fGk9PT1cIm9wdGlvblwiJiZjIT09aC52YWx1ZSkmJk0oZSxcInZhbHVlXCIsYyxoLnZhbHVlLCExKSxcImNoZWNrZWRcImluIHUmJihjPXUuY2hlY2tlZCkhPT12b2lkIDAmJmMhPT1lLmNoZWNrZWQmJk0oZSxcImNoZWNrZWRcIixjLGguY2hlY2tlZCwhMSkpfXJldHVybiBlfWZ1bmN0aW9uIFkoZSx0LF8pe3RyeXt0eXBlb2YgZT09XCJmdW5jdGlvblwiP2UodCk6ZS5jdXJyZW50PXR9Y2F0Y2gocil7ZC5fX2UocixfKX19ZnVuY3Rpb24gWihlLHQsXyl7dmFyIHIsbDtpZihkLnVubW91bnQmJmQudW5tb3VudChlKSwocj1lLnJlZikmJihyLmN1cnJlbnQmJnIuY3VycmVudCE9PWUuX19lfHxZKHIsbnVsbCx0KSksKHI9ZS5fX2MpIT1udWxsKXtpZihyLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtyLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobyl7ZC5fX2Uobyx0KX1yLmJhc2U9ci5fX1A9bnVsbCxlLl9fYz12b2lkIDB9aWYocj1lLl9faylmb3IobD0wO2w8ci5sZW5ndGg7bCsrKXJbbF0mJloocltsXSx0LF98fHR5cGVvZiBlLnR5cGUhPVwiZnVuY3Rpb25cIik7X3x8ZS5fX2U9PW51bGx8fEcoZS5fX2UpLGUuX189ZS5fX2U9ZS5fX2Q9dm9pZCAwfWZ1bmN0aW9uIGxlKGUsdCxfKXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihlLF8pfWZ1bmN0aW9uIGllKGUsdCxfKXt2YXIgcixsLG87ZC5fXyYmZC5fXyhlLHQpLGw9KHI9dHlwZW9mIF89PVwiZnVuY3Rpb25cIik/bnVsbDpfJiZfLl9fa3x8dC5fX2ssbz1bXSxGKHQsZT0oIXImJl98fHQpLl9faz1fZShXLG51bGwsW2VdKSxsfHxOLE4sdC5vd25lclNWR0VsZW1lbnQhPT12b2lkIDAsIXImJl8/W19dOmw/bnVsbDp0LmZpcnN0Q2hpbGQ/UC5jYWxsKHQuY2hpbGROb2Rlcyk6bnVsbCxvLCFyJiZfP186bD9sLl9fZTp0LmZpcnN0Q2hpbGQsciksWChvLGUpfWZ1bmN0aW9uIHNlKGUsdCl7aWUoZSx0LHNlKX1mdW5jdGlvbiBjZShlLHQsXyl7dmFyIHIsbCxvLHM9ayh7fSxlLnByb3BzKTtmb3IobyBpbiB0KW89PVwia2V5XCI/cj10W29dOm89PVwicmVmXCI/bD10W29dOnNbb109dFtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYocy5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/UC5jYWxsKGFyZ3VtZW50cywyKTpfKSxTKGUudHlwZSxzLHJ8fGUua2V5LGx8fGUucmVmLG51bGwpfWZ1bmN0aW9uIGZlKGUsdCl7dmFyIF89e19fYzp0PVwiX19jQ1wiK2orKyxfXzplLENvbnN1bWVyOmZ1bmN0aW9uKHIsbCl7cmV0dXJuIHIuY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKHIpe3ZhciBsLG87cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwobD1bXSwobz17fSlbdF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBvfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihzKXt0aGlzLnByb3BzLnZhbHVlIT09cy52YWx1ZSYmbC5zb21lKEgpfSx0aGlzLnN1Yj1mdW5jdGlvbihzKXtsLnB1c2gocyk7dmFyIGY9cy5jb21wb25lbnRXaWxsVW5tb3VudDtzLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7bC5zcGxpY2UobC5pbmRleE9mKHMpLDEpLGYmJmYuY2FsbChzKX19KSxyLmNoaWxkcmVufX07cmV0dXJuIF8uUHJvdmlkZXIuX189Xy5Db25zdW1lci5jb250ZXh0VHlwZT1ffVA9ei5zbGljZSxkPXtfX2U6ZnVuY3Rpb24oZSx0LF8scil7Zm9yKHZhciBsLG8sczt0PXQuX187KWlmKChsPXQuX19jKSYmIWwuX18pdHJ5e2lmKChvPWwuY29uc3RydWN0b3IpJiZvLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciE9bnVsbCYmKGwuc2V0U3RhdGUoby5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZSkpLHM9bC5fX2QpLGwuY29tcG9uZW50RGlkQ2F0Y2ghPW51bGwmJihsLmNvbXBvbmVudERpZENhdGNoKGUscnx8e30pLHM9bC5fX2QpLHMpcmV0dXJuIGwuX19FPWx9Y2F0Y2goZil7ZT1mfXRocm93IGV9fSxWPTAsZWU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPW51bGwmJmUuY29uc3RydWN0b3I9PT12b2lkIDB9LEQucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGUsdCl7dmFyIF87Xz10aGlzLl9fcyE9bnVsbCYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWsoe30sdGhpcy5zdGF0ZSksdHlwZW9mIGU9PVwiZnVuY3Rpb25cIiYmKGU9ZShrKHt9LF8pLHRoaXMucHJvcHMpKSxlJiZrKF8sZSksZSE9bnVsbCYmdGhpcy5fX3YmJih0JiZ0aGlzLl9zYi5wdXNoKHQpLEgodGhpcykpfSxELnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihlKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLGUmJnRoaXMuX19oLnB1c2goZSksSCh0aGlzKSl9LEQucHJvdG90eXBlLnJlbmRlcj1XLEM9W10sTC5fX3I9MCxqPTA7ZXhwb3J0e0QgYXMgQ29tcG9uZW50LFcgYXMgRnJhZ21lbnQsY2UgYXMgY2xvbmVFbGVtZW50LGZlIGFzIGNyZWF0ZUNvbnRleHQsX2UgYXMgY3JlYXRlRWxlbWVudCx1ZSBhcyBjcmVhdGVSZWYsX2UgYXMgaCxzZSBhcyBoeWRyYXRlLGVlIGFzIGlzVmFsaWRFbGVtZW50LGQgYXMgb3B0aW9ucyxpZSBhcyByZW5kZXIsbmUgYXMgdG9DaGlsZEFycmF5fTtcbiIsIi8qIGVzbS5zaCAtIGVzYnVpbGQgYnVuZGxlKHByZWFjdEAxMC4xMS4zL2pzeC1ydW50aW1lKSBkZW5vIHByb2R1Y3Rpb24gKi9cbmltcG9ydHtvcHRpb25zIGFzIGx9ZnJvbVwiL3N0YWJsZS9wcmVhY3RAMTAuMTEuMy9kZW5vL3ByZWFjdC5qc1wiO2ltcG9ydHtGcmFnbWVudCBhcyBjfWZyb21cIi9zdGFibGUvcHJlYWN0QDEwLjExLjMvZGVuby9wcmVhY3QuanNcIjt2YXIgYT0wO2Z1bmN0aW9uIHAobixzLHQsZix1KXt2YXIgcixvLF89e307Zm9yKG8gaW4gcylvPT1cInJlZlwiP3I9c1tvXTpfW29dPXNbb107dmFyIGU9e3R5cGU6bixwcm9wczpfLGtleTp0LHJlZjpyLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Oi0tYSxfX3NvdXJjZTp1LF9fc2VsZjpmfTtpZih0eXBlb2Ygbj09XCJmdW5jdGlvblwiJiYocj1uLmRlZmF1bHRQcm9wcykpZm9yKG8gaW4gcilfW29dPT09dm9pZCAwJiYoX1tvXT1yW29dKTtyZXR1cm4gbC52bm9kZSYmbC52bm9kZShlKSxlfWV4cG9ydHtjIGFzIEZyYWdtZW50LHAgYXMganN4LHAgYXMganN4REVWLHAgYXMganN4c307XG4iLCIvLyBDb3B5cmlnaHQgMjAyMiBDb25ub3IgU3BlZXJzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBNSVQgTGljZW5zZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGJyb3dzZXItY29tcGF0aWJsZS5cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBDU1MgY2xhc3Mgc3RyaW5nIGZyb20gdGhlIGdpdmVuIGlucHV0cy4gTm9uLXN0cmluZ3MgYW5kIGVtcHR5XG4gKiBzdHJpbmdzIGFyZSBza2lwcGVkLCB0aGUgcmVzdCBhcmUgam9pbmVkIHdpdGggYSBzcGFjZSBzZXBhcmF0b3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjeCguLi5jbGFzc2VzOiB1bmtub3duW10pOiBzdHJpbmcge1xuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoYyA9PiBjICYmIHR5cGVvZiBjID09PSBcInN0cmluZ1wiKS5qb2luKFwiIFwiKTtcbn1cbiIsIi8qIGVzbS5zaCAtIGVzYnVpbGQgYnVuZGxlKHByZWFjdEAxMC4xMS4zL2hvb2tzKSBkZW5vIHByb2R1Y3Rpb24gKi9cbmltcG9ydHtvcHRpb25zIGFzIHJ9ZnJvbVwiL3N0YWJsZS9wcmVhY3RAMTAuMTEuMy9kZW5vL3ByZWFjdC5qc1wiO3ZhciBpLG8sZCxOLGY9MCxxPVtdLGw9W10sVj1yLl9fYixiPXIuX19yLGc9ci5kaWZmZWQsQT1yLl9fYyxDPXIudW5tb3VudDtmdW5jdGlvbiBhKF8sbil7ci5fX2gmJnIuX19oKG8sXyxmfHxuKSxmPTA7dmFyIHU9by5fX0h8fChvLl9fSD17X186W10sX19oOltdfSk7cmV0dXJuIF8+PXUuX18ubGVuZ3RoJiZ1Ll9fLnB1c2goe19fVjpsfSksdS5fX1tfXX1mdW5jdGlvbiBQKF8pe3JldHVybiBmPTEsayh4LF8pfWZ1bmN0aW9uIGsoXyxuLHUpe3ZhciB0PWEoaSsrLDIpO2lmKHQudD1fLCF0Ll9fYyYmKHQuX189W3U/dShuKTp4KHZvaWQgMCxuKSxmdW5jdGlvbihzKXt2YXIgaD10Ll9fTj90Ll9fTlswXTp0Ll9fWzBdLHY9dC50KGgscyk7aCE9PXYmJih0Ll9fTj1bdix0Ll9fWzFdXSx0Ll9fYy5zZXRTdGF0ZSh7fSkpfV0sdC5fX2M9bywhby51KSl7by51PSEwO3ZhciBlPW8uc2hvdWxkQ29tcG9uZW50VXBkYXRlO28uc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKHMsaCx2KXtpZighdC5fX2MuX19IKXJldHVybiEwO3ZhciBFPXQuX19jLl9fSC5fXy5maWx0ZXIoZnVuY3Rpb24oYyl7cmV0dXJuIGMuX19jfSk7aWYoRS5ldmVyeShmdW5jdGlvbihjKXtyZXR1cm4hYy5fX059KSlyZXR1cm4hZXx8ZS5jYWxsKHRoaXMscyxoLHYpO3ZhciB5PSExO3JldHVybiBFLmZvckVhY2goZnVuY3Rpb24oYyl7aWYoYy5fX04pe3ZhciBUPWMuX19bMF07Yy5fXz1jLl9fTixjLl9fTj12b2lkIDAsVCE9PWMuX19bMF0mJih5PSEwKX19KSwhKCF5JiZ0Ll9fYy5wcm9wcz09PXMpJiYoIWV8fGUuY2FsbCh0aGlzLHMsaCx2KSl9fXJldHVybiB0Ll9fTnx8dC5fX31mdW5jdGlvbiBVKF8sbil7dmFyIHU9YShpKyssMyk7IXIuX19zJiZIKHUuX19ILG4pJiYodS5fXz1fLHUuaT1uLG8uX19ILl9faC5wdXNoKHUpKX1mdW5jdGlvbiBCKF8sbil7dmFyIHU9YShpKyssNCk7IXIuX19zJiZIKHUuX19ILG4pJiYodS5fXz1fLHUuaT1uLG8uX19oLnB1c2godSkpfWZ1bmN0aW9uIGooXyl7cmV0dXJuIGY9NSxEKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6X319LFtdKX1mdW5jdGlvbiB3KF8sbix1KXtmPTYsQihmdW5jdGlvbigpe3JldHVybiB0eXBlb2YgXz09XCJmdW5jdGlvblwiPyhfKG4oKSksZnVuY3Rpb24oKXtyZXR1cm4gXyhudWxsKX0pOl8/KF8uY3VycmVudD1uKCksZnVuY3Rpb24oKXtyZXR1cm4gXy5jdXJyZW50PW51bGx9KTp2b2lkIDB9LHU9PW51bGw/dTp1LmNvbmNhdChfKSl9ZnVuY3Rpb24gRChfLG4pe3ZhciB1PWEoaSsrLDcpO3JldHVybiBIKHUuX19ILG4pPyh1Ll9fVj1fKCksdS5pPW4sdS5fX2g9Xyx1Ll9fVik6dS5fX31mdW5jdGlvbiB6KF8sbil7cmV0dXJuIGY9OCxEKGZ1bmN0aW9uKCl7cmV0dXJuIF99LG4pfWZ1bmN0aW9uIEwoXyl7dmFyIG49by5jb250ZXh0W18uX19jXSx1PWEoaSsrLDkpO3JldHVybiB1LmM9XyxuPyh1Ll9fPT1udWxsJiYodS5fXz0hMCxuLnN1YihvKSksbi5wcm9wcy52YWx1ZSk6Xy5fX31mdW5jdGlvbiBNKF8sbil7ci51c2VEZWJ1Z1ZhbHVlJiZyLnVzZURlYnVnVmFsdWUobj9uKF8pOl8pfWZ1bmN0aW9uIEcoXyl7dmFyIG49YShpKyssMTApLHU9UCgpO3JldHVybiBuLl9fPV8sby5jb21wb25lbnREaWRDYXRjaHx8KG8uY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24odCxlKXtuLl9fJiZuLl9fKHQsZSksdVsxXSh0KX0pLFt1WzBdLGZ1bmN0aW9uKCl7dVsxXSh2b2lkIDApfV19ZnVuY3Rpb24gSigpe3ZhciBfPWEoaSsrLDExKTtpZighXy5fXyl7Zm9yKHZhciBuPW8uX192O24hPT1udWxsJiYhbi5fX20mJm4uX18hPT1udWxsOyluPW4uX187dmFyIHU9bi5fX218fChuLl9fbT1bMCwwXSk7Xy5fXz1cIlBcIit1WzBdK1wiLVwiK3VbMV0rK31yZXR1cm4gXy5fX31mdW5jdGlvbiBJKCl7Zm9yKHZhciBfO189cS5zaGlmdCgpOylpZihfLl9fUCYmXy5fX0gpdHJ5e18uX19ILl9faC5mb3JFYWNoKG0pLF8uX19ILl9faC5mb3JFYWNoKHApLF8uX19ILl9faD1bXX1jYXRjaChuKXtfLl9fSC5fX2g9W10sci5fX2UobixfLl9fdil9fXIuX19iPWZ1bmN0aW9uKF8pe289bnVsbCxWJiZWKF8pfSxyLl9fcj1mdW5jdGlvbihfKXtiJiZiKF8pLGk9MDt2YXIgbj0obz1fLl9fYykuX19IO24mJihkPT09bz8obi5fX2g9W10sby5fX2g9W10sbi5fXy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3UuX19OJiYodS5fXz11Ll9fTiksdS5fX1Y9bCx1Ll9fTj11Lmk9dm9pZCAwfSkpOihuLl9faC5mb3JFYWNoKG0pLG4uX19oLmZvckVhY2gocCksbi5fX2g9W10pKSxkPW99LHIuZGlmZmVkPWZ1bmN0aW9uKF8pe2cmJmcoXyk7dmFyIG49Xy5fX2M7biYmbi5fX0gmJihuLl9fSC5fX2gubGVuZ3RoJiYocS5wdXNoKG4pIT09MSYmTj09PXIucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKE49ci5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxSKShJKSksbi5fX0guX18uZm9yRWFjaChmdW5jdGlvbih1KXt1LmkmJih1Ll9fSD11LmkpLHUuX19WIT09bCYmKHUuX189dS5fX1YpLHUuaT12b2lkIDAsdS5fX1Y9bH0pKSxkPW89bnVsbH0sci5fX2M9ZnVuY3Rpb24oXyxuKXtuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e3UuX19oLmZvckVhY2gobSksdS5fX2g9dS5fX2guZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiF0Ll9ffHxwKHQpfSl9Y2F0Y2godCl7bi5zb21lKGZ1bmN0aW9uKGUpe2UuX19oJiYoZS5fX2g9W10pfSksbj1bXSxyLl9fZSh0LHUuX192KX19KSxBJiZBKF8sbil9LHIudW5tb3VudD1mdW5jdGlvbihfKXtDJiZDKF8pO3ZhciBuLHU9Xy5fX2M7dSYmdS5fX0gmJih1Ll9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3RyeXttKHQpfWNhdGNoKGUpe249ZX19KSx1Ll9fSD12b2lkIDAsbiYmci5fX2Uobix1Ll9fdikpfTt2YXIgRj10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lPT1cImZ1bmN0aW9uXCI7ZnVuY3Rpb24gUihfKXt2YXIgbix1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHQpLEYmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKG4pLHNldFRpbWVvdXQoXyl9LHQ9c2V0VGltZW91dCh1LDEwMCk7RiYmKG49cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX1mdW5jdGlvbiBtKF8pe3ZhciBuPW8sdT1fLl9fYzt0eXBlb2YgdT09XCJmdW5jdGlvblwiJiYoXy5fX2M9dm9pZCAwLHUoKSksbz1ufWZ1bmN0aW9uIHAoXyl7dmFyIG49bztfLl9fYz1fLl9fKCksbz1ufWZ1bmN0aW9uIEgoXyxuKXtyZXR1cm4hX3x8Xy5sZW5ndGghPT1uLmxlbmd0aHx8bi5zb21lKGZ1bmN0aW9uKHUsdCl7cmV0dXJuIHUhPT1fW3RdfSl9ZnVuY3Rpb24geChfLG4pe3JldHVybiB0eXBlb2Ygbj09XCJmdW5jdGlvblwiP24oXyk6bn1leHBvcnR7eiBhcyB1c2VDYWxsYmFjayxMIGFzIHVzZUNvbnRleHQsTSBhcyB1c2VEZWJ1Z1ZhbHVlLFUgYXMgdXNlRWZmZWN0LEcgYXMgdXNlRXJyb3JCb3VuZGFyeSxKIGFzIHVzZUlkLHcgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxCIGFzIHVzZUxheW91dEVmZmVjdCxEIGFzIHVzZU1lbW8sayBhcyB1c2VSZWR1Y2VyLGogYXMgdXNlUmVmLFAgYXMgdXNlU3RhdGV9O1xuIiwiLyoqIEBqc3hJbXBvcnRTb3VyY2UgaHR0cHM6Ly9lc20uc2gvcHJlYWN0QDEwLjExLjMgKi9cblxuaW1wb3J0IHsgY3ggfSBmcm9tIFwiLi4vLi4vZG9tLnRzXCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiaHR0cHM6Ly9lc20uc2gvcHJlYWN0QDEwLjExLjNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcImh0dHBzOi8vZXNtLnNoL3ByZWFjdEAxMC4xMS4zL2hvb2tzXCI7XG5cbnR5cGUgVHJhY2tTdGF0ZSA9IFwib29oXCIgfCBcIm1laFwiO1xuXG5pbnRlcmZhY2UgVHJhY2sge1xuICBpZDogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGRhdGV0aW1lOiBzdHJpbmc7XG4gIHN0YXRlOiBUcmFja1N0YXRlIHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1a2Vib3gocm9vdDogSFRNTEVsZW1lbnQpIHtcbiAgY29uc3QgdHJhY2tzOiBUcmFja1tdID0gW107XG4gIGNvbnN0IHNvdXJjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNvdXJjZXNcIik7XG4gIGZvciAoY29uc3QgZHQgb2YgQXJyYXkuZnJvbShzb3VyY2VzKSkge1xuICAgIGNvbnN0IHRpbWUgPSBkdC5xdWVyeVNlbGVjdG9yKFwidGltZVwiKSE7XG4gICAgY29uc3QgZGF0ZSA9IHRpbWUuaW5uZXJUZXh0O1xuICAgIGNvbnN0IGRhdGV0aW1lID0gdGltZS5nZXRBdHRyaWJ1dGUoXCJkYXRldGltZVwiKSE7XG4gICAgZm9yIChjb25zdCBsaSBvZiBBcnJheS5mcm9tKGR0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKSkpIHtcbiAgICAgIGNvbnN0IGlkID0gbGkucXVlcnlTZWxlY3RvcihcImFcIikhLmhyZWYuc3BsaXQoXCIvdHJhY2svXCIpWzFdO1xuICAgICAgdHJhY2tzLnB1c2goe1xuICAgICAgICBpZCxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgZGF0ZXRpbWUsXG4gICAgICAgIHN0YXRlOiBudWxsLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBcIikhLmlubmVySFRNTCA9IFwiXCI7XG4gIHJlbmRlcig8QXBwIHRyYWNrcz17dHJhY2tzfSAvPiwgcm9vdCk7XG59XG5cbmZ1bmN0aW9uIEFwcCh7IHRyYWNrczogX3RyYWNrcyB9OiB7XG4gIHRyYWNrczogVHJhY2tbXTtcbn0pIHtcbiAgY29uc3QgW3RyYWNrcywgc2V0VHJhY2tzXSA9IHVzZVN0YXRlKF90cmFja3MpO1xuXG4gIGNvbnN0IG5ld1RyYWNrcyA9IHRyYWNrcy5maWx0ZXIodCA9PiAhdC5zdGF0ZSk7XG5cbiAgcmV0dXJuIDw+XG4gICAgeyEhbmV3VHJhY2tzLmxlbmd0aCAmJiAoXG4gICAgICA8TmV3VHJhY2tzXG4gICAgICAgIHRvcD17bmV3VHJhY2tzWzBdfVxuICAgICAgICBuZXh0PXtuZXdUcmFja3NbMV19XG4gICAgICAgIHN3aXBlPXsoc3RhdGU6IFRyYWNrU3RhdGUpID0+IHtcbiAgICAgICAgICBjb25zdCB1cGRhdGUgPSB7IC4uLm5ld1RyYWNrc1swXSwgc3RhdGUgfTtcbiAgICAgICAgICBzZXRUcmFja3ModHJhY2tzLm1hcCh0ID0+IChcbiAgICAgICAgICAgIHQuaWQgPT09IG5ld1RyYWNrc1swXS5pZCA/IHVwZGF0ZVxuICAgICAgICAgICAgOiB0XG4gICAgICAgICAgKSkpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApfVxuICA8Lz47XG59XG5cbmZ1bmN0aW9uIE5ld1RyYWNrcyh7IHRvcCwgbmV4dCwgc3dpcGUgfToge1xuICB0b3A6IFRyYWNrO1xuICBuZXh0PzogVHJhY2s7XG4gIHN3aXBlOiAoc3RhdGU6IFRyYWNrU3RhdGUpID0+IHZvaWQ7XG59KSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8VHJhY2tTdGF0ZSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IF9zd2lwZSA9IChuZXdTdGF0ZTogVHJhY2tTdGF0ZSkgPT4ge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgcmV0dXJuOyAvLyBUaGV5IGNsaWNrIGZhc3RcbiAgICB9XG4gICAgc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U3RhdGUobnVsbCk7XG4gICAgICBzd2lwZShuZXdTdGF0ZSk7XG4gICAgfSwgMzAwKTsgLy8gVHJhbnNpdGlvbiBkdXJhdGlvbiBmcm9tIENTU1xuICB9O1xuXG4gIHJldHVybiA8PlxuICAgIHtcbiAgICAgIC8vIFVzaW5nIHRoZSBcImtleVwiIHByb3AgcHJldmVudHMgUHJlYWN0IGZyb20gcmUtdXNpbmcgaWZyYW1lIGVsZW1lbnRzLFxuICAgICAgLy8gd2hpY2ggd291bGQgY2F1c2UgYWxsIGtpbmRzIG9mIHByb2JsZW1zXG4gICAgfVxuICAgIHtuZXh0ICYmIChcbiAgICAgIDxTcG90aWZ5XG4gICAgICAgIGtleT17bmV4dC5pZH1cbiAgICAgICAgaWQ9e25leHQuaWR9XG4gICAgICAgIGNsYXNzPXtjeChcIm5ldy10cmFja1wiLCAhc3RhdGUgJiYgXCJuZXh0XCIpfVxuICAgICAgICBoaWRkZW5cbiAgICAgIC8+XG4gICAgKX1cbiAgICA8U3BvdGlmeVxuICAgICAga2V5PXt0b3AuaWR9XG4gICAgICBpZD17dG9wLmlkfVxuICAgICAgY2xhc3M9e2N4KFwibmV3LXRyYWNrXCIsIHN0YXRlKX1cbiAgICAvPlxuICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6MzUycHhcIj4mbmJzcDs8L2Rpdj4gey8qIFBsYWNlaG9sZGVyICovfVxuICAgIDxuYXYgY2xhc3M9e2N4KFwibmV3LWJ1dHRvbnNcIiwgIW5leHQgJiYgc3RhdGUgJiYgXCJmYWRlXCIpfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9XCJjb2xvcjojYWFhXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gX3N3aXBlKFwibWVoXCIpfVxuICAgICAgPm1laC48L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kOnZhcigtLWdyZWVuKVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IF9zd2lwZShcIm9vaFwiKX1cbiAgICAgID5vb2ghPC9idXR0b24+XG4gICAgPC9uYXY+XG4gIDwvPjtcbn1cblxuZnVuY3Rpb24gU3BvdGlmeSh7IGlkLCBjbGFzczogY2xzLCBoaWRkZW4gfToge1xuICBjbGFzczogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBoaWRkZW4/OiBib29sZWFuO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxpZnJhbWVcbiAgICAgIGNsYXNzPXtjbHN9XG4gICAgICBzdHlsZT1cImJvcmRlci1yYWRpdXM6MTJweFwiXG4gICAgICBzcmM9e2BodHRwczovL29wZW4uc3BvdGlmeS5jb20vZW1iZWQvdHJhY2svJHtpZH0/dXRtX3NvdXJjZT1nZW5lcmF0b3ImdGhlbWU9MGB9XG4gICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgaGVpZ2h0PVwiMzUyXCJcbiAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICBhbGxvdz1cImF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZnVsbHNjcmVlbjsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgIGFyaWEtaGlkZGVuPXtoaWRkZW59XG4gICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICA+PC9pZnJhbWU+XG4gIClcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFJLEdBQUUsR0FBRSxHQUFLLEdBQUUsR0FBSSxJQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsRUFBQyxLQUFHO0FBQW9FLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFFO0lBQUMsT0FBTztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLElBQUksSUFBRSxFQUFFLFVBQVU7SUFBQyxLQUFHLEVBQUUsV0FBVyxDQUFDO0FBQUU7QUFBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLEdBQUUsR0FBRSxHQUFFLElBQUUsQ0FBQztJQUFFLElBQUksS0FBSyxFQUFFLEtBQUcsUUFBTSxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUMsS0FBRyxRQUFNLElBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFFO0lBQUMsSUFBRyxVQUFVLE1BQU0sR0FBQyxLQUFHLENBQUMsRUFBRSxRQUFRLEdBQUMsVUFBVSxNQUFNLEdBQUMsSUFBRSxFQUFFLElBQUksQ0FBQyxXQUFVLEtBQUcsQ0FBQyxHQUFFLE9BQU8sS0FBRyxjQUFZLEVBQUUsWUFBWSxJQUFFLElBQUksRUFBQyxJQUFJLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBRyxLQUFLLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLEVBQUUsWUFBWSxDQUFDLEVBQUU7SUFBRSxPQUFPLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFJO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLElBQUksSUFBRTtRQUFDLE1BQUs7UUFBRSxPQUFNO1FBQUUsS0FBSTtRQUFFLEtBQUk7UUFBRSxLQUFJLElBQUk7UUFBQyxJQUFHLElBQUk7UUFBQyxLQUFJO1FBQUUsS0FBSSxJQUFJO1FBQUMsS0FBSSxLQUFLO1FBQUUsS0FBSSxJQUFJO1FBQUMsS0FBSSxJQUFJO1FBQUMsYUFBWSxLQUFLO1FBQUUsS0FBSSxLQUFHLEVBQUU7SUFBQztJQUFFLE9BQU8sS0FBRyxJQUFJLElBQUUsRUFBRSxLQUFLLElBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFDLElBQUcsQ0FBQztBQUFBO0FBQW9DLFNBQVMsRUFBRSxDQUFDLEVBQUM7SUFBQyxPQUFPLEVBQUUsUUFBUTtBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLENBQUMsS0FBSyxHQUFDLEdBQUUsSUFBSSxDQUFDLE9BQU8sR0FBQyxDQUFDO0FBQUE7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLElBQUcsS0FBRyxJQUFJLEVBQUMsT0FBTyxFQUFFLEVBQUUsR0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBRyxLQUFHLElBQUk7SUFBQyxJQUFJLElBQUksR0FBRSxJQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLElBQUcsQ0FBQyxJQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBRyxJQUFJLElBQUUsRUFBRSxHQUFHLElBQUUsSUFBSSxFQUFDLE9BQU8sRUFBRSxHQUFHO0lBQUMsT0FBTyxPQUFPLEVBQUUsSUFBSSxJQUFFLGFBQVcsRUFBRSxLQUFHLElBQUk7QUFBQTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7SUFBQyxJQUFJLEdBQUU7SUFBRSxJQUFHLENBQUMsSUFBRSxFQUFFLEVBQUUsS0FBRyxJQUFJLElBQUUsRUFBRSxHQUFHLElBQUUsSUFBSSxFQUFDO1FBQUMsSUFBSSxFQUFFLEdBQUcsR0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUMsSUFBSSxFQUFDLElBQUUsQ0FBQyxFQUFDLElBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFDLElBQUksSUFBRyxDQUFDLElBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFHLElBQUksSUFBRSxFQUFFLEdBQUcsSUFBRSxJQUFJLEVBQUM7WUFBQyxFQUFFLEdBQUcsR0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFHO1lBQUMsS0FBSztRQUFBLENBQUM7UUFBQSxPQUFPLEVBQUU7SUFBRSxDQUFDO0FBQUE7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO0lBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFFLENBQUMsRUFBRSxHQUFHLEdBQUMsQ0FBQyxDQUFDLEtBQUcsRUFBRSxJQUFJLENBQUMsTUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFJLE1BQUksRUFBRSxpQkFBaUIsS0FBRyxDQUFDLENBQUMsSUFBRSxFQUFFLGlCQUFpQixLQUFHLFVBQVUsRUFBRTtBQUFFO0FBQUMsU0FBUyxJQUFHO0lBQUMsSUFBSSxJQUFJLEdBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxNQUFNLEVBQUUsSUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHO0lBQUEsSUFBRyxJQUFFLEVBQUUsRUFBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQztRQUFDLElBQUksR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO1FBQUUsRUFBRSxHQUFHLElBQUUsQ0FBQyxJQUFFLENBQUMsSUFBRSxDQUFDLElBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxJQUFFLEVBQUUsR0FBRyxLQUFHLENBQUMsSUFBRSxFQUFFLEVBQUMsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLEdBQUMsR0FBRSxFQUFFLEdBQUUsR0FBRSxHQUFFLEVBQUUsR0FBRyxFQUFDLEVBQUUsZUFBZSxLQUFHLEtBQUssR0FBRSxFQUFFLEdBQUcsSUFBRSxJQUFJLEdBQUM7WUFBQztTQUFFLEdBQUMsSUFBSSxFQUFDLEdBQUUsS0FBRyxFQUFFLElBQUcsRUFBRSxHQUFHLEdBQUUsRUFBRSxHQUFFLElBQUcsRUFBRSxHQUFHLElBQUUsS0FBRyxFQUFFLEVBQUUsQ0FBQztJQUFDLEVBQUU7QUFBQTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxLQUFHLEVBQUUsR0FBRyxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU07SUFBQyxJQUFJLEVBQUUsR0FBRyxHQUFDLEVBQUUsRUFBQyxJQUFFLENBQUMsRUFBQyxJQUFFLEVBQUUsTUFBTSxFQUFDLElBQUksSUFBRyxDQUFDLElBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsRUFBRSxLQUFHLElBQUksSUFBRSxPQUFPLEtBQUcsWUFBVSxJQUFJLEdBQUMsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFdBQVMsRUFBRSxJQUFJLEVBQUMsR0FBRSxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUcsTUFBTSxPQUFPLENBQUMsS0FBRyxFQUFFLEdBQUU7UUFBQyxVQUFTO0lBQUMsR0FBRSxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksSUFBRSxFQUFFLEdBQUcsR0FBQyxJQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUMsRUFBRSxLQUFLLEVBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLEdBQUMsSUFBSSxFQUFDLEVBQUUsR0FBRyxJQUFFLENBQUMsS0FBRyxJQUFJLEVBQUM7UUFBQyxJQUFHLEVBQUUsRUFBRSxHQUFDLEdBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLEdBQUMsR0FBRSxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBSSxJQUFJLElBQUUsS0FBRyxFQUFFLEdBQUcsSUFBRSxFQUFFLEdBQUcsSUFBRSxFQUFFLElBQUksS0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsRUFBRSxHQUFDLEtBQUs7YUFBTyxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSTtZQUFDLElBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUcsRUFBRSxHQUFHLElBQUUsRUFBRSxHQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxJQUFJLEVBQUM7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxLQUFLO2dCQUFFLEtBQUs7WUFBQSxDQUFDO1lBQUEsSUFBRSxJQUFJO1FBQUE7UUFBQyxFQUFFLEdBQUUsR0FBRSxJQUFFLEtBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFFLEVBQUUsR0FBRyxFQUFDLENBQUMsSUFBRSxFQUFFLEdBQUcsS0FBRyxFQUFFLEdBQUcsSUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLElBQUUsRUFBRSxHQUFFLEVBQUUsR0FBRyxJQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUUsRUFBRSxHQUFHLElBQUUsR0FBRSxFQUFFLEdBQUUsS0FBRyxJQUFJLEdBQUMsQ0FBQyxLQUFHLElBQUksSUFBRSxDQUFDLElBQUUsQ0FBQyxHQUFFLE9BQU8sRUFBRSxJQUFJLElBQUUsY0FBWSxFQUFFLEdBQUcsS0FBRyxFQUFFLEdBQUcsR0FBQyxFQUFFLEdBQUcsR0FBQyxJQUFFLEVBQUUsR0FBRSxHQUFFLEtBQUcsSUFBRSxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksSUFBRSxjQUFZLENBQUMsRUFBRSxHQUFHLEdBQUMsQ0FBQyxDQUFDLElBQUUsS0FBRyxFQUFFLEdBQUcsSUFBRSxLQUFHLEVBQUUsVUFBVSxJQUFFLEtBQUcsQ0FBQyxJQUFFLEVBQUUsRUFBRSxDQUFDO0lBQUEsQ0FBQztJQUFBLElBQUksRUFBRSxHQUFHLEdBQUMsR0FBRSxJQUFFLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUUsSUFBSSxJQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBRTtJQUFFLElBQUcsR0FBRSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxFQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLElBQUksR0FBRSxJQUFFLEVBQUUsR0FBRyxFQUFDLElBQUUsR0FBRSxLQUFHLElBQUUsRUFBRSxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFDLEdBQUUsSUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFFLGFBQVcsRUFBRSxHQUFFLEdBQUUsS0FBRyxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRSxHQUFHLEVBQUMsRUFBRTtJQUFFLE9BQU87QUFBQztBQUEySCxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLEdBQUUsR0FBRTtJQUFFLElBQUcsRUFBRSxHQUFHLEtBQUcsS0FBSyxHQUFFLElBQUUsRUFBRSxHQUFHLEVBQUMsRUFBRSxHQUFHLEdBQUMsS0FBSyxDQUFDO1NBQU0sSUFBRyxLQUFHLElBQUksSUFBRSxLQUFHLEtBQUcsRUFBRSxVQUFVLElBQUUsSUFBSSxFQUFDLEdBQUUsSUFBRyxLQUFHLElBQUksSUFBRSxFQUFFLFVBQVUsS0FBRyxHQUFFLEVBQUUsV0FBVyxDQUFDLElBQUcsSUFBRSxJQUFJO1NBQUs7UUFBQyxJQUFJLElBQUUsR0FBRSxJQUFFLENBQUMsRUFBQyxDQUFDLElBQUUsRUFBRSxXQUFXLEtBQUcsSUFBRSxFQUFFLE1BQU0sRUFBQyxLQUFHLEVBQUUsSUFBRyxLQUFHLEdBQUUsTUFBTSxDQUFFO1FBQUEsRUFBRSxZQUFZLENBQUMsR0FBRSxJQUFHLElBQUUsQ0FBQztJQUFBLENBQUM7SUFBQSxPQUFPLE1BQUksS0FBSyxJQUFFLElBQUUsRUFBRSxXQUFXO0FBQUE7QUFBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLElBQUk7SUFBRSxJQUFJLEtBQUssRUFBRSxNQUFJLGNBQVksTUFBSSxTQUFPLEtBQUssS0FBRyxFQUFFLEdBQUUsR0FBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQztJQUFHLElBQUksS0FBSyxFQUFFLEtBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFFLGNBQVksTUFBSSxjQUFZLE1BQUksU0FBTyxNQUFJLFdBQVMsTUFBSSxhQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBRSxFQUFFLEdBQUUsR0FBRSxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUM7QUFBRTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUcsTUFBSSxFQUFFLFdBQVcsQ0FBQyxHQUFFLEtBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBQyxLQUFHLElBQUksR0FBQyxLQUFHLE9BQU8sS0FBRyxZQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUcsSUFBRSxJQUFFLElBQUk7QUFBQTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSTtJQUFFLEdBQUUsSUFBRyxNQUFJLFNBQVEsSUFBRyxPQUFPLEtBQUcsVUFBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUM7U0FBTTtRQUFDLElBQUcsT0FBTyxLQUFHLFlBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUMsSUFBRSxFQUFFLEdBQUUsQ0FBQyxFQUFDLElBQUksS0FBSyxFQUFFLEtBQUcsS0FBSyxLQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUMsR0FBRTtRQUFJLElBQUcsR0FBRSxJQUFJLEtBQUssRUFBRSxLQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUU7SUFBQyxDQUFDO1NBQUssSUFBRyxDQUFDLENBQUMsRUFBRSxLQUFHLE9BQUssQ0FBQyxDQUFDLEVBQUUsS0FBRyxLQUFJLElBQUUsTUFBSSxDQUFDLElBQUUsRUFBRSxPQUFPLENBQUMsWUFBVyxHQUFHLEdBQUUsSUFBRSxFQUFFLFdBQVcsTUFBSyxJQUFFLEVBQUUsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUUsRUFBRSxHQUFDLEdBQUUsSUFBRSxLQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRSxJQUFFLElBQUUsQ0FBQyxFQUFDLEtBQUcsRUFBRSxtQkFBbUIsQ0FBQyxHQUFFLElBQUUsSUFBRSxDQUFDLEVBQUMsRUFBRTtTQUFNLElBQUcsTUFBSSwyQkFBMEI7UUFBQyxJQUFHLEdBQUUsSUFBRSxFQUFFLE9BQU8sQ0FBQyxlQUFjLEtBQUssT0FBTyxDQUFDLFVBQVM7YUFBVSxJQUFHLE1BQUksVUFBUSxNQUFJLFVBQVEsTUFBSSxVQUFRLE1BQUksY0FBWSxNQUFJLGNBQVksS0FBSyxHQUFFLElBQUc7WUFBQyxDQUFDLENBQUMsRUFBRSxHQUFDLEtBQUc7WUFBRyxNQUFNLENBQUM7UUFBQSxFQUFDLE9BQUssQ0FBQztRQUFDLE9BQU8sS0FBRyxjQUFZLENBQUMsS0FBRyxJQUFJLElBQUUsTUFBSSxDQUFDLEtBQUcsRUFBRSxPQUFPLENBQUMsUUFBTSxDQUFDLElBQUUsRUFBRSxlQUFlLENBQUMsS0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFFLEVBQUU7SUFBQyxDQUFDO0FBQUE7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO0lBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFHLENBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUcsQ0FBQztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsSUFBSTtJQUFDLElBQUcsRUFBRSxXQUFXLEtBQUcsS0FBSyxHQUFFLE9BQU8sSUFBSTtJQUFDLEVBQUUsR0FBRyxJQUFFLElBQUksSUFBRSxDQUFDLElBQUUsRUFBRSxHQUFHLEVBQUMsSUFBRSxFQUFFLEdBQUcsR0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEdBQUcsR0FBQyxJQUFJLEVBQUMsSUFBRTtRQUFDO0tBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxHQUFHLEtBQUcsRUFBRSxFQUFFO0lBQUMsSUFBRztRQUFDLEdBQUUsSUFBRyxPQUFPLEtBQUcsWUFBVztZQUFDLElBQUcsSUFBRSxFQUFFLEtBQUssRUFBQyxJQUFFLENBQUMsSUFBRSxFQUFFLFdBQVcsS0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBQyxJQUFFLElBQUUsSUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUMsRUFBRSxFQUFFLEdBQUMsQ0FBQyxFQUFDLEVBQUUsR0FBRyxHQUFDLElBQUUsQ0FBQyxJQUFFLEVBQUUsR0FBRyxHQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBQyxFQUFFLEdBQUcsR0FBQyxDQUFDLGVBQWMsS0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUMsRUFBRSxHQUFHLEdBQUMsSUFBRSxJQUFJLEVBQUUsR0FBRSxLQUFHLENBQUMsRUFBRSxHQUFHLEdBQUMsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFHLEVBQUUsV0FBVyxHQUFDLEdBQUUsRUFBRSxNQUFNLEdBQUMsRUFBRSxDQUFDLEVBQUMsS0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFHLEVBQUUsS0FBSyxHQUFDLEdBQUUsRUFBRSxLQUFLLElBQUUsQ0FBQyxFQUFFLEtBQUssR0FBQyxDQUFDLENBQUMsR0FBRSxFQUFFLE9BQU8sR0FBQyxHQUFFLEVBQUUsR0FBRyxHQUFDLEdBQUUsSUFBRSxFQUFFLEdBQUcsR0FBQyxDQUFDLEdBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxFQUFDLEVBQUUsR0FBRyxHQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsR0FBRyxJQUFFLElBQUksSUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFDLEVBQUUsS0FBSyxHQUFFLEVBQUUsd0JBQXdCLElBQUUsSUFBSSxJQUFFLENBQUMsRUFBRSxHQUFHLElBQUUsRUFBRSxLQUFLLElBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBQyxFQUFFLENBQUMsR0FBRSxFQUFFLEdBQUcsQ0FBQyxHQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUMsRUFBRSx3QkFBd0IsQ0FBQyxHQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUUsSUFBRSxFQUFFLEtBQUssRUFBQyxJQUFFLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFLHdCQUF3QixJQUFFLElBQUksSUFBRSxFQUFFLGtCQUFrQixJQUFFLElBQUksSUFBRSxFQUFFLGtCQUFrQixJQUFHLEVBQUUsaUJBQWlCLElBQUUsSUFBSSxJQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLGlCQUFpQixDQUFDO2lCQUFLO2dCQUFDLElBQUcsRUFBRSx3QkFBd0IsSUFBRSxJQUFJLElBQUUsTUFBSSxLQUFHLEVBQUUseUJBQXlCLElBQUUsSUFBSSxJQUFFLEVBQUUseUJBQXlCLENBQUMsR0FBRSxJQUFHLENBQUMsRUFBRSxHQUFHLElBQUUsRUFBRSxxQkFBcUIsSUFBRSxJQUFJLElBQUUsRUFBRSxxQkFBcUIsQ0FBQyxHQUFFLEVBQUUsR0FBRyxFQUFDLE9BQUssQ0FBQyxLQUFHLEVBQUUsR0FBRyxLQUFHLEVBQUUsR0FBRyxFQUFDO29CQUFDLElBQUksRUFBRSxLQUFLLEdBQUMsR0FBRSxFQUFFLEtBQUssR0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEdBQUcsS0FBRyxFQUFFLEdBQUcsSUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFDLENBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBRyxHQUFDLEdBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFDO3dCQUFDLEtBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBQyxDQUFDO29CQUFDLElBQUcsSUFBRSxDQUFDLEVBQUMsSUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFBRSxFQUFFLEdBQUcsR0FBQyxFQUFFLEVBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxJQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7b0JBQUMsTUFBTSxDQUFDO2dCQUFBLENBQUM7Z0JBQUEsRUFBRSxtQkFBbUIsSUFBRSxJQUFJLElBQUUsRUFBRSxtQkFBbUIsQ0FBQyxHQUFFLEVBQUUsR0FBRyxFQUFDLElBQUcsRUFBRSxrQkFBa0IsSUFBRSxJQUFJLElBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVU7b0JBQUMsRUFBRSxrQkFBa0IsQ0FBQyxHQUFFLEdBQUU7Z0JBQUUsRUFBRTtZQUFBLENBQUM7WUFBQSxJQUFHLEVBQUUsT0FBTyxHQUFDLEdBQUUsRUFBRSxLQUFLLEdBQUMsR0FBRSxFQUFFLEdBQUcsR0FBQyxHQUFFLEVBQUUsR0FBRyxHQUFDLEdBQUUsSUFBRSxFQUFFLEdBQUcsRUFBQyxJQUFFLEdBQUUsZUFBYyxLQUFHLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFBQztnQkFBQyxJQUFJLEVBQUUsS0FBSyxHQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxHQUFDLENBQUMsR0FBRSxLQUFHLEVBQUUsSUFBRyxJQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFDLEVBQUUsS0FBSyxFQUFDLEVBQUUsT0FBTyxHQUFFLElBQUUsQ0FBQyxFQUFDLElBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRTtZQUFBLE9BQU0sR0FBRyxFQUFFLEdBQUcsR0FBQyxDQUFDLEdBQUUsS0FBRyxFQUFFLElBQUcsSUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBQyxFQUFFLEtBQUssRUFBQyxFQUFFLE9BQU8sR0FBRSxFQUFFLEtBQUssR0FBQyxFQUFFLEdBQUc7bUJBQU8sRUFBRSxHQUFHLElBQUUsRUFBRSxJQUFFLEdBQUk7WUFBQSxFQUFFLEtBQUssR0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLGVBQWUsSUFBRSxJQUFJLElBQUUsQ0FBQyxJQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRyxFQUFFLGVBQWUsR0FBRyxHQUFFLEtBQUcsRUFBRSx1QkFBdUIsSUFBRSxJQUFJLElBQUUsQ0FBQyxJQUFFLEVBQUUsdUJBQXVCLENBQUMsR0FBRSxFQUFFLEdBQUUsSUFBRSxLQUFHLElBQUksSUFBRSxFQUFFLElBQUksS0FBRyxLQUFHLEVBQUUsR0FBRyxJQUFFLElBQUksR0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUMsQ0FBQyxFQUFDLEVBQUUsR0FBRSxNQUFNLE9BQU8sQ0FBQyxLQUFHLElBQUU7Z0JBQUM7YUFBRSxFQUFDLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxFQUFFLElBQUksR0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEdBQUcsR0FBQyxJQUFJLEVBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxJQUFFLEVBQUUsSUFBSSxDQUFDLElBQUcsS0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFDLEVBQUUsRUFBRSxHQUFDLElBQUksR0FBRSxFQUFFLEdBQUcsR0FBQyxDQUFDLENBQUM7UUFBQSxPQUFNLEtBQUcsSUFBSSxJQUFFLEVBQUUsR0FBRyxLQUFHLEVBQUUsR0FBRyxHQUFDLENBQUMsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLElBQUUsRUFBRSxHQUFHLEdBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFFO1FBQUMsQ0FBQyxJQUFFLEVBQUUsTUFBTSxLQUFHLEVBQUU7SUFBRSxFQUFDLE9BQU0sR0FBRTtRQUFDLEVBQUUsR0FBRyxHQUFDLElBQUksRUFBQyxDQUFDLEtBQUcsS0FBRyxJQUFJLEtBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBQyxHQUFFLEVBQUUsR0FBRyxHQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUMsSUFBSSxHQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUUsR0FBRSxFQUFFO0lBQUE7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsRUFBRSxHQUFHLElBQUUsRUFBRSxHQUFHLENBQUMsR0FBRSxJQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDO1FBQUMsSUFBRztZQUFDLElBQUUsRUFBRSxHQUFHLEVBQUMsRUFBRSxHQUFHLEdBQUMsRUFBRSxFQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDO2dCQUFDLEVBQUUsSUFBSSxDQUFDO1lBQUUsRUFBRTtRQUFBLEVBQUMsT0FBTSxHQUFFO1lBQUMsRUFBRSxHQUFHLENBQUMsR0FBRSxFQUFFLEdBQUc7UUFBQztJQUFDLEVBQUU7QUFBQTtBQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsS0FBSyxFQUFDLElBQUUsRUFBRSxLQUFLLEVBQUMsSUFBRSxFQUFFLElBQUksRUFBQyxJQUFFO0lBQUUsSUFBRyxNQUFJLFNBQU8sQ0FBQyxJQUFFLENBQUMsQ0FBQyxHQUFFLEtBQUcsSUFBSSxFQUFDO1FBQUMsTUFBSyxJQUFFLEVBQUUsTUFBTSxFQUFDLElBQUksSUFBRyxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxrQkFBaUIsS0FBRyxDQUFDLENBQUMsS0FBRyxDQUFDLElBQUUsRUFBRSxTQUFTLEtBQUcsSUFBRSxFQUFFLFFBQVEsS0FBRyxDQUFDLEdBQUU7WUFBQyxJQUFFLEdBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBQyxJQUFJO1lBQUMsS0FBSztRQUFBLENBQUM7SUFBQSxDQUFDO0lBQUEsSUFBRyxLQUFHLElBQUksRUFBQztRQUFDLElBQUcsTUFBSSxJQUFJLEVBQUMsT0FBTyxTQUFTLGNBQWMsQ0FBQztRQUFHLElBQUUsSUFBRSxTQUFTLGVBQWUsQ0FBQyw4QkFBNkIsS0FBRyxTQUFTLGFBQWEsQ0FBQyxHQUFFLEVBQUUsRUFBRSxJQUFFLEVBQUUsRUFBQyxJQUFFLElBQUksRUFBQyxJQUFFLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQSxJQUFHLE1BQUksSUFBSSxFQUFDLE1BQUksS0FBRyxLQUFHLEVBQUUsSUFBSSxLQUFHLEtBQUcsQ0FBQyxFQUFFLElBQUksR0FBQyxDQUFDO1NBQU07UUFBQyxJQUFHLElBQUUsS0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLFVBQVUsR0FBRSxJQUFFLENBQUMsSUFBRSxFQUFFLEtBQUssSUFBRSxDQUFDLEVBQUUsdUJBQXVCLEVBQUMsSUFBRSxFQUFFLHVCQUF1QixFQUFDLENBQUMsQ0FBQyxFQUFDO1lBQUMsSUFBRyxLQUFHLElBQUksRUFBQyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQyxFQUFDLElBQUUsRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSztZQUFDLENBQUMsS0FBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLENBQUMsS0FBRyxFQUFFLE1BQU0sSUFBRSxFQUFFLE1BQU0sSUFBRSxFQUFFLE1BQU0sS0FBRyxFQUFFLFNBQVMsS0FBRyxDQUFDLEVBQUUsU0FBUyxHQUFDLEtBQUcsRUFBRSxNQUFNLElBQUUsRUFBRSxDQUFDO1FBQUMsQ0FBQztRQUFBLElBQUcsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsQ0FBQyxFQUFDLEVBQUUsR0FBRyxHQUFDLEVBQUU7YUFBTSxJQUFHLElBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFDLEVBQUUsR0FBRSxNQUFNLE9BQU8sQ0FBQyxLQUFHLElBQUU7WUFBQztTQUFFLEVBQUMsR0FBRSxHQUFFLEdBQUUsS0FBRyxNQUFJLGlCQUFnQixHQUFFLEdBQUUsSUFBRSxDQUFDLENBQUMsRUFBRSxHQUFDLEVBQUUsR0FBRyxJQUFFLEVBQUUsR0FBRSxFQUFFLEVBQUMsSUFBRyxLQUFHLElBQUksRUFBQyxJQUFJLElBQUUsRUFBRSxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFFLElBQUksSUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQUUsS0FBRyxDQUFDLFdBQVUsS0FBRyxDQUFDLElBQUUsRUFBRSxLQUFLLE1BQUksS0FBSyxLQUFHLENBQUMsTUFBSSxFQUFFLEtBQUssSUFBRSxNQUFJLGNBQVksQ0FBQyxLQUFHLE1BQUksWUFBVSxNQUFJLEVBQUUsS0FBSyxLQUFHLEVBQUUsR0FBRSxTQUFRLEdBQUUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxJQUFHLGFBQVksS0FBRyxDQUFDLElBQUUsRUFBRSxPQUFPLE1BQUksS0FBSyxLQUFHLE1BQUksRUFBRSxPQUFPLElBQUUsRUFBRSxHQUFFLFdBQVUsR0FBRSxFQUFFLE9BQU8sRUFBQyxDQUFDLEVBQUU7SUFBQyxDQUFDO0lBQUEsT0FBTztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBRztRQUFDLE9BQU8sS0FBRyxhQUFXLEVBQUUsS0FBRyxFQUFFLE9BQU8sR0FBQyxDQUFDO0lBQUEsRUFBQyxPQUFNLEdBQUU7UUFBQyxFQUFFLEdBQUcsQ0FBQyxHQUFFO0lBQUU7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLElBQUksR0FBRTtJQUFFLElBQUcsRUFBRSxPQUFPLElBQUUsRUFBRSxPQUFPLENBQUMsSUFBRyxDQUFDLElBQUUsRUFBRSxHQUFHLEtBQUcsQ0FBQyxFQUFFLE9BQU8sSUFBRSxFQUFFLE9BQU8sS0FBRyxFQUFFLEdBQUcsSUFBRSxFQUFFLEdBQUUsSUFBSSxFQUFDLEVBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxHQUFHLEtBQUcsSUFBSSxFQUFDO1FBQUMsSUFBRyxFQUFFLG9CQUFvQixFQUFDLElBQUc7WUFBQyxFQUFFLG9CQUFvQjtRQUFFLEVBQUMsT0FBTSxHQUFFO1lBQUMsRUFBRSxHQUFHLENBQUMsR0FBRTtRQUFFO1FBQUMsRUFBRSxJQUFJLEdBQUMsRUFBRSxHQUFHLEdBQUMsSUFBSSxFQUFDLEVBQUUsR0FBRyxHQUFDLEtBQUssQ0FBQztJQUFBLENBQUM7SUFBQSxJQUFHLElBQUUsRUFBRSxHQUFHLEVBQUMsSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLEdBQUUsS0FBRyxPQUFPLEVBQUUsSUFBSSxJQUFFO0lBQVksS0FBRyxFQUFFLEdBQUcsSUFBRSxJQUFJLElBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRSxFQUFFLEVBQUUsR0FBQyxFQUFFLEdBQUcsR0FBQyxFQUFFLEdBQUcsR0FBQyxLQUFLLENBQUM7QUFBQTtBQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFFO0FBQUU7QUFBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLEdBQUUsR0FBRTtJQUFFLEVBQUUsRUFBRSxJQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRyxJQUFFLENBQUMsSUFBRSxPQUFPLEtBQUcsVUFBVSxJQUFFLElBQUksR0FBQyxLQUFHLEVBQUUsR0FBRyxJQUFFLEVBQUUsR0FBRyxFQUFDLElBQUUsRUFBRSxFQUFDLEVBQUUsR0FBRSxJQUFFLENBQUMsQ0FBQyxLQUFHLEtBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBQyxHQUFHLEdBQUUsSUFBSSxFQUFDO1FBQUM7S0FBRSxHQUFFLEtBQUcsR0FBRSxHQUFFLEVBQUUsZUFBZSxLQUFHLEtBQUssR0FBRSxDQUFDLEtBQUcsSUFBRTtRQUFDO0tBQUUsR0FBQyxJQUFFLElBQUksR0FBQyxFQUFFLFVBQVUsR0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLFVBQVUsSUFBRSxJQUFJLEVBQUMsR0FBRSxDQUFDLEtBQUcsSUFBRSxJQUFFLElBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxVQUFVLEVBQUMsSUFBRyxFQUFFLEdBQUUsRUFBRTtBQUFBO0FBQXV0QixJQUFFLEVBQUUsS0FBSyxFQUFDLElBQUU7SUFBQyxLQUFJLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsSUFBSSxJQUFJLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxFQUFFLEVBQUUsSUFBRyxDQUFDLElBQUUsRUFBRSxHQUFHLEtBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBQyxJQUFHO1lBQUMsSUFBRyxDQUFDLElBQUUsRUFBRSxXQUFXLEtBQUcsRUFBRSx3QkFBd0IsSUFBRSxJQUFJLElBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLHdCQUF3QixDQUFDLEtBQUksSUFBRSxFQUFFLEdBQUcsR0FBRSxFQUFFLGlCQUFpQixJQUFFLElBQUksSUFBRSxDQUFDLEVBQUUsaUJBQWlCLENBQUMsR0FBRSxLQUFHLENBQUMsSUFBRyxJQUFFLEVBQUUsR0FBRyxHQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxHQUFDO1FBQUMsRUFBQyxPQUFNLEdBQUU7WUFBQyxJQUFFO1FBQUM7UUFBQyxNQUFNLEVBQUM7SUFBQTtBQUFDLEdBQUUsSUFBRSxHQUF5RCxFQUFFLFNBQVMsQ0FBQyxRQUFRLEdBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSTtJQUFFLElBQUUsSUFBSSxDQUFDLEdBQUcsSUFBRSxJQUFJLElBQUUsSUFBSSxDQUFDLEdBQUcsS0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsT0FBTyxLQUFHLGNBQVksQ0FBQyxJQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUUsS0FBRyxFQUFFLEdBQUUsSUFBRyxLQUFHLElBQUksSUFBRSxJQUFJLENBQUMsR0FBRyxJQUFFLENBQUMsS0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFBQSxHQUFFLEVBQUUsU0FBUyxDQUFDLFdBQVcsR0FBQyxTQUFTLENBQUMsRUFBQztJQUFDLElBQUksQ0FBQyxHQUFHLElBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBRSxLQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUcsRUFBRSxJQUFJLENBQUM7QUFBQyxHQUFFLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBQyxHQUFFLElBQUUsRUFBRSxFQUFDLEVBQUUsR0FBRyxHQUFDLEdBQUksQ0FBQztBQ0FobFQsSUFBSSxJQUFFO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLEdBQUUsR0FBRSxJQUFFLENBQUM7SUFBRSxJQUFJLEtBQUssRUFBRSxLQUFHLFFBQU0sSUFBRSxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEVBQUU7SUFBQyxJQUFJLElBQUU7UUFBQyxNQUFLO1FBQUUsT0FBTTtRQUFFLEtBQUk7UUFBRSxLQUFJO1FBQUUsS0FBSSxJQUFJO1FBQUMsSUFBRyxJQUFJO1FBQUMsS0FBSTtRQUFFLEtBQUksSUFBSTtRQUFDLEtBQUksS0FBSztRQUFFLEtBQUksSUFBSTtRQUFDLEtBQUksSUFBSTtRQUFDLGFBQVksS0FBSztRQUFFLEtBQUksRUFBRTtRQUFFLFVBQVM7UUFBRSxRQUFPO0lBQUM7SUFBRSxJQUFHLE9BQU8sS0FBRyxjQUFZLENBQUMsSUFBRSxFQUFFLFlBQVksR0FBRSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFHLEtBQUssS0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEVBQUU7SUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFFLEVBQUUsS0FBSyxDQUFDLElBQUcsQ0FBQztBQUFBO0FDTXZjLFNBQVMsR0FBRyxHQUFHLE9BQWtCLEVBQVU7SUFDaEQsT0FBTyxRQUFRLE1BQU0sQ0FBQyxDQUFBLElBQUssS0FBSyxPQUFPLE1BQU0sVUFBVSxJQUFJLENBQUM7QUFDOUQ7QUNSZ0UsSUFBSSxHQUFFLEdBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxLQUFFLEVBQUUsRUFBQyxJQUFFLEVBQUUsRUFBQyxLQUFFLEVBQUUsR0FBRyxFQUFDLElBQUUsRUFBRSxHQUFHLEVBQUMsSUFBRSxFQUFFLE1BQU0sRUFBQyxJQUFFLEVBQUUsR0FBRyxFQUFDLEtBQUUsRUFBRSxPQUFPO0FBQUMsU0FBUyxHQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxFQUFFLEdBQUcsSUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFFLEdBQUUsS0FBRyxJQUFHLElBQUUsQ0FBQztJQUFDLElBQUksSUFBRSxFQUFFLEdBQUcsSUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFDO1FBQUMsSUFBRyxFQUFFO1FBQUMsS0FBSSxFQUFFO0lBQUEsQ0FBQztJQUFFLE9BQU8sS0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLElBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQUMsS0FBSTtJQUFDLElBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUFBO0FBQUMsU0FBUyxHQUFFLENBQUMsRUFBQztJQUFDLE9BQU8sSUFBRSxHQUFFLEdBQUUsR0FBRSxFQUFFO0FBQUE7QUFBQyxTQUFTLEdBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLElBQUUsR0FBRSxLQUFJO0lBQUcsSUFBRyxFQUFFLENBQUMsR0FBQyxHQUFFLENBQUMsRUFBRSxHQUFHLElBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBQztRQUFDLElBQUUsRUFBRSxLQUFHLEVBQUUsS0FBSyxHQUFFLEVBQUU7UUFBQyxTQUFTLENBQUMsRUFBQztZQUFDLElBQUksSUFBRSxFQUFFLEdBQUcsR0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFDLElBQUUsRUFBRSxDQUFDLENBQUMsR0FBRTtZQUFHLE1BQUksS0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFDO2dCQUFDO2dCQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7YUFBQyxFQUFDLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7UUFBQztLQUFFLEVBQUMsRUFBRSxHQUFHLEdBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUM7UUFBQyxFQUFFLENBQUMsR0FBQyxDQUFDO1FBQUUsSUFBSSxJQUFFLEVBQUUscUJBQXFCO1FBQUMsRUFBRSxxQkFBcUIsR0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1lBQUMsSUFBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBQyxPQUFNLENBQUM7WUFBRSxJQUFJLElBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUM7Z0JBQUMsT0FBTyxFQUFFLEdBQUc7WUFBQTtZQUFHLElBQUcsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUM7Z0JBQUMsT0FBTSxDQUFDLEVBQUUsR0FBRztZQUFBLElBQUcsT0FBTSxDQUFDLEtBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLEdBQUUsR0FBRTtZQUFHLElBQUksSUFBRSxDQUFDO1lBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQztnQkFBQyxJQUFHLEVBQUUsR0FBRyxFQUFDO29CQUFDLElBQUksSUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO29CQUFDLEVBQUUsRUFBRSxHQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxHQUFDLEtBQUssR0FBRSxNQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBRSxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQUEsQ0FBQztZQUFBLElBQUcsQ0FBQyxDQUFDLENBQUMsS0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEtBQUcsQ0FBQyxLQUFHLENBQUMsQ0FBQyxLQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxHQUFFLEdBQUUsRUFBRSxDQUFDO1FBQUE7SUFBQyxDQUFDO0lBQUEsT0FBTyxFQUFFLEdBQUcsSUFBRSxFQUFFLEVBQUU7QUFBQTtBQUFraEMsU0FBUyxJQUFHO0lBQUMsSUFBSSxJQUFJLEdBQUUsSUFBRSxHQUFFLEtBQUssSUFBSSxJQUFHLEVBQUUsR0FBRyxJQUFFLEVBQUUsR0FBRyxFQUFDLElBQUc7UUFBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBQyxFQUFFO0lBQUEsRUFBQyxPQUFNLEdBQUU7UUFBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUMsRUFBRSxFQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUUsRUFBRSxHQUFHLENBQUM7SUFBQTtBQUFDO0FBQUMsRUFBRSxHQUFHLEdBQUMsU0FBUyxDQUFDLEVBQUM7SUFBQyxJQUFFLElBQUksRUFBQyxNQUFHLEdBQUUsRUFBRTtBQUFBLEdBQUUsRUFBRSxHQUFHLEdBQUMsU0FBUyxDQUFDLEVBQUM7SUFBQyxLQUFHLEVBQUUsSUFBRyxJQUFFLENBQUM7SUFBQyxJQUFJLElBQUUsQ0FBQyxJQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFBQyxLQUFHLENBQUMsT0FBSSxJQUFFLENBQUMsRUFBRSxHQUFHLEdBQUMsRUFBRSxFQUFDLEVBQUUsR0FBRyxHQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUM7UUFBQyxFQUFFLEdBQUcsSUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFDLEVBQUUsR0FBRyxHQUFFLEVBQUUsR0FBRyxHQUFDLEdBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSyxDQUFDO0lBQUEsRUFBRSxJQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUcsRUFBRSxHQUFHLEdBQUMsRUFBRSxDQUFDLEdBQUUsS0FBRSxDQUFDO0FBQUEsR0FBRSxFQUFFLE1BQU0sR0FBQyxTQUFTLENBQUMsRUFBQztJQUFDLEtBQUcsRUFBRTtJQUFHLElBQUksSUFBRSxFQUFFLEdBQUc7SUFBQyxLQUFHLEVBQUUsR0FBRyxJQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE9BQUssS0FBRyxPQUFJLEVBQUUscUJBQXFCLElBQUUsQ0FBQyxDQUFDLEtBQUUsRUFBRSxxQkFBcUIsS0FBRyxFQUFDLEVBQUUsRUFBRSxHQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUM7UUFBQyxFQUFFLENBQUMsSUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFDLEVBQUUsQ0FBQyxHQUFFLEVBQUUsR0FBRyxLQUFHLEtBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBQyxFQUFFLEdBQUcsR0FBRSxFQUFFLENBQUMsR0FBQyxLQUFLLEdBQUUsRUFBRSxHQUFHLEdBQUMsQ0FBQztJQUFBLEVBQUUsR0FBRSxLQUFFLElBQUUsSUFBSTtBQUFBLEdBQUUsRUFBRSxHQUFHLEdBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUM7UUFBQyxJQUFHO1lBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUcsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFDO2dCQUFDLE9BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBRSxHQUFFO1lBQUUsRUFBRTtRQUFBLEVBQUMsT0FBTSxHQUFFO1lBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUM7Z0JBQUMsRUFBRSxHQUFHLElBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBQyxFQUFFO1lBQUMsSUFBRyxJQUFFLEVBQUUsRUFBQyxFQUFFLEdBQUcsQ0FBQyxHQUFFLEVBQUUsR0FBRyxDQUFDO1FBQUE7SUFBQyxJQUFHLEtBQUcsRUFBRSxHQUFFLEVBQUU7QUFBQSxHQUFFLEVBQUUsT0FBTyxHQUFDLFNBQVMsQ0FBQyxFQUFDO0lBQUMsTUFBRyxHQUFFO0lBQUcsSUFBSSxHQUFFLElBQUUsRUFBRSxHQUFHO0lBQUMsS0FBRyxFQUFFLEdBQUcsSUFBRSxDQUFDLEVBQUUsR0FB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

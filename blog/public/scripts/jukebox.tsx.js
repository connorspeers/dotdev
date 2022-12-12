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
            const state = self.localStorage.getItem(`jukebox-${id}`);
            tracks.push({
                id,
                date,
                datetime,
                state: state && [
                    "ooh",
                    "meh"
                ].includes(state) ? state : null
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
    const update = (track)=>{
        if (track.state) {
            self.localStorage.setItem(`jukebox-${track.id}`, track.state);
        } else {
            self.localStorage.removeItem(`jukebox-${track.id}`);
        }
        setTracks(tracks.map((t)=>t.id === track.id ? track : t));
    };
    return p(W, {
        children: [
            !!newTracks.length && p(NewTracks, {
                top: newTracks[0],
                next: newTracks[1],
                update: update
            }),
            !newTracks.length && p(OldTracks, {
                tracks: tracks,
                update: update
            })
        ]
    });
}
function NewTracks({ top , next , update  }) {
    const [state, setState] = P1(null);
    const _swipe = (newState)=>{
        if (state) {
            return;
        }
        setState(newState);
        setTimeout(()=>{
            setState(null);
            update({
                ...top,
                state: newState
            });
        }, 300);
    };
    return p(W, {
        children: [
            p("p", {
                class: cx("new-message", state && !next && "hide"),
                children: "New songs!"
            }),
            p("div", {
                class: "new wrap",
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
                                onClick: ()=>_swipe("meh"),
                                children: "meh"
                            }),
                            p("button", {
                                style: "font-weight:700; background:var(--green)",
                                onClick: ()=>_swipe("ooh"),
                                children: "ooh!"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function OldTracks({ tracks , update  }) {
    const [state, setState] = P1("ooh");
    const [leaving, setLeaving] = P1(false);
    const ooh = tracks.filter((t)=>t.state === "ooh");
    const meh = tracks.filter((t)=>t.state === "meh");
    const transition = (newState)=>{
        if (state === newState) {
            return;
        }
        setLeaving(true);
        setTimeout(()=>{
            setLeaving(false);
            setState(newState);
        }, 100);
    };
    return p(W, {
        children: [
            p("nav", {
                class: "nav",
                style: `
        --nav-color: var(${state === "ooh" ? "--green" : "--dark-gray"});
      `,
                children: [
                    p("button", {
                        class: cx(state === "meh" && !leaving && "active"),
                        onClick: ()=>transition("meh"),
                        children: "meh"
                    }),
                    p("button", {
                        class: cx(state === "ooh" && !leaving && "active"),
                        style: "font-weight:700",
                        onClick: ()=>transition("ooh"),
                        children: "ooh!"
                    })
                ]
            }),
            p("div", {
                class: cx("old", leaving && "leaving"),
                children: [
                    p("section", {
                        class: cx("wrap flow old-list", state === "ooh" && "active"),
                        children: ooh.map((t)=>p(Spotify, {
                                class: "old-track",
                                id: t.id,
                                small: true
                            }))
                    }),
                    p("section", {
                        class: cx("wrap flow old-list", state === "meh" && "active"),
                        children: meh.map((t)=>p(Spotify, {
                                class: "old-track",
                                id: t.id,
                                small: true
                            }))
                    })
                ]
            })
        ]
    });
}
function Spotify({ id , class: cls , hidden , small  }) {
    return p(W, {
        children: p("div", {
            class: cx("spotify", cls),
            children: p("iframe", {
                src: `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`,
                width: "100%",
                height: small ? "152" : "352",
                frameBorder: "0",
                allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                loading: "lazy",
                "aria-hidden": hidden,
                allowFullScreen: true
            })
        })
    });
}
export { jukebox as jukebox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZXNtLnNoL3N0YWJsZS9wcmVhY3RAMTAuMTEuMy9kZW5vL3ByZWFjdC5qcyIsImh0dHBzOi8vZXNtLnNoL3N0YWJsZS9wcmVhY3RAMTAuMTEuMy9kZW5vL2pzeC1ydW50aW1lLmpzIiwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Nvbm5vcnNwZWVycy90aW4vZjhiYzJhN2FhYmI0N2Y4MjRiMWJlMDYxN2E2Yjk4YTMyZmE1YTQxOS9pc28udHMiLCJodHRwczovL2VzbS5zaC9zdGFibGUvcHJlYWN0QDEwLjExLjMvZGVuby9ob29rcy5qcyIsImZpbGU6Ly8vYXBwL3B1YmxpYy9zY3JpcHRzL2p1a2Vib3gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbS5zaCAtIGVzYnVpbGQgYnVuZGxlKHByZWFjdEAxMC4xMS4zKSBkZW5vIHByb2R1Y3Rpb24gKi9cbnZhciBQLGQsVixlZSxDLE8saixOPXt9LHo9W10sdGU9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBrKGUsdCl7Zm9yKHZhciBfIGluIHQpZVtfXT10W19dO3JldHVybiBlfWZ1bmN0aW9uIEcoZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3QmJnQucmVtb3ZlQ2hpbGQoZSl9ZnVuY3Rpb24gX2UoZSx0LF8pe3ZhciByLGwsbyxzPXt9O2ZvcihvIGluIHQpbz09XCJrZXlcIj9yPXRbb106bz09XCJyZWZcIj9sPXRbb106c1tvXT10W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKHMuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP1AuY2FsbChhcmd1bWVudHMsMik6XyksdHlwZW9mIGU9PVwiZnVuY3Rpb25cIiYmZS5kZWZhdWx0UHJvcHMhPW51bGwpZm9yKG8gaW4gZS5kZWZhdWx0UHJvcHMpc1tvXT09PXZvaWQgMCYmKHNbb109ZS5kZWZhdWx0UHJvcHNbb10pO3JldHVybiBTKGUscyxyLGwsbnVsbCl9ZnVuY3Rpb24gUyhlLHQsXyxyLGwpe3ZhciBvPXt0eXBlOmUscHJvcHM6dCxrZXk6XyxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpsPz8rK1Z9O3JldHVybiBsPT1udWxsJiZkLnZub2RlIT1udWxsJiZkLnZub2RlKG8pLG99ZnVuY3Rpb24gdWUoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBXKGUpe3JldHVybiBlLmNoaWxkcmVufWZ1bmN0aW9uIEQoZSx0KXt0aGlzLnByb3BzPWUsdGhpcy5jb250ZXh0PXR9ZnVuY3Rpb24gdyhlLHQpe2lmKHQ9PW51bGwpcmV0dXJuIGUuX18/dyhlLl9fLGUuX18uX19rLmluZGV4T2YoZSkrMSk6bnVsbDtmb3IodmFyIF87dDxlLl9fay5sZW5ndGg7dCsrKWlmKChfPWUuX19rW3RdKSE9bnVsbCYmXy5fX2UhPW51bGwpcmV0dXJuIF8uX19lO3JldHVybiB0eXBlb2YgZS50eXBlPT1cImZ1bmN0aW9uXCI/dyhlKTpudWxsfWZ1bmN0aW9uIHEoZSl7dmFyIHQsXztpZigoZT1lLl9fKSE9bnVsbCYmZS5fX2MhPW51bGwpe2ZvcihlLl9fZT1lLl9fYy5iYXNlPW51bGwsdD0wO3Q8ZS5fX2subGVuZ3RoO3QrKylpZigoXz1lLl9fa1t0XSkhPW51bGwmJl8uX19lIT1udWxsKXtlLl9fZT1lLl9fYy5iYXNlPV8uX19lO2JyZWFrfXJldHVybiBxKGUpfX1mdW5jdGlvbiBIKGUpeyghZS5fX2QmJihlLl9fZD0hMCkmJkMucHVzaChlKSYmIUwuX19yKyt8fE8hPT1kLmRlYm91bmNlUmVuZGVyaW5nKSYmKChPPWQuZGVib3VuY2VSZW5kZXJpbmcpfHxzZXRUaW1lb3V0KShMKX1mdW5jdGlvbiBMKCl7Zm9yKHZhciBlO0wuX19yPUMubGVuZ3RoOyllPUMuc29ydChmdW5jdGlvbih0LF8pe3JldHVybiB0Ll9fdi5fX2ItXy5fX3YuX19ifSksQz1bXSxlLnNvbWUoZnVuY3Rpb24odCl7dmFyIF8scixsLG8scyxmO3QuX19kJiYocz0obz0oXz10KS5fX3YpLl9fZSwoZj1fLl9fUCkmJihyPVtdLChsPWsoe30sbykpLl9fdj1vLl9fdisxLEYoZixvLGwsXy5fX24sZi5vd25lclNWR0VsZW1lbnQhPT12b2lkIDAsby5fX2ghPW51bGw/W3NdOm51bGwscixzPz93KG8pLG8uX19oKSxYKHIsbyksby5fX2UhPXMmJnEobykpKX0pfWZ1bmN0aW9uIEooZSx0LF8scixsLG8scyxmLHAsYSl7dmFyIG4saCx1LGksYyxiLHYseT1yJiZyLl9fa3x8eixnPXkubGVuZ3RoO2ZvcihfLl9faz1bXSxuPTA7bjx0Lmxlbmd0aDtuKyspaWYoKGk9Xy5fX2tbbl09KGk9dFtuXSk9PW51bGx8fHR5cGVvZiBpPT1cImJvb2xlYW5cIj9udWxsOnR5cGVvZiBpPT1cInN0cmluZ1wifHx0eXBlb2YgaT09XCJudW1iZXJcInx8dHlwZW9mIGk9PVwiYmlnaW50XCI/UyhudWxsLGksbnVsbCxudWxsLGkpOkFycmF5LmlzQXJyYXkoaSk/UyhXLHtjaGlsZHJlbjppfSxudWxsLG51bGwsbnVsbCk6aS5fX2I+MD9TKGkudHlwZSxpLnByb3BzLGkua2V5LGkucmVmP2kucmVmOm51bGwsaS5fX3YpOmkpIT1udWxsKXtpZihpLl9fPV8saS5fX2I9Xy5fX2IrMSwodT15W25dKT09PW51bGx8fHUmJmkua2V5PT11LmtleSYmaS50eXBlPT09dS50eXBlKXlbbl09dm9pZCAwO2Vsc2UgZm9yKGg9MDtoPGc7aCsrKXtpZigodT15W2hdKSYmaS5rZXk9PXUua2V5JiZpLnR5cGU9PT11LnR5cGUpe3lbaF09dm9pZCAwO2JyZWFrfXU9bnVsbH1GKGUsaSx1PXV8fE4sbCxvLHMsZixwLGEpLGM9aS5fX2UsKGg9aS5yZWYpJiZ1LnJlZiE9aCYmKHZ8fCh2PVtdKSx1LnJlZiYmdi5wdXNoKHUucmVmLG51bGwsaSksdi5wdXNoKGgsaS5fX2N8fGMsaSkpLGMhPW51bGw/KGI9PW51bGwmJihiPWMpLHR5cGVvZiBpLnR5cGU9PVwiZnVuY3Rpb25cIiYmaS5fX2s9PT11Ll9faz9pLl9fZD1wPUsoaSxwLGUpOnA9UShlLGksdSx5LGMscCksdHlwZW9mIF8udHlwZT09XCJmdW5jdGlvblwiJiYoXy5fX2Q9cCkpOnAmJnUuX19lPT1wJiZwLnBhcmVudE5vZGUhPWUmJihwPXcodSkpfWZvcihfLl9fZT1iLG49ZztuLS07KXlbbl0hPW51bGwmJlooeVtuXSx5W25dKTtpZih2KWZvcihuPTA7bjx2Lmxlbmd0aDtuKyspWSh2W25dLHZbKytuXSx2Wysrbl0pfWZ1bmN0aW9uIEsoZSx0LF8pe2Zvcih2YXIgcixsPWUuX19rLG89MDtsJiZvPGwubGVuZ3RoO28rKykocj1sW29dKSYmKHIuX189ZSx0PXR5cGVvZiByLnR5cGU9PVwiZnVuY3Rpb25cIj9LKHIsdCxfKTpRKF8scixyLGwsci5fX2UsdCkpO3JldHVybiB0fWZ1bmN0aW9uIG5lKGUsdCl7cmV0dXJuIHQ9dHx8W10sZT09bnVsbHx8dHlwZW9mIGU9PVwiYm9vbGVhblwifHwoQXJyYXkuaXNBcnJheShlKT9lLnNvbWUoZnVuY3Rpb24oXyl7bmUoXyx0KX0pOnQucHVzaChlKSksdH1mdW5jdGlvbiBRKGUsdCxfLHIsbCxvKXt2YXIgcyxmLHA7aWYodC5fX2QhPT12b2lkIDApcz10Ll9fZCx0Ll9fZD12b2lkIDA7ZWxzZSBpZihfPT1udWxsfHxsIT1vfHxsLnBhcmVudE5vZGU9PW51bGwpZTppZihvPT1udWxsfHxvLnBhcmVudE5vZGUhPT1lKWUuYXBwZW5kQ2hpbGQobCkscz1udWxsO2Vsc2V7Zm9yKGY9byxwPTA7KGY9Zi5uZXh0U2libGluZykmJnA8ci5sZW5ndGg7cCs9MSlpZihmPT1sKWJyZWFrIGU7ZS5pbnNlcnRCZWZvcmUobCxvKSxzPW99cmV0dXJuIHMhPT12b2lkIDA/czpsLm5leHRTaWJsaW5nfWZ1bmN0aW9uIG9lKGUsdCxfLHIsbCl7dmFyIG87Zm9yKG8gaW4gXylvPT09XCJjaGlsZHJlblwifHxvPT09XCJrZXlcInx8byBpbiB0fHxNKGUsbyxudWxsLF9bb10scik7Zm9yKG8gaW4gdClsJiZ0eXBlb2YgdFtvXSE9XCJmdW5jdGlvblwifHxvPT09XCJjaGlsZHJlblwifHxvPT09XCJrZXlcInx8bz09PVwidmFsdWVcInx8bz09PVwiY2hlY2tlZFwifHxfW29dPT09dFtvXXx8TShlLG8sdFtvXSxfW29dLHIpfWZ1bmN0aW9uIFIoZSx0LF8pe3RbMF09PT1cIi1cIj9lLnNldFByb3BlcnR5KHQsXyk6ZVt0XT1fPT1udWxsP1wiXCI6dHlwZW9mIF8hPVwibnVtYmVyXCJ8fHRlLnRlc3QodCk/XzpfK1wicHhcIn1mdW5jdGlvbiBNKGUsdCxfLHIsbCl7dmFyIG87ZTppZih0PT09XCJzdHlsZVwiKWlmKHR5cGVvZiBfPT1cInN0cmluZ1wiKWUuc3R5bGUuY3NzVGV4dD1fO2Vsc2V7aWYodHlwZW9mIHI9PVwic3RyaW5nXCImJihlLnN0eWxlLmNzc1RleHQ9cj1cIlwiKSxyKWZvcih0IGluIHIpXyYmdCBpbiBffHxSKGUuc3R5bGUsdCxcIlwiKTtpZihfKWZvcih0IGluIF8pciYmX1t0XT09PXJbdF18fFIoZS5zdHlsZSx0LF9bdF0pfWVsc2UgaWYodFswXT09PVwib1wiJiZ0WzFdPT09XCJuXCIpbz10IT09KHQ9dC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLHQ9dC50b0xvd2VyQ2FzZSgpaW4gZT90LnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6dC5zbGljZSgyKSxlLmx8fChlLmw9e30pLGUubFt0K29dPV8sXz9yfHxlLmFkZEV2ZW50TGlzdGVuZXIodCxvP0I6JCxvKTplLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxvP0I6JCxvKTtlbHNlIGlmKHQhPT1cImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIpe2lmKGwpdD10LnJlcGxhY2UoL3hsaW5rKEh8OmgpLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZih0IT09XCJocmVmXCImJnQhPT1cImxpc3RcIiYmdCE9PVwiZm9ybVwiJiZ0IT09XCJ0YWJJbmRleFwiJiZ0IT09XCJkb3dubG9hZFwiJiZ0IGluIGUpdHJ5e2VbdF09Xz8/XCJcIjticmVhayBlfWNhdGNoe310eXBlb2YgXz09XCJmdW5jdGlvblwifHwoXz09bnVsbHx8Xz09PSExJiZ0LmluZGV4T2YoXCItXCIpPT0tMT9lLnJlbW92ZUF0dHJpYnV0ZSh0KTplLnNldEF0dHJpYnV0ZSh0LF8pKX19ZnVuY3Rpb24gJChlKXt0aGlzLmxbZS50eXBlKyExXShkLmV2ZW50P2QuZXZlbnQoZSk6ZSl9ZnVuY3Rpb24gQihlKXt0aGlzLmxbZS50eXBlKyEwXShkLmV2ZW50P2QuZXZlbnQoZSk6ZSl9ZnVuY3Rpb24gRihlLHQsXyxyLGwsbyxzLGYscCl7dmFyIGEsbixoLHUsaSxjLGIsdix5LGcsRSx4LEksQSxULG09dC50eXBlO2lmKHQuY29uc3RydWN0b3IhPT12b2lkIDApcmV0dXJuIG51bGw7Xy5fX2ghPW51bGwmJihwPV8uX19oLGY9dC5fX2U9Xy5fX2UsdC5fX2g9bnVsbCxvPVtmXSksKGE9ZC5fX2IpJiZhKHQpO3RyeXtlOmlmKHR5cGVvZiBtPT1cImZ1bmN0aW9uXCIpe2lmKHY9dC5wcm9wcyx5PShhPW0uY29udGV4dFR5cGUpJiZyW2EuX19jXSxnPWE/eT95LnByb3BzLnZhbHVlOmEuX186cixfLl9fYz9iPShuPXQuX19jPV8uX19jKS5fXz1uLl9fRTooXCJwcm90b3R5cGVcImluIG0mJm0ucHJvdG90eXBlLnJlbmRlcj90Ll9fYz1uPW5ldyBtKHYsZyk6KHQuX19jPW49bmV3IEQodixnKSxuLmNvbnN0cnVjdG9yPW0sbi5yZW5kZXI9bGUpLHkmJnkuc3ViKG4pLG4ucHJvcHM9dixuLnN0YXRlfHwobi5zdGF0ZT17fSksbi5jb250ZXh0PWcsbi5fX249cixoPW4uX19kPSEwLG4uX19oPVtdLG4uX3NiPVtdKSxuLl9fcz09bnVsbCYmKG4uX19zPW4uc3RhdGUpLG0uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIT1udWxsJiYobi5fX3M9PW4uc3RhdGUmJihuLl9fcz1rKHt9LG4uX19zKSksayhuLl9fcyxtLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh2LG4uX19zKSkpLHU9bi5wcm9wcyxpPW4uc3RhdGUsaCltLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcz09bnVsbCYmbi5jb21wb25lbnRXaWxsTW91bnQhPW51bGwmJm4uY29tcG9uZW50V2lsbE1vdW50KCksbi5jb21wb25lbnREaWRNb3VudCE9bnVsbCYmbi5fX2gucHVzaChuLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG0uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzPT1udWxsJiZ2IT09dSYmbi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIT1udWxsJiZuLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHModixnKSwhbi5fX2UmJm4uc2hvdWxkQ29tcG9uZW50VXBkYXRlIT1udWxsJiZuLnNob3VsZENvbXBvbmVudFVwZGF0ZSh2LG4uX19zLGcpPT09ITF8fHQuX192PT09Xy5fX3Ype2ZvcihuLnByb3BzPXYsbi5zdGF0ZT1uLl9fcyx0Ll9fdiE9PV8uX192JiYobi5fX2Q9ITEpLG4uX192PXQsdC5fX2U9Xy5fX2UsdC5fX2s9Xy5fX2ssdC5fX2suZm9yRWFjaChmdW5jdGlvbihVKXtVJiYoVS5fXz10KX0pLEU9MDtFPG4uX3NiLmxlbmd0aDtFKyspbi5fX2gucHVzaChuLl9zYltFXSk7bi5fc2I9W10sbi5fX2gubGVuZ3RoJiZzLnB1c2gobik7YnJlYWsgZX1uLmNvbXBvbmVudFdpbGxVcGRhdGUhPW51bGwmJm4uY29tcG9uZW50V2lsbFVwZGF0ZSh2LG4uX19zLGcpLG4uY29tcG9uZW50RGlkVXBkYXRlIT1udWxsJiZuLl9faC5wdXNoKGZ1bmN0aW9uKCl7bi5jb21wb25lbnREaWRVcGRhdGUodSxpLGMpfSl9aWYobi5jb250ZXh0PWcsbi5wcm9wcz12LG4uX192PXQsbi5fX1A9ZSx4PWQuX19yLEk9MCxcInByb3RvdHlwZVwiaW4gbSYmbS5wcm90b3R5cGUucmVuZGVyKXtmb3Iobi5zdGF0ZT1uLl9fcyxuLl9fZD0hMSx4JiZ4KHQpLGE9bi5yZW5kZXIobi5wcm9wcyxuLnN0YXRlLG4uY29udGV4dCksQT0wO0E8bi5fc2IubGVuZ3RoO0ErKyluLl9faC5wdXNoKG4uX3NiW0FdKTtuLl9zYj1bXX1lbHNlIGRvIG4uX19kPSExLHgmJngodCksYT1uLnJlbmRlcihuLnByb3BzLG4uc3RhdGUsbi5jb250ZXh0KSxuLnN0YXRlPW4uX19zO3doaWxlKG4uX19kJiYrK0k8MjUpO24uc3RhdGU9bi5fX3Msbi5nZXRDaGlsZENvbnRleHQhPW51bGwmJihyPWsoayh7fSxyKSxuLmdldENoaWxkQ29udGV4dCgpKSksaHx8bi5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZT09bnVsbHx8KGM9bi5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh1LGkpKSxUPWEhPW51bGwmJmEudHlwZT09PVcmJmEua2V5PT1udWxsP2EucHJvcHMuY2hpbGRyZW46YSxKKGUsQXJyYXkuaXNBcnJheShUKT9UOltUXSx0LF8scixsLG8scyxmLHApLG4uYmFzZT10Ll9fZSx0Ll9faD1udWxsLG4uX19oLmxlbmd0aCYmcy5wdXNoKG4pLGImJihuLl9fRT1uLl9fPW51bGwpLG4uX19lPSExfWVsc2Ugbz09bnVsbCYmdC5fX3Y9PT1fLl9fdj8odC5fX2s9Xy5fX2ssdC5fX2U9Xy5fX2UpOnQuX19lPXJlKF8uX19lLHQsXyxyLGwsbyxzLHApOyhhPWQuZGlmZmVkKSYmYSh0KX1jYXRjaChVKXt0Ll9fdj1udWxsLChwfHxvIT1udWxsKSYmKHQuX19lPWYsdC5fX2g9ISFwLG9bby5pbmRleE9mKGYpXT1udWxsKSxkLl9fZShVLHQsXyl9fWZ1bmN0aW9uIFgoZSx0KXtkLl9fYyYmZC5fX2ModCxlKSxlLnNvbWUoZnVuY3Rpb24oXyl7dHJ5e2U9Xy5fX2gsXy5fX2g9W10sZS5zb21lKGZ1bmN0aW9uKHIpe3IuY2FsbChfKX0pfWNhdGNoKHIpe2QuX19lKHIsXy5fX3YpfX0pfWZ1bmN0aW9uIHJlKGUsdCxfLHIsbCxvLHMsZil7dmFyIHAsYSxuLGg9Xy5wcm9wcyx1PXQucHJvcHMsaT10LnR5cGUsYz0wO2lmKGk9PT1cInN2Z1wiJiYobD0hMCksbyE9bnVsbCl7Zm9yKDtjPG8ubGVuZ3RoO2MrKylpZigocD1vW2NdKSYmXCJzZXRBdHRyaWJ1dGVcImluIHA9PSEhaSYmKGk/cC5sb2NhbE5hbWU9PT1pOnAubm9kZVR5cGU9PT0zKSl7ZT1wLG9bY109bnVsbDticmVha319aWYoZT09bnVsbCl7aWYoaT09PW51bGwpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHUpO2U9bD9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGkpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaSx1LmlzJiZ1KSxvPW51bGwsZj0hMX1pZihpPT09bnVsbCloPT09dXx8ZiYmZS5kYXRhPT09dXx8KGUuZGF0YT11KTtlbHNle2lmKG89byYmUC5jYWxsKGUuY2hpbGROb2RlcyksYT0oaD1fLnByb3BzfHxOKS5kYW5nZXJvdXNseVNldElubmVySFRNTCxuPXUuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWYpe2lmKG8hPW51bGwpZm9yKGg9e30sYz0wO2M8ZS5hdHRyaWJ1dGVzLmxlbmd0aDtjKyspaFtlLmF0dHJpYnV0ZXNbY10ubmFtZV09ZS5hdHRyaWJ1dGVzW2NdLnZhbHVlOyhufHxhKSYmKG4mJihhJiZuLl9faHRtbD09YS5fX2h0bWx8fG4uX19odG1sPT09ZS5pbm5lckhUTUwpfHwoZS5pbm5lckhUTUw9biYmbi5fX2h0bWx8fFwiXCIpKX1pZihvZShlLHUsaCxsLGYpLG4pdC5fX2s9W107ZWxzZSBpZihjPXQucHJvcHMuY2hpbGRyZW4sSihlLEFycmF5LmlzQXJyYXkoYyk/YzpbY10sdCxfLHIsbCYmaSE9PVwiZm9yZWlnbk9iamVjdFwiLG8scyxvP29bMF06Xy5fX2smJncoXywwKSxmKSxvIT1udWxsKWZvcihjPW8ubGVuZ3RoO2MtLTspb1tjXSE9bnVsbCYmRyhvW2NdKTtmfHwoXCJ2YWx1ZVwiaW4gdSYmKGM9dS52YWx1ZSkhPT12b2lkIDAmJihjIT09ZS52YWx1ZXx8aT09PVwicHJvZ3Jlc3NcIiYmIWN8fGk9PT1cIm9wdGlvblwiJiZjIT09aC52YWx1ZSkmJk0oZSxcInZhbHVlXCIsYyxoLnZhbHVlLCExKSxcImNoZWNrZWRcImluIHUmJihjPXUuY2hlY2tlZCkhPT12b2lkIDAmJmMhPT1lLmNoZWNrZWQmJk0oZSxcImNoZWNrZWRcIixjLGguY2hlY2tlZCwhMSkpfXJldHVybiBlfWZ1bmN0aW9uIFkoZSx0LF8pe3RyeXt0eXBlb2YgZT09XCJmdW5jdGlvblwiP2UodCk6ZS5jdXJyZW50PXR9Y2F0Y2gocil7ZC5fX2UocixfKX19ZnVuY3Rpb24gWihlLHQsXyl7dmFyIHIsbDtpZihkLnVubW91bnQmJmQudW5tb3VudChlKSwocj1lLnJlZikmJihyLmN1cnJlbnQmJnIuY3VycmVudCE9PWUuX19lfHxZKHIsbnVsbCx0KSksKHI9ZS5fX2MpIT1udWxsKXtpZihyLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtyLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobyl7ZC5fX2Uobyx0KX1yLmJhc2U9ci5fX1A9bnVsbCxlLl9fYz12b2lkIDB9aWYocj1lLl9faylmb3IobD0wO2w8ci5sZW5ndGg7bCsrKXJbbF0mJloocltsXSx0LF98fHR5cGVvZiBlLnR5cGUhPVwiZnVuY3Rpb25cIik7X3x8ZS5fX2U9PW51bGx8fEcoZS5fX2UpLGUuX189ZS5fX2U9ZS5fX2Q9dm9pZCAwfWZ1bmN0aW9uIGxlKGUsdCxfKXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihlLF8pfWZ1bmN0aW9uIGllKGUsdCxfKXt2YXIgcixsLG87ZC5fXyYmZC5fXyhlLHQpLGw9KHI9dHlwZW9mIF89PVwiZnVuY3Rpb25cIik/bnVsbDpfJiZfLl9fa3x8dC5fX2ssbz1bXSxGKHQsZT0oIXImJl98fHQpLl9faz1fZShXLG51bGwsW2VdKSxsfHxOLE4sdC5vd25lclNWR0VsZW1lbnQhPT12b2lkIDAsIXImJl8/W19dOmw/bnVsbDp0LmZpcnN0Q2hpbGQ/UC5jYWxsKHQuY2hpbGROb2Rlcyk6bnVsbCxvLCFyJiZfP186bD9sLl9fZTp0LmZpcnN0Q2hpbGQsciksWChvLGUpfWZ1bmN0aW9uIHNlKGUsdCl7aWUoZSx0LHNlKX1mdW5jdGlvbiBjZShlLHQsXyl7dmFyIHIsbCxvLHM9ayh7fSxlLnByb3BzKTtmb3IobyBpbiB0KW89PVwia2V5XCI/cj10W29dOm89PVwicmVmXCI/bD10W29dOnNbb109dFtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYocy5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/UC5jYWxsKGFyZ3VtZW50cywyKTpfKSxTKGUudHlwZSxzLHJ8fGUua2V5LGx8fGUucmVmLG51bGwpfWZ1bmN0aW9uIGZlKGUsdCl7dmFyIF89e19fYzp0PVwiX19jQ1wiK2orKyxfXzplLENvbnN1bWVyOmZ1bmN0aW9uKHIsbCl7cmV0dXJuIHIuY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKHIpe3ZhciBsLG87cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwobD1bXSwobz17fSlbdF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBvfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihzKXt0aGlzLnByb3BzLnZhbHVlIT09cy52YWx1ZSYmbC5zb21lKEgpfSx0aGlzLnN1Yj1mdW5jdGlvbihzKXtsLnB1c2gocyk7dmFyIGY9cy5jb21wb25lbnRXaWxsVW5tb3VudDtzLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7bC5zcGxpY2UobC5pbmRleE9mKHMpLDEpLGYmJmYuY2FsbChzKX19KSxyLmNoaWxkcmVufX07cmV0dXJuIF8uUHJvdmlkZXIuX189Xy5Db25zdW1lci5jb250ZXh0VHlwZT1ffVA9ei5zbGljZSxkPXtfX2U6ZnVuY3Rpb24oZSx0LF8scil7Zm9yKHZhciBsLG8sczt0PXQuX187KWlmKChsPXQuX19jKSYmIWwuX18pdHJ5e2lmKChvPWwuY29uc3RydWN0b3IpJiZvLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciE9bnVsbCYmKGwuc2V0U3RhdGUoby5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZSkpLHM9bC5fX2QpLGwuY29tcG9uZW50RGlkQ2F0Y2ghPW51bGwmJihsLmNvbXBvbmVudERpZENhdGNoKGUscnx8e30pLHM9bC5fX2QpLHMpcmV0dXJuIGwuX19FPWx9Y2F0Y2goZil7ZT1mfXRocm93IGV9fSxWPTAsZWU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPW51bGwmJmUuY29uc3RydWN0b3I9PT12b2lkIDB9LEQucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGUsdCl7dmFyIF87Xz10aGlzLl9fcyE9bnVsbCYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWsoe30sdGhpcy5zdGF0ZSksdHlwZW9mIGU9PVwiZnVuY3Rpb25cIiYmKGU9ZShrKHt9LF8pLHRoaXMucHJvcHMpKSxlJiZrKF8sZSksZSE9bnVsbCYmdGhpcy5fX3YmJih0JiZ0aGlzLl9zYi5wdXNoKHQpLEgodGhpcykpfSxELnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihlKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLGUmJnRoaXMuX19oLnB1c2goZSksSCh0aGlzKSl9LEQucHJvdG90eXBlLnJlbmRlcj1XLEM9W10sTC5fX3I9MCxqPTA7ZXhwb3J0e0QgYXMgQ29tcG9uZW50LFcgYXMgRnJhZ21lbnQsY2UgYXMgY2xvbmVFbGVtZW50LGZlIGFzIGNyZWF0ZUNvbnRleHQsX2UgYXMgY3JlYXRlRWxlbWVudCx1ZSBhcyBjcmVhdGVSZWYsX2UgYXMgaCxzZSBhcyBoeWRyYXRlLGVlIGFzIGlzVmFsaWRFbGVtZW50LGQgYXMgb3B0aW9ucyxpZSBhcyByZW5kZXIsbmUgYXMgdG9DaGlsZEFycmF5fTtcbiIsIi8qIGVzbS5zaCAtIGVzYnVpbGQgYnVuZGxlKHByZWFjdEAxMC4xMS4zL2pzeC1ydW50aW1lKSBkZW5vIHByb2R1Y3Rpb24gKi9cbmltcG9ydHtvcHRpb25zIGFzIGx9ZnJvbVwiL3N0YWJsZS9wcmVhY3RAMTAuMTEuMy9kZW5vL3ByZWFjdC5qc1wiO2ltcG9ydHtGcmFnbWVudCBhcyBjfWZyb21cIi9zdGFibGUvcHJlYWN0QDEwLjExLjMvZGVuby9wcmVhY3QuanNcIjt2YXIgYT0wO2Z1bmN0aW9uIHAobixzLHQsZix1KXt2YXIgcixvLF89e307Zm9yKG8gaW4gcylvPT1cInJlZlwiP3I9c1tvXTpfW29dPXNbb107dmFyIGU9e3R5cGU6bixwcm9wczpfLGtleTp0LHJlZjpyLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Oi0tYSxfX3NvdXJjZTp1LF9fc2VsZjpmfTtpZih0eXBlb2Ygbj09XCJmdW5jdGlvblwiJiYocj1uLmRlZmF1bHRQcm9wcykpZm9yKG8gaW4gcilfW29dPT09dm9pZCAwJiYoX1tvXT1yW29dKTtyZXR1cm4gbC52bm9kZSYmbC52bm9kZShlKSxlfWV4cG9ydHtjIGFzIEZyYWdtZW50LHAgYXMganN4LHAgYXMganN4REVWLHAgYXMganN4c307XG4iLCIvLyBDb3B5cmlnaHQgMjAyMiBDb25ub3IgU3BlZXJzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBNSVQgTGljZW5zZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGJyb3dzZXItY29tcGF0aWJsZS5cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBDU1MgY2xhc3Mgc3RyaW5nIGZyb20gdGhlIGdpdmVuIGlucHV0cy4gTm9uLXN0cmluZ3MgYW5kIGVtcHR5XG4gKiBzdHJpbmdzIGFyZSBza2lwcGVkLCB0aGUgcmVzdCBhcmUgam9pbmVkIHdpdGggYSBzcGFjZSBzZXBhcmF0b3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjeCguLi5jbGFzc2VzOiB1bmtub3duW10pOiBzdHJpbmcge1xuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoYyA9PiBjICYmIHR5cGVvZiBjID09PSBcInN0cmluZ1wiKS5qb2luKFwiIFwiKTtcbn1cbiIsIi8qIGVzbS5zaCAtIGVzYnVpbGQgYnVuZGxlKHByZWFjdEAxMC4xMS4zL2hvb2tzKSBkZW5vIHByb2R1Y3Rpb24gKi9cbmltcG9ydHtvcHRpb25zIGFzIHJ9ZnJvbVwiL3N0YWJsZS9wcmVhY3RAMTAuMTEuMy9kZW5vL3ByZWFjdC5qc1wiO3ZhciBpLG8sZCxOLGY9MCxxPVtdLGw9W10sVj1yLl9fYixiPXIuX19yLGc9ci5kaWZmZWQsQT1yLl9fYyxDPXIudW5tb3VudDtmdW5jdGlvbiBhKF8sbil7ci5fX2gmJnIuX19oKG8sXyxmfHxuKSxmPTA7dmFyIHU9by5fX0h8fChvLl9fSD17X186W10sX19oOltdfSk7cmV0dXJuIF8+PXUuX18ubGVuZ3RoJiZ1Ll9fLnB1c2goe19fVjpsfSksdS5fX1tfXX1mdW5jdGlvbiBQKF8pe3JldHVybiBmPTEsayh4LF8pfWZ1bmN0aW9uIGsoXyxuLHUpe3ZhciB0PWEoaSsrLDIpO2lmKHQudD1fLCF0Ll9fYyYmKHQuX189W3U/dShuKTp4KHZvaWQgMCxuKSxmdW5jdGlvbihzKXt2YXIgaD10Ll9fTj90Ll9fTlswXTp0Ll9fWzBdLHY9dC50KGgscyk7aCE9PXYmJih0Ll9fTj1bdix0Ll9fWzFdXSx0Ll9fYy5zZXRTdGF0ZSh7fSkpfV0sdC5fX2M9bywhby51KSl7by51PSEwO3ZhciBlPW8uc2hvdWxkQ29tcG9uZW50VXBkYXRlO28uc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKHMsaCx2KXtpZighdC5fX2MuX19IKXJldHVybiEwO3ZhciBFPXQuX19jLl9fSC5fXy5maWx0ZXIoZnVuY3Rpb24oYyl7cmV0dXJuIGMuX19jfSk7aWYoRS5ldmVyeShmdW5jdGlvbihjKXtyZXR1cm4hYy5fX059KSlyZXR1cm4hZXx8ZS5jYWxsKHRoaXMscyxoLHYpO3ZhciB5PSExO3JldHVybiBFLmZvckVhY2goZnVuY3Rpb24oYyl7aWYoYy5fX04pe3ZhciBUPWMuX19bMF07Yy5fXz1jLl9fTixjLl9fTj12b2lkIDAsVCE9PWMuX19bMF0mJih5PSEwKX19KSwhKCF5JiZ0Ll9fYy5wcm9wcz09PXMpJiYoIWV8fGUuY2FsbCh0aGlzLHMsaCx2KSl9fXJldHVybiB0Ll9fTnx8dC5fX31mdW5jdGlvbiBVKF8sbil7dmFyIHU9YShpKyssMyk7IXIuX19zJiZIKHUuX19ILG4pJiYodS5fXz1fLHUuaT1uLG8uX19ILl9faC5wdXNoKHUpKX1mdW5jdGlvbiBCKF8sbil7dmFyIHU9YShpKyssNCk7IXIuX19zJiZIKHUuX19ILG4pJiYodS5fXz1fLHUuaT1uLG8uX19oLnB1c2godSkpfWZ1bmN0aW9uIGooXyl7cmV0dXJuIGY9NSxEKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6X319LFtdKX1mdW5jdGlvbiB3KF8sbix1KXtmPTYsQihmdW5jdGlvbigpe3JldHVybiB0eXBlb2YgXz09XCJmdW5jdGlvblwiPyhfKG4oKSksZnVuY3Rpb24oKXtyZXR1cm4gXyhudWxsKX0pOl8/KF8uY3VycmVudD1uKCksZnVuY3Rpb24oKXtyZXR1cm4gXy5jdXJyZW50PW51bGx9KTp2b2lkIDB9LHU9PW51bGw/dTp1LmNvbmNhdChfKSl9ZnVuY3Rpb24gRChfLG4pe3ZhciB1PWEoaSsrLDcpO3JldHVybiBIKHUuX19ILG4pPyh1Ll9fVj1fKCksdS5pPW4sdS5fX2g9Xyx1Ll9fVik6dS5fX31mdW5jdGlvbiB6KF8sbil7cmV0dXJuIGY9OCxEKGZ1bmN0aW9uKCl7cmV0dXJuIF99LG4pfWZ1bmN0aW9uIEwoXyl7dmFyIG49by5jb250ZXh0W18uX19jXSx1PWEoaSsrLDkpO3JldHVybiB1LmM9XyxuPyh1Ll9fPT1udWxsJiYodS5fXz0hMCxuLnN1YihvKSksbi5wcm9wcy52YWx1ZSk6Xy5fX31mdW5jdGlvbiBNKF8sbil7ci51c2VEZWJ1Z1ZhbHVlJiZyLnVzZURlYnVnVmFsdWUobj9uKF8pOl8pfWZ1bmN0aW9uIEcoXyl7dmFyIG49YShpKyssMTApLHU9UCgpO3JldHVybiBuLl9fPV8sby5jb21wb25lbnREaWRDYXRjaHx8KG8uY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24odCxlKXtuLl9fJiZuLl9fKHQsZSksdVsxXSh0KX0pLFt1WzBdLGZ1bmN0aW9uKCl7dVsxXSh2b2lkIDApfV19ZnVuY3Rpb24gSigpe3ZhciBfPWEoaSsrLDExKTtpZighXy5fXyl7Zm9yKHZhciBuPW8uX192O24hPT1udWxsJiYhbi5fX20mJm4uX18hPT1udWxsOyluPW4uX187dmFyIHU9bi5fX218fChuLl9fbT1bMCwwXSk7Xy5fXz1cIlBcIit1WzBdK1wiLVwiK3VbMV0rK31yZXR1cm4gXy5fX31mdW5jdGlvbiBJKCl7Zm9yKHZhciBfO189cS5zaGlmdCgpOylpZihfLl9fUCYmXy5fX0gpdHJ5e18uX19ILl9faC5mb3JFYWNoKG0pLF8uX19ILl9faC5mb3JFYWNoKHApLF8uX19ILl9faD1bXX1jYXRjaChuKXtfLl9fSC5fX2g9W10sci5fX2UobixfLl9fdil9fXIuX19iPWZ1bmN0aW9uKF8pe289bnVsbCxWJiZWKF8pfSxyLl9fcj1mdW5jdGlvbihfKXtiJiZiKF8pLGk9MDt2YXIgbj0obz1fLl9fYykuX19IO24mJihkPT09bz8obi5fX2g9W10sby5fX2g9W10sbi5fXy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3UuX19OJiYodS5fXz11Ll9fTiksdS5fX1Y9bCx1Ll9fTj11Lmk9dm9pZCAwfSkpOihuLl9faC5mb3JFYWNoKG0pLG4uX19oLmZvckVhY2gocCksbi5fX2g9W10pKSxkPW99LHIuZGlmZmVkPWZ1bmN0aW9uKF8pe2cmJmcoXyk7dmFyIG49Xy5fX2M7biYmbi5fX0gmJihuLl9fSC5fX2gubGVuZ3RoJiYocS5wdXNoKG4pIT09MSYmTj09PXIucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKE49ci5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxSKShJKSksbi5fX0guX18uZm9yRWFjaChmdW5jdGlvbih1KXt1LmkmJih1Ll9fSD11LmkpLHUuX19WIT09bCYmKHUuX189dS5fX1YpLHUuaT12b2lkIDAsdS5fX1Y9bH0pKSxkPW89bnVsbH0sci5fX2M9ZnVuY3Rpb24oXyxuKXtuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e3UuX19oLmZvckVhY2gobSksdS5fX2g9dS5fX2guZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiF0Ll9ffHxwKHQpfSl9Y2F0Y2godCl7bi5zb21lKGZ1bmN0aW9uKGUpe2UuX19oJiYoZS5fX2g9W10pfSksbj1bXSxyLl9fZSh0LHUuX192KX19KSxBJiZBKF8sbil9LHIudW5tb3VudD1mdW5jdGlvbihfKXtDJiZDKF8pO3ZhciBuLHU9Xy5fX2M7dSYmdS5fX0gmJih1Ll9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3RyeXttKHQpfWNhdGNoKGUpe249ZX19KSx1Ll9fSD12b2lkIDAsbiYmci5fX2Uobix1Ll9fdikpfTt2YXIgRj10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lPT1cImZ1bmN0aW9uXCI7ZnVuY3Rpb24gUihfKXt2YXIgbix1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHQpLEYmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKG4pLHNldFRpbWVvdXQoXyl9LHQ9c2V0VGltZW91dCh1LDEwMCk7RiYmKG49cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX1mdW5jdGlvbiBtKF8pe3ZhciBuPW8sdT1fLl9fYzt0eXBlb2YgdT09XCJmdW5jdGlvblwiJiYoXy5fX2M9dm9pZCAwLHUoKSksbz1ufWZ1bmN0aW9uIHAoXyl7dmFyIG49bztfLl9fYz1fLl9fKCksbz1ufWZ1bmN0aW9uIEgoXyxuKXtyZXR1cm4hX3x8Xy5sZW5ndGghPT1uLmxlbmd0aHx8bi5zb21lKGZ1bmN0aW9uKHUsdCl7cmV0dXJuIHUhPT1fW3RdfSl9ZnVuY3Rpb24geChfLG4pe3JldHVybiB0eXBlb2Ygbj09XCJmdW5jdGlvblwiP24oXyk6bn1leHBvcnR7eiBhcyB1c2VDYWxsYmFjayxMIGFzIHVzZUNvbnRleHQsTSBhcyB1c2VEZWJ1Z1ZhbHVlLFUgYXMgdXNlRWZmZWN0LEcgYXMgdXNlRXJyb3JCb3VuZGFyeSxKIGFzIHVzZUlkLHcgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxCIGFzIHVzZUxheW91dEVmZmVjdCxEIGFzIHVzZU1lbW8sayBhcyB1c2VSZWR1Y2VyLGogYXMgdXNlUmVmLFAgYXMgdXNlU3RhdGV9O1xuIiwiLyoqIEBqc3hJbXBvcnRTb3VyY2UgaHR0cHM6Ly9lc20uc2gvcHJlYWN0QDEwLjExLjMgKi9cblxuaW1wb3J0IHsgY3ggfSBmcm9tIFwiLi4vLi4vZG9tLnRzXCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiaHR0cHM6Ly9lc20uc2gvcHJlYWN0QDEwLjExLjNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcImh0dHBzOi8vZXNtLnNoL3ByZWFjdEAxMC4xMS4zL2hvb2tzXCI7XG5cbnR5cGUgVHJhY2tTdGF0ZSA9IFwib29oXCIgfCBcIm1laFwiO1xuXG5pbnRlcmZhY2UgVHJhY2sge1xuICBpZDogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGRhdGV0aW1lOiBzdHJpbmc7XG4gIHN0YXRlOiBUcmFja1N0YXRlIHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1a2Vib3gocm9vdDogSFRNTEVsZW1lbnQpIHtcbiAgY29uc3QgdHJhY2tzOiBUcmFja1tdID0gW107XG4gIGNvbnN0IHNvdXJjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNvdXJjZXNcIik7XG4gIGZvciAoY29uc3QgZHQgb2YgQXJyYXkuZnJvbShzb3VyY2VzKSkge1xuICAgIGNvbnN0IHRpbWUgPSBkdC5xdWVyeVNlbGVjdG9yKFwidGltZVwiKSE7XG4gICAgY29uc3QgZGF0ZSA9IHRpbWUuaW5uZXJUZXh0O1xuICAgIGNvbnN0IGRhdGV0aW1lID0gdGltZS5nZXRBdHRyaWJ1dGUoXCJkYXRldGltZVwiKSE7XG4gICAgZm9yIChjb25zdCBsaSBvZiBBcnJheS5mcm9tKGR0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKSkpIHtcbiAgICAgIGNvbnN0IGlkID0gbGkucXVlcnlTZWxlY3RvcihcImFcIikhLmhyZWYuc3BsaXQoXCIvdHJhY2svXCIpWzFdO1xuICAgICAgY29uc3Qgc3RhdGUgPSBzZWxmLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBqdWtlYm94LSR7aWR9YCk7XG4gICAgICB0cmFja3MucHVzaCh7XG4gICAgICAgIGlkLFxuICAgICAgICBkYXRlLFxuICAgICAgICBkYXRldGltZSxcbiAgICAgICAgc3RhdGU6IChcbiAgICAgICAgICBzdGF0ZSAmJiAoW1wib29oXCIsIFwibWVoXCJdLmluY2x1ZGVzKHN0YXRlKSkgPyBzdGF0ZSBhcyBUcmFja1N0YXRlXG4gICAgICAgICAgOiBudWxsXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcFwiKSEuaW5uZXJIVE1MID0gXCJcIjtcbiAgcmVuZGVyKDxBcHAgdHJhY2tzPXt0cmFja3N9IC8+LCByb290KTtcbn1cblxuZnVuY3Rpb24gQXBwKHsgdHJhY2tzOiBfdHJhY2tzIH06IHtcbiAgdHJhY2tzOiBUcmFja1tdO1xufSkge1xuICBjb25zdCBbdHJhY2tzLCBzZXRUcmFja3NdID0gdXNlU3RhdGUoX3RyYWNrcyk7XG5cbiAgY29uc3QgbmV3VHJhY2tzID0gdHJhY2tzLmZpbHRlcih0ID0+ICF0LnN0YXRlKTtcblxuICBjb25zdCB1cGRhdGUgPSAodHJhY2s6IFRyYWNrKSA9PiB7XG4gICAgaWYgKHRyYWNrLnN0YXRlKSB7XG4gICAgICBzZWxmLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBqdWtlYm94LSR7dHJhY2suaWR9YCwgdHJhY2suc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBqdWtlYm94LSR7dHJhY2suaWR9YCk7XG4gICAgfVxuICAgIHNldFRyYWNrcyh0cmFja3MubWFwKHQgPT4gKFxuICAgICAgdC5pZCA9PT0gdHJhY2suaWQgPyB0cmFja1xuICAgICAgOiB0XG4gICAgKSkpO1xuICB9O1xuXG4gIHJldHVybiA8PlxuICAgIHshIW5ld1RyYWNrcy5sZW5ndGggJiYgKFxuICAgICAgPE5ld1RyYWNrc1xuICAgICAgICB0b3A9e25ld1RyYWNrc1swXX1cbiAgICAgICAgbmV4dD17bmV3VHJhY2tzWzFdfVxuICAgICAgICB1cGRhdGU9e3VwZGF0ZX1cbiAgICAgIC8+XG4gICAgKX1cbiAgICB7IW5ld1RyYWNrcy5sZW5ndGggJiYgKFxuICAgICAgPE9sZFRyYWNrc1xuICAgICAgICB0cmFja3M9e3RyYWNrc31cbiAgICAgICAgdXBkYXRlPXt1cGRhdGV9XG4gICAgICAvPlxuICAgICl9XG4gIDwvPjtcbn1cblxuZnVuY3Rpb24gTmV3VHJhY2tzKHsgdG9wLCBuZXh0LCB1cGRhdGUgfToge1xuICB0b3A6IFRyYWNrO1xuICBuZXh0PzogVHJhY2s7XG4gIHVwZGF0ZTogKHRyYWNrOiBUcmFjaykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxUcmFja1N0YXRlIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgX3N3aXBlID0gKG5ld1N0YXRlOiBUcmFja1N0YXRlKSA9PiB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICByZXR1cm47IC8vIFRoZXkgY2xpY2sgZmFzdFxuICAgIH1cbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTdGF0ZShudWxsKTtcbiAgICAgIHVwZGF0ZSh7IC4uLnRvcCwgc3RhdGU6IG5ld1N0YXRlIH0pO1xuICAgIH0sIDMwMCk7IC8vIFRyYW5zaXRpb24gZHVyYXRpb24gZnJvbSBDU1NcbiAgfTtcblxuICByZXR1cm4gPD5cbiAgICA8cCBjbGFzcz17Y3goXCJuZXctbWVzc2FnZVwiLCBzdGF0ZSAmJiAhbmV4dCAmJiBcImhpZGVcIil9PlxuICAgICAgTmV3IHNvbmdzIVxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwibmV3IHdyYXBcIj5cbiAgICAgIHtcbiAgICAgICAgLy8gVXNpbmcgdGhlIFwia2V5XCIgcHJvcCBwcmV2ZW50cyBQcmVhY3QgZnJvbSByZS11c2luZyBpZnJhbWUgZWxlbWVudHMsXG4gICAgICAgIC8vIHdoaWNoIHdvdWxkIGNhdXNlIGFsbCBraW5kcyBvZiBwcm9ibGVtc1xuICAgICAgfVxuICAgICAge25leHQgJiYgKFxuICAgICAgICA8U3BvdGlmeVxuICAgICAgICAgIGtleT17bmV4dC5pZH1cbiAgICAgICAgICBpZD17bmV4dC5pZH1cbiAgICAgICAgICBjbGFzcz17Y3goXCJuZXctdHJhY2tcIiwgIXN0YXRlICYmIFwibmV4dFwiKX1cbiAgICAgICAgICBoaWRkZW5cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8U3BvdGlmeVxuICAgICAgICBrZXk9e3RvcC5pZH1cbiAgICAgICAgaWQ9e3RvcC5pZH1cbiAgICAgICAgY2xhc3M9e2N4KFwibmV3LXRyYWNrXCIsIHN0YXRlKX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OjM1MnB4XCI+Jm5ic3A7PC9kaXY+IHsvKiBQbGFjZWhvbGRlciAqL31cbiAgICAgIDxuYXYgY2xhc3M9e2N4KFwibmV3LWJ1dHRvbnNcIiwgIW5leHQgJiYgc3RhdGUgJiYgXCJmYWRlXCIpfT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IF9zd2lwZShcIm1laFwiKX1cbiAgICAgICAgPm1laDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgc3R5bGU9XCJmb250LXdlaWdodDo3MDA7IGJhY2tncm91bmQ6dmFyKC0tZ3JlZW4pXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBfc3dpcGUoXCJvb2hcIil9XG4gICAgICAgID5vb2ghPC9idXR0b24+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgPC8+O1xufVxuXG5mdW5jdGlvbiBPbGRUcmFja3MoeyB0cmFja3MsIHVwZGF0ZSB9OiB7XG4gIHRyYWNrczogVHJhY2tbXTtcbiAgdXBkYXRlOiAodHJhY2s6IFRyYWNrKSA9PiB2b2lkO1xufSkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPFRyYWNrU3RhdGU+KFwib29oXCIpO1xuICBjb25zdCBbbGVhdmluZywgc2V0TGVhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb29oID0gdHJhY2tzLmZpbHRlcih0ID0+IHQuc3RhdGUgPT09IFwib29oXCIpO1xuICBjb25zdCBtZWggPSB0cmFja3MuZmlsdGVyKHQgPT4gdC5zdGF0ZSA9PT0gXCJtZWhcIik7XG5cbiAgY29uc3QgdHJhbnNpdGlvbiA9IChuZXdTdGF0ZTogVHJhY2tTdGF0ZSkgPT4ge1xuICAgIGlmIChzdGF0ZSA9PT0gbmV3U3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0TGVhdmluZyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExlYXZpbmcoZmFsc2UpO1xuICAgICAgc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH0sIDEwMCk7IC8vIE1hdGNoZXMgQ1NTIGFuaW1hdGlvbiBkdXJhdGlvblxuICB9O1xuXG4gIHJldHVybiA8PlxuICAgIDxuYXZcbiAgICAgIGNsYXNzPVwibmF2XCJcbiAgICAgIHN0eWxlPXtgXG4gICAgICAgIC0tbmF2LWNvbG9yOiB2YXIoJHtzdGF0ZSA9PT0gXCJvb2hcIiA/IFwiLS1ncmVlblwiIDogXCItLWRhcmstZ3JheVwifSk7XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9e2N4KHN0YXRlID09PSBcIm1laFwiICYmICFsZWF2aW5nICYmIFwiYWN0aXZlXCIpfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0cmFuc2l0aW9uKFwibWVoXCIpfVxuICAgICAgPm1laDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz17Y3goc3RhdGUgPT09IFwib29oXCIgJiYgIWxlYXZpbmcgJiYgXCJhY3RpdmVcIil9XG4gICAgICAgIHN0eWxlPVwiZm9udC13ZWlnaHQ6NzAwXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gdHJhbnNpdGlvbihcIm9vaFwiKX1cbiAgICAgID5vb2ghPC9idXR0b24+XG4gICAgPC9uYXY+XG4gICAgPGRpdiBjbGFzcz17Y3goXCJvbGRcIiwgbGVhdmluZyAmJiBcImxlYXZpbmdcIil9PlxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgY2xhc3M9e2N4KFxuICAgICAgICAgIFwid3JhcCBmbG93IG9sZC1saXN0XCIsXG4gICAgICAgICAgc3RhdGUgPT09IFwib29oXCIgJiYgXCJhY3RpdmVcIixcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge29vaC5tYXAodCA9PiAoXG4gICAgICAgICAgPFNwb3RpZnkgY2xhc3M9XCJvbGQtdHJhY2tcIiBpZD17dC5pZH0gc21hbGwgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvblxuICAgICAgICBjbGFzcz17Y3goXG4gICAgICAgICAgXCJ3cmFwIGZsb3cgb2xkLWxpc3RcIixcbiAgICAgICAgICBzdGF0ZSA9PT0gXCJtZWhcIiAmJiBcImFjdGl2ZVwiLFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7bWVoLm1hcCh0ID0+IChcbiAgICAgICAgICA8U3BvdGlmeSBjbGFzcz1cIm9sZC10cmFja1wiIGlkPXt0LmlkfSBzbWFsbCAvPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgPC8+O1xufVxuXG5mdW5jdGlvbiBTcG90aWZ5KHsgaWQsIGNsYXNzOiBjbHMsIGhpZGRlbiwgc21hbGwgfToge1xuICBjbGFzczogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBzbWFsbD86IGJvb2xlYW47XG59KSB7XG4gIHJldHVybiA8PlxuICAgIDxkaXYgY2xhc3M9e2N4KFwic3BvdGlmeVwiLCBjbHMpfT5cbiAgICAgIDxpZnJhbWVcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2VtYmVkL3RyYWNrLyR7aWR9P3V0bV9zb3VyY2U9Z2VuZXJhdG9yJnRoZW1lPTBgfVxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBoZWlnaHQ9e3NtYWxsID8gXCIxNTJcIiA6IFwiMzUyXCJ9XG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgIGFsbG93PVwiYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBmdWxsc2NyZWVuOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxuICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgIGFyaWEtaGlkZGVuPXtoaWRkZW59XG4gICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICA8Lz47XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBSSxHQUFFLEdBQUUsR0FBSyxHQUFFLEdBQUksSUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLEVBQUMsS0FBRztBQUFvRSxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRTtJQUFDLE9BQU87QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7SUFBQyxJQUFJLElBQUUsRUFBRSxVQUFVO0lBQUMsS0FBRyxFQUFFLFdBQVcsQ0FBQztBQUFFO0FBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxHQUFFLEdBQUUsR0FBRSxJQUFFLENBQUM7SUFBRSxJQUFJLEtBQUssRUFBRSxLQUFHLFFBQU0sSUFBRSxDQUFDLENBQUMsRUFBRSxHQUFDLEtBQUcsUUFBTSxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRTtJQUFDLElBQUcsVUFBVSxNQUFNLEdBQUMsS0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFDLFVBQVUsTUFBTSxHQUFDLElBQUUsRUFBRSxJQUFJLENBQUMsV0FBVSxLQUFHLENBQUMsR0FBRSxPQUFPLEtBQUcsY0FBWSxFQUFFLFlBQVksSUFBRSxJQUFJLEVBQUMsSUFBSSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUcsS0FBSyxLQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxFQUFFLFlBQVksQ0FBQyxFQUFFO0lBQUUsT0FBTyxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBSTtBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLElBQUU7UUFBQyxNQUFLO1FBQUUsT0FBTTtRQUFFLEtBQUk7UUFBRSxLQUFJO1FBQUUsS0FBSSxJQUFJO1FBQUMsSUFBRyxJQUFJO1FBQUMsS0FBSTtRQUFFLEtBQUksSUFBSTtRQUFDLEtBQUksS0FBSztRQUFFLEtBQUksSUFBSTtRQUFDLEtBQUksSUFBSTtRQUFDLGFBQVksS0FBSztRQUFFLEtBQUksS0FBRyxFQUFFO0lBQUM7SUFBRSxPQUFPLEtBQUcsSUFBSSxJQUFFLEVBQUUsS0FBSyxJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFHLENBQUM7QUFBQTtBQUFvQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO0lBQUMsT0FBTyxFQUFFLFFBQVE7QUFBQTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxHQUFFLElBQUksQ0FBQyxPQUFPLEdBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFHLEtBQUcsSUFBSSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUcsS0FBRyxJQUFJO0lBQUMsSUFBSSxJQUFJLEdBQUUsSUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxJQUFHLENBQUMsSUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUcsSUFBSSxJQUFFLEVBQUUsR0FBRyxJQUFFLElBQUksRUFBQyxPQUFPLEVBQUUsR0FBRztJQUFDLE9BQU8sT0FBTyxFQUFFLElBQUksSUFBRSxhQUFXLEVBQUUsS0FBRyxJQUFJO0FBQUE7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO0lBQUMsSUFBSSxHQUFFO0lBQUUsSUFBRyxDQUFDLElBQUUsRUFBRSxFQUFFLEtBQUcsSUFBSSxJQUFFLEVBQUUsR0FBRyxJQUFFLElBQUksRUFBQztRQUFDLElBQUksRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFDLElBQUksRUFBQyxJQUFFLENBQUMsRUFBQyxJQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLElBQUcsQ0FBQyxJQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBRyxJQUFJLElBQUUsRUFBRSxHQUFHLElBQUUsSUFBSSxFQUFDO1lBQUMsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBRztZQUFDLEtBQUs7UUFBQSxDQUFDO1FBQUEsT0FBTyxFQUFFO0lBQUUsQ0FBQztBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFDLENBQUMsQ0FBQyxLQUFHLEVBQUUsSUFBSSxDQUFDLE1BQUksQ0FBQyxFQUFFLEdBQUcsTUFBSSxNQUFJLEVBQUUsaUJBQWlCLEtBQUcsQ0FBQyxDQUFDLElBQUUsRUFBRSxpQkFBaUIsS0FBRyxVQUFVLEVBQUU7QUFBRTtBQUFDLFNBQVMsSUFBRztJQUFDLElBQUksSUFBSSxHQUFFLEVBQUUsR0FBRyxHQUFDLEVBQUUsTUFBTSxFQUFFLElBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUMsRUFBRSxHQUFHLENBQUMsR0FBRztJQUFBLElBQUcsSUFBRSxFQUFFLEVBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUM7UUFBQyxJQUFJLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtRQUFFLEVBQUUsR0FBRyxJQUFFLENBQUMsSUFBRSxDQUFDLElBQUUsQ0FBQyxJQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUMsSUFBRSxFQUFFLEdBQUcsS0FBRyxDQUFDLElBQUUsRUFBRSxFQUFDLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRSxFQUFFLEVBQUUsR0FBRyxHQUFDLEVBQUUsR0FBRyxHQUFDLEdBQUUsRUFBRSxHQUFFLEdBQUUsR0FBRSxFQUFFLEdBQUcsRUFBQyxFQUFFLGVBQWUsS0FBRyxLQUFLLEdBQUUsRUFBRSxHQUFHLElBQUUsSUFBSSxHQUFDO1lBQUM7U0FBRSxHQUFDLElBQUksRUFBQyxHQUFFLEtBQUcsRUFBRSxJQUFHLEVBQUUsR0FBRyxHQUFFLEVBQUUsR0FBRSxJQUFHLEVBQUUsR0FBRyxJQUFFLEtBQUcsRUFBRSxFQUFFLENBQUM7SUFBQyxFQUFFO0FBQUE7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsS0FBRyxFQUFFLEdBQUcsSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNO0lBQUMsSUFBSSxFQUFFLEdBQUcsR0FBQyxFQUFFLEVBQUMsSUFBRSxDQUFDLEVBQUMsSUFBRSxFQUFFLE1BQU0sRUFBQyxJQUFJLElBQUcsQ0FBQyxJQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxJQUFJLElBQUUsT0FBTyxLQUFHLFlBQVUsSUFBSSxHQUFDLE9BQU8sS0FBRyxZQUFVLE9BQU8sS0FBRyxZQUFVLE9BQU8sS0FBRyxXQUFTLEVBQUUsSUFBSSxFQUFDLEdBQUUsSUFBSSxFQUFDLElBQUksRUFBQyxLQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUcsRUFBRSxHQUFFO1FBQUMsVUFBUztJQUFDLEdBQUUsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLElBQUUsRUFBRSxHQUFHLEdBQUMsSUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFDLEVBQUUsS0FBSyxFQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxHQUFDLEVBQUUsR0FBRyxHQUFDLElBQUksRUFBQyxFQUFFLEdBQUcsSUFBRSxDQUFDLEtBQUcsSUFBSSxFQUFDO1FBQUMsSUFBRyxFQUFFLEVBQUUsR0FBQyxHQUFFLEVBQUUsR0FBRyxHQUFDLEVBQUUsR0FBRyxHQUFDLEdBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLE1BQUksSUFBSSxJQUFFLEtBQUcsRUFBRSxHQUFHLElBQUUsRUFBRSxHQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxLQUFLO2FBQU8sSUFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUk7WUFBQyxJQUFHLENBQUMsSUFBRSxDQUFDLENBQUMsRUFBRSxLQUFHLEVBQUUsR0FBRyxJQUFFLEVBQUUsR0FBRyxJQUFFLEVBQUUsSUFBSSxLQUFHLEVBQUUsSUFBSSxFQUFDO2dCQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsS0FBSztnQkFBRSxLQUFLO1lBQUEsQ0FBQztZQUFBLElBQUUsSUFBSTtRQUFBO1FBQUMsRUFBRSxHQUFFLEdBQUUsSUFBRSxLQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRSxFQUFFLEdBQUcsRUFBQyxDQUFDLElBQUUsRUFBRSxHQUFHLEtBQUcsRUFBRSxHQUFHLElBQUUsS0FBRyxDQUFDLEtBQUcsQ0FBQyxJQUFFLEVBQUUsR0FBRSxFQUFFLEdBQUcsSUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBRyxFQUFFLElBQUksQ0FBQyxHQUFFLEVBQUUsR0FBRyxJQUFFLEdBQUUsRUFBRSxHQUFFLEtBQUcsSUFBSSxHQUFDLENBQUMsS0FBRyxJQUFJLElBQUUsQ0FBQyxJQUFFLENBQUMsR0FBRSxPQUFPLEVBQUUsSUFBSSxJQUFFLGNBQVksRUFBRSxHQUFHLEtBQUcsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLEdBQUMsSUFBRSxFQUFFLEdBQUUsR0FBRSxLQUFHLElBQUUsRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLElBQUUsY0FBWSxDQUFDLEVBQUUsR0FBRyxHQUFDLENBQUMsQ0FBQyxJQUFFLEtBQUcsRUFBRSxHQUFHLElBQUUsS0FBRyxFQUFFLFVBQVUsSUFBRSxLQUFHLENBQUMsSUFBRSxFQUFFLEVBQUUsQ0FBQztJQUFBLENBQUM7SUFBQSxJQUFJLEVBQUUsR0FBRyxHQUFDLEdBQUUsSUFBRSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFFLElBQUksSUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUU7SUFBRSxJQUFHLEdBQUUsSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sRUFBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxJQUFJLEdBQUUsSUFBRSxFQUFFLEdBQUcsRUFBQyxJQUFFLEdBQUUsS0FBRyxJQUFFLEVBQUUsTUFBTSxFQUFDLElBQUksQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBQyxHQUFFLElBQUUsT0FBTyxFQUFFLElBQUksSUFBRSxhQUFXLEVBQUUsR0FBRSxHQUFFLEtBQUcsRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEVBQUUsR0FBRyxFQUFDLEVBQUU7SUFBRSxPQUFPO0FBQUM7QUFBMkgsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxHQUFFLEdBQUU7SUFBRSxJQUFHLEVBQUUsR0FBRyxLQUFHLEtBQUssR0FBRSxJQUFFLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxHQUFDLEtBQUssQ0FBQztTQUFNLElBQUcsS0FBRyxJQUFJLElBQUUsS0FBRyxLQUFHLEVBQUUsVUFBVSxJQUFFLElBQUksRUFBQyxHQUFFLElBQUcsS0FBRyxJQUFJLElBQUUsRUFBRSxVQUFVLEtBQUcsR0FBRSxFQUFFLFdBQVcsQ0FBQyxJQUFHLElBQUUsSUFBSTtTQUFLO1FBQUMsSUFBSSxJQUFFLEdBQUUsSUFBRSxDQUFDLEVBQUMsQ0FBQyxJQUFFLEVBQUUsV0FBVyxLQUFHLElBQUUsRUFBRSxNQUFNLEVBQUMsS0FBRyxFQUFFLElBQUcsS0FBRyxHQUFFLE1BQU0sQ0FBRTtRQUFBLEVBQUUsWUFBWSxDQUFDLEdBQUUsSUFBRyxJQUFFLENBQUM7SUFBQSxDQUFDO0lBQUEsT0FBTyxNQUFJLEtBQUssSUFBRSxJQUFFLEVBQUUsV0FBVztBQUFBO0FBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJO0lBQUUsSUFBSSxLQUFLLEVBQUUsTUFBSSxjQUFZLE1BQUksU0FBTyxLQUFLLEtBQUcsRUFBRSxHQUFFLEdBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUM7SUFBRyxJQUFJLEtBQUssRUFBRSxLQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBRSxjQUFZLE1BQUksY0FBWSxNQUFJLFNBQU8sTUFBSSxXQUFTLE1BQUksYUFBVyxDQUFDLENBQUMsRUFBRSxLQUFHLENBQUMsQ0FBQyxFQUFFLElBQUUsRUFBRSxHQUFFLEdBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBRSxFQUFDO0FBQUU7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxDQUFDLENBQUMsRUFBRSxLQUFHLE1BQUksRUFBRSxXQUFXLENBQUMsR0FBRSxLQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUMsS0FBRyxJQUFJLEdBQUMsS0FBRyxPQUFPLEtBQUcsWUFBVSxHQUFHLElBQUksQ0FBQyxLQUFHLElBQUUsSUFBRSxJQUFJO0FBQUE7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLElBQUk7SUFBRSxHQUFFLElBQUcsTUFBSSxTQUFRLElBQUcsT0FBTyxLQUFHLFVBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxHQUFDO1NBQU07UUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxHQUFDLElBQUUsRUFBRSxHQUFFLENBQUMsRUFBQyxJQUFJLEtBQUssRUFBRSxLQUFHLEtBQUssS0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFDLEdBQUU7UUFBSSxJQUFHLEdBQUUsSUFBSSxLQUFLLEVBQUUsS0FBRyxDQUFDLENBQUMsRUFBRSxLQUFHLENBQUMsQ0FBQyxFQUFFLElBQUUsRUFBRSxFQUFFLEtBQUssRUFBQyxHQUFFLENBQUMsQ0FBQyxFQUFFO0lBQUMsQ0FBQztTQUFLLElBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBRyxPQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUcsS0FBSSxJQUFFLE1BQUksQ0FBQyxJQUFFLEVBQUUsT0FBTyxDQUFDLFlBQVcsR0FBRyxHQUFFLElBQUUsRUFBRSxXQUFXLE1BQUssSUFBRSxFQUFFLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLElBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQyxJQUFFLEVBQUUsR0FBQyxHQUFFLElBQUUsS0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUUsSUFBRSxJQUFFLENBQUMsRUFBQyxLQUFHLEVBQUUsbUJBQW1CLENBQUMsR0FBRSxJQUFFLElBQUUsQ0FBQyxFQUFDLEVBQUU7U0FBTSxJQUFHLE1BQUksMkJBQTBCO1FBQUMsSUFBRyxHQUFFLElBQUUsRUFBRSxPQUFPLENBQUMsZUFBYyxLQUFLLE9BQU8sQ0FBQyxVQUFTO2FBQVUsSUFBRyxNQUFJLFVBQVEsTUFBSSxVQUFRLE1BQUksVUFBUSxNQUFJLGNBQVksTUFBSSxjQUFZLEtBQUssR0FBRSxJQUFHO1lBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxLQUFHO1lBQUcsTUFBTSxDQUFDO1FBQUEsRUFBQyxPQUFLLENBQUM7UUFBQyxPQUFPLEtBQUcsY0FBWSxDQUFDLEtBQUcsSUFBSSxJQUFFLE1BQUksQ0FBQyxLQUFHLEVBQUUsT0FBTyxDQUFDLFFBQU0sQ0FBQyxJQUFFLEVBQUUsZUFBZSxDQUFDLEtBQUcsRUFBRSxZQUFZLENBQUMsR0FBRSxFQUFFO0lBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUMsRUFBRSxLQUFLLENBQUMsS0FBRyxDQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO0lBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFHLENBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLElBQUksR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLElBQUk7SUFBQyxJQUFHLEVBQUUsV0FBVyxLQUFHLEtBQUssR0FBRSxPQUFPLElBQUk7SUFBQyxFQUFFLEdBQUcsSUFBRSxJQUFJLElBQUUsQ0FBQyxJQUFFLEVBQUUsR0FBRyxFQUFDLElBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxHQUFHLEdBQUMsSUFBSSxFQUFDLElBQUU7UUFBQztLQUFFLEdBQUUsQ0FBQyxJQUFFLEVBQUUsR0FBRyxLQUFHLEVBQUUsRUFBRTtJQUFDLElBQUc7UUFBQyxHQUFFLElBQUcsT0FBTyxLQUFHLFlBQVc7WUFBQyxJQUFHLElBQUUsRUFBRSxLQUFLLEVBQUMsSUFBRSxDQUFDLElBQUUsRUFBRSxXQUFXLEtBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUMsSUFBRSxJQUFFLElBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFDLEVBQUUsRUFBRSxHQUFDLENBQUMsRUFBQyxFQUFFLEdBQUcsR0FBQyxJQUFFLENBQUMsSUFBRSxFQUFFLEdBQUcsR0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUMsRUFBRSxHQUFHLEdBQUMsQ0FBQyxlQUFjLEtBQUcsRUFBRSxTQUFTLENBQUMsTUFBTSxHQUFDLEVBQUUsR0FBRyxHQUFDLElBQUUsSUFBSSxFQUFFLEdBQUUsS0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFDLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBRyxFQUFFLFdBQVcsR0FBQyxHQUFFLEVBQUUsTUFBTSxHQUFDLEVBQUUsQ0FBQyxFQUFDLEtBQUcsRUFBRSxHQUFHLENBQUMsSUFBRyxFQUFFLEtBQUssR0FBQyxHQUFFLEVBQUUsS0FBSyxJQUFFLENBQUMsRUFBRSxLQUFLLEdBQUMsQ0FBQyxDQUFDLEdBQUUsRUFBRSxPQUFPLEdBQUMsR0FBRSxFQUFFLEdBQUcsR0FBQyxHQUFFLElBQUUsRUFBRSxHQUFHLEdBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBRyxHQUFDLEVBQUUsRUFBQyxFQUFFLEdBQUcsR0FBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEdBQUcsSUFBRSxJQUFJLElBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBQyxFQUFFLEtBQUssR0FBRSxFQUFFLHdCQUF3QixJQUFFLElBQUksSUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFFLEVBQUUsS0FBSyxJQUFFLENBQUMsRUFBRSxHQUFHLEdBQUMsRUFBRSxDQUFDLEdBQUUsRUFBRSxHQUFHLENBQUMsR0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFDLEVBQUUsd0JBQXdCLENBQUMsR0FBRSxFQUFFLEdBQUcsRUFBRSxHQUFFLElBQUUsRUFBRSxLQUFLLEVBQUMsSUFBRSxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRSx3QkFBd0IsSUFBRSxJQUFJLElBQUUsRUFBRSxrQkFBa0IsSUFBRSxJQUFJLElBQUUsRUFBRSxrQkFBa0IsSUFBRyxFQUFFLGlCQUFpQixJQUFFLElBQUksSUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxpQkFBaUIsQ0FBQztpQkFBSztnQkFBQyxJQUFHLEVBQUUsd0JBQXdCLElBQUUsSUFBSSxJQUFFLE1BQUksS0FBRyxFQUFFLHlCQUF5QixJQUFFLElBQUksSUFBRSxFQUFFLHlCQUF5QixDQUFDLEdBQUUsSUFBRyxDQUFDLEVBQUUsR0FBRyxJQUFFLEVBQUUscUJBQXFCLElBQUUsSUFBSSxJQUFFLEVBQUUscUJBQXFCLENBQUMsR0FBRSxFQUFFLEdBQUcsRUFBQyxPQUFLLENBQUMsS0FBRyxFQUFFLEdBQUcsS0FBRyxFQUFFLEdBQUcsRUFBQztvQkFBQyxJQUFJLEVBQUUsS0FBSyxHQUFDLEdBQUUsRUFBRSxLQUFLLEdBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxHQUFHLEtBQUcsRUFBRSxHQUFHLElBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBQyxDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUcsR0FBQyxHQUFFLEVBQUUsR0FBRyxHQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxHQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQzt3QkFBQyxLQUFHLENBQUMsRUFBRSxFQUFFLEdBQUMsQ0FBQztvQkFBQyxJQUFHLElBQUUsQ0FBQyxFQUFDLElBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7b0JBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxFQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sSUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO29CQUFDLE1BQU0sQ0FBQztnQkFBQSxDQUFDO2dCQUFBLEVBQUUsbUJBQW1CLElBQUUsSUFBSSxJQUFFLEVBQUUsbUJBQW1CLENBQUMsR0FBRSxFQUFFLEdBQUcsRUFBQyxJQUFHLEVBQUUsa0JBQWtCLElBQUUsSUFBSSxJQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFVO29CQUFDLEVBQUUsa0JBQWtCLENBQUMsR0FBRSxHQUFFO2dCQUFFLEVBQUU7WUFBQSxDQUFDO1lBQUEsSUFBRyxFQUFFLE9BQU8sR0FBQyxHQUFFLEVBQUUsS0FBSyxHQUFDLEdBQUUsRUFBRSxHQUFHLEdBQUMsR0FBRSxFQUFFLEdBQUcsR0FBQyxHQUFFLElBQUUsRUFBRSxHQUFHLEVBQUMsSUFBRSxHQUFFLGVBQWMsS0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUM7Z0JBQUMsSUFBSSxFQUFFLEtBQUssR0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEdBQUcsR0FBQyxDQUFDLEdBQUUsS0FBRyxFQUFFLElBQUcsSUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBQyxFQUFFLEtBQUssRUFBQyxFQUFFLE9BQU8sR0FBRSxJQUFFLENBQUMsRUFBQyxJQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxHQUFDLEVBQUU7WUFBQSxPQUFNLEdBQUcsRUFBRSxHQUFHLEdBQUMsQ0FBQyxHQUFFLEtBQUcsRUFBRSxJQUFHLElBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUMsRUFBRSxLQUFLLEVBQUMsRUFBRSxPQUFPLEdBQUUsRUFBRSxLQUFLLEdBQUMsRUFBRSxHQUFHO21CQUFPLEVBQUUsR0FBRyxJQUFFLEVBQUUsSUFBRSxHQUFJO1lBQUEsRUFBRSxLQUFLLEdBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxlQUFlLElBQUUsSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUcsRUFBRSxlQUFlLEdBQUcsR0FBRSxLQUFHLEVBQUUsdUJBQXVCLElBQUUsSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLHVCQUF1QixDQUFDLEdBQUUsRUFBRSxHQUFFLElBQUUsS0FBRyxJQUFJLElBQUUsRUFBRSxJQUFJLEtBQUcsS0FBRyxFQUFFLEdBQUcsSUFBRSxJQUFJLEdBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxHQUFDLENBQUMsRUFBQyxFQUFFLEdBQUUsTUFBTSxPQUFPLENBQUMsS0FBRyxJQUFFO2dCQUFDO2FBQUUsRUFBQyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsRUFBRSxJQUFJLEdBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxHQUFHLEdBQUMsSUFBSSxFQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sSUFBRSxFQUFFLElBQUksQ0FBQyxJQUFHLEtBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBQyxFQUFFLEVBQUUsR0FBQyxJQUFJLEdBQUUsRUFBRSxHQUFHLEdBQUMsQ0FBQyxDQUFDO1FBQUEsT0FBTSxLQUFHLElBQUksSUFBRSxFQUFFLEdBQUcsS0FBRyxFQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxHQUFDLEVBQUUsR0FBRyxJQUFFLEVBQUUsR0FBRyxHQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUMsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRTtRQUFDLENBQUMsSUFBRSxFQUFFLE1BQU0sS0FBRyxFQUFFO0lBQUUsRUFBQyxPQUFNLEdBQUU7UUFBQyxFQUFFLEdBQUcsR0FBQyxJQUFJLEVBQUMsQ0FBQyxLQUFHLEtBQUcsSUFBSSxLQUFHLENBQUMsRUFBRSxHQUFHLEdBQUMsR0FBRSxFQUFFLEdBQUcsR0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxHQUFDLElBQUksR0FBRSxFQUFFLEdBQUcsQ0FBQyxHQUFFLEdBQUUsRUFBRTtJQUFBO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLEVBQUUsR0FBRyxJQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUUsSUFBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQztRQUFDLElBQUc7WUFBQyxJQUFFLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxHQUFDLEVBQUUsRUFBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQztnQkFBQyxFQUFFLElBQUksQ0FBQztZQUFFLEVBQUU7UUFBQSxFQUFDLE9BQU0sR0FBRTtZQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUUsRUFBRSxHQUFHO1FBQUM7SUFBQyxFQUFFO0FBQUE7QUFBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLElBQUksR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLEtBQUssRUFBQyxJQUFFLEVBQUUsS0FBSyxFQUFDLElBQUUsRUFBRSxJQUFJLEVBQUMsSUFBRTtJQUFFLElBQUcsTUFBSSxTQUFPLENBQUMsSUFBRSxDQUFDLENBQUMsR0FBRSxLQUFHLElBQUksRUFBQztRQUFDLE1BQUssSUFBRSxFQUFFLE1BQU0sRUFBQyxJQUFJLElBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUcsa0JBQWlCLEtBQUcsQ0FBQyxDQUFDLEtBQUcsQ0FBQyxJQUFFLEVBQUUsU0FBUyxLQUFHLElBQUUsRUFBRSxRQUFRLEtBQUcsQ0FBQyxHQUFFO1lBQUMsSUFBRSxHQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUMsSUFBSTtZQUFDLEtBQUs7UUFBQSxDQUFDO0lBQUEsQ0FBQztJQUFBLElBQUcsS0FBRyxJQUFJLEVBQUM7UUFBQyxJQUFHLE1BQUksSUFBSSxFQUFDLE9BQU8sU0FBUyxjQUFjLENBQUM7UUFBRyxJQUFFLElBQUUsU0FBUyxlQUFlLENBQUMsOEJBQTZCLEtBQUcsU0FBUyxhQUFhLENBQUMsR0FBRSxFQUFFLEVBQUUsSUFBRSxFQUFFLEVBQUMsSUFBRSxJQUFJLEVBQUMsSUFBRSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUEsSUFBRyxNQUFJLElBQUksRUFBQyxNQUFJLEtBQUcsS0FBRyxFQUFFLElBQUksS0FBRyxLQUFHLENBQUMsRUFBRSxJQUFJLEdBQUMsQ0FBQztTQUFNO1FBQUMsSUFBRyxJQUFFLEtBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxVQUFVLEdBQUUsSUFBRSxDQUFDLElBQUUsRUFBRSxLQUFLLElBQUUsQ0FBQyxFQUFFLHVCQUF1QixFQUFDLElBQUUsRUFBRSx1QkFBdUIsRUFBQyxDQUFDLENBQUMsRUFBQztZQUFDLElBQUcsS0FBRyxJQUFJLEVBQUMsSUFBSSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUMsRUFBQyxJQUFFLEVBQUUsVUFBVSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUs7WUFBQyxDQUFDLEtBQUcsQ0FBQyxLQUFHLENBQUMsS0FBRyxDQUFDLEtBQUcsRUFBRSxNQUFNLElBQUUsRUFBRSxNQUFNLElBQUUsRUFBRSxNQUFNLEtBQUcsRUFBRSxTQUFTLEtBQUcsQ0FBQyxFQUFFLFNBQVMsR0FBQyxLQUFHLEVBQUUsTUFBTSxJQUFFLEVBQUUsQ0FBQztRQUFDLENBQUM7UUFBQSxJQUFHLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLENBQUMsRUFBQyxFQUFFLEdBQUcsR0FBQyxFQUFFO2FBQU0sSUFBRyxJQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBQyxFQUFFLEdBQUUsTUFBTSxPQUFPLENBQUMsS0FBRyxJQUFFO1lBQUM7U0FBRSxFQUFDLEdBQUUsR0FBRSxHQUFFLEtBQUcsTUFBSSxpQkFBZ0IsR0FBRSxHQUFFLElBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUcsSUFBRSxFQUFFLEdBQUUsRUFBRSxFQUFDLElBQUcsS0FBRyxJQUFJLEVBQUMsSUFBSSxJQUFFLEVBQUUsTUFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBRSxJQUFJLElBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUFFLEtBQUcsQ0FBQyxXQUFVLEtBQUcsQ0FBQyxJQUFFLEVBQUUsS0FBSyxNQUFJLEtBQUssS0FBRyxDQUFDLE1BQUksRUFBRSxLQUFLLElBQUUsTUFBSSxjQUFZLENBQUMsS0FBRyxNQUFJLFlBQVUsTUFBSSxFQUFFLEtBQUssS0FBRyxFQUFFLEdBQUUsU0FBUSxHQUFFLEVBQUUsS0FBSyxFQUFDLENBQUMsSUFBRyxhQUFZLEtBQUcsQ0FBQyxJQUFFLEVBQUUsT0FBTyxNQUFJLEtBQUssS0FBRyxNQUFJLEVBQUUsT0FBTyxJQUFFLEVBQUUsR0FBRSxXQUFVLEdBQUUsRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUFFO0lBQUMsQ0FBQztJQUFBLE9BQU87QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLElBQUc7UUFBQyxPQUFPLEtBQUcsYUFBVyxFQUFFLEtBQUcsRUFBRSxPQUFPLEdBQUMsQ0FBQztJQUFBLEVBQUMsT0FBTSxHQUFFO1FBQUMsRUFBRSxHQUFHLENBQUMsR0FBRTtJQUFFO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFJLEdBQUU7SUFBRSxJQUFHLEVBQUUsT0FBTyxJQUFFLEVBQUUsT0FBTyxDQUFDLElBQUcsQ0FBQyxJQUFFLEVBQUUsR0FBRyxLQUFHLENBQUMsRUFBRSxPQUFPLElBQUUsRUFBRSxPQUFPLEtBQUcsRUFBRSxHQUFHLElBQUUsRUFBRSxHQUFFLElBQUksRUFBQyxFQUFFLEdBQUUsQ0FBQyxJQUFFLEVBQUUsR0FBRyxLQUFHLElBQUksRUFBQztRQUFDLElBQUcsRUFBRSxvQkFBb0IsRUFBQyxJQUFHO1lBQUMsRUFBRSxvQkFBb0I7UUFBRSxFQUFDLE9BQU0sR0FBRTtZQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUU7UUFBRTtRQUFDLEVBQUUsSUFBSSxHQUFDLEVBQUUsR0FBRyxHQUFDLElBQUksRUFBQyxFQUFFLEdBQUcsR0FBQyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQUEsSUFBRyxJQUFFLEVBQUUsR0FBRyxFQUFDLElBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxHQUFFLEtBQUcsT0FBTyxFQUFFLElBQUksSUFBRTtJQUFZLEtBQUcsRUFBRSxHQUFHLElBQUUsSUFBSSxJQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUUsRUFBRSxFQUFFLEdBQUMsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLEdBQUMsS0FBSyxDQUFDO0FBQUE7QUFBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRTtBQUFFO0FBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxHQUFFLEdBQUU7SUFBRSxFQUFFLEVBQUUsSUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRSxDQUFDLElBQUUsT0FBTyxLQUFHLFVBQVUsSUFBRSxJQUFJLEdBQUMsS0FBRyxFQUFFLEdBQUcsSUFBRSxFQUFFLEdBQUcsRUFBQyxJQUFFLEVBQUUsRUFBQyxFQUFFLEdBQUUsSUFBRSxDQUFDLENBQUMsS0FBRyxLQUFHLENBQUMsRUFBRSxHQUFHLEdBQUMsR0FBRyxHQUFFLElBQUksRUFBQztRQUFDO0tBQUUsR0FBRSxLQUFHLEdBQUUsR0FBRSxFQUFFLGVBQWUsS0FBRyxLQUFLLEdBQUUsQ0FBQyxLQUFHLElBQUU7UUFBQztLQUFFLEdBQUMsSUFBRSxJQUFJLEdBQUMsRUFBRSxVQUFVLEdBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxVQUFVLElBQUUsSUFBSSxFQUFDLEdBQUUsQ0FBQyxLQUFHLElBQUUsSUFBRSxJQUFFLEVBQUUsR0FBRyxHQUFDLEVBQUUsVUFBVSxFQUFDLElBQUcsRUFBRSxHQUFFLEVBQUU7QUFBQTtBQUF1dEIsSUFBRSxFQUFFLEtBQUssRUFBQyxJQUFFO0lBQUMsS0FBSSxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUksSUFBSSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsRUFBRSxFQUFFLElBQUcsQ0FBQyxJQUFFLEVBQUUsR0FBRyxLQUFHLENBQUMsRUFBRSxFQUFFLEVBQUMsSUFBRztZQUFDLElBQUcsQ0FBQyxJQUFFLEVBQUUsV0FBVyxLQUFHLEVBQUUsd0JBQXdCLElBQUUsSUFBSSxJQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxLQUFJLElBQUUsRUFBRSxHQUFHLEdBQUUsRUFBRSxpQkFBaUIsSUFBRSxJQUFJLElBQUUsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLEdBQUUsS0FBRyxDQUFDLElBQUcsSUFBRSxFQUFFLEdBQUcsR0FBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsR0FBQztRQUFDLEVBQUMsT0FBTSxHQUFFO1lBQUMsSUFBRTtRQUFDO1FBQUMsTUFBTSxFQUFDO0lBQUE7QUFBQyxHQUFFLElBQUUsR0FBeUQsRUFBRSxTQUFTLENBQUMsUUFBUSxHQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztJQUFDLElBQUk7SUFBRSxJQUFFLElBQUksQ0FBQyxHQUFHLElBQUUsSUFBSSxJQUFFLElBQUksQ0FBQyxHQUFHLEtBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLE9BQU8sS0FBRyxjQUFZLENBQUMsSUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFFLEtBQUcsRUFBRSxHQUFFLElBQUcsS0FBRyxJQUFJLElBQUUsSUFBSSxDQUFDLEdBQUcsSUFBRSxDQUFDLEtBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQUEsR0FBRSxFQUFFLFNBQVMsQ0FBQyxXQUFXLEdBQUMsU0FBUyxDQUFDLEVBQUM7SUFBQyxJQUFJLENBQUMsR0FBRyxJQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUUsS0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFHLEVBQUUsSUFBSSxDQUFDO0FBQUMsR0FBRSxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUMsR0FBRSxJQUFFLEVBQUUsRUFBQyxFQUFFLEdBQUcsR0FBQyxHQUFJLENBQUM7QUNBaGxULElBQUksSUFBRTtBQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxHQUFFLEdBQUUsSUFBRSxDQUFDO0lBQUUsSUFBSSxLQUFLLEVBQUUsS0FBRyxRQUFNLElBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFFO0lBQUMsSUFBSSxJQUFFO1FBQUMsTUFBSztRQUFFLE9BQU07UUFBRSxLQUFJO1FBQUUsS0FBSTtRQUFFLEtBQUksSUFBSTtRQUFDLElBQUcsSUFBSTtRQUFDLEtBQUk7UUFBRSxLQUFJLElBQUk7UUFBQyxLQUFJLEtBQUs7UUFBRSxLQUFJLElBQUk7UUFBQyxLQUFJLElBQUk7UUFBQyxhQUFZLEtBQUs7UUFBRSxLQUFJLEVBQUU7UUFBRSxVQUFTO1FBQUUsUUFBTztJQUFDO0lBQUUsSUFBRyxPQUFPLEtBQUcsY0FBWSxDQUFDLElBQUUsRUFBRSxZQUFZLEdBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxLQUFLLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFFO0lBQUUsT0FBTyxFQUFFLEtBQUssSUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFHLENBQUM7QUFBQTtBQ012YyxTQUFTLEdBQUcsR0FBRyxPQUFrQixFQUFVO0lBQ2hELE9BQU8sUUFBUSxNQUFNLENBQUMsQ0FBQSxJQUFLLEtBQUssT0FBTyxNQUFNLFVBQVUsSUFBSSxDQUFDO0FBQzlEO0FDUmdFLElBQUksR0FBRSxHQUFFLElBQUUsSUFBRSxJQUFFLEdBQUUsS0FBRSxFQUFFLEVBQUMsSUFBRSxFQUFFLEVBQUMsS0FBRSxFQUFFLEdBQUcsRUFBQyxJQUFFLEVBQUUsR0FBRyxFQUFDLElBQUUsRUFBRSxNQUFNLEVBQUMsSUFBRSxFQUFFLEdBQUcsRUFBQyxLQUFFLEVBQUUsT0FBTztBQUFDLFNBQVMsR0FBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsRUFBRSxHQUFHLElBQUUsRUFBRSxHQUFHLENBQUMsR0FBRSxHQUFFLEtBQUcsSUFBRyxJQUFFLENBQUM7SUFBQyxJQUFJLElBQUUsRUFBRSxHQUFHLElBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBQztRQUFDLElBQUcsRUFBRTtRQUFDLEtBQUksRUFBRTtJQUFBLENBQUM7SUFBRSxPQUFPLEtBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxJQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztRQUFDLEtBQUk7SUFBQyxJQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFBQTtBQUFDLFNBQVMsR0FBRSxDQUFDLEVBQUM7SUFBQyxPQUFPLElBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRTtBQUFBO0FBQUMsU0FBUyxHQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBSSxJQUFFLEdBQUUsS0FBSTtJQUFHLElBQUcsRUFBRSxDQUFDLEdBQUMsR0FBRSxDQUFDLEVBQUUsR0FBRyxJQUFFLENBQUMsRUFBRSxFQUFFLEdBQUM7UUFBQyxJQUFFLEVBQUUsS0FBRyxFQUFFLEtBQUssR0FBRSxFQUFFO1FBQUMsU0FBUyxDQUFDLEVBQUM7WUFBQyxJQUFJLElBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUU7WUFBRyxNQUFJLEtBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBQztnQkFBQztnQkFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2FBQUMsRUFBQyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO1FBQUM7S0FBRSxFQUFDLEVBQUUsR0FBRyxHQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDO1FBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQztRQUFFLElBQUksSUFBRSxFQUFFLHFCQUFxQjtRQUFDLEVBQUUscUJBQXFCLEdBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztZQUFDLElBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUMsT0FBTSxDQUFDO1lBQUUsSUFBSSxJQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFDO2dCQUFDLE9BQU8sRUFBRSxHQUFHO1lBQUE7WUFBRyxJQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFDO2dCQUFDLE9BQU0sQ0FBQyxFQUFFLEdBQUc7WUFBQSxJQUFHLE9BQU0sQ0FBQyxLQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxHQUFFLEdBQUU7WUFBRyxJQUFJLElBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUM7Z0JBQUMsSUFBRyxFQUFFLEdBQUcsRUFBQztvQkFBQyxJQUFJLElBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFBQyxFQUFFLEVBQUUsR0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEdBQUcsR0FBQyxLQUFLLEdBQUUsTUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUFBLENBQUM7WUFBQSxJQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxLQUFHLENBQUMsS0FBRyxDQUFDLENBQUMsS0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsR0FBRSxHQUFFLEVBQUUsQ0FBQztRQUFBO0lBQUMsQ0FBQztJQUFBLE9BQU8sRUFBRSxHQUFHLElBQUUsRUFBRSxFQUFFO0FBQUE7QUFBa2hDLFNBQVMsSUFBRztJQUFDLElBQUksSUFBSSxHQUFFLElBQUUsR0FBRSxLQUFLLElBQUksSUFBRyxFQUFFLEdBQUcsSUFBRSxFQUFFLEdBQUcsRUFBQyxJQUFHO1FBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUMsRUFBRTtJQUFBLEVBQUMsT0FBTSxHQUFFO1FBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFDLEVBQUUsRUFBQyxFQUFFLEdBQUcsQ0FBQyxHQUFFLEVBQUUsR0FBRyxDQUFDO0lBQUE7QUFBQztBQUFDLEVBQUUsR0FBRyxHQUFDLFNBQVMsQ0FBQyxFQUFDO0lBQUMsSUFBRSxJQUFJLEVBQUMsTUFBRyxHQUFFLEVBQUU7QUFBQSxHQUFFLEVBQUUsR0FBRyxHQUFDLFNBQVMsQ0FBQyxFQUFDO0lBQUMsS0FBRyxFQUFFLElBQUcsSUFBRSxDQUFDO0lBQUMsSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQUMsS0FBRyxDQUFDLE9BQUksSUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFDLEVBQUUsRUFBQyxFQUFFLEdBQUcsR0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFDO1FBQUMsRUFBRSxHQUFHLElBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBQyxFQUFFLEdBQUcsR0FBRSxFQUFFLEdBQUcsR0FBQyxHQUFFLEVBQUUsR0FBRyxHQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUssQ0FBQztJQUFBLEVBQUUsSUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFHLEVBQUUsR0FBRyxHQUFDLEVBQUUsQ0FBQyxHQUFFLEtBQUUsQ0FBQztBQUFBLEdBQUUsRUFBRSxNQUFNLEdBQUMsU0FBUyxDQUFDLEVBQUM7SUFBQyxLQUFHLEVBQUU7SUFBRyxJQUFJLElBQUUsRUFBRSxHQUFHO0lBQUMsS0FBRyxFQUFFLEdBQUcsSUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxPQUFLLEtBQUcsT0FBSSxFQUFFLHFCQUFxQixJQUFFLENBQUMsQ0FBQyxLQUFFLEVBQUUscUJBQXFCLEtBQUcsRUFBQyxFQUFFLEVBQUUsR0FBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFDO1FBQUMsRUFBRSxDQUFDLElBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBQyxFQUFFLENBQUMsR0FBRSxFQUFFLEdBQUcsS0FBRyxLQUFHLENBQUMsRUFBRSxFQUFFLEdBQUMsRUFBRSxHQUFHLEdBQUUsRUFBRSxDQUFDLEdBQUMsS0FBSyxHQUFFLEVBQUUsR0FBRyxHQUFDLENBQUM7SUFBQSxFQUFFLEdBQUUsS0FBRSxJQUFFLElBQUk7QUFBQSxHQUFFLEVBQUUsR0FBRyxHQUFDLFNBQVMs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

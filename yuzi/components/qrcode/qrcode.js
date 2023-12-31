function qrPolynomial(r, t) {
	if ("undefined" == typeof r.length) throw new Error(r.length + "/" + t);
	var e = function() {
			for (var e = 0; e < r.length && 0 == r[e];) e += 1;
			for (var n = new Array(r.length - e + t), o = 0; o < r.length - e; o += 1) n[o] = r[o + e];
			return n
		}(),
		n = {};
	return n.getAt = function(r) {
		return e[r]
	}, n.getLength = function() {
		return e.length
	}, n.multiply = function(r) {
		for (var t = new Array(n.getLength() + r.getLength() - 1), e = 0; e < n.getLength(); e += 1)
			for (var o = 0; o < r.getLength(); o += 1) t[e + o] ^= QRMath.gexp(QRMath.glog(n.getAt(e)) + QRMath
				.glog(r.getAt(o)));
		return qrPolynomial(t, 0)
	}, n.mod = function(r) {
		if (n.getLength() - r.getLength() < 0) return n;
		for (var t = QRMath.glog(n.getAt(0)) - QRMath.glog(r.getAt(0)), e = new Array(n.getLength()), o = 0; o < n
			.getLength(); o += 1) e[o] = n.getAt(o);
		for (var o = 0; o < r.getLength(); o += 1) e[o] ^= QRMath.gexp(QRMath.glog(r.getAt(o)) + t);
		return qrPolynomial(e, 0).mod(r)
	}, n
}
var qrcode = function(r, t) {
	var e = 236,
		n = 17,
		o = r,
		a = QRErrorCorrectLevel[t],
		i = null,
		u = 0,
		f = null,
		c = new Array,
		g = {},
		l = function(r, t) {
			u = 4 * o + 17, i = function(r) {
				for (var t = new Array(r), e = 0; e < r; e += 1) {
					t[e] = new Array(r);
					for (var n = 0; n < r; n += 1) t[e][n] = null
				}
				return t
			}(u), h(0, 0), h(u - 7, 0), h(0, u - 7), d(), s(), y(r, t), o >= 7 && w(r), null == f && (f = p(o,
				a, c)), M(f, t)
		},
		h = function(r, t) {
			for (var e = -1; e <= 7; e += 1)
				if (!(r + e <= -1 || u <= r + e))
					for (var n = -1; n <= 7; n += 1) t + n <= -1 || u <= t + n || (0 <= e && e <= 6 && (0 == n ||
							6 == n) || 0 <= n && n <= 6 && (0 == e || 6 == e) || 2 <= e && e <= 4 && 2 <= n &&
						n <= 4 ? i[r + e][t + n] = !0 : i[r + e][t + n] = !1)
		},
		v = function() {
			for (var r = 0, t = 0, e = 0; e < 8; e += 1) {
				l(!0, e);
				var n = QRUtil.getLostPoint(g);
				(0 == e || r > n) && (r = n, t = e)
			}
			return t
		},
		s = function() {
			for (var r = 8; r < u - 8; r += 1) null == i[r][6] && (i[r][6] = r % 2 == 0);
			for (var t = 8; t < u - 8; t += 1) null == i[6][t] && (i[6][t] = t % 2 == 0)
		},
		d = function() {
			for (var r = QRUtil.getPatternPosition(o), t = 0; t < r.length; t += 1)
				for (var e = 0; e < r.length; e += 1) {
					var n = r[t],
						a = r[e];
					if (null == i[n][a])
						for (var u = -2; u <= 2; u += 1)
							for (var f = -2; f <= 2; f += 1) u == -2 || 2 == u || f == -2 || 2 == f || 0 == u &&
								0 == f ? i[n + u][a + f] = !0 : i[n + u][a + f] = !1
				}
		},
		w = function(r) {
			for (var t = QRUtil.getBCHTypeNumber(o), e = 0; e < 18; e += 1) {
				var n = !r && 1 == (t >> e & 1);
				i[Math.floor(e / 3)][e % 3 + u - 8 - 3] = n
			}
			for (var e = 0; e < 18; e += 1) {
				var n = !r && 1 == (t >> e & 1);
				i[e % 3 + u - 8 - 3][Math.floor(e / 3)] = n
			}
		},
		y = function(r, t) {
			for (var e = a << 3 | t, n = QRUtil.getBCHTypeInfo(e), o = 0; o < 15; o += 1) {
				var f = !r && 1 == (n >> o & 1);
				o < 6 ? i[o][8] = f : o < 8 ? i[o + 1][8] = f : i[u - 15 + o][8] = f
			}
			for (var o = 0; o < 15; o += 1) {
				var f = !r && 1 == (n >> o & 1);
				o < 8 ? i[8][u - o - 1] = f : o < 9 ? i[8][15 - o - 1 + 1] = f : i[8][15 - o - 1] = f
			}
			i[u - 8][8] = !r
		},
		M = function(r, t) {
			for (var e = -1, n = u - 1, o = 7, a = 0, f = QRUtil.getMaskFunction(t), c = u - 1; c > 0; c -= 2)
				for (6 == c && (c -= 1);;) {
					for (var g = 0; g < 2; g += 1)
						if (null == i[n][c - g]) {
							var l = !1;
							a < r.length && (l = 1 == (r[a] >>> o & 1));
							var h = f(n, c - g);
							h && (l = !l), i[n][c - g] = l, o -= 1, o == -1 && (a += 1, o = 7)
						} if (n += e, n < 0 || u <= n) {
						n -= e, e = -e;
						break
					}
				}
		},
		B = function(r, t) {
			for (var e = 0, n = 0, o = 0, a = new Array(t.length), i = new Array(t.length), u = 0; u < t
				.length; u += 1) {
				var f = t[u].dataCount,
					c = t[u].totalCount - f;
				n = Math.max(n, f), o = Math.max(o, c), a[u] = new Array(f);
				for (var g = 0; g < a[u].length; g += 1) a[u][g] = 255 & r.getBuffer()[g + e];
				e += f;
				var l = QRUtil.getErrorCorrectPolynomial(c),
					h = qrPolynomial(a[u], l.getLength() - 1),
					v = h.mod(l);
				i[u] = new Array(l.getLength() - 1);
				for (var g = 0; g < i[u].length; g += 1) {
					var s = g + v.getLength() - i[u].length;
					i[u][g] = s >= 0 ? v.getAt(s) : 0
				}
			}
			for (var d = 0, g = 0; g < t.length; g += 1) d += t[g].totalCount;
			for (var w = new Array(d), y = 0, g = 0; g < n; g += 1)
				for (var u = 0; u < t.length; u += 1) g < a[u].length && (w[y] = a[u][g], y += 1);
			for (var g = 0; g < o; g += 1)
				for (var u = 0; u < t.length; u += 1) g < i[u].length && (w[y] = i[u][g], y += 1);
			return w
		},
		p = function(r, t, o) {
			for (var a = QRRSBlock.getRSBlocks(r, t), i = qrBitBuffer(), u = 0; u < o.length; u += 1) {
				var f = o[u];
				i.put(f.getMode(), 4), i.put(f.getLength(), QRUtil.getLengthInBits(f.getMode(), r)), f.write(i)
			}
			for (var c = 0, u = 0; u < a.length; u += 1) c += a[u].dataCount;
			if (i.getLengthInBits() > 8 * c) throw new Error("code length overflow. (" + i.getLengthInBits() + ">" +
				8 * c + ")");
			for (i.getLengthInBits() + 4 <= 8 * c && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(!1);
			for (;;) {
				if (i.getLengthInBits() >= 8 * c) break;
				if (i.put(e, 8), i.getLengthInBits() >= 8 * c) break;
				i.put(n, 8)
			}
			return B(i, a)
		};
	return g.addData = function(r) {
		var t = qr8BitByte(r);
		c.push(t), f = null
	}, g.isDark = function(r, t) {
		if (r < 0 || u <= r || t < 0 || u <= t) throw new Error(r + "," + t);
		return i[r][t]
	}, g.getModuleCount = function() {
		return u
	}, g.make = function() {
		l(!1, v())
	}, g.createTableTag = function(r, t) {
		r = r || 2, t = "undefined" == typeof t ? 4 * r : t;
		var e = "";
		e += '<table style="', e += " border-width: 0upx; border-style: none;", e +=
			" border-collapse: collapse;", e += " padding: 0upx; margin: " + t + "upx;", e += '">', e +=
			"<tbody>";
		for (var n = 0; n < g.getModuleCount(); n += 1) {
			e += "<tr>";
			for (var o = 0; o < g.getModuleCount(); o += 1) e += '<td style="', e +=
				" border-width: 0upx; border-style: none;", e += " border-collapse: collapse;", e +=
				" padding: 0upx; margin: 0upx;", e += " width: " + r + "upx;", e += " height: " + r + "upx;",
				e += " background-color: ", e += g.isDark(n, o) ? "#000000" : "#ffffff", e += ";", e += '"/>';
			e += "</tr>"
		}
		return e += "</tbody>", e += "</table>"
	}, g.createImgTag = function(r, t, e) {
		r = r || 2, t = "undefined" == typeof t ? 4 * r : t;
		var n = t,
			o = g.getModuleCount() * r + t;
		return createImgTag(e, e, function(t, e) {
			if (n <= t && t < o && n <= e && e < o) {
				var a = Math.floor((t - n) / r),
					i = Math.floor((e - n) / r);
				return g.isDark(i, a) ? 0 : 1
			}
			return 1
		})
	}, g
};
qrcode.stringToBytes = function(r) {
	for (var t = new Array, e = 0; e < r.length; e += 1) {
		var n = r.charCodeAt(e);
		t.push(255 & n)
	}
	return t
}, qrcode.createStringToBytes = function(r, t) {
	var e = function() {
			for (var e = base64DecodeInputStream(r), n = function() {
					var r = e.read();
					if (r == -1) throw new Error;
					return r
				}, o = 0, a = {};;) {
				var i = e.read();
				if (i == -1) break;
				var u = n(),
					f = n(),
					c = n(),
					g = String.fromCharCode(i << 8 | u),
					l = f << 8 | c;
				a[g] = l, o += 1
			}
			if (o != t) throw new Error(o + " != " + t);
			return a
		}(),
		n = "?".charCodeAt(0);
	return function(r) {
		for (var t = new Array, o = 0; o < r.length; o += 1) {
			var a = r.charCodeAt(o);
			if (a < 128) t.push(a);
			else {
				var i = e[r.charAt(o)];
				"number" == typeof i ? (255 & i) == i ? t.push(i) : (t.push(i >>> 8), t.push(255 & i)) : t.push(
					n)
			}
		}
		return t
	}
};
var QRMode = {
		MODE_NUMBER: 1,
		MODE_ALPHA_NUM: 2,
		MODE_8BIT_BYTE: 4,
		MODE_KANJI: 8
	},
	QRErrorCorrectLevel = {
		L: 1,
		M: 0,
		Q: 3,
		H: 2
	},
	QRMaskPattern = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	},
	QRUtil = function() {
		var r = [
				[],
				[6, 18],
				[6, 22],
				[6, 26],
				[6, 30],
				[6, 34],
				[6, 22, 38],
				[6, 24, 42],
				[6, 26, 46],
				[6, 28, 50],
				[6, 30, 54],
				[6, 32, 58],
				[6, 34, 62],
				[6, 26, 46, 66],
				[6, 26, 48, 70],
				[6, 26, 50, 74],
				[6, 30, 54, 78],
				[6, 30, 56, 82],
				[6, 30, 58, 86],
				[6, 34, 62, 90],
				[6, 28, 50, 72, 94],
				[6, 26, 50, 74, 98],
				[6, 30, 54, 78, 102],
				[6, 28, 54, 80, 106],
				[6, 32, 58, 84, 110],
				[6, 30, 58, 86, 114],
				[6, 34, 62, 90, 118],
				[6, 26, 50, 74, 98, 122],
				[6, 30, 54, 78, 102, 126],
				[6, 26, 52, 78, 104, 130],
				[6, 30, 56, 82, 108, 134],
				[6, 34, 60, 86, 112, 138],
				[6, 30, 58, 86, 114, 142],
				[6, 34, 62, 90, 118, 146],
				[6, 30, 54, 78, 102, 126, 150],
				[6, 24, 50, 76, 102, 128, 154],
				[6, 28, 54, 80, 106, 132, 158],
				[6, 32, 58, 84, 110, 136, 162],
				[6, 26, 54, 82, 110, 138, 166],
				[6, 30, 58, 86, 114, 142, 170]
			],
			t = 1335,
			e = 7973,
			n = 21522,
			o = {},
			a = function(r) {
				for (var t = 0; 0 != r;) t += 1, r >>>= 1;
				return t
			};
		return o.getBCHTypeInfo = function(r) {
			for (var e = r << 10; a(e) - a(t) >= 0;) e ^= t << a(e) - a(t);
			return (r << 10 | e) ^ n
		}, o.getBCHTypeNumber = function(r) {
			for (var t = r << 12; a(t) - a(e) >= 0;) t ^= e << a(t) - a(e);
			return r << 12 | t
		}, o.getPatternPosition = function(t) {
			return r[t - 1]
		}, o.getMaskFunction = function(r) {
			switch (r) {
				case QRMaskPattern.PATTERN000:
					return function(r, t) {
						return (r + t) % 2 == 0
					};
				case QRMaskPattern.PATTERN001:
					return function(r, t) {
						return r % 2 == 0
					};
				case QRMaskPattern.PATTERN010:
					return function(r, t) {
						return t % 3 == 0
					};
				case QRMaskPattern.PATTERN011:
					return function(r, t) {
						return (r + t) % 3 == 0
					};
				case QRMaskPattern.PATTERN100:
					return function(r, t) {
						return (Math.floor(r / 2) + Math.floor(t / 3)) % 2 == 0
					};
				case QRMaskPattern.PATTERN101:
					return function(r, t) {
						return r * t % 2 + r * t % 3 == 0
					};
				case QRMaskPattern.PATTERN110:
					return function(r, t) {
						return (r * t % 2 + r * t % 3) % 2 == 0
					};
				case QRMaskPattern.PATTERN111:
					return function(r, t) {
						return (r * t % 3 + (r + t) % 2) % 2 == 0
					};
				default:
					throw new Error("bad maskPattern:" + r)
			}
		}, o.getErrorCorrectPolynomial = function(r) {
			for (var t = qrPolynomial([1], 0), e = 0; e < r; e += 1) t = t.multiply(qrPolynomial([1, QRMath.gexp(
				e)], 0));
			return t
		}, o.getLengthInBits = function(r, t) {
			if (1 <= t && t < 10) switch (r) {
				case QRMode.MODE_NUMBER:
					return 10;
				case QRMode.MODE_ALPHA_NUM:
					return 9;
				case QRMode.MODE_8BIT_BYTE:
					return 8;
				case QRMode.MODE_KANJI:
					return 8;
				default:
					throw new Error("mode:" + r)
			} else if (t < 27) switch (r) {
				case QRMode.MODE_NUMBER:
					return 12;
				case QRMode.MODE_ALPHA_NUM:
					return 11;
				case QRMode.MODE_8BIT_BYTE:
					return 16;
				case QRMode.MODE_KANJI:
					return 10;
				default:
					throw new Error("mode:" + r)
			} else {
				if (!(t < 41)) throw new Error("type:" + t);
				switch (r) {
					case QRMode.MODE_NUMBER:
						return 14;
					case QRMode.MODE_ALPHA_NUM:
						return 13;
					case QRMode.MODE_8BIT_BYTE:
						return 16;
					case QRMode.MODE_KANJI:
						return 12;
					default:
						throw new Error("mode:" + r)
				}
			}
		}, o.getLostPoint = function(r) {
			for (var t = r.getModuleCount(), e = 0, n = 0; n < t; n += 1)
				for (var o = 0; o < t; o += 1) {
					for (var a = 0, i = r.isDark(n, o), u = -1; u <= 1; u += 1)
						if (!(n + u < 0 || t <= n + u))
							for (var f = -1; f <= 1; f += 1) o + f < 0 || t <= o + f || 0 == u && 0 == f || i == r
								.isDark(n + u, o + f) && (a += 1);
					a > 5 && (e += 3 + a - 5)
				}
			for (var n = 0; n < t - 1; n += 1)
				for (var o = 0; o < t - 1; o += 1) {
					var c = 0;
					r.isDark(n, o) && (c += 1), r.isDark(n + 1, o) && (c += 1), r.isDark(n, o + 1) && (c += 1), r
						.isDark(n + 1, o + 1) && (c += 1), 0 != c && 4 != c || (e += 3)
				}
			for (var n = 0; n < t; n += 1)
				for (var o = 0; o < t - 6; o += 1) r.isDark(n, o) && !r.isDark(n, o + 1) && r.isDark(n, o + 2) && r
					.isDark(n, o + 3) && r.isDark(n, o + 4) && !r.isDark(n, o + 5) && r.isDark(n, o + 6) && (e +=
						40);
			for (var o = 0; o < t; o += 1)
				for (var n = 0; n < t - 6; n += 1) r.isDark(n, o) && !r.isDark(n + 1, o) && r.isDark(n + 2, o) && r
					.isDark(n + 3, o) && r.isDark(n + 4, o) && !r.isDark(n + 5, o) && r.isDark(n + 6, o) && (e +=
						40);
			for (var g = 0, o = 0; o < t; o += 1)
				for (var n = 0; n < t; n += 1) r.isDark(n, o) && (g += 1);
			var l = Math.abs(100 * g / t / t - 50) / 5;
			return e += 10 * l
		}, o
	}(),
	QRMath = function() {
		for (var r = new Array(256), t = new Array(256), e = 0; e < 8; e += 1) r[e] = 1 << e;
		for (var e = 8; e < 256; e += 1) r[e] = r[e - 4] ^ r[e - 5] ^ r[e - 6] ^ r[e - 8];
		for (var e = 0; e < 255; e += 1) t[r[e]] = e;
		var n = {};
		return n.glog = function(r) {
			if (r < 1) throw new Error("glog(" + r + ")");
			return t[r]
		}, n.gexp = function(t) {
			for (; t < 0;) t += 255;
			for (; t >= 256;) t -= 255;
			return r[t]
		}, n
	}(),
	QRRSBlock = function() {
		var r = [
				[1, 26, 19],
				[1, 26, 16],
				[1, 26, 13],
				[1, 26, 9],
				[1, 44, 34],
				[1, 44, 28],
				[1, 44, 22],
				[1, 44, 16],
				[1, 70, 55],
				[1, 70, 44],
				[2, 35, 17],
				[2, 35, 13],
				[1, 100, 80],
				[2, 50, 32],
				[2, 50, 24],
				[4, 25, 9],
				[1, 134, 108],
				[2, 67, 43],
				[2, 33, 15, 2, 34, 16],
				[2, 33, 11, 2, 34, 12],
				[2, 86, 68],
				[4, 43, 27],
				[4, 43, 19],
				[4, 43, 15],
				[2, 98, 78],
				[4, 49, 31],
				[2, 32, 14, 4, 33, 15],
				[4, 39, 13, 1, 40, 14],
				[2, 121, 97],
				[2, 60, 38, 2, 61, 39],
				[4, 40, 18, 2, 41, 19],
				[4, 40, 14, 2, 41, 15],
				[2, 146, 116],
				[3, 58, 36, 2, 59, 37],
				[4, 36, 16, 4, 37, 17],
				[4, 36, 12, 4, 37, 13],
				[2, 86, 68, 2, 87, 69],
				[4, 69, 43, 1, 70, 44],
				[6, 43, 19, 2, 44, 20],
				[6, 43, 15, 2, 44, 16],
				[4, 101, 81],
				[1, 80, 50, 4, 81, 51],
				[4, 50, 22, 4, 51, 23],
				[3, 36, 12, 8, 37, 13],
				[2, 116, 92, 2, 117, 93],
				[6, 58, 36, 2, 59, 37],
				[4, 46, 20, 6, 47, 21],
				[7, 42, 14, 4, 43, 15],
				[4, 133, 107],
				[8, 59, 37, 1, 60, 38],
				[8, 44, 20, 4, 45, 21],
				[12, 33, 11, 4, 34, 12],
				[3, 145, 115, 1, 146, 116],
				[4, 64, 40, 5, 65, 41],
				[11, 36, 16, 5, 37, 17],
				[11, 36, 12, 5, 37, 13],
				[5, 109, 87, 1, 110, 88],
				[5, 65, 41, 5, 66, 42],
				[5, 54, 24, 7, 55, 25],
				[11, 36, 12],
				[5, 122, 98, 1, 123, 99],
				[7, 73, 45, 3, 74, 46],
				[15, 43, 19, 2, 44, 20],
				[3, 45, 15, 13, 46, 16],
				[1, 135, 107, 5, 136, 108],
				[10, 74, 46, 1, 75, 47],
				[1, 50, 22, 15, 51, 23],
				[2, 42, 14, 17, 43, 15],
				[5, 150, 120, 1, 151, 121],
				[9, 69, 43, 4, 70, 44],
				[17, 50, 22, 1, 51, 23],
				[2, 42, 14, 19, 43, 15],
				[3, 141, 113, 4, 142, 114],
				[3, 70, 44, 11, 71, 45],
				[17, 47, 21, 4, 48, 22],
				[9, 39, 13, 16, 40, 14],
				[3, 135, 107, 5, 136, 108],
				[3, 67, 41, 13, 68, 42],
				[15, 54, 24, 5, 55, 25],
				[15, 43, 15, 10, 44, 16],
				[4, 144, 116, 4, 145, 117],
				[17, 68, 42],
				[17, 50, 22, 6, 51, 23],
				[19, 46, 16, 6, 47, 17],
				[2, 139, 111, 7, 140, 112],
				[17, 74, 46],
				[7, 54, 24, 16, 55, 25],
				[34, 37, 13],
				[4, 151, 121, 5, 152, 122],
				[4, 75, 47, 14, 76, 48],
				[11, 54, 24, 14, 55, 25],
				[16, 45, 15, 14, 46, 16],
				[6, 147, 117, 4, 148, 118],
				[6, 73, 45, 14, 74, 46],
				[11, 54, 24, 16, 55, 25],
				[30, 46, 16, 2, 47, 17],
				[8, 132, 106, 4, 133, 107],
				[8, 75, 47, 13, 76, 48],
				[7, 54, 24, 22, 55, 25],
				[22, 45, 15, 13, 46, 16],
				[10, 142, 114, 2, 143, 115],
				[19, 74, 46, 4, 75, 47],
				[28, 50, 22, 6, 51, 23],
				[33, 46, 16, 4, 47, 17],
				[8, 152, 122, 4, 153, 123],
				[22, 73, 45, 3, 74, 46],
				[8, 53, 23, 26, 54, 24],
				[12, 45, 15, 28, 46, 16],
				[3, 147, 117, 10, 148, 118],
				[3, 73, 45, 23, 74, 46],
				[4, 54, 24, 31, 55, 25],
				[11, 45, 15, 31, 46, 16],
				[7, 146, 116, 7, 147, 117],
				[21, 73, 45, 7, 74, 46],
				[1, 53, 23, 37, 54, 24],
				[19, 45, 15, 26, 46, 16],
				[5, 145, 115, 10, 146, 116],
				[19, 75, 47, 10, 76, 48],
				[15, 54, 24, 25, 55, 25],
				[23, 45, 15, 25, 46, 16],
				[13, 145, 115, 3, 146, 116],
				[2, 74, 46, 29, 75, 47],
				[42, 54, 24, 1, 55, 25],
				[23, 45, 15, 28, 46, 16],
				[17, 145, 115],
				[10, 74, 46, 23, 75, 47],
				[10, 54, 24, 35, 55, 25],
				[19, 45, 15, 35, 46, 16],
				[17, 145, 115, 1, 146, 116],
				[14, 74, 46, 21, 75, 47],
				[29, 54, 24, 19, 55, 25],
				[11, 45, 15, 46, 46, 16],
				[13, 145, 115, 6, 146, 116],
				[14, 74, 46, 23, 75, 47],
				[44, 54, 24, 7, 55, 25],
				[59, 46, 16, 1, 47, 17],
				[12, 151, 121, 7, 152, 122],
				[12, 75, 47, 26, 76, 48],
				[39, 54, 24, 14, 55, 25],
				[22, 45, 15, 41, 46, 16],
				[6, 151, 121, 14, 152, 122],
				[6, 75, 47, 34, 76, 48],
				[46, 54, 24, 10, 55, 25],
				[2, 45, 15, 64, 46, 16],
				[17, 152, 122, 4, 153, 123],
				[29, 74, 46, 14, 75, 47],
				[49, 54, 24, 10, 55, 25],
				[24, 45, 15, 46, 46, 16],
				[4, 152, 122, 18, 153, 123],
				[13, 74, 46, 32, 75, 47],
				[48, 54, 24, 14, 55, 25],
				[42, 45, 15, 32, 46, 16],
				[20, 147, 117, 4, 148, 118],
				[40, 75, 47, 7, 76, 48],
				[43, 54, 24, 22, 55, 25],
				[10, 45, 15, 67, 46, 16],
				[19, 148, 118, 6, 149, 119],
				[18, 75, 47, 31, 76, 48],
				[34, 54, 24, 34, 55, 25],
				[20, 45, 15, 61, 46, 16]
			],
			t = function(r, t) {
				var e = {};
				return e.totalCount = r, e.dataCount = t, e
			},
			e = {},
			n = function(t, e) {
				switch (e) {
					case QRErrorCorrectLevel.L:
						return r[4 * (t - 1) + 0];
					case QRErrorCorrectLevel.M:
						return r[4 * (t - 1) + 1];
					case QRErrorCorrectLevel.Q:
						return r[4 * (t - 1) + 2];
					case QRErrorCorrectLevel.H:
						return r[4 * (t - 1) + 3];
					default:
						return
				}
			};
		return e.getRSBlocks = function(r, e) {
			var o = n(r, e);
			if ("undefined" == typeof o) throw new Error(
				"bad rs block [url=home.php?mod=space&uid=5302]@[/url] typeNumber:" + r +
				"/errorCorrectLevel:" + e);
			for (var a = o.length / 3, i = new Array, u = 0; u < a; u += 1)
				for (var f = o[3 * u + 0], c = o[3 * u + 1], g = o[3 * u + 2], l = 0; l < f; l += 1) i.push(t(c,
				g));
			return i
		}, e
	}(),
	qrBitBuffer = function() {
		var r = new Array,
			t = 0,
			e = {};
		return e.getBuffer = function() {
			return r
		}, e.getAt = function(t) {
			var e = Math.floor(t / 8);
			return 1 == (r[e] >>> 7 - t % 8 & 1)
		}, e.put = function(r, t) {
			for (var n = 0; n < t; n += 1) e.putBit(1 == (r >>> t - n - 1 & 1))
		}, e.getLengthInBits = function() {
			return t
		}, e.putBit = function(e) {
			var n = Math.floor(t / 8);
			r.length <= n && r.push(0), e && (r[n] |= 128 >>> t % 8), t += 1
		}, e
	},
	qr8BitByte = function(r) {
		for (var t = QRMode.MODE_8BIT_BYTE, e = r, n = [], o = {}, a = 0, i = e.length; a < i; a++) {
			var u = [],
				f = e.charCodeAt(a);
			f > 65536 ? (u[0] = 240 | (1835008 & f) >>> 18, u[1] = 128 | (258048 & f) >>> 12, u[2] = 128 | (4032 &
				f) >>> 6, u[3] = 128 | 63 & f) : f > 2048 ? (u[0] = 224 | (61440 & f) >>> 12, u[1] = 128 | (4032 &
				f) >>> 6, u[2] = 128 | 63 & f) : f > 128 ? (u[0] = 192 | (1984 & f) >>> 6, u[1] = 128 | 63 & f) : u[
				0] = f, n.push(u)
		}
		n = Array.prototype.concat.apply([], n), n.length != e.length && (n.unshift(191), n.unshift(187), n.unshift(
			239));
		var c = n;
		return o.getMode = function() {
			return t
		}, o.getLength = function(r) {
			return c.length
		}, o.write = function(r) {
			for (var t = 0; t < c.length; t += 1) r.put(c[t], 8)
		}, o
	},
	byteArrayOutputStream = function() {
		var r = new Array,
			t = {};
		return t.writeByte = function(t) {
			r.push(255 & t)
		}, t.writeShort = function(r) {
			t.writeByte(r), t.writeByte(r >>> 8)
		}, t.writeBytes = function(r, e, n) {
			e = e || 0, n = n || r.length;
			for (var o = 0; o < n; o += 1) t.writeByte(r[o + e])
		}, t.writeString = function(r) {
			for (var e = 0; e < r.length; e += 1) t.writeByte(r.charCodeAt(e))
		}, t.toByteArray = function() {
			return r
		}, t.toString = function() {
			var t = "";
			t += "[";
			for (var e = 0; e < r.length; e += 1) e > 0 && (t += ","), t += r[e];
			return t += "]"
		}, t
	},
	base64EncodeOutputStream = function() {
		var r = 0,
			t = 0,
			e = 0,
			n = "",
			o = {},
			a = function(r) {
				n += String.fromCharCode(i(63 & r))
			},
			i = function(r) {
				if (r < 0);
				else {
					if (r < 26) return 65 + r;
					if (r < 52) return 97 + (r - 26);
					if (r < 62) return 48 + (r - 52);
					if (62 == r) return 43;
					if (63 == r) return 47
				}
				throw new Error("n:" + r)
			};
		return o.writeByte = function(n) {
			for (r = r << 8 | 255 & n, t += 8, e += 1; t >= 6;) a(r >>> t - 6), t -= 6
		}, o.flush = function() {
			if (t > 0 && (a(r << 6 - t), r = 0, t = 0), e % 3 != 0)
				for (var o = 3 - e % 3, i = 0; i < o; i += 1) n += "="
		}, o.toString = function() {
			return n
		}, o
	},
	base64DecodeInputStream = function(r) {
		var t = r,
			e = 0,
			n = 0,
			o = 0,
			a = {};
		a.read = function() {
			for (; o < 8;) {
				if (e >= t.length) {
					if (0 == o) return -1;
					throw new Error("unexpected end of file./" + o)
				}
				var r = t.charAt(e);
				if (e += 1, "=" == r) return o = 0, -1;
				r.match(/^\s$/) || (n = n << 6 | i(r.charCodeAt(0)), o += 6)
			}
			var a = n >>> o - 8 & 255;
			return o -= 8, a
		};
		var i = function(r) {
			if (65 <= r && r <= 90) return r - 65;
			if (97 <= r && r <= 122) return r - 97 + 26;
			if (48 <= r && r <= 57) return r - 48 + 52;
			if (43 == r) return 62;
			if (47 == r) return 63;
			throw new Error("c:" + r)
		};
		return a
	},
	gifImage = function(r, t) {
		var e = r,
			n = t,
			o = new Array(r * t),
			a = {};
		a.setPixel = function(r, t, n) {
			o[t * e + r] = n
		}, a.write = function(r) {
			r.writeString("GIF87a"), r.writeShort(e), r.writeShort(n), r.writeByte(128), r.writeByte(0), r
				.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(255), r.writeByte(255), r
				.writeByte(255), r.writeString(","), r.writeShort(0), r.writeShort(0), r.writeShort(e), r
				.writeShort(n), r.writeByte(0);
			var t = 2,
				o = u(t);
			r.writeByte(t);
			for (var a = 0; o.length - a > 255;) r.writeByte(255), r.writeBytes(o, a, 255), a += 255;
			r.writeByte(o.length - a), r.writeBytes(o, a, o.length - a), r.writeByte(0), r.writeString(";")
		};
		var i = function(r) {
				var t = r,
					e = 0,
					n = 0,
					o = {};
				return o.write = function(r, o) {
					if (r >>> o != 0) throw new Error("length over");
					for (; e + o >= 8;) t.writeByte(255 & (r << e | n)), o -= 8 - e, r >>>= 8 - e, n = 0, e = 0;
					n |= r << e, e += o
				}, o.flush = function() {
					e > 0 && t.writeByte(n)
				}, o
			},
			u = function(r) {
				for (var t = 1 << r, e = (1 << r) + 1, n = r + 1, a = f(), u = 0; u < t; u += 1) a.add(String
					.fromCharCode(u));
				a.add(String.fromCharCode(t)), a.add(String.fromCharCode(e));
				var c = byteArrayOutputStream(),
					g = i(c);
				g.write(t, n);
				var l = 0,
					h = String.fromCharCode(o[l]);
				for (l += 1; l < o.length;) {
					var v = String.fromCharCode(o[l]);
					l += 1, a.contains(h + v) ? h += v : (g.write(a.indexOf(h), n), a.size() < 4095 && (a.size() == 1 <<
						n && (n += 1), a.add(h + v)), h = v)
				}
				return g.write(a.indexOf(h), n), g.write(e, n), g.flush(), c.toByteArray()
			},
			f = function() {
				var r = {},
					t = 0,
					e = {};
				return e.add = function(n) {
					if (e.contains(n)) throw new Error("dup key:" + n);
					r[n] = t, t += 1
				}, e.size = function() {
					return t
				}, e.indexOf = function(t) {
					return r[t]
				}, e.contains = function(t) {
					return "undefined" != typeof r[t]
				}, e
			};
		return a
	},
	createImgTag = function(r, t, e, n) {
		for (var o = gifImage(r, t), a = 0; a < t; a += 1)
			for (var i = 0; i < r; i += 1) o.setPixel(i, a, e(i, a));
		var u = byteArrayOutputStream();
		o.write(u);
		for (var f = base64EncodeOutputStream(), c = u.toByteArray(), g = 0; g < c.length; g += 1) f.writeByte(c[g]);
		f.flush();
		var l = "";
		return l += "data:image/gif;base64,", l += f
	},
	createQrCodeImg = function(r, t) {
		t = t || {};
		var e, n = t.typeNumber || 7,
			o = t.errorCorrectLevel || "M",
			a = t.size || 500;
		try {
			e = qrcode(n, o || "M"), e.addData(r), e.make()
		} catch (t) {
			if (n >= 40) throw new Error("Text too long to encode");
			return gen(r, {
				size: a,
				errorCorrectLevel: o,
				typeNumber: n + 1
			})
		}
		var i = parseInt(a / e.getModuleCount()),
			u = parseInt((a - e.getModuleCount() * i) / 2);
		return e.createImgTag(i, u, a)
	};
module.exports = {
	createQrCodeImg: createQrCodeImg
};
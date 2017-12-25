const cssTypes = {
    h: "height",
    w: "width",
    bc: "background-color",
    br: "border-radius",
    pat: "padding-top",
    pab: "padding-bottom",
    pal: "padding-left",
    par: "padding-right",
    pa: "padding",
    mat: "margin-top",
    ws: "white-space",
    maw: "max-width",
    lc: "line-clamp",
    bs: "box-shadow",
    fs: "font-size",
}

export function themeFirst(props, css) {
    const { theme, cid, fid, fkey } = props
    const _css = props[css]
    let outCss = null

    if (!theme) {
        outCss = parseNumber(_css)
    } else if (cid) {
        const selfTheme = theme[cid]
        if (!selfTheme) return
        const cur = selfTheme[cssTypes[css]]
        outCss = cur ? parseNumber(cur) : parseNumber(_css)
    } else if (fid && fkey) {
        const foreignTheme = theme[fid]
        if (!foreignTheme) return
        const refKey = fkey[cssTypes[css]]
        outCss = refKey ? parseNumber(foreignTheme[refKey]) : parseNumber(_css)
    } else if (_css) {
        outCss = parseNumber(_css)
    }

    return outCss
}

export function parseNumber(str) {
    if (!str) return null
    if (typeof str === 'number') {
        return str + 'px'
    }
    return str
}
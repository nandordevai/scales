function html(template, ...substitutions) {
    const raw = template.raw
    let result = ''

    substitutions.forEach((s, i) => {
        if (Array.isArray(s)) {
            s = s.join('')
        }
        result += raw[i]
        result += s
    })
    result += raw[raw.length - 1] // (A)
    return result
}

export { html }

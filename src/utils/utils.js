export function isObjectValueEqualNew(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i]

        var propA = a[propName]
        var propB = b[propName]
        if ((typeof (propA) === 'object')) {
            if (this.isObjectValueEqualNew(propA, propB)) {
                return true
            } else {
                return false
            }
        } else if (propA !== propB) {
            return false
        } else {
            //
        }
    }
    return true
}